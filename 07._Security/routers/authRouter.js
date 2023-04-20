import { Router } from "express";
const authRouter = Router();




authRouter.get("/auth/logout", (req, res) => {
    res.send();
});

//exception to the REST conventions, cause passwords need to be in the Body, otherwise they are visible
authRouter.post("/auth/login", (req, res) => {
    res.send();
});

export default authRouter;
