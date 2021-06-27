import "reflect-metadata";
import express from "express";
import { handleErros } from "./middlewares/handleErros";

import { router } from "./routes";

import "./database";

const app = express();
app.use(express.json());

// funciona como middleware para inserir as rotas dentro do express
// middleware: interceptação da requisição, pode interrompe-la por completo ou adicionar alguma informação
app.use(router);
app.use(handleErros);

app.listen(3000, () => console.log("Servidor está rodando."));