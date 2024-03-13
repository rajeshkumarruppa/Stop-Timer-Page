let clearBtnEl = document.getElementById("clearBtn");
let counterValue = document.getElementById("counterValue");
let paraEl = document.getElementById("para");

let counter = 0;

let counterTimer = function() {
    counter = counter + 1;
    counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

// Write your code here
clearBtnEl.onclick = function() {
    clearInterval(intervalId);

    paraEl.textContent = ("Stopped counter succesfully at " + counter);
    paraEl.style.color = "green";
    paraEl.style.fontWeight = "500";
    paraEl.style.marginTop = "25px";
    paraEl.style.fontSize = "20px";
    paraEl.style.fontStyle = "italic";
}