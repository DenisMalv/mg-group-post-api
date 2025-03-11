const app = require("./app");
const dotenv = require("dotenv");
const fetch = require("node-fetch");
dotenv.config();

const { DB_HOST, PORT } = process.env;

app.listen(PORT, () => {
	console.log(`Server running. Use our API on port: ${PORT}`);
});

function wakeUp() {
	console.log("------------- wake up --------------");
	fetch(`https://mg-group-post-api.onrender.com/work`)
		.then((response) => response.text())
		.then((data) => {
			console.log("GET server health:");
		})
		.catch((error) => {
			console.error("GET server health Error:", error.message);
		});
}
wakeUp();

setInterval(() => {
	wakeUp();
}, 60 * 40 * 1000);
