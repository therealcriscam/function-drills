// function getYearOfBirth(age) {
//   return 2019 - age;
// }

// function createGreeting(name, age) {
//   if (age < 0) {
//     throw new Error("Age can not be negative");
//   }

//   if (name === undefined || age === undefined) {
//     throw new Error("Arguments not valid");
//   }

//   if (age !== "number") {
//     throw new TypeError("Age must be a number");
//   }
//   const yob = yearOfBirth(age);

//   return `"Hi my name is ${name} and i'm ${age} years old. I was born in ${yob}"`;
// }

// function yearOfBirth(age) {
//   return 2019 - age;
// }

// try {
//   const greeting1 = createGreeting("brian", -20);
//   console.log(greeting1);
// } catch (e) {
//   console.error(e.message);
// }

// const greeting1 = createGreeting("brian", -10);
// console.log(greeting1);

function jediName(firstName, lastName) {
  return lastName.substr(0, 3) + firstName.substr(0, 2);
}

console.log(jediName("Beyonce", "Knowles"));

function beyond(num) {
  if (num === Infinity) {
    console.log("And beyond");
  } else if (isFinite(num) && num > 0) {
    console.log("To infinity");
  } else if (isFinite(num) && num < 0) {
    console.log("To negative infinity");
  } else if (num === 0) {
    console.log("Staying home");
  }
}

const test = beyond(-18);
test;


function decode(word) {
  if (word)
}