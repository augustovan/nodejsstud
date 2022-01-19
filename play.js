const name = 'Victor';
let age = 33;
const hasHobbies = true;

age = 30; 

const summarizerUser = (userName, userAge, userHasHobbies) => {
        return(
                'Name is ' +
                userName +
                ', age is ' +
                userAge +
                ' and the users has hobbies: ' +
                userHasHobbies
        );
}

// const add = (a,b) => a + b;
// const addOne = a => a + 1;

const addRandom = () => 1 + 2

// console.log(add(3,2));
// console.log(addOne(3));

console.log(addRandom())

console.log(summarizerUser(name, age, hasHobbies))