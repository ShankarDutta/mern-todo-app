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
