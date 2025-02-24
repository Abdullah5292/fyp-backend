import { Router } from "express";
import authRouter from "./auth";
import roleRouter from "./roles";
import userRouter from "./user";
import institutionRouter from "./institution";
import questionRouter from "./questions";
import gameRouter from "./game";

const adminRouter = Router();

adminRouter.use("/auth/", authRouter);
adminRouter.use("/roles/", roleRouter);
adminRouter.use("/users/", userRouter);
adminRouter.use("/institutions/", institutionRouter);
adminRouter.use("/questions/", questionRouter);
adminRouter.use("/games/", gameRouter);

export default adminRouter;
