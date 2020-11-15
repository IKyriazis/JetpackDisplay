// uses port 8000 to serve http requests
// uses port 8001 to serve ws requests
const express = require("express");
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: process.env.WS_PORT || 8001 });

const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}

// listen for requests :)
const listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
