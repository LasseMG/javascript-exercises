const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const yearOfBirth = person.yearOfBirth; 
        const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
        const age = yearOfDeath - yearOfBirth; 

        if (age > oldestPerson.age) {
            return { name: person.name, age: age }; 
        } else {
            return oldestPerson;
        }
}, { name: null, age: -Infinity})}; 


// Do not edit below this line
module.exports = findTheOldest;
