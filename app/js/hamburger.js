/**
 * Класс, объекты которого описывают параметры гамбургера.
 *
 * @constructor
 * @param size        Размер
 * @param stuffing    Начинка
 * @throws {HamburgerException}  При неправильном использовании
 */
function Hamburger(size, stuffing) {
    try {
        if (size == undefined && stuffing == undefined)
            throw new HamburgerException('wrong count arguments are set');
        if (stuffing.type != 'STUFFING')
            throw new HamburgerException('invalid stuffing ');
        if (size.type != 'SIZE')
            throw new HamburgerException('invalid size ');
        this.size = size;
        this.stuffing = stuffing;
        this.topping = [];

    } catch (e) {
        e.getMessage();
    }
}

function ItemOfHam(type, price, calories) {
    this.type = type;
    this.price = price;
    this.calories = calories;
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = new ItemOfHam('SIZE', 50, 20);
Hamburger.SIZE_LARGE = new ItemOfHam('SIZE', 100, 40);
Hamburger.STUFFING_CHEESE = new ItemOfHam('STUFFING', 10, 20);
Hamburger.STUFFING_SALAD = new ItemOfHam('STUFFING', 20, 5);
Hamburger.STUFFING_POTATO = new ItemOfHam('STUFFING', 15, 10);
Hamburger.TOPPING_MAYO = new ItemOfHam('TOPPING', 20, 5);
Hamburger.TOPPING_SPICE = new ItemOfHam('TOPPING', 15, 0);

/**
 * Добавить добавку к гамбургеру. Можно добавить несколько
 * добавок, при условии, что они разные.
 *
 * @param topping     Тип добавки
 * @throws {HamburgerException}  При неправильном использовании
 */
Hamburger.prototype.addTopping = function(topping) {
    try {
        if (topping.type != 'TOPPING')
            throw new HamburgerException('wrong type set, waiting topping');
        if (this.topping.indexOf(topping) === -1)
            this.topping.push(topping);
        else
            throw new HamburgerException("duplicate topping " + topping.type);

    } catch (e) {
        e.getMessage();
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
        if (topping.type != 'TOPPING')
            throw new HamburgerException('wrong type set');
        if (this.topping.indexOf(topping) === -1)
            throw new HamburgerException("topping not founded");
    } catch (e) {
        e.getMessage();
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
        }, 0);
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
            return sum + current.calories;
        }, 0);
    sum += this.size.calories + this.stuffing.calories;
    return sum;
}

/**
 * Представляет информацию об ошибке в ходе работы с гамбургером.
 * Подробности хранятся в свойстве message.
 * @constructor
 */
function HamburgerException(message) {
    this.message = message;
    this.getMessage = function() {
        console.log('Hamburger Exception : ' + message);
    }
}
