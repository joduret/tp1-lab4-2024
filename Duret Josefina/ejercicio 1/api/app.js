import express from "express";
import cors from "cors";
import sumaRouter from "./suma.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo !!");
});

app.use("/suma", sumaRouter);

app.listen(port, () => {
  console.log(`La aplicación está funcionando en el puerto ${port}`);
});
