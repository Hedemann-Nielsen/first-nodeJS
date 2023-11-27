import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
	console.log(req.query);
	response.send("Forspørgsel sendt");
});

app.get("/about", (req, res) => {
	res.send("om os");
});

app.listen(port, () => {
	console.log(`server køre med port ${port}`);
});
