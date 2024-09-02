import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import session from 'express-session';

const app = express();

//! Session options, peut être à redéfinir plus tard !
const sessionOptions = {
    secret:process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*60,
    //! A CHANGER SI ON A LE CERTIFICAT HTTPS !!!
        secure:false,
        sameSite:'strict',
    }
}

app.use(session(sessionOptions));

app.use(
    cors({
        origin:[

        ]
    })
)


import { router } from './app/routers/router.js';

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})