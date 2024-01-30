class Chart {
  constructor(height, background, hasBorder) {
    this.height = height; // Властивості або поля
    this.background = background; // Властивості або поля
    this.hasBorder = hasBorder; // Властивості або поля
  }
}
// Набагато краще використовувати ось такий варіант, створюючи лише клас, а назву класу прийнято писати з великої літери.
// .this === Chart. this.height = height; === Chart.height = height;
// Створює об'єкт на основі конструктора.

/* const chartContent = new Chart('300px', 'red', true);
const chartContent2 = new Chart('280px', 'green', false);
const chartContent3 = new Chart('250px', 'yellow', true);
const chartContent4 = new Chart('230px', 'purple', false);
const chartContent5 = new Chart('210px', 'pink', true);
const chartContent6 = new Chart('190px', 'orange', false);
const chartContent7 = new Chart('170px', 'brown', true);
const chartContent8 = new Chart('150px', 'white', false);
Так це виглядає набагато краще.
Ось використання класу. Достукуючись до класу за допомогою ключового слова new ми викликаємо constructor всередині Chart.
Конструктор це функція, яка запише всі передані нами дані на 11 рядку в новостворений об'єкт.

Цей код є вже гарним, проте можна відразу у виклику функції використовувати new Chart і це буде ще краще.
*/

/* Ми створюємо діаграму. Її можна створити "костилем", тобто працюючим варіантом, проте не бажаним і не зовсім правильним.
const chartContent2 = {
  height: "280px",
  background: "blue",
  hasBorder: "false",
};
const chartContent3 = {
  height: "250px",
  background: "yellow",
  hasBorder: "true",
};
const chartContent4 = {
  height: "230px",
  background: "pink",
  hasBorder: "false",
};
Проблема цього варіанту в тому, що буде дуже і дуже багато тексту, тому і краще користуватися ООП.
Чим менше коду, тим краще.
*/

function renderChart(chartData) {
  const chartsContainer = document.querySelector(".charts-container");
  const chart = document.createElement("div");
  chart.classList.add("chart");
  chart.style.height = chartData.height;
  chart.style.backgroundColor = chartData.background;
  if (chartData.hasBorder) {
    chart.style.border = "2px solid black";
  }
  chartsContainer.appendChild(chart);
}

/*
renderChart(chartContent);
renderChart(chartContent2);
renderChart(chartContent3);
renderChart(chartContent4);
renderChart(chartContent5);
renderChart(chartContent6);
renderChart(chartContent7);
renderChart(chartContent8);
Такий код вже є гарним, проте його можна ще прорефакторити і зробити ще кращим, а саме:
*/

renderChart(new Chart('300px', 'red', true));
renderChart(new Chart('280px', 'green', false));
renderChart(new Chart('250px', 'yellow', true));
renderChart(new Chart('230px', 'purple', false));
renderChart(new Chart('210px', 'pink', true));
renderChart(new Chart('190px', 'orange', false));
renderChart(new Chart('170px', 'brown', true));
renderChart(new Chart('150px', 'white', false));

