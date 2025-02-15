import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";

dotenv.config();

const app = express();
app.use(cors());
const port = 8000;

app.get("/apikey", (req, res) => {
  res.send(process.env.REACT_APP_API_KEY);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
