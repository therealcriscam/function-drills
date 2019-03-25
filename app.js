function createGreeting(name, age) {
    const yearofBirth = 2019 - age;
    return `"Hi my name is ${name} and i'm ${age} years old. I was born in ${yearofBirth}"`
}

const greeting1 = createGreeting();
console.log(greeting1)

