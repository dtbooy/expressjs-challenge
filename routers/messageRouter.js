import express from "express";

const msg = express.Router();

function messageFunction(req, res) {
  return res.json({
    message: `this is a placeholder response for a HTTP ${req.method} request`,
  });
}

msg.post("/", (req, res) => messageFunction(req, res));
msg.get("/", (req, res) => messageFunction(req, res));
msg.put("/", (req, res) => messageFunction(req, res));
msg.patch("/", (req, res) => messageFunction(req, res));
msg.delete("/", (req, res) => messageFunction(req, res));

export { msg }