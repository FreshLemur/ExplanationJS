/* Регулярні вирази. 

  https://regexr.com/ - сайт, для зручного вивчення або повторення.

  const regExTest = // - регулярний вираз за замовчуванням.
*/

/* Flags / Прапорці

global - //g
Шукає глобально, в усьому тексті. 
Синтаксис: /a/g - знайде всі літери a в тексті, але лише малі.

case insensetive
Шукає не тільки малі літери, а й великі.
Синтаксис: /a/gi - знайде всі літери а, малі та великі. Тут використання йде разом з прапорцем global.

Це не всі, з іншими можна розібратися на сайті. https://regexr.com/

*/

/* Шаблони.


Character set / Набір символів.
/[ab]/ - шукає всі слова, які містять або літеру a, або літеру b. 
Тобто, ми шукаємо щонебудь, що містить a та b.
Наприклад, маємо речення go vegan.
/[gv]/ виділить три літери - [g]o [v]e[g]an
Якщо ми хочемо знайти співпадіння, то синтаксис буде [gv]egan, знайде слово vegan,
тому що з v починається, а egan це продовження, буде виділено go [vegan].




Negated set / Негативні набори.
/[^]/ - те, що не задовільняє нашу умову, наприклад:
Наприклад, маємо речення go vegan began regan megan.
/[^gvn]egan/ - виведе [began regan megan]. Тому що воно шукає те, що не буде gegan, vegan і negan.
Кожне містить з них egan, але жодного у жодного немає символів g,v,n.
[^gvnb]egan - якщо додати літеру b, тоді не буде [began regan megan], а буде [regan megan].


*/

/* Проміжки/Діапазони.

Якщо нам потрібні всі слова, які мають egan і починаються з будь якої літери, наприклад vegan, то можна використовувати алфавіт:
/[abcdefghijklmnopqrstuvwxyz]egan/. Проте такий запис не є бажаним і краще використовувати проміжки.
Синтаксис проміжку/Діпазону:
/[a-z]/, це весь алфавіт. В нашому випадку [a-z]egan і воно знайде слово vegan.
/[a-c]/ - це діапазон від a до c, який включатиме три літери - a,b,c.

Проте, щоб знайти Vegan та vegan є 2 варінти.
1: просто додати прапорець case insensetive. Синтаксис буде: /[a-z]egan/gi.
2: додати ще один діапазон. Синтаксис: /a-zA-Z/egan/g.


Діапазон з цифрами.

Наприклад, потрібно виділити десятизначний номер телефону, можна зробити ось так:
  /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/g
  Проте цей синтаксис виглядає не дуже гарно. Сенс його в тому, що будь яка цифра може починатися з 0,1,2,3,4,5,6,7,8,9.
  Щоб скоротити цей синтаксис існують квантифікатори.
  + - від 1 і більше.
  /[0-9]+/ - виділятиме всі числа, тобто:
  [1231313181418914194091819204]adwada[1]adwa[13921910] - ось приблизно так працюватиме виділення.

/[0-9]{}/
У нашому прикладі з десятизначним номером просто потрібно прописати:
  /[0-9]{10}/g
  Що означатиме виділення всіх чисел, якщо їхня кількість буде === 10.
  Тобто [1534589516] - виділить, тому що це 10 чисел. Якщо буде більше або менше, то не виділить.
  Якшо буде 11 чисел, то виділить ось так: 
    [1234567890]5
  Якщо 20, то ось так:
  [1234567890][1235698740]

Якщо потрібно співпадіння з кількох варіантів, то пишеться через кому, приклад:
/[0-9]{9,12}/g
Тепер співпадіння буде від 9 до 12 цифер, тобто:
  [123456789] - співпадіння. [1234567890] - співпадіння. [12345678901] - співпадіння. [123456789012] - співпадіння.

Якщо потрібно, щоб було як мінімум 9 цифр(від 9 цифр), то потрібно ставити просто кому. 
  Приклад:
    /[0-9]{9,}/
    Тепер виділяться від 9 і більше, тобто:
      [1516818686616168116816816516544687648]
    Цей синтаксис можна спростити.

*/

/* Символьні класи:

  d
  /\d{9,}/g - шукає всі цифри, котрі мають більше ніж 9. Тобто набір чисел від 9.
  /\d/g - шукає глобально всі цифри, тому буде виділяти абсолютно всі цифри.

  D
  /\D/g - виведе все, що не є цифрами. Тобто всі символи та пробіли.

  s
  /\s/g - виводить всі пробіли та табуляцію (tab)

  S
  /\S/g - всі НЕ відступи та НЕ табуляція. Тобто все, окрім пробілів та табу.

  w
  /\w/g - знаходить всі літери та цифри, а також underscore(_, нижні риски)

  W
  /\W/g - знаходить все, окрім літер, цифр та нижніх підкреслень (_)

  .
  /./g - відмітить абсолютно все, окрім перенесень на наступний рядок.


  Наприклад щоб виділити hello 123
  Потрібно прописати: \w{5}\s{1}\d{3}/g - спочатку 5 літер, потім 1 пробіл, потім 3 цифри.
*/

/* Спеціальні символи:

  ?
  /hello?/g - цей синтаксис означає, що ми або шукаємо літеру o, або не шукаємо, тобтьо вона є опційної і не обов'язковою.
  Тобто, співпадіння буде з [hell] [hello]
  /he?llo?/g - цей синтаксис означає, що в слові може бути e, а може і не бути. Також може бути o, а може і не бути.
  Тобто, співпадіння буде з [hll] [hell] [hello]

  *
  /hello* /g - пробіл там стоїть, щоб зберегти закоментування. Отже, цей синтаксис такий як і попередній.
  Проте попередній виділить лише першу o, а * виділить всі о.
  [helloooooooooooooooooo]

  ^ 
  /^hello/g - слово, яке починається на hello, тобто виділення буде:
  [hello]adjawidaldad

  $
  /hello$/g - слово, яке закінчується на hello, тобто виділення буде:
  adjaiwdaidlai[hello]

  ^$
  /^hello$/g - слово, яке обов'язково починається з нового рядку, тобто виділиться 
[hello].

*/

/* Альтернація:

  | - або.
  /p|o/g - шукає в тексті p або о, тобто виділення буде:
  adjwiadjalil[p]adjil[o]KWahkwda[p]adak[o]
  /p|s.com/ - шукає в тексті p або s.com, тобто виділення буде:
  [p] adjlawijdla [s.com] aidjaldiaw[p]

  Групування.
    /(p|s).com/g - шукає або p.com, або s.com, тобто виділення буде:
    a;dkaow;d;kao [p.com] ajdwajldi [s.com]

*/

/* Екранування.

  \
  /\[a-z]\+/g - це означає, що ми хочемо серед тексту шукати [a-z]+.
  Якщо прописувати без \ - екранування, то це буде як умова для пошуку, а з \ це саме ми це шукаємо.
  Перетворює звичайні символі у ті символи, які ми шукаємо.

  /\[a-z]+/g - виділить [a-z]
  /\[a-z]\+/g - виділить [a-z]+

*/

/* Практичне завдання, виділити test@gmail.com.

Я знайшов 3 способи:

/\W|\w\g
/.\g
/\w{4,}\@\w{4,}\.\w{3,}\g
/test@gmail.com\g
/[a-z/@/.]\g


*/

/* Розбір синтаксису регулярного виразу: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g

/: Початок регулярного виразу. Вказує на початок шаблону.

[a-zA-Z0-9._%+-]+: Ця частина шаблону визначає один або більше символів, які можуть бути літерами від "a" до "z" (маленькі чи великі), 
цифрами від "0" до "9", а також певними спеціальними символами: точка (.), нижнє підкреслення (_), відсоток (%), плюс (+) і мінус (-).

@: Літерал "@" визначає символ "at", який обов'язково повинен бути в адресі електронної пошти.

[a-zA-Z0-9.-]+: Ця частина визначає один або більше символів для імені домену, аналогічно до першої частини. 
Додатково, дозволяються також крапки (.) і тире (-) в імені домену.

\.: Екранований крапка (.) визначає реальну крапку у домені. Звичайно, крапка є спеціальним символом у регулярних виразах, 
тому її потрібно екранувати, щоб вказати на звичайний символ "крапка".

[a-zA-Z]{2,}: Ця частина визначає дві або більше літери для верхнього рівня домену (наприклад, com, org, net). 
Використовується фігурна дужка {2,}, щоб вказати, що мінімум дві літери повинні бути присутні.

/g: Закриваючий слеш та літерал "g" вказують на глобальний пошук, що означає, що пошук не зупиняється після знаходження першого входження.




*/