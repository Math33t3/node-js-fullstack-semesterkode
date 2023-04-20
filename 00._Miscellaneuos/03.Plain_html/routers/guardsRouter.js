import { Router } from "express";
const guardRouter = Router();


guardRouter.get("api/guards", (req, res) => {
    if (req.query.passport === "theskyisblue") {
        return res.redirect("/api/tanks")
    }
    res.send({ message: "You aren't allowed to see the tanks. Give us the correct secret password" });
});

export default guardRouter;
