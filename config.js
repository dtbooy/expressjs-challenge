import express from "express";
// import routers (if any)
import { repeater as repeaterRouter } from "./routers/repeaterRouter.js";
import { msg as messageRouter } from "./routers/messageRouter.js";

// create instance of app
const app = express();
// set port
const port = 3000;
// import middleware
// register json middleware - this allows
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// register routers
app.use("/repeater", repeaterRouter);
app.use("/message", messageRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server" });
});

export { app, port };
