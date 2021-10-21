import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { json, urlencoded } from "express";
import chazyyRouter from "./router/chazyy-router.js";
import userRouter from "./router/user-router.js";

const app = express();
const PORT = process.env.PORT || 5000;

process.on("warning", (e) => console.warn(e.stack));
app.use(json());
app.use(urlencoded());

app.use("/", chazyyRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`YOU ARE ON PORT ${PORT}`);
});
