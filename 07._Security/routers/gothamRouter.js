import { Router } from "express";
const gothamRouter = Router();

gothamRouter.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    req.session.hobby = req.query.hobby;
    res.send({ message: `Hi ${req.session.name}` });
});

gothamRouter.get("/gotham", (req, res) => {
    if (!req.session.name) {
        return res.send({ message: "Error. You are not welcome in this city."});
    } 
    res.send({ message: `I remember you ${req.session.name} and your hobby is ${req.session.hobby}` });
});

gothamRouter.get("/leavegotham", (req, res) => {
    req.session.destroy(() => {
        res.send({});
    });
});


export default gothamRouter;