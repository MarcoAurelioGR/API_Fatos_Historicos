import fatosHistoricos from "./colecao_dados.js";
import express from "express";
const app = express();
const port = 8080;

const fatoAno = (ano) => {
  return fatosHistoricos.find((fato) => Number(fato.Ano) === Number(ano));
};

app.get("/fatosHistoricos", (req, res) => {
  res.json(fatosHistoricos);
});

app.get("/fatosHistoricos/:ano", (req, res) => {
  let ano = req.params.ano;

  if (!isNaN(ano)) {
    fatoAno(ano)
      ? res.json(fato)
      : res.status(400).json({ mensagem: "Ano invalido!" });
  } else {
    res.status(404).json({ mensagem: "Valor invalido!" });
  }
});

app.listen(port, () => {
  console.log("listening on localhost");
});
