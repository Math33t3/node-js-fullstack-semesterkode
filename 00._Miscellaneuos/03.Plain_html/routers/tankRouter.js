import { Router } from "express";
const tanksRouter = Router();



tanksRouter.get("/api/tanks", (req, res) => {
    res.send({ data: tanks })
});

export default tanksRouter;