const express = require("express");
const { Client } = new require("pg");
const http = require("http");
const os = require("os");

const app = express();
const client = new Client({
    user: "postgres",
    host: "postgres-service",
    database: "db",
    password: "ABC123",
    port: 5432
});

client.connect();

app.get("/", async (req, res) => {
    client.query("SELECT NOW()", (err, resp) => {
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
                        <br><br>
                        Postgres Response:<br>
                        <code>${ JSON.stringify(err ?? resp, null, 4) }</code>
                    </div>
                </body>
            </html>
        `);
    });
});

app.post("/user", (req, res) => {
    http.post("http://user-service", resp => {
        let data = '';

        resp.on("data", chunk => data += chunk);
        resp.on("end", () => res.send(JSON.parse(data)));
    }).on("error", err => res.send(JSON.parse(err)));
});

app.listen(process.env.PORT || 80, () => {
    console.log("Listening...");
});