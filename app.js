const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const api = require('./api');
require('./config')();

app.use(express.json());
app.use('/api/', api);

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/view/index.html');
})

app.listen(port, () => console.log("[+] Server listening on", port));