import express from "express";

// initialization
const app = express();

// declare port
const port = 4000;

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
