const findTheOldest = function(people) {
    if (people.length == 0) {
        return "ERROR";
    } 
    let oldest;
    let maxAge = 0;
    for (i = 0; i < people.length; i++){
        let high = 0;
        let low = 0;
        if (!("yearOfDeath" in people[i])) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
        people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
        console.log(people[i].age)
        if(people[i].age > maxAge) {
            maxAge = people[i].age;
            oldest = people[i].name;
            console.log(oldest);
        }
    }
    people.name = oldest;
    return people;
};

// Do not edit below this line
module.exports = findTheOldest;
