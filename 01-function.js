// O método construtor transforma nossa função em um objeto, e sendo um objeto podemos atribuir valores a ele usando 'this'.
function minhaFunction() {
  this.name = 'Leo';
}
console.log(new minhaFunction());

// A arrow function usa o this do contexto de onde ela foi criada, enquanto a function cria o seu próprio this, cria o próprio contexto quando se utiliza 'new'.

const minhaArrowFunction = () => {
  this.name = 'Leo';
}
minhaArrowFunction();
console.log(this);

// Function tem seu próprio this, arrow function herda o this de onde foi criada.

// Usando Rest para receber multiplos parametros na function

function soma(primeiroParametro, ...argumentos) {
  console.log(primeiroParametro);
  console.log(argumentos);
}

soma(1, 2, 3, 4, 5, 6, 7, 'Leo');