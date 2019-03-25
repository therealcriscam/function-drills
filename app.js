function getYearOfBirth(age) {
    return 2019 - age;
}

function createGreeting(name, age) {
    const yob = getYearOfBirth(25);
    return `"Hi my name is ${name} and i'm ${age} years old. I was born in ${yob}"`;
}

const year = getYearOfBirth(20);
const greeting1 = createGreeting("brian", 20);
console.log(greeting1)

