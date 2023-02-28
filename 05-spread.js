const user = {
  firstName: 'Leo',
  lastName: 'Sperandio',
  age: 23,
  instagram: '@tal',
  skills: ['Back-end', 'Front-End', 'Mobile', 'UI/UX'],
  active: false
};

// Spread Operator
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true,
};

console.log({user});
console.log({updatedUser});