import mongoose from "mongoose";

const connectdb = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		console.log("Database connected successfully!");
	} catch (err) {
		console.error("Database connection failed!");
		console.error(err.message);
		process.exit(1);
	}
};

export default connectdb;
