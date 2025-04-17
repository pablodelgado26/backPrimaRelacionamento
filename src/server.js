import express from "express";
import { config } from "dotenv";
import cors from "cors";

import tarefaRoutes from "./routes/tarefaRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";

config();
const port = process.env.PORT || 4001;

const app = express();
app.use(cors());

app.use(express.json());

app.use("/tarefas", tarefaRoutes);
app.use("/collections", collectionRoutes);

app.get("/", (req, res) => {
  res.send("API rodando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
