let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    },
};

let passportMarriedCopy = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    },
};

passportMarriedCopy = JSON.parse(JSON.stringify(passportMarried));
passportMarriedCopy.married = true;

console.log(passportMarried)
console.log(passportMarriedCopy)
