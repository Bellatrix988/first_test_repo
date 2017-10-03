/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
}

function ItemOfHam(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = new ItemOfHam('Small', 50, 20);
Hamburger.SIZE_LARGE = new ItemOfHam('Large', 100, 40);
Hamburger.STUFFING_CHEESE = new ItemOfHam('Cheese', 10, 20);
Hamburger.STUFFING_SALAD = new ItemOfHam('Salad', 20, 5);
Hamburger.STUFFING_POTATO = new ItemOfHam('Potato', 15, 10);
Hamburger.TOPPING_MAYO = new ItemOfHam('Mayo', 20, 5);
Hamburger.TOPPING_SPICE = new ItemOfHam('Spice', 15, 0);

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function(topping) {
    try {
        if (this.topping.indexOf(topping) === -1)
            this.topping.push(topping);
        else
            throw new SyntaxError("This object was already added");
    } catch (e) {
        console.log('Error ' + e.name + ":" + e.message);
    }
}

/**
 * Убрать добавку, при условии, что она ранее была
 * добавлена.
 *
 * @param topping   Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.removeTopping = function(topping) {
    try {
        if (this.topping.indexOf(topping) === -1)
            throw new SyntaxError("This ogject wasn't added")
    } catch (e) {
        console.log('Error ' + e.name + ":" + e.message);
    }
}

/**
 * Получить список добавок.
 *
 * @return {Array} Массив добавленных добавок, содержит константы
 *                 Hamburger.TOPPING_*
 */
Hamburger.prototype.getToppings = function() {
    return this.topping;
}

/**
 * Узнать размер гамбургера
 */
Hamburger.prototype.getSize = function() {
    return this.size;
}

/**
 * Узнать начинку гамбургера
 */
Hamburger.prototype.getStuffing = function() {
    return this.stuffing;
}

/**
 * Узнать цену гамбургера
 * @return {Number} Цена в тугриках
 */
Hamburger.prototype.calculatePrice = function() {
    let sum = 0;
    if (this.getToppings().lenght != 0)
        sum = this.topping.reduce(function(sum, current) {
            return sum + current.price;
        },0);
    sum += this.size.price + this.stuffing.price;
    return sum;
}

/**
 * Узнать калорийность
 * @return {Number} Калорийность в калориях
 */
Hamburger.prototype.calculateCalories = function() {
    let sum = 0;
    if (this.getToppings().lenght != 0)
        sum = this.topping.reduce(function(sum, current) {
            return sum + current.calories
        },0);
    sum += this.size.calories + this.stuffing.calories;
    return sum;
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException(name, message) {
    this.name = name;
    this.message = message;
}
