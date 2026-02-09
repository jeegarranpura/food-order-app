const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.use('/api/v1/', require('./routes/home.route'));


server.listen(8080, () => {
    console.log('server started port :: 8080')
})