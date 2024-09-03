import 'dotenv/config';
import express from 'express';
import session from 'express-session';

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));

app.use(express.urlencoded({extended:true}));

app.use(
    session({
        saveUninitialized: true,
        resave: true,
        secret: process.env.SESSION_SECRET,
    })
);


import { router } from './src/routers/router.js';

const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})