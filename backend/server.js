import cors from "cors";
import { setServers } from "dns/promises";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import connectDB from "./lib/db.js";
import taskRouter from "./router/task.router.js";

// configartion env
dotenv.config();

// initialization
const app = express();

// Use custom DNS only in development (optional)
if (process.env.NODE_ENV !== "production") {
	await setServers(["1.1.1.1", "8.8.8.8"]);
}

// declare port
const port = process.env.PORT || 4000;

// Parse incoming JSON requests (max payload: 10 MB)
app.use(express.json({ limit: "10mb" }));

// Parse URL-encoded form data (supports nested objects, max payload: 10 MB)
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Enable Cross-Origin Resource Sharing (CORS)
// Allow requests only from the client application
app.use(
	cors({
		origin: process.env.CLIENT_PORT,
	}),
);

app.use("/api/v1/tasks", taskRouter);

const _dirName = path.resolve();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(_dirName, "/frontend/dist")));
	app.get("*splat", (req, res) => {
		res.sendFile(path.resolve(_dirName, "frontend", "dist", "index.html"));
	});
}

const startServer = async () => {
	try {
		await connectDB();
		app.listen(port, () =>
			console.log(`Your server running on http://localhost:${port}`),
		);
	} catch (err) {
		console.error("Failed to start server:", error);
		process.exit(1);
	}
};

startServer();
