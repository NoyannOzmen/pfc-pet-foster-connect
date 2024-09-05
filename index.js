import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import cors from 'cors';

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

app.use(express.urlencoded({extended:true}));

app.use(
    session({
        saveUninitialized: true,
        resave: true,
        secret: process.env.SESSION_SECRET,
    })
);

app.use(router);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Lancement réussi à l'adresse : http://localhost:${port}`);
})