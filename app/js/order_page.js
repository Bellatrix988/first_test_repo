let indSize = document.getElementById("slSize").selectedIndex;
let indStuffing = document.getElementById("slStuffing").selectedIndex;

let tastyHam = new Hamburger(BUFF_SIZE[indSize], BUFF_STUFFING[indStuffing]);
let arrHistory = [];

function createObj() {
    indSize = document.getElementById("slSize").selectedIndex;
    indStuffing = document.getElementById("slStuffing").selectedIndex;

    tastyHam = new Hamburger(BUFF_SIZE[indSize], BUFF_STUFFING[indStuffing]);

    let toppings = document.getElementsByName("topping");
    toppings.forEach(function(item) {
        if (item.checked)
            tastyHam.addTopping(BUFF_TOPPING[item.value - 1]);
    });

    calc();
};

function controllTopping(self) {
    let ind = self.value - 1;
    let topping = BUFF_TOPPING[ind];
    console.log(topping.price + ' ' + self.checked);
    if (self.checked) {
        tastyHam.addTopping(topping);
    } else {
        tastyHam.removeTopping(topping);
    }
    calc();
};

function calc() {
    let price = tastyHam.calculatePrice();
    let calories = tastyHam.calculateCalories();
    document.getElementById("outPrice").value = price;
    document.getElementById("outCalories").value = calories;
    arrHistory.push({ p: price, c: calories });
    print({ p: price, c: calories });
}

function print(item) {
    let list = document.getElementById("orderList");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode('Price: ' + item.p + ' Calories: ' + item.c));
    li.className = 'list-group-item';
    list.appendChild(li);
}
