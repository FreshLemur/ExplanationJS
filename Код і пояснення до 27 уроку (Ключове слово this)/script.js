// this - об'єкт, який виконує нашу функцію або частину нашого коду,
// який відповідальний за виконання нашого коду.




// // 1 Приклад: Window
// console.log(this); // Виводить Window. Це окремий об'єкт для кожного окремого вікна, об'єкт, який відповідає за взаємодію з вікном.
// // window - найвищий об'єкт в ієрархії JS. Об'єкт вбудований в браузер.




// // 2 Приклад: in Function
// function showThis() {
//   console.log(this);
// }
// showThis();
// // Виводить абсолютно те саме, що й 1 приклад.




// // 3 Приклад: in OBJ
// const obj = {
//   name: "Vitaly",
//   showThis() {
//     console.log(this);
//   }
// }
// obj.showThis();
// // this в тілі об'єкта прирівнюється до об'єкту. Фактично, просто виведе об'єкт.




// // 4 Приклад:
// function Person(name) {
//   this.name = name;
//   this.sayHello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }
// const person1 = new Person("Vitaly");
// person1.sayHello();
// // При використанні constructor ключове слово this в майбутньому буде прирівнене до новостворених об'єктів на основі constructor.
// // this === "Vitaly", прирівнюється до новоствореного об'єкту.




// // 5 Приклад:
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   showThis() {
//     console.log(`Hello, ${this.name}`);
//   }
// }
// const person1 = new Person("Vitaly");
// person1.showThis();
// // Працює абсолютно так само, як і 4 приклад.




// // 6 Приклад:
// const obj = {
//   sayHello() {
//     function inner() {
//       console.log(this); // виведе window, як в 2 прикладі.
//     }
//     inner(); // Якщо функція, створена через ключове слово function викликається сама по собі, тоді її this === window.
//   },         // Хоч вона і є в методі, але викликається сама по собі.
//   sayHelloArrow () {
//     const inner = () => {
//       console.log(this); // виведе obj, як в 3 прикладі.
//     }
//     inner(); // виведе obj, як в 3 прикладі.
//   },
// };
// obj.sayHello(); 
// obj.sayHelloArrow(); // ключове слово this в стрілкових функціях успадковує значення від батьківського скопу.
// // саме тому воно прирівняється до obj, до його батьківського скопу, ніби воно там було, як у 4 прикладі.




// // 7 Приклад:
// const obj1 = { name: "Vitaly", age: 20 };

// const obj2 = {
//   sayHello() {
//     console.log(this.age);
//   },
// };

// obj2.sayHello(); // undefined, тому що this шукає age в obj1 і не знаходить його.
// obj2.sayHello.call(obj1); // 20, тому що змінюючи індекс this ми посилаємо його на obj1, тому виведе 20.

// // Так само, як і з об'єктами працюють функції.
// function sayHello2 () {
//   console.log(this.age)
// };
// sayHello2();
// sayHello2.call(obj1)

// // Тепер передача з аргументами.
// const obj3 = {
//   sayHello(a, b, c) {
//     console.log(a, b, c);
//     console.log(this.age);
//   },
// };
// obj3.sayHello.call(obj1, 1, 2, 3);
// obj3.sayHello.apply(obj1, [1, 2, 3]);
// // Різниця полягає в тому, що для передачі аргументів через call можна писати просто цифри, а через apply за допомогою масиву.



// 8 Приклад:

const obj1 = { name: "Vitaly", age: 20 };
function sayHello(a, b, c) {
  console.log(this.age);
}
const updatedContextSayHello = sayHello.bind(obj1); // створює прив'язку (bind - зв'язувати);
updatedContextSayHello(); // Виклик функції.