const express = require("express");
const  server = express();

const nunjucks = require("nunjucks");
nunjucks.configure("./", {
	express: server
});

server.use(express.static('public'));

const donors = [
	{
		name: "Lorena",
		blood: "AB+"
	},
	{
		name: "Lorena",
		blood: "AB+"
	},
	{
		name: "Lorena",
		blood: "AB+"
	},
	{
		name: "Lorena",
		blood: "AB+"
	}
]


server.get("/", function(res, res) {
	return res.render("index.html", { donors });
});

server.listen(3000);