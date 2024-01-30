// Написати примітивну лотерею. Вивести на екран квадратики з числовими індексами,
// де користувач повинен вгадати виграшний варіант. В нього три спроби. Якщо вгадує, вибиває
// alert-повідомлення про успішний вибір. Якщо ж ні, alert пропонує продовжити спроби. Всього їх три.

function LotteryCard(index, isWinning) { // 5 LotteryCard - конструктор.
  this.index = index; // властивості конструктора.
  this.isWinning = isWinning; // властивості конструктора.
  this.handleTry = function (attempt, square, squareContainer) { // 8 створення функції в методі, яка приймає аргументи, спроби, блок div (для змінення кольору) і основний блок.
    if (this.isWinning) { // перевірка, true або false.
      alert("Congrats! You have won!"); // виведення alert, якщо умова правильна.
      square.classList.add("square-correct"); // надання класу, якщо умова правильна. Через цей клас блок стане зеленим.
    } else { // якщо умова не правильна
      if (attempt === 3) { // якщо кількість спроб дорівнює 3.
        alert("Sorry, it was your last turn"); // виведення alerty, при правдивій умові.
        squareContainer.innerHTML = null; // очищення всіх елементів основного div-контейнеру.
        return; // повернення, функція припиняє свою дію.
      }
      alert("Sorry, try one more time!"); // при не правдивій умові, виведення alert.
      square.classList.add("square-wrong"); // при не правдивій умові, надання блоку червоного кольору.
      }
    };
  }

  /* 
  6-7 властивості конструктора.
  8 створення функції в методі, яка приймає аргументи attempt (кі-сть спроб), square посилання на HTML Div, для того щоб змінювати колір. 
  squareContainer це основний div, який є в HTML-документі.
  */
const cards = [ // Масив з об'єктами. Не обов'язково створювати багато змінних, можна і таким способом. 
  new LotteryCard(7, true), // повертає об'єкт, тому не обов'язково створювати змінну.
  new LotteryCard(1, false),
  new LotteryCard(3, false),
  new LotteryCard(4, false),
  new LotteryCard(8, false),
  new LotteryCard(2, false),
  new LotteryCard(5, false),
  new LotteryCard(6, false),
  new LotteryCard(9, false),
];

function renderSquares(squares) { 
  let attempt = 0; // лічильник спроб.
  squares.forEach((item) => { // пробігаємося методом по масиву cards.
    const squareContainer = document.querySelector(".squares-container"); // змінна, яка міститиме посилання на HTML-елемент div.
    const square = document.createElement("div"); // Створення div
    const squareIndex = document.createElement("h4"); // Створення h4
    squareIndex.innerHTML = item.index; // наповнення h4 числом, яке береться з масиву.
    square.appendChild(squareIndex); // закидаємо в div наш h4 з індексом.
    square.classList.add("square"); // даємо клас div
    square.addEventListener("click", () => { // створюємо подію, яка на клік
    item.handleTry(++attempt, square, squareContainer)} // ++attempt, відразу, миттєво додає +1 до кількості спроб. Це кращий варіант, ніж ++attempt. Тому що при цьому варіанті відразу буде 1,2,3 кількість спроб. А при другому буде 0,1,2,3. Ще до виконання методу ця змінна стане 1.
    ); // square для того, щоб зробити блок червоним або синім. squareContainer для того, щоб онулити основний div. Це передає ці блоки в метод handleTry, конструктора.
    squareContainer.appendChild(square); // додаємо новий div.
  });
}

renderSquares(cards); // передаємо масив карток.