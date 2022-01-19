const person = {
        name: 'Max',
        age: 29,
        greet() {
                console.log('Hi, I am '+ this.name)
        }
};

const printName = ({name, age}) => {
        console.log(name);
        console.log(age);
};

printName(person);

const{name, age} = person;
console.log(name, age);
// const copiePerson = {...person}
// console.log(copiePerson);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);
// // for (let hobby of hobbies) {
// //         console.log(hobby)
// // }
// //
// // console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
// // hobbies.push('Programming')
// const copieArray = [...hobbies];
// console.log(copieArray);

// const toArry = (...args) =>{
//         return args;
// };

// console.log(toArry(1,2,3,4))
