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
		const { text } = req.body;

		if (!text) {
			return res.status(400).json({
				success: false,
				message: "Task text is required",
			});
		}

		const task = await Task.create({
			text,
		});

		return res.status(201).json({
			success: true,
			message: "Task added successfully",
			task,
		});
	} catch (err) {
		console.error("Failed to add Task", err);

		return res.status(400).json({
			success: false,
			message: "Failed to add task",
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
			task.text = req.body.text;
		}

		if (req.body.completed !== undefined) {
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

		return res.status(500).json({
			success: false,
			message: "Failed to delete task",
		});
	}
};

export { addTask, deleteTask, getAllTask, updateTask };
