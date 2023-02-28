const user = {
  firstName: 'Leo',
  lastName: 'Sperandio',
  age: 23,
  instagram: '@tal',
  skills: ['Back-end', 'Front-End', 'Mobile', 'UI/UX'],
};

// Destructuring
const { firstName, age, habilidades: skills } = user;
const [primary, secondary, tertiary, quaternary] = skills;

console.log();