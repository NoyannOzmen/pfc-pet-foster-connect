import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("./public"));


app.use(
    cors({
        origin:[

        ]
    })
)


import { router } from './routers/router.js';

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})