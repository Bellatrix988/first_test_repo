function calc() {
    //index from select
    let indSize = document.getElementById("slSize").selectedIndex;
    let indStuffing = document.getElementById("slStuffing").selectedIndex;

    let tastyHam = new Hamburger(BUFF_SIZE[indSize], BUFF_STUFFING[indStuffing]);

    document.getElementById("outPrice").value = tastyHam.calculatePrice();
    document.getElementById("outCalories").value = tastyHam.calculateCalories();
};
