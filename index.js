import express from "express";

const app = express();

app.get("/", (req, res) => {
	console.log(req.query);
	response.send("Forspørgsel sendt");
});

app.get("/about", (req, res) => {
	res.send("om os");
});

app.listen(4000, () => {
	console.log("server med express");
});
