const array = [
  { name: 'Iphone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1001, quantity: 5 },
];

// .find -> vai iterar item por item e retornar true assim que achar o primeiro item.
const find = array.find((product) => product.price > 1000);
// console.log({ find });
// .findIndex retorna a posição do array
const findIndex = array.findIndex((product) => product.name === 'Magic Mouse');
// console.log({ findIndex });

// .some -> algum item precisa retornar true & every -> todos os itens precisam retornar true
const some = array.some((product) => product.price < 1000);
// console.log({ some });
const every = array.every((product) => product.price > 1000);
// console.log({ every });

// .map -> pega o array de um jeito e cria um novo array com o mesmo número de posições com alterações que a gente queira fazer
const map = array.map((product) => ({
  ...product,
  subtotal: product.quantity * product.price,
}));
// console.log({ map });

// .filter -> útil quando fomos fazer remoção em tela no react, ele filtra o array e cria um novo, tirando aquele elemento que foi deletado.
const filter = array.filter((product) => product.quantity >= 1);
// console.log({ filter });

// .reduce -> é um contador 
const reduce = array.reduce((accumulator, product) => {
  return accumulator + (product.price * product.quantity);
}, 0);
console.log({ reduce });