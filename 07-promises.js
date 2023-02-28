const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
  //  resolve({res: 'Sucesso!'});
      reject('Erro!');
  }, 2000);
});

// apiCall
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

async function run() {
  try  {
    const resposta = await apiCall;
    console.log(resposta);
  } catch (erro) {
    console.log(erro);
  }
}

run();

// A diferença é que o async await trava o código até solucionar a promise, então caso o restante do código dependa da chamada nada abaixo dela vai ser executado.

// por exemplo, quando um user cria uma conta, não interessa a ele se de fato foi criado ou não então o código não precisa ser travado.