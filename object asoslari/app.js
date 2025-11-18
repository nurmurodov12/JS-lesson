
// const func = function () {
//     if (1 < 2) {
//         const arrays = ["olma" , "olcha"];
        
//     }
    
// }
// console.log(func());

// const calculate = function add(num1, num2) {
//     return num1 + num2
// }
// console.log(calculate(1,8));

// const number = 2;
// let output
//     switch (number) {
//         case 1:
//             output = "bir"
//         case 2:
//             output = "ikki"
// }
// console.log(output);

// object 

// const objectName = {
//     ism: "Temur",
//     familiya: "Nurmurodov",
//     age: 14
// };
// console.log(objectName);

// const enginer = {
//     name:"temur",
//     age: 16,
//     expersines: "1 years",
//     languanges: ["js", "html","css","python"]
// };
//  //malumotni olish 
//  console.log(enginer);
//  console.log(enginer['age']);
// console.log(enginer.age)
//  // o'zgartirish
//  enginer.name = "akbar";
//  console.log(enginer);
//  yangi eleent qo'shish
//  enginer.isActive = true;
//  console.log(enginer);
//  elementni o'chirish
// delete enginer.age;

// console.log(enginer);

// nested ichma ich objectlar

// const enginer = {
//     name:"temur",
//     age: 16,
//     expersines: "1 years",
//     languanges: ["js", "html","css","python"],
//     adress: {
//         country: "uzbekistan",
//         city: "samarkand"
//     }
// };
// console.log(enginer.adress.country);
// enginer.adress.city = "kattaqorgon"
// console.log(enginer.adress.city);

// const enginer = {
//     name: "temur",
//     age: 16,
//     expersines: "1 years",
//     languanges: ["js", "html","css","python"],
//     adress: {
//         country: "uzbekistan",
//         city: "samarkand"
//     },
//     sayHello: function() {
//         console.log('salom');
        
//     }
// };
// enginer.sayHello();

const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2[0] = 99
arr1[1] = 100
console.log(arr1[1]);

// console.log(arr1);
// console.log(arr2);

// console.log(typeof arr1);

// const objects = {
//     age: 13,
//     name: "Temur",
//     familiya: "Nurmurodov"
// }
console.log(objects.age);
objects.age = "24";
console.log(objects);

// object.age = 24
// console.log(object.age);
