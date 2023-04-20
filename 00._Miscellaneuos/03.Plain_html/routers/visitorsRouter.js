import { Router } from "express";
const visitorsRouter = Router();

visitorsRouter.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount });
});

visitorsRouter.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount })
});

export default visitorsRouter;