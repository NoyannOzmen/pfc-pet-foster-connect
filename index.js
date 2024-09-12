import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

const app = express();

import { router } from './src/routers/router.js';
import { errorHandler, notFound } from './src/middlewares/errorHandlers.js';

app.use(
    cors({
      origin: [
        'http://localhost:3000',
        'http://127.0.0.1:3000'
      ],
    })
  );

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static("./src/assets"));
app.use(express.urlencoded({extended: true}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/assets/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage: storage,
  limits : { fileSize : 2000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
 }).single('file');

 function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif|webp/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images only! (jpeg, jpg, png, gif, webp)');
  }
} 

app.use(
    session({
        saveUninitialized: true,
        resave: true,
        secret: process.env.SESSION_SECRET,
    })
);

app.post('/upload/logo', (req, res) => {
  upload(req, res, (err) => {
     if (err) {
       console.error(err);
       return res.status(500).json({ error: err });
      }
     if (!req.file) {
        return res.status(400).json({ error: 'Please send file' });
      }
      console.log(req.file);
      res.redirect('/')
/*       res.send('File uploaded!'); */
  });
});

app.use(router);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Lancement réussi à l'adresse : http://localhost:${port}`);
})