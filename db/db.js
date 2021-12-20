const mysql = require("mysql");

exports.db = mysql.createPool({
	host: "ec2-3-230-199-240.compute-1.amazonaws.com",
	user: "tcaeqtwjxcqsbq",
	password: "b3294cad9e69288bc273c69e52b6d74fbc014434b0bc061c67f7d3fe270c4e19",
	database: "d41dugdp9nsh9h",
	port: 3001,
});
