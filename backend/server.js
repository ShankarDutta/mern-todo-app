import dotenv from "dotenv";
import express from "express";

// configartion env
dotenv.config();

// initialization
const app = express();

// declare port
const port = process.env.PORT;

// check server
app.get("/", (req, res) => {
	return res.status(200).json({
		message: "Hello from Backend !",
		success: true,
	});
});

app.listen(port, () =>
	console.log(`Your server running on http://localhost:${port}`),
);
