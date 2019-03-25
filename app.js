function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  if (age < 0) {
    throw new Error("Age can not be negative");
  }

  if (name === undefined || age === undefined) {
    throw new Error("Arguments not valid");
  }

  if (age !== "number") {
    throw new TypeError("Age must be a number");
  }
  const yob = yearOfBirth(age);

  return `"Hi my name is ${name} and i'm ${age} years old. I was born in ${yob}"`;
}

function yearOfBirth(age) {
  return 2019 - age;
}

try {
  const greeting1 = createGreeting("brian", -20);
  console.log(greeting1);
} catch (e) {
  console.error(e.message);
}

const greeting1 = createGreeting("brian", -10);
console.log(greeting1);
