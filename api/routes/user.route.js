import express from "express"
import { userController } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController);
// router.get("some_url, exampleController")

export default router;