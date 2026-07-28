import express from "express";
import {
	addTask,
	deleteTask,
	getAllTask,
	updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.route("/").get(getAllTask);
router.route("/").post(addTask);
router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);

export default router;
