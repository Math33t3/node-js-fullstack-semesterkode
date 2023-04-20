import dotenv from "dotenv/config"

import helmet from "helmet";
app.use(helmet());

import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../06._Svelte_Family/dist")));

import cors from "cors";
app.use(cors({
    credentials: true,
    origin: true
}));

import session from "express-session";
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import rateLimit from "express-rate-limit";

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 min
    max: 100, //limit each IP to 100 requests per "window"
    standardHeaders: true, //
    legacyHeaders: false, //

});

app.use(apiLimiter);

app.use("/auth",rateLimit({
    windowMs: 15 * 60 * 1000, //15 min
    max: 5, //limit each IP to 100 requests per "window"
    standardHeaders: true, //
    legacyHeaders: false, //

}));

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

import gothamRouter from "./routers/gothamRouter.js";
app.use(gothamRouter);

app.get("/piblings", (req, res) => {
    res.send({ data: ["John", "Mark"] });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

