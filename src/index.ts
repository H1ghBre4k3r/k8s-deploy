import express from "express";
import { createConnection } from "mysql";
const router = express();

const greeting = process.env.NAME ?? "world";

const con = createConnection({
    host: "webserver-db-service",
    user: "sampleuser",
    password: "samplepw",
});

con.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("Connected!");
    con.end();
});

router.get("/", (_req, res) => {
    res.send(`Hello, ${greeting}! `);
});

router.listen(3000, () => {
    console.log("Listening...");
});
