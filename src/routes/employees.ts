import express from "express";

const router = express.Router();

router.get('/',((req: express.Request, res:express.Response) =>{
    res.status(200).json({ userId: "U001", userName: "XXX xxx" });
} ))

export default router;
