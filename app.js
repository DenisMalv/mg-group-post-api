const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const mailRouter = require("./routes/api/mail");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.set("json spaces", 8);
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/mail", mailRouter);

app.use("/health", (req, res) => {
	res.status(200).json({ message: "server running" });
});

app.use((req, res) => {
	res.status(404).json({ message: "Page - Not found" });
});

app.use((err, req, res, next) => {
	console.log(err);
	const { status = 500, message = "Server Error" } = err;
	res.status(status).json({ message: message });
});

module.exports = app;
