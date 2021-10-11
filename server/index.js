import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { json, urlencoded } from "express";
import chazyyRouter from "./router/chazyy-router.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json({ limit: "30", extended: true }));
app.use(urlencoded({ limit: "30", extended: true }));

app.use("/", chazyyRouter);

app.listen(PORT, () => {
  console.log(`YOU ARE ON PORT ${PORT}`);
});
