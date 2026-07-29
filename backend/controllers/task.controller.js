import Task from "../model/task.model.js";

const getAllTask = async (req, res) => {
	try {
		const tasks = await Task.find().sort({ createdAt: -1 });

		return res.status(200).json({
			success: true,
			count: tasks.length,
			tasks,
		});
	} catch (err) {
		console.error("Error fetching tasks:", err);

		return res.status(500).json({
			success: false,
			message: "Failed to load tasks",
		});
	}
};

const addTask = async (req, res) => {
	try {
		const { text } = req.body ?? {};

		if (typeof text !== "string" || text.trim() === "") {
			return res.status(400).json({
				success: false,
				message: "Task is required",
			});
		}

		const task = await Task.create({
			text: text.trim(),
		});

		return res.status(201).json({
			success: true,
			message: "Task added successfully",
			task,
		});
	} catch (err) {
		console.error("Failed to add Task", err);

		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

const updateTask = async (req, res) => {
	try {
		const task = await Task.findById(req.params.id);

		if (!task) {
			return res.status(404).json({
				success: false,
				message: "Task not found",
			});
		}

		if (req.body.text !== undefined) {
			if (
				typeof req.body.text !== "string" ||
				req.body.text.trim() === ""
			) {
				return res.status(400).json({
					success: false,
					message: "Task text is required",
				});
			}

			task.text = req.body.text.trim();
		}

		if (req.body.completed !== undefined) {
			if (typeof req.body.completed !== "boolean") {
				return res.status(400).json({
					success: false,
					message: "Completed must be a boolean",
				});
			}

			task.completed = req.body.completed;
		}

		const updatedTask = await task.save();

		return res.status(200).json({
			success: true,
			message: "Task updated successfully",
			task: updatedTask,
		});
	} catch (error) {
		console.error("Update task error:", error);

		if (error.name === "CastError" || error.name === "ValidationError") {
			return res.status(400).json({
				success: false,
				message: error.message,
			});
		}

		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
};

const deleteTask = async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id);

		if (!task) {
			return res.status(404).json({
				success: false,
				message: "Task not found",
			});
		}

		return res.status(200).json({
			success: true,
			message: "Task deleted successfully",
		});
	} catch (error) {
		console.error("Delete task error:", error);

		if (error.name === "CastError") {
			return res.status(400).json({
				success: false,
				message: "Invalid task ID",
			});
		}

		return res.status(500).json({
			success: false,
			message: "Failed to delete task",
		});
	}
};

export { addTask, deleteTask, getAllTask, updateTask };
