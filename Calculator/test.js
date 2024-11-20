let calciBTNs = document.querySelectorAll(".calciBTN");
let clearBTN = document.querySelector("#clear");
let backspaceBTN = document.querySelector("#backspace"); 
let equalToBTN = document.querySelector("#equalTo");
let display = document.querySelector("#display");

calciBTNs.forEach((el) => {
 el.addEventListener("click", () => {
    display.value += el.innerText;
 });
});

const evaluate = () => {
    if (display.value !== "") {
        try {
            let result = math.evaluate(display.value);
            display.value = result;
        } 
        catch(err) {
            display.value = "ERROR";
        }
    }
};

equalToBTN.addEventListener("click", evaluate);

clearBTN.addEventListener("click", () => {
   display.value = "";
});

backspaceBTN.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});