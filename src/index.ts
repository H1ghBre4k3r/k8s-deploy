import express from "express";

const router = express();

router.get("/", (_req, res) => {
    res.send("Hello, world!");
});

router.listen(3000, () => {
    console.log("Listening...");
});
