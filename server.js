const express = require('express')
const fs = require("fs");
const path = require('path');
const app = express()
const port = 3000

app.get('/', (req, res) => {
	var buffer = fs.readFileSync("public/index.html");
	res.setHeader('Content-Type', 'text/html');
	res.send(buffer)
})

app.use('/public',express.static('public'));

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})
