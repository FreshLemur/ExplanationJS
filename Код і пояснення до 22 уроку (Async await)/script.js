async function fetchUsers() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users');
  return result.json();
}

async function renderList () {
  const users = await fetchUsers();
  const ul = document.querySelector('.users-list');
  for (const user of users) {
    const li = document.createElement('li');
    li.classList.add('users-list-item');
    li.innerHTML = user.name;
    ul.appendChild(li);
  }
}

function filterUsers(e) {
  const usersListItems = document.getElementsByClassName('users-list-item');
  if (e.target.value.length === 0) {
    [...document.getElementsByClassName('hidden')].forEach((item) => {
      item.classList.remove('hidden');
    });
    return;
  }
  for (const user of usersListItems) {
    if (!user.innerHTML.startsWith(e.target.value)) {
      user.classList.add('hidden');
    } else {
      console.log(e.target.value);
      user.classList.remove('hidden');
    }
  }
}

renderList();

document.querySelector('.input').addEventListener('keyup', filterUsers);


/* Щодо першої функції, ми цілком могли написати б ось так:
async function fetchUsers() {
  const result = await fetch('https://jsonplaceholder.typicode.com/users/').then(data => {
    return data.json();
  });
  return result;
}
Але в нашому випадку async await буде доречніше до цього уроку.
Також, return result.json(); (3) повертає проміс, який ми потім вже перетворюємо в елементи за допомогою
async await в наступній функції.

Спочатку ось такий код, фактично ми підключилися до нашого ttps://jsonplaceholder.typicode.com/users/, 
потім повернули наші результати. Після цього ми створили наступну функцію renderList, яка є async await,
Що означає те, що її дія не відбудеться доти, доки не буде виконаний успішний запит на сервер. 
7 рядок, ми могли прописати: const users = fetchUsers().then(data => {});, проте все ж таки async await є кращим.
На 9 рядок, ми створили цикл for of який пробігається по нашому циклу. user в ньому це умовне значення, а users це
вже назва масиву, по якому пробігається наш цикл. 
10 рядок, де ми створили елемент li.
На 11 рядку ми дали клас нашому елементу. 
На 12 ми зробили так, щоб наповнення нашого li було таке, як і
user.name. А user.name це властивість об'єкту name циклу for of, який допомагає нам витягнути наш .name з масиву users.
Цикл пробігається по нашому масиву 10 разів, тому 10 разів виконається ця дія і ми отримаємо 10 li з name.
На 13 рядку ми додамо наш li до ul.

36 рядок. Тут ми достукуємося до input з класом .input і додаємо до нього метод addEventListener і даємо подію, яка буде
викликати цей метод. Наша подія - keyup, при натиску на клавіатуру буде виконуватися метод і виконувати якісь дії, в нашому
випадку це буде виклик функції filterUsers, якщо будуть натискатися кнопки в input

17 рядок. Наша функція приймає event, e це скорочення. Цей об'єкт e має інформацію про подію, яка відбулася. В нашому випадку
це в 36 рядку. Прописуючи console.log(e); можна побачити подію, яка відбувається і що в собі несе об'єкт e. В цьому об'єкті є
вся необхідна інформація і її дуже багато, можна подивитися через console.log(e);. Серед властивостей цього об'єкту нас найбільше
цікавить target. target це також об'єкт, нас цікавить його властивість value, тобто target.value. В value є те, що ми ввели. Якщо
ми вводимо в input JA, то наш target.value === "JA".

18 радок. Ми створюємо змінну const usersListItems, = document.getElementsByClassName('users-list-item'); за допомогою API достукуємося
до класу нашого li елементу, тобто до класу users-list-item. Отже в цю змінну ми запихуємо псевдомасив з 10 li елементів, які мають клас
'users-list-item'. Чому "псевдомасив"? Тому що getElementsByClassName повертає псевдомасив. Псевдомасив від звичайного масиву відрізняється
тим, що він не має всіх можливих йому методів та властивостей, проте ми можемо пробігатися по ньому циклом.

19-24 рядок поясниться пізніше.

25 рядок. Ми пробігаємося по масиву usersListItems, в цьому масиві є 10 користувачів.
26 рядок. if (!user.innerHTML.startsWith(e.target.value)) - якщо значення нашого li елементу НЕ починається з того, що ми вводимо в input,
тоді буде виконуватися дія. Отже, ! - навпаки, якщо умова не справджується.
Метод startsWith перевіряє чи починається рядок з якогось значення і повертає true або false. 'hello'.startsWith('h') - поверне true, тому
що hello починається з h. Якщо буде будь яка інша літера, то метод поверне false. Але якщо буде пустий рядок, то метод повертатиме true, тобто
'hello'.startsWith('') завжди поверне true, тому що це пустий рядок. Тому, коли наш input буде пустий ми не заходитимо в блок if, бо наша перевірка
спрацьомуватиме, тому що якраз таки startsWith матиме пустий рядок і ми заходимо в блок else, про це вже в 29 рядку.
27 рядок. Дія. user.classList.add('hidden');. Отже, якщо в 26 рядку умова не справджується, то ми додаємо до цього li елементу клас hidden.
В нашому CSS прописаний стиль: .hidden { display: none; }, тому елемент просто видалиться.
29 рядок. В 27 рядку ми спочатку додали клас hidden, якщо судити по нашій умові в 26 рядку, то ми заходимо в блок else і видаляємо клас hidden.
Проте, якщо наша умова не справджується, то ми не даємо клас hidden, тоді навіщо це? А це робиться для того, щоб коли ми поверталися назад,
тобто видаляли те, що написали, видалявся відповідно клас hidden з елементів в яких вони є і якщо все стерти, то з усіх li елементів видалиться
клас hidden, отже ми побачимо всі 10 елементів.

Тепер трохи загально про 25-37 рядки.
Якщо ми до блоку else додамо console.log(e.target.value);, то зможемо побачити як працює подія keyup. А сенс заключається в тому, що подія працює
саме тоді, коли наша кнопка на клавіатурі піднята. Тому натискаючи на будь яку кнопку відбуватиметься виклик функції filterUsers, а вже ця функція
буде проходитися циклом по масиву з li елементів. І цей цикл працюватиме ЩОРАЗУ, коли ми пробігаємося по цьому масиву. 
Натискаючи на будь яку кнопку ми побачимо скільки разів спрацював цикл.

Тепер щодо рядків 19-24.
Якщо прописати в цьому циклі console.log(1), мається на увазі цикл внизу, то ми бачитимемо щоразу виведення в консоль числа 1, коли працюватиме цикл. Цикл буде працювати
щоразу, коли ми натискаємо на будь яку кнопку клавіатури, тому що буде спрацьовувати наша подія, яка вмикає цей цикл. 
Уявімо, що наш масив має 1000 об'єктів і щоразу при натиску будь якої кнопки на клавіатурі в input відбуватиметься подія, яка активує цикл
і цей цикл буде щоразу проходитися по 1000 об'єктам масиву, це дуже затратно і проблематично, саме тому додається ця умова.
19 рядок. Наша умова дуже проста. Якщо наше текстове значення пусте, тобто e.target.value.length === 0, то буде виконуватися дія.
20 рядок. Користуючись спрет-оператором, а це ... ми беремо всі елементи, які мають клас hidden і створюємо з них псевдомасив. Після цього за допомогою циклу forEach
ми пробігаємося по цьому псевдомасиву.
21 рядок. Видаляємо клас "hidden" від елементів, які його мають.
23 рядок. return;, завершення дії функції.
Отже, натискаючи на будь яку кнопку коли input пустий цикл не відбуватиметься, тому не буде сильного навантаження і це прекрасна оптимізація.
*/

