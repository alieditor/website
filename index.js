let display = document.getElementById("display");
let currentValue = "";
let operation = null;
let firstOperand = null;

// اضافه کردن عدد
function appendNumber(num) {
  currentValue += num;
  display.value = currentValue;
}

// انتخاب عملیات
function setOperation(op) {
  if (currentValue === "") return;
  firstOperand = parseFloat(currentValue);
  operation = op;
  currentValue = "";
}

// محاسبه نتیجه
function calculateResult() {
  if (operation === null || currentValue === "") return;
  const secondOperand = parseFloat(currentValue);
  let result = 0;

  switch (operation) {
    case "+": result = firstOperand + secondOperand; break;
    case "-": result = firstOperand - secondOperand; break;
    case "*": result = firstOperand * secondOperand; break;
    case "/": 
      result = (secondOperand !== 0) ? (firstOperand / secondOperand) : "خطا";
      break;
  }

  display.value = result;
  currentValue = result.toString();
  operation = null;
}

// توابع ریاضی پیشرفته
function sqrt() {
  if (currentValue !== "") {
    const num = parseFloat(currentValue);
    display.value = Math.sqrt(num);
    currentValue = display.value;
  }
}

function power() {
  const base = parseFloat(prompt("عدد پایه (x):"));
  const exp = parseFloat(prompt("عدد توان (y):"));
  display.value = Math.pow(base, exp);
  currentValue = display.value;
}

function toRad(deg) { return deg * Math.PI / 180; }

function sin() {
  const val = parseFloat(currentValue);
  display.value = Math.sin(toRad(val)).toFixed(4);
  currentValue = display.value;
}

function cos() {
  const val = parseFloat(currentValue);
  display.value = Math.cos(toRad(val)).toFixed(4);
  currentValue = display.value;
}

function tan() {
  const val = parseFloat(currentValue);
  display.value = Math.tan(toRad(val)).toFixed(4);
  currentValue = display.value;
}

// پاک کردن
function clearDisplay() {
  currentValue = "";
  operation = null;
  firstOperand = null;
  display.value = "";
}

// راهنما
function showHelp() {
  document.getElementById("helpModal").style.display = "flex";
}
function closeHelp() {
  document.getElementById("helpModal").style.display = "none";
}
