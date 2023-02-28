const user = {
  firstName: 'Leo',
  lastName: 'Sperandio',
  age: 23,
  instagram: '@tal',
  skills: ['Back-end', 'Front-End', 'Mobile', 'UI/UX'],
};

// Rest Operator
const { firstName, skills, ...resto } = user;
const [primary] = skills;

console.log(resto);