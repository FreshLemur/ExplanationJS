/* Сховища браузера. Cookies, Local Storage, Session Storage. 
Які між ними різниця?

1. Різниця в максимальному розміру пам'яті, яке вони можуть зберігати / Capasity: 
Cookies: 4kb;
Local Storage: 5-10Mbs(в залежності від браузера, в хрому це 10);
Session Storage: 5Mbs.

2. Доступ / Accessibility:
Cookies: Можна достукатися у всіх вікнах;
Local Storage: Можна достукатися у всіх вікнах;
Session Storage: Приватне для кожного окремого вікна.

3. Expiration / Термін придатності:
Cookies: Встановлюється вручну;
Local Storage: Буквально ніколи не зникає, хіба що видалити в коді або в самому браузері;
Session Storage: До закриття вікна.

4. Чи додається в HTTP-запит / Passed in request:
Cookies: Додаються з кожним HTTP-запитом;
Local Storage: Не додаються;
Session Storage: Не додаються.

5. Сховище / Storage :
Cookies: Сховище браузера(в особливому випадку можливі сховища в базі даних (на сервері));
Local Storage: Сховище браузера;
Session Storage: Сховище браузера.

*/

/* Як працює Local Storage:
Тепер як вони працюють насправді, використання у нашому випадку, для того щоб зберігати товар при оновленні вікна.
Буде використовуватися Local Storage.

Є об'єкт localStorage, має кілька методів:

1. .setItem - задає елемент в Local storage
Синтаксис: localStorage.setItem("key", "value"), мається на увазі key як властивість, а value як значення, тобто вигляд буде:
localStorage.setItem("name", "Vitaly");
localStorage.setItem("age", 18);
Щоб побачити, треба відкрити вкладку Application, потім Local storage, адресу і буде це видно.

2. .getItem - знаходить елемент чи достукуєся до нього в Local Storage.
Синтаксис: 
localStorage.getItem("name") / Поверне "Vitaly";
localStorage.getItem("age") / Поверне 18; 
Тому що при 1 дії ми засетили ці значення в ці властивості.

3. .remove item - знаходить елемент і видаляє його.
Синтаксис: 
localStorage.removeItem("name"); - видаляє властивість name.
localStorage.removeItem("age") - видаляє властивість age.

4. .clear - видаляє всі елементи які були в Local storage.
Синтаксис: 
localStorage.clear()

Також є можливість видалити засечені дані у вікні Application, натиснувши на кнопу "Clear All", тобто вручну, без команд.
Якщо не видаляти дані з Local Storage, вони ніколи не зникнуть і будуть там вічно.

5. .key - key це масив, який зберігає ключі (властивості).
Синтаксис:
localStorage.key(0...1...2...).
За 0 індексом буде 1 елемент масиву, за 2 індексом 1 і так далі.

6. .length - для отриманя довжини сховища, як з масивами.
Синтаксис:
localStorage.length.

*/

/* Як працює Session Storage:

Для його розуміння достатньо замінити всі localStorage на sessionStorage. Вони майже одинакові і мають одинакові методи.
Різниця між ними полягає в тому, що в Local Storage зберігається завжди. Він буде доти, доки не видалити його власноруч, або ж за допомогою код.
А Session Storage зберігається тільки до моменту закриття вікна. При оновленні він також зберігається, проте якщо вікно закрити, він очищається.

Також в Session Storage створюється key IsThisFirstTime_Log_From_LiveServer, value якого true. Це створює сам браузер, для своїх цілей.

Ось і вся різниця.

*/

/* Як працюють Cookies 
  Вони мають жахливий інтерфейс і ними не так зручно маніпулювати. Їхньою перевагою є те, що їм можна встановлювати термін дії, що є дуже корисним для безпеки сайту.
  
  document.cookie = 'name=Vitaly' Синтаксис, щоб додати кукі.
  document.cookie = 'age=25' Синтаксис, щоб додати кукі.

  document.cookie - виведе рядкове значення. '', а також ті кукі, які вже записані.
  Вони зберігається ось такому виді: 'name=Vitaly; age=25' . Саме через цей вид вони не зручні.

  document.cookie = 'name = Байдуже; expires=Sun, 20 Aug 2000 12:00:00 UTC'
  document.cookie = 'age = 25; expires=Sun, 20 Aug 2000 12:00:00 UTC'
  Це синтексис для того, щоб їх видалити. Потрібно встановити дату, яка вже пройшла, щоб вони видалилися.

  Вони з'явилися дуже давно, тому їхній синтаксис і є таким не зручним.
*/

/* Коли що використовувати: Cookies, Local Storage, Session Storage. 
  
  Cookies:
    Прикладом використання кукі, буде тимчасовий ID користувача, наприклад для аутентифікації. Тому що їм можна встановити дату зникненя
    і через якийсь час вони просто зникнуь, тому це досить зручно. Наприклад, GW Token, це технологія для правильного логування та реєстарії на сайті.
    Власне це також є прикладом використання кукі, щоб зберігати цей токен.
    Наприклад, кожні 5-10 хвилин оновлюватиметься токен, тому це буде гарний захист для сайту, тому що він просто постійно оновлюватиметься.
    Краще зберігати інформацію, яка потрібна буде для серверу.
 
  Local Storage:
    Прикладом використання буде запису мови користувача чи вибору темного режиму, або ж якогось кольору сайту.
    Також гарним прикладом є зберігання офлайн даних, для того, щоб навіть без з'єднання з інтернетом був частковий доступ до сайту, тому що
    вони зберігається саме в браузері користувача. Ми можемо виводити дані з локального сховища, навіть якщо в користувача немає інтернету
  
  Session Storage
    Прикладом використання буде оптимізація сайту для користувача, тому що не буде записів лишньої інформації при закриттю сторінки.
    
*/

const CART_PRODUCTS_LABEL = "cart-products";
// Якщо ми повторюємо в коді якесь значення кілька разів, то краще буде засунути його в змінну і використовувати змінну.
// Ми використовуємо стрінгове значення "cart-products" кілька разів, тому під нього була створена ця змінна.
// Конвенція при створенні таких змінних, які позначають стрігну - писати великими літерами, використовуєчи нижні риски.

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=9");
  const products = await response.json();
  return products;
};

const renderProducts = async () => {
  const products = await getProducts();
  const container = document.querySelector(".products-container");
  for (const item of products) {
    // creating elements
    const productWrapper = document.createElement("li");
    const productImg = document.createElement("img");
    const productTitle = document.createElement("h4");
    const productDescription = document.createElement("p");
    const productPriceSection = document.createElement("section");
    const productPrice = document.createElement("span");
    const productBuyBtn = document.createElement("button");
    // setting values for elements
    productWrapper.classList.add("product-item");
    productPriceSection.classList.add("product-item-price");
    productImg.src = item.image;
    productTitle.innerText = item.title;
    productDescription.innerText = item.description;
    productPrice.innerText = `${item.price}$`;
    productBuyBtn.innerText = "Add to cart";
    productBuyBtn.addEventListener("click", () => addToCart(item));
    // appending elements inside the wrappers
    productPriceSection.append(productPrice, productBuyBtn);
    productWrapper.append(
      productImg,
      productTitle,
      productDescription,
      productPriceSection
    );
    container.append(productWrapper);
  }
  renderInitialCart();
};

const getCartTotal = (product) => {
  const totalAmount = document.querySelector(".total-amount > span");
  const cartItems = document.getElementsByClassName("cart-list-item");
  let total = 0;
  for (const item of cartItems) {
    const price = item.querySelector(".cart-list-price-section > span");
    const quantity = item.querySelector(".cart-list-quantity-section > input");
    const currentAmount = parseFloat(price.innerText) * quantity.value;
    total += currentAmount;
  }
  totalAmount.innerText = `${total.toFixed(2)}$`; // toFixed - метод, який робить заокруглення, щоб не було довгих цифр.
  localStorage.setItem("total", total.toFixed(2)); // щоразу при виклику цієї функції відбуватиметься перезапис total в local storage.
  saveProduct(product);
};

const removeProductFromCart = (event, product) => {
  event.target.parentElement.parentElement.remove();
  const cartListItems = document.getElementsByClassName("cart-list-item");
  if (!cartListItems.length) { // якщо кошик не пустий, то ця умова не працює.
    const cartListWrapper = document.querySelector(".cart-list-wrapper");
    const emptyCartTitle = document.querySelector(".cart-empty-title");
    cartListWrapper.style.display = "none";
    emptyCartTitle.style.display = "block";
    localStorage.clear(); // якщо кошик пустий, то очищається все, що було записано в local Storage.
    return;
  }
  const currentCartProducts = getCurrentCartItems();
  const filteredArr = currentCartProducts.filter(
    (item) => item.id !== product.id
    /*
    Я правильно розумію, що цей метод створений для того, щоб створити новий масив, з CART_PRODUCTS_LABEL і записати цей новий масив в Local Storage, тому що якщо не буде цієї умови, то існує можливість повторення одинакових продуктів в локальному сховищі, так?
    ChatGPT
    Так, ви правильно зрозуміли. Використання методу filter в даному випадку призначене для створення нового масиву, який не містить товар з конкретним id. Це важливо для уникнення дублювання товарів у кошику покупок, які зберігаються в локальному сховищі.
    Якщо б ця умова не існувала і новий товар додавався до кошика, то в локальному сховищі може зберігатися кілька екземплярів одного і того ж товару з однаковим id. Використання методу filter дозволяє створити новий масив, який вже не містить товар з таким id, і потім цей оновлений масив знову зберігається в локальному сховищі.
    Це підтримує коректність та унікальність товарів у кошику покупок, а також допомагає зберігати консистентні дані в локальному сховищі.
    */
  );
  setCurrentCartItems(filteredArr);
  getCartTotal(); // ми не передаємо product в цю функцію, тому що це видалення і нам не потрібно нічого передавати.
};

const addToCart = (product) => {
  const cartItems = document.getElementsByClassName("cart-list-item");
  for (const item of cartItems) {
    if (product.id === +item.getAttribute("id")) { // Це для того, щоб збільшувалося значення input, а не додавався новий товар щоразу.
      const quantityInput = item.querySelector(
        ".cart-list-quantity-section > input"
      );
      quantityInput.value++;
      getCartTotal(product); 
      // Передаємо сюди product тому, що ми збільшуємо кількість quantity, від цього збільшиться сума, а також кількість. 
      // Відповідно ми хочемо зберегти це в локальному сховищі, тому передаємо це, щоб пізніше це зберегти в локальному сховищі.
      // до наступних двох функцій.
      return; // Якщо кошик пустий, то ця перевірка не спрацьовує і виконання функції переходить на наступний рядок, 
      
    }
  }
  renderCartItem(product); // inputNumber не передається в цю функцію, тому що при додаванні нового товару він просто буде === 1, тому це немає сенсу.
  getCartTotal(product); 
  // Виклик функції для суми. Якщо додається товар як новий, а не збільшується його значення, то також потрібно передавати його
  // в функцію getCartTotal, щоб пізніше записати його в локальне сховище.
};

const renderCartItem = (product, inputNumber) => {
  const cart = document.querySelector(".cart-list");
  const emptyCartTitle = document.querySelector(".cart-empty-title");
  const cartListWrapper = document.querySelector(".cart-list-wrapper");
  // creating elements
  const cartListItem = document.createElement("li");
  const cartListImgSection = document.createElement("section");
  const cartListPriceSection = document.createElement("section");
  const cartListQuantitySection = document.createElement("section");
  const image = document.createElement("img");
  const title = document.createElement("h4");
  const price = document.createElement("span");
  const quantity = document.createElement("input");
  const removeBtn = document.createElement("button");
  quantity.addEventListener("change", () => getCartTotal(product)); 
  // Тут getCartTotal також отримує властивість product, тому що змінюється лічильник, відповідно зміниться сума та кількість, 
  // які потрібно буде записати в локальне сховище.
  removeBtn.addEventListener("click", (event) =>
    removeProductFromCart(event, product)
  );
  // setting values
  cartListItem.classList.add("cart-list-item");
  cartListImgSection.classList.add(
    "cart-list-item-section",
    "cart-list-img-section"
  );
  cartListPriceSection.classList.add(
    "cart-list-item-section",
    "cart-list-price-section"
  );
  cartListQuantitySection.classList.add(
    "cart-list-item-section",
    "cart-list-quantity-section"
  );
  image.src = product.image;
  title.innerText = product.title;
  price.innerText = `${product.price}$`;
  quantity.type = "number";
  quantity.value = inputNumber || 1; // Якщо змінити значення на 100, то при додаванні товару буде 100 в кількості.
  /* || - або, або. Якщо число буде передаватися, то буде значення inputNumber, якщо ж ні, то буде встановлено число 1. 
  Це робиться, тому що ця функція (renderCartItem) викликається двічі. В функції renderInitialCart та в функції addToCart.
  В функцїі renderInitialCart передається аргумент inputNumber, а в функції addToCart ні. Щоб не було помилок і зроблений такий вибір.*/
  quantity.min = 1;
  quantity.className = "quantity-input";
  removeBtn.innerText = "REMOVE";
  emptyCartTitle.style.display = "none";
  cartListWrapper.style.display = "block";
  // appending values
  cartListImgSection.append(image, title);
  cartListPriceSection.appendChild(price);
  cartListQuantitySection.append(quantity, removeBtn);
  cartListItem.setAttribute("id", product.id);
  cartListItem.append(
    cartListImgSection,
    cartListPriceSection,
    cartListQuantitySection
  );
  cart.appendChild(cartListItem);
};

const renderInitialCart = () => {
  const currentCartProducts = getCurrentCartItems(); // Якщо currentCartProducts.length === 0, то ми просто не зайдемо далі і функція припиняє свою дію.
  if (!currentCartProducts.length) {
    return;
  }
  currentCartProducts.forEach((item) => renderCartItem(item, item.amount));
  getCartTotal(); 
  // Для підрахування загальної суми. Тут product не передається, тому що його просто не має. Ця функція навпаки
  // бере необхідні їй дані з локального сховища, тому записувати туди щось немає потреби.
};

const saveProduct = (product) => { // ця функція створена для того, щоб засетити наш продукт в локальному сховищі.
  if (!product) { // Якщо немає ніякого продукту (або він не був переданий), то функція припиняє дію.
    return;
  }
  const currentCartProducts = getCurrentCartItems(); // беремо масив даних, які знаходяться в локальному сховищі. Якщо їх там нема, то береться пустий масив.
  const productInCart = currentCartProducts.findIndex(
    (item) => item.id === product.id // Перевіряє, чи є product серед currentCartProducts. Якщо такий об'єкт знайдено (хоча б 1), метод поверне 1. Якщо ні, то поверне -1.
  );
  if (productInCart > -1) { // Умова спрацює, якщо елемент є в масиві.
    // const qtyInput = document.getElementsByClassName("quantity-input"); // // 1
    // if ( // // 2
    //   qtyInput[productInCart].value > currentCartProducts[productInCart].amount // // 3
    // ) { // // 4
      product.amount++; // Коли умова спрацює, то замість того, щоб дуплювати товари в локальному сховищі просто додається +1 до кількості.
      currentCartProducts.splice(productInCart, 1, product); // замінюється попереднє значення продукту в локальному сховищі новоствореним.
      // // productInCart - index, те, що заміниться. 1 - замінити на 1 елемент, якщо ввести 10, то заміняться 10 елементів. product - те, на що замінюється.
    // } else { // // 5
    //   product.amount--; // // 6
    //   currentCartProducts.splice(productInCart, 1, product); // // 7
    // } // // 8
    // Якщо закоментувати 1-8, то буде баг. Умова працює так, що при зміні input, тобто кількості продуктів буде збільшуватися кількість в local storage
    // Проте, якщо зменшувати кількість, в local Storage вона також збільшуватиметься. Це призведе до багу, 
    // що при зменшенні кількості продукту в кошику буде збільшуватися кількість продукту в локальному сховищі.
  } else { // Умова спрацює, якщо елементу немає в масиві.
    product.amount = 1; // працює умова і дається продукту значення .amount (сума), зі значенням 1.
    currentCartProducts.push(product); // Потім цей продукт закидується в локальне сховище.
  }
  setCurrentCartItems(currentCartProducts);
};

const getCurrentCartItems = () =>
  JSON.parse(localStorage.getItem(CART_PRODUCTS_LABEL)) || [];
/* Або ми отримаємо масив вже готових, обраних користувачем елементів (CART_PRODUCTS_LABEL), або (||) буде повернено пустий масив.
Це робиться для уникнення помилок.

Ця функція написана на мові програмування JavaScript і виконує одну конкретну задачу - отримання поточного змісту кошика збереженого
в локальному сховищі браузера. Давайте докладніше розглянемо, що робить кожна частина цього коду:

const getCurrentCartItems = () => {: Визначається константа getCurrentCartItems, яка представляє собою стрілкову функцію без параметрів.

JSON.parse(localStorage.getItem(CART_PRODUCTS_LABEL)) || [];: Використовуючи localStorage.getItem(CART_PRODUCTS_LABEL), 
функція отримує значення, збережене в локальному сховищі браузера під певним міткою CART_PRODUCTS_LABEL. Це значення отримується у вигляді рядка.

Далі, JSON.parse() використовується для перетворення отриманого рядка у JavaScript об'єкт або масив
(залежно від того, що саме зберігалося в локальному сховищі). Якщо відсутнє збережене значення або воно не є валідним JSON, 
то JSON.parse поверне null.

Оператор || [] використовується для забезпечення того, що функція завжди повертає масив, 
навіть якщо збережене значення відсутнє або невірне. Це допомагає уникнути помилок, 
пов'язаних зі спробою роботи з null або undefined.

Отже, загальна мета цієї функції - отримати зміст кошика з локального сховища браузера та повернути його у вигляді масиву. 
*/

const setCurrentCartItems = (products) => { // сетає значення в локальному сховищі.
  localStorage.setItem(CART_PRODUCTS_LABEL, JSON.stringify(products)); 
  // типовий setItem. На 1 значення йде ключ - CART_PRODUCTS_LABEL, це буде cart-products. Потім йде запис продукту за допомогою
  // JSON.stringify(products). Так робиться, тому що якщо залишити лише сам products, то буде помилка, тому що потрібно саме записати рядкове значення.
  // А JSON.stringify(products) саме робить з масиву products рядкове значення, щоб його записати в локальне сховище.
};

renderProducts();
