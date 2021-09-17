require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path')

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

const routes = require('./routes');
routes(app);

const port = process.env.PORT ? process.env.PORT : 80;

server.listen(port, () => {
	console.log(`Listening on *:${port}...`);
});