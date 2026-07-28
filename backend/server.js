import cors from "cors";
import { setServers } from "dns/promises";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./lib/db.js";
// configartion env
dotenv.config();

// initialization
const app = express();

// Use custom DNS only in development (optional)
if (process.env.NODE_ENV !== "production") {
	await setServers(["1.1.1.1", "8.8.8.8"]);
}

// declare port
const port = process.env.PORT;

// Parse incoming JSON requests (max payload: 10 MB)
app.use(express.json({ limit: "10mb" }));

// Parse URL-encoded form data (supports nested objects, max payload: 10 MB)
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Enable Cross-Origin Resource Sharing (CORS)
// Allow requests only from the client application
app.use(
	cors({
		origin: process.env.CLIENT_PORT,
		credentials: true,
	}),
);

// check server
app.get("/", (req, res) => {
	return res.status(200).json({
		message: "Hello from Backend !",
		success: true,
	});
});

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
