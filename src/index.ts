import express from "express";

const router = express();

const greeting = process.env.NAME ?? "world";

router.get("/", (_req, res) => {
    res.send(`Hello, ${greeting}! `);
});

router.listen(3000, () => {
    console.log("Listening...");
});
