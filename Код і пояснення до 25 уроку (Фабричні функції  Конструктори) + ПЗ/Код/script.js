// Фабричні функції. Конструктори. // factory constryctor
// Це те, як працювало ООП до ES6, коли не було класів.



// Синтаксис фабричних функцій:

function createUsers (name, age, sex) {
  return {
    name, // name === name: name, так написано, тому що це скорочення, щоб не повторюватися.
    age, // age === age: age,
    sex // sex === sex: sex,
  }
}

// Передання аргументів функції, які вона поверне. Можна створювати змінну, потім цю змінну передавати у виклик функції.
// const user1 = createUsers('Vitaly', 16, 'male'); 
// const user2 = createUsers('Brad', 20, 'male');
// const user3 = createUsers('Jessica', 23, 'female');

// Виведення повернутих результатів в консоль. А можна відразу у виклик функції передавати аргументи, щоб не створювати змінні. Все так само, як з класами.
// console.log(createUsers('Vitaly', 16, 'male')); // Побачимо: {name: 'Vitaly', age: 16, sex: 'male'}
// console.log(createUsers('Brad', 20, 'male')); // Побачимо: {name: 'Brad', age: 20, sex: 'male'}
// console.log(createUsers('Jessica', 23, 'female')); // Побачимо: {name: 'Jessica', age: 23, sex: 'female'}

// Це спосіб створення об'єктів на основі фабричної функції. Синтаксис дуже подібний з класами, просто не використовуємо класи, а використовуємо функції, які
// повертають об'єкти.



// Синтаксис конструкторів:

// Створення функції конструктора конструктора, прийнято писати назву з Великої Літери.
function CreateUsers(name, age, sex) {
  // const this = {}... - Це "під капотом" функції конструктора.
  this.name = name; // this === CreateUsers.
  this.age = age; // this === CreateUsers.
  this.sex = sex; // this === CreateUsers.
  // return this; - це теж "під капотом" функції конструктора.
}

// Впихування в змінні. Проте можна відразу викликати, як це показано на рядках 45-47.
// const user1 = new CreateUsers('Vitaly', 16, 'male');
// const user2 = new CreateUsers('Brad', 20, 'male');
// const user3 = new CreateUsers('Jessica', 23, 'female');

console.log(new CreateUsers('Vitaly', 16, 'male')); // Побачимо: CreateUsers {name: 'Vitaly', age: 16, sex: 'male'}
console.log(new CreateUsers('Brad', 20, 'male')); // Побачимо: CreateUsers {name: 'Brad', age: 20, sex: 'male'}
console.log(new CreateUsers('Jessica', 23, 'female')); // Побачимо: CreateUsers {name: 'Jessica', age: 23, sex: 'female'}
// CreateUsers це те, що буде відповідне назві нашої функції конструктора. Це не грає ніякої ролі, лише щоб ми мали розуміння, з якої фукнції конструктора
// створюються ці об'єкти.
// Обов'язкове використання ключового слова new. Якщо його не буде, то ця фукнції буде вважатися звичайною.

// Конструктори це ті самі класи, просто класи це "синтаксичний цукор", тому класи виглядають краще, ніж конструктори.
