import express, { json } from "express";
// import * as mongooseConfig from "./configs/mongoose-config.js";
import cors from "cors";
import Footer from "../../frontend/src/components/Footer";

const app = express();
const PORT = 8080;
app.use(json());
app.use(cors());

app.use("/footer", Footer);
app.get("/api/", (req, res) => {
  res.json("hello");
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
