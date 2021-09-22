const express = require("express");
const app = express();

app.get("*", (req, res) => {
    res.status(400).send({
        message: "Not a GET endpoint, use POST instead"
    });
});

app.post("/register", (req, res) => {
    res.status(501).send({
        message: "Not implemented, unable to create account"
    });
});

app.listen(process.env.PORT ?? 80, () => console.log("Listening..."));