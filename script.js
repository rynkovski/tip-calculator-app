const bill = document.getElementById("bill-value");
const people = document.getElementById("people");
const custom = document.getElementById("custom-tip");
const tip = document.querySelectorAll(".tip-btn");
const clearButton = document.querySelector(".reset");
const tipPerson = document.getElementById("tip-amount");
const totalPerson = document.getElementById("total");

let billValue = 0;
let peopleValue = 0;
let customTip = 0;
let tipValue = 0;

bill.addEventListener("input", () => {
    billValue = Number(bill.value);
    console.log(billValue);
    calcTip();
});
custom.addEventListener("input", () => {
    customTip = Number(custom.value) / 100;
    tipValue = 0;
    console.log(customTip);
    calcTip();
});
people.addEventListener("input", () => {
    peopleValue = Number(people.value);
    console.log(peopleValue);
    calcTip();
});

function calcTip() {
    if (peopleValue >= 1 && customTip == 0) {
        let total = (billValue + billValue * tipValue) / peopleValue;
        console.log(total);
        totalPerson.innerHTML = `$${total.toFixed(2)}`;
        let tipAmount = (billValue * tipValue) / peopleValue;
        console.log(tipAmount);
        tipPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    }
    else if (peopleValue >= 1 && tipValue == 0) {
        let total = (billValue + billValue * customTip) / peopleValue;
        console.log(total);
        totalPerson.innerHTML = `$${total.toFixed(2)}`;
        let tipAmount = (billValue * customTip) / peopleValue;
        console.log(tipAmount);
        tipPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    }
}

//tip buttons
function output() {
    tipValue = Number(this.value);
    console.log(tipValue)
    custom.value = '';
    customTip = 0;
    calcTip();
    return tipValue;
}

tip.forEach(el => {
    el.addEventListener("click", output, true);
})

//clear button

clearButton.addEventListener('click', () => {
    bill.value = '';
    people.value = '';
    custom.value = '';
    billValue = 0;
    peopleValue = 0;
    customTip = 0;
    tipValue = 0;
    tipPerson.innerHTML = '$0.00';
    totalPerson.innerHTML = '$0.00';
})



