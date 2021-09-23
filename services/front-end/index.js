const express = require("express");
const http = require("http");
const os = require("os");
const app = express();

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">

                <title>Portfolio</title>
            </head>
            <body>
                <div style="width:max-content;margin:0 auto;text-align:center;">
                    <p>Welcome &#128151;</p>
                    <code style="color:red;opacity:0.5;">${ os.hostname() }</code>
                </div>
            </body>
        </html>
    `);
});

app.post("/register", (req, res) => {
    http.post("http://register-service", resp => {
        let data = '';

        resp.on("data", chunk => data += chunk);
        resp.on("end", () => res.send(JSON.parse(data)));
    }).on("error", err => res.send(JSON.parse(err)));
});

app.listen(process.env.PORT || 80, () => {
    console.log("Listening...");
});