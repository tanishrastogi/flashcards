import express from "express";
import bodyParser from "body-parser";
import sequelize from "sequelize";
import dotenv from "dotenv";
import Flashcard from "./models/flashcard.model.js";
import flashcardRouter from "./routes/cards.routes.js"
import cors from "cors";
import { ApiResponse } from "../utils/apiResponse.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://flashcards-six-chi.vercel.app/"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    exposedHeaders: ["set-cookie"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", flashcardRouter);

app.get("/api/health", (req, res) => {
  return res.json(new ApiResponse(200, null, "server started"))
})


app.listen(process.env.PORT || 8005, () => {
  console.log(`Server started on Port ${process.env.PORT}`)
});

