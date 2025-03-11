const app = require("./app");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();

const { DB_HOST, PORT } = process.env;

app.listen(PORT, () => {
	console.log(`Server running. Use our API on port: ${PORT}`);
});

setInterval(() => {
	fetch(`https://mg-group-post-api.onrender.com/health`)
		.then((response) => response.text())
		.then((data) => {
			console.log("GET server health:");
		})
		.catch((error) => {
			console.error("GET server health Error:", error.message);
		});
}, 60 * 40 * 1000);
