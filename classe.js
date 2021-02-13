class Respostas{
  constructor(id, pergunta, resposta) {
    this.id = id;
    this.pergunta = pergunta;
    this.resposta = resposta;
  }

  logDados(resultados) {
    this.resultados = resultados;

    const objResposta = {
      id: this.id,
      pergunta: this.pergunta,
      resposta: this.resposta 
    }

    resultados.push(objResposta);
    console.log(resultados);

  }   
}

