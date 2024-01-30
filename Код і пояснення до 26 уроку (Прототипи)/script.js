// // Прототипи.
// // Зазвичай в прототипи вставляють методи, які мають бути одинаковими для всіх об'єктів.

// function LotteryCard(index, isWinning) { 
//   this.index = index; 
//   this.isWinning = isWinning; 
// }
// LotteryCard.prototype.handleTry = function (attempt, square, squareContainer) {
//     if (this.isWinning) {
//         alert("Congrats! You have won!");
//         square.classList.add("square-correct");
//     } else {
//         if (attempt === 3) {
//             alert("Sorry, it was your last turn");
//             squareContainer.innerHTML = null;
//             return;
//         }
//         alert("Sorry, try one more time!");
//         square.classList.add("square-wrong");
//     }
// };
  
// const card1 = new LotteryCard(7, true); // new - створює нову копію
// console.log(card1);
  
// const cards = [ 
//   new LotteryCard(7, true), 
//   new LotteryCard(1, false),
//   new LotteryCard(3, false),
//   new LotteryCard(4, false),
//   new LotteryCard(8, false),
//   new LotteryCard(2, false),
//   new LotteryCard(5, false),
//   new LotteryCard(6, false),
//   new LotteryCard(9, false),
// ];

// function renderSquares(squares) { 
//   let attempt = 0;
//   const squareContainer = document.querySelector(".squares-container");
//   squares.forEach((item) => { 
//     // item.__proto__.handleTry = function () {
//     //   alert("hello");
//     // } Змінюючи це, ми змінюємо відразу все. І об'єкти і конструктор, а саме посилання на це.
//     const square = document.createElement("div"); 
//     const squareIndex = document.createElement("h4"); 
//     squareIndex.innerHTML = item.index; 
//     square.appendChild(squareIndex);
//     square.classList.add("square");
//     square.addEventListener("click", () => { 
//     item.__proto__.handleTry(++attempt, square, squareContainer)} 
//     ); 
//     squareContainer.appendChild(square); 
//   });
// }

// renderSquares(cards); 

// // function Constructor (name, age) {
// //   this.name = name;
// //   this.age = age;
// // }
// // Constructor.prototype.someTest = 'some prototype test';

// // const test1 = new Constructor('Vitaly', 17);
// // const test2 = new Constructor('Dmytro', 25);

// // test1.__proto__.someTest = 'updated test value';

// // console.log(Constructor.prototype);
// // console.log(test2.__proto__);
// // console.log(Constructor.prototype === test2.__proto__)

// /*Об'єкт test1 і test2 отримують свої властивості (name, age) від прототипу конструктора Constructor. При використанні new, JavaScript автоматично встановлює __proto__ нового об'єкта на прототип конструктора.

// Отже, коли ви порівнюєте Constructor.prototype і test2.__proto__, ви отримуєте true, оскільки обидва посилаються на один і той же об'єкт, який є прототипом для test2 та всіх об'єктів, створених за допомогою конструктора Constructor.


// Так, ви правильно зрозуміли. Коли ви змінюєте значення Constructor.prototype.someTest, це впливає на всі об'єкти, які були створені за допомогою конструктора Constructor. Оскільки test2.__proto__ посилається на той самий об'єкт, що й Constructor.prototype, будь-які зміни в прототипі будуть відображені в усіх об'єктах, які використовують цей конструктор для створення.

// Така спільна зміна прототипу дозволяє всім екземплярам конструктора отримати доступ до нових чи змінених властивостей та методів без повторного визначення їх для кожного об'єкта окремо.
// */





// // 6 рядок. Проблема handleTry в тому, що кожен об'єкт, в масиві cards, на 23 рядку матиме копію handleTry. Якщо уявити собі, що handleTry 
// // це дуже велика функція, та (або) дуже багато карток, то це займатиме дуже багато пам'яті, тому що метод handleTry копіюватиметься
// // для кожного об'єкту.

// /* Фукції в JS це об'єкти. 
// function test () {}
// undefined
// test. - побачимо багато методів та властивостей, які притаманні об'єктам.
// test.name - побачимо назву функції.

// function test2 (arr) {}
// undefined
// test2.length 
// 1 // побачимо кількість аргументів.

// test2.hello = 'hello'
// test2.hello
// 'hello' // Побачимо властивість hello, яку ми надали.

// Як тільки ми прописали function test3 () {}, створюється об'єкт функції, проте не лише один.
// test3.prototype // побачимо, що це об'єкт, який має метод конструктор і об'єкт prototype.
// Функція test3 є сама об'єктом. І разом з нею створюється ще один об'єкт, prototype.
// Ми маємо доступ до об'єкта prototype.

// Будь яка функція створює 2 об'єкти. Об'єкт цієї функції і об'єкт prototype (об'єкт прототипу цієї функції.).
// */


function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User('Vitaly', 18);

console.log(user1);

/* В JS є функції, які ми можемо створити власноруч, а також є вже вбудовані функції.
Всі вони мають доступ до спеціального об'єкту prototype. Якщо ми створюємо його вручну,
то він буде пустим і це дає нам можливість записувати туди які завгодно властивості чи (зазвичай) методи,
які ми хочемо зробити спільними для всіх об'єктів.

__proto__ - прописує сам JS, тому нам не потрібно це робити.

Object - найглобальніше, що є в JS.  Це глобальна функція Object, який має в собі дуже багато методів та властивостей.
Ми можемо записати в нього щось і потім достукуючись до цього, тому що воно буде в масивах (array),
рядкових значеннях(string), Об'єктах(obj), булеан(true), змінні(const, let, var)
Object.prototype.someDumbValue = "Dmytro";
'Dmytro'

[].someDumbValue
'Dmytro'

"".someDumbValue
'Dmytro'

true.someDumbValue
'Dmytro'

const test = 10;
test.someDumbValue
'Dmytro'

Все в JS є об'єктом, окрім значень undefined та null.

Якщо ми створюємо функцію конструктор, то використовуючи prototype в ній та __proto__ в її копіях, (new ... (...)) вони матимуть посилання на спільний prototype.
Цей Prototype має свій __proto__, який посилається на глобальну функцію Object, на котру посилається все, окрім null та undefined.
Якщо навіть в глобальній функції Object, JS не знаходить потрібні нам властивість чи метод, то він знову йде через __proto__ і повертає null. На цьому 
замкнений ланцюжок завершиться.
Ми не повинні прописувати __proto__, тому що JS це робить сам, під капотом.
*/

