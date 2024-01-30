// // ООП, 4 пинципи.

// // Принцип 1: успадкування: (5-49)

// class Chart {
//   constructor(height, background, hasBorder) {
//     this.height = height; // Властивості або поля
//     this.background = background; // Властивості або поля
//     this.hasBorder = hasBorder; // Властивості або поля
//   }
// }

// class ChartClickable extends Chart{
//   isClickable = true; // Якщо ми впевнені, що наш ChartClickable буде завжди клікабельним, щоб не повторюватися при створенні змінної на основі цього класу, можна відразу ось так прописати.
//   handleClick() { // handleClick - метод класу, в класів є методи, це щось на кшталт функції.
//     alert('You clicled on the Clickable Chart!');
//   }
// };
// /* Ось такий синтаксис. ChartClickable - назва нового класу, який успадковує. extends (поширювати, розширити) Chart - клас, від
// якого успадковують.
// Отже, за допомогою extends можна успадкувати всі методи і властивості (поля) класу.
// */

// // const chartContent = new Chart("300px", 'red', true); // Клас Chart, від якого успадковують.
// // const chartContent2 = new ChartClickable("300px", 'red', true); // Клас ChartClickable, який успадковує. Він успадкував, тому ми можемо
// // // Дати йому все теж саме, що й класу Chart. 
// // Закоментовано, тому що виклик йде відразу внизу, передаючи аргументи функції там.

// function renderChart(chartData) {
//   const chartsContainer = document.querySelector(".charts-container");
//   const chart = document.createElement("div");
//   chart.classList.add("chart");
//   chart.style.height = chartData.height;
//   chart.style.backgroundColor = chartData.background;
//   if (chartData.hasBorder) {
//     chart.style.border = "2px solid black";
//   };
//   if (chartData.isClickable) {
//     chart.style.cursor = 'pointer'; // Додання стилю cursor = 'pointer';
//     chart.addEventListener('click', chartData.handleClick)
//   }
//   chartsContainer.appendChild(chart);
// }
// renderChart(new Chart("300px", 'red', false));
// renderChart(new ChartClickable("300px", 'red', true))
// renderChart(new ChartClickable("270px", 'green', false))
// renderChart(new ChartClickable("100px", 'yellow', true))

// // В нашому випадку 1 div не буде клікабельним, а всі 3 інші будуть.



// Принцип 2: Поліморфізм/Polymorphism (Багатоформенний.)
// Максимально спрощуючи, це можливість надання класам JS sub класам (дочірнім класам) перезаписувати методи батьківських класів, від яких вони їх успадкували.

// class Chart {
//   constructor(height, background, hasBorder) {
//     this.height = height; 
//     this.background = background; 
//     this.hasBorder = hasBorder; 
//   }
// }

// class ChartClickable extends Chart{
//   isClickable = true;
//   handleClick() {
//     alert('You clicled on the Clickable Chart!');
//   }
// };

// class ChartClickableSecond extends ChartClickable { // Є також клікабельним, тому що успадкував властивості з методами.
//   handleClick() {
//     super.handleClick(); // Ключове слово super. дає можливість достукатися до батьківського класу. В нашому випадку спочатку виведеться alert батьківського класу, а вже після цього дочірнього, той що рядком нижче.
//     alert('You clicled on the Clickable SECOND Chart!'); // Приклад Поліформізму, перезаписання методу батьківських класів. Щось на кшталт створення локального методу.
//   }
// }

// function renderChart(chartData) {
//   const chartsContainer = document.querySelector(".charts-container");
//   const chart = document.createElement("div");
//   chart.classList.add("chart");
//   chart.style.height = chartData.height;
//   chart.style.backgroundColor = chartData.background;
//   if (chartData.hasBorder) {
//     chart.style.border = "2px solid black";
//   };
//   if (chartData.isClickable) {
//     chart.style.cursor = 'pointer';
//     chart.addEventListener('click', chartData.handleClick)
//   }
//   chartsContainer.appendChild(chart);
// }
// renderChart(new Chart("300px", 'red', false));
// renderChart(new ChartClickable("300px", 'red', true));
// renderChart(new ChartClickable("270px", 'green', false));
// renderChart(new ChartClickable("200px", 'yellow', true));
// renderChart(new ChartClickableSecond("100px", 'pink', false));



// Принцип 3. Інкапсуляція/Encapsulation;
// Якщо коротко, це можливість приховати методи та властивості класів, для того, щоб ми не мали можливості модифікувати їх в новостворених об'єктах.
// class Chart {
//   constructor(height, background, hasBorder) {
//     this.height = height; 
//     this.background = background; 
//     this.hasBorder = hasBorder; 
//   }
// }

// class ChartClickable extends Chart{
//   #isClickable = true; // # - робить цю властивість приватною. Ця можливість з'явилася в нових редакція ES. Вона підсвічується темною, тому що вона тепер ніде не використовується. Тепер код на 134 рядку буде помилковим.
//   handleClick() {
//     alert('You clicled on the Clickable Chart!');
//   }
//   getIsClickable() {
//     return this.#isClickable;
//   }
// };

// class ChartClickableSecond extends ChartClickable { 
//   handleClick() {
//     super.handleClick(); 
//     alert('You clicled on the Clickable SECOND Chart!'); 
//   }
// }

// function renderChart(chartData) {
//   const chartsContainer = document.querySelector(".charts-container");
//   const chart = document.createElement("div");
//   chart.classList.add("chart");
//   chart.style.height = chartData.height;
//   chart.style.backgroundColor = chartData.background;
//   if (chartData.hasBorder) {
//     chart.style.border = "2px solid black";
//   };
//   if (chartData.getIsClickable()) { // Вставляємо замість isClickable, getIsClickable(). Тепер використовуючи інкапсуляцію ми достукуємось до цього публічного методу. А сам метод достукується до приватної властивості.
//     // #isClickable, це досить поширений патерн. Допомагає нам запобігати неочікуваній поведінці і писати більш структурований та впорядкований код.
//     chart.style.cursor = 'pointer';
//     chart.addEventListener('click', chartData.handleClick)
//   }
//   chartsContainer.appendChild(chart);
// }

// const сhartClickable1 = new ChartClickable("300px", "red", true);
// // сhartClickable1. // Це об'єкт. Ми бачимо, що маємо доступ до властивостей та методів, які є в цьому об'єкті, котрі були успадковані від батьківського класу. Ми маємо право їх перезаписувати. 
// // Коли ми вже використали #, то тут ми не побачимо цю властивість в цьому об'єкті.
// // Ми перезаписали isClickable, тому зараз div не є клікабельним. Це через функцію на 125 рядку. Це можна назвати багом, тому що ми змінили значення класу, від якого ми його успадковували.
// // console.log(сhartClickable1); доказ, що це об'єкт. 
// renderChart(сhartClickable1)



// Принцип 4: Абстракція/Abstraction.
// Коротке пояснення. Спосіб приховування інплементації і показу лише функціоналу.
// Наприклад мікрохвильова піч. Ми можемо керувати нею, натискати на кнопки (розмороження, зігрівання), проте ми гадки не маємо як вона працює всередині. 
// Ми бачимо лише необхідний для нас функціонал, необхідну для нас частину.

class Chart {
  constructor(height, background, hasBorder) {
    this.height = height; 
    this.background = background; 
    this.hasBorder = hasBorder; 
  }
}

class ChartClickable extends Chart{
  #isClickable = true; 
  #doSomeComplexMath() {
    // Тут будуть складні обрахунки, які в кінці повернуть якесь число.
    //
    // 
    //
    //
    return 69;
    // Нам треба відобразити це число при натиску на колонку.
  }
  handleClick() {
    const data = this.#doSomeComplexMath();
    alert(`Final data is ${data}`); // Виведення числа з функції.
  }
  getIsClickable() {
    return this.#isClickable;
  }
};

class ChartClickableSecond extends ChartClickable { 
  handleClick() {
    super.handleClick(); 
    alert('You clicled on the Clickable SECOND Chart!'); 
  }
}

function renderChart(chartData) {
  const chartsContainer = document.querySelector(".charts-container");
  const chart = document.createElement("div");
  chart.classList.add("chart");
  chart.style.height = chartData.height;
  chart.style.backgroundColor = chartData.background;
  if (chartData.hasBorder) {
    chart.style.border = "2px solid black";
  };
  if (chartData.getIsClickable()) { 
    chart.style.cursor = 'pointer';
    // chart.doSomeComplexMath потрібно не давати можливість достукатися до цього об'єкту. Це і є ідея абстракції, ми намагаємося приховати від користувача не потрібну для нього інформацію.
    // Прописуючи # на 169 і 179 рядках ми не даємо можливість достукування до цього об'єкту.
    chart.addEventListener('click', () => chartData.handleClick()) // ()) => chartData.handleClick() Прописалося для того, щоб наш код запрацював. Пояснення буде у майбутньому, якщо що, гуглити треба "ключове слово this".
  }
  chartsContainer.appendChild(chart);
}

const сhartClickable1 = new ChartClickable("300px", "red", true);
renderChart(сhartClickable1)
// Ми даємо доступ до функціоналу, але не до інплементації, яка не цікавить кінцевого користувача. Нам метод на 169 рядку не потрібно викликати за межами класу, тому ми його робимо приватним і не даємо до нього доступу.