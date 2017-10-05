let indSize = document.getElementById("slSize").selectedIndex;
let indStuffing = document.getElementById("slStuffing").selectedIndex;

let tastyHam = new Hamburger(BUFF_SIZE[indSize], BUFF_STUFFING[indStuffing]);

function createObj() {
    indSize = document.getElementById("slSize").selectedIndex;
    indStuffing = document.getElementById("slStuffing").selectedIndex;

    tastyHam = new Hamburger(BUFF_SIZE[indSize], BUFF_STUFFING[indStuffing]);

    calc();
};

function controllTopping(self) {
    let ind = self.value - 1;
    let topping = BUFF_TOPPING[ind];
    console.log(topping.price + ' ' + self.checked);
    if (self.checked) {
        tastyHam.addTopping(topping);
        console.log('add');
    } else {
        tastyHam.removeTopping(topping);
        console.log('remove');
    }
    calc();
};

function calc() {
    document.getElementById("outPrice").value = tastyHam.calculatePrice();
    document.getElementById("outCalories").value = tastyHam.calculateCalories();
}

// function addOrder(){

// }
