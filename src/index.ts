import express from "express";

const app = express();

app.get("/", (req, res): any => {
  return res.json({ message: "olá" });
});

app.listen(3333);
