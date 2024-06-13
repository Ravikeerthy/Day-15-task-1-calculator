var mainBox = document.createElement("div");
mainBox.setAttribute("class", "container calculator");

var head = document.createElement("h1");
head.setAttribute("id", "title");
head.setAttribute("class", "text-center my-4");
head.innerText = "Calculator";
document.body.append(head);

var descrip = document.createElement("p");
descrip.setAttribute("id", "description");
descrip.innerText = "Calculator Task using DOM";
document.body.append(descrip);

var calcDiv = document.createElement("div");
calcDiv.setAttribute("class", "calc-div");

var inputArea = document.createElement("input");
// inputArea.setAttribute("type","text");
inputArea.setAttribute("id", "result");
inputArea.setAttribute("class", "form-control mb-3");
inputArea.setAttribute("placeholder", "0");
calcDiv.append(inputArea);

var br = document.createElement("br");
// br.innerText = "1";
calcDiv.append(br);

var br = document.createElement("br");
// br.innerText = "1";
calcDiv.append(br);

var clear = document.createElement("button");
clear.setAttribute("class", "clear");
clear.setAttribute("id", "clear");
clear.innerText = "C";
calcDiv.append(clear);

var del = document.createElement("button");
del.setAttribute("class", "deleted");
del.setAttribute("id", "delete");
del.innerText = "del";
calcDiv.append(del);

var decimal = document.createElement("button");
decimal.setAttribute("class", "align");
decimal.setAttribute("id", "decimal");
decimal.innerText = ".";
calcDiv.append(decimal);

var mul = document.createElement("button");
mul.setAttribute("class", "align");
mul.setAttribute("id", "multiply");
mul.innerText = "*";
calcDiv.append(mul);

var br = document.createElement("br");
// br.innerText = "1";
calcDiv.append(br);

var button7 = document.createElement("button");
button7.setAttribute("class", "align");
button7.setAttribute("value", "7");
button7.setAttribute("id", "7");
button7.innerText = "7";
calcDiv.append(button7);

var button8 = document.createElement("button");
button8.setAttribute("class", "align");
button8.setAttribute("value", "8");
button8.setAttribute("id", "8");
button8.innerText = "8";
calcDiv.append(button8);

var button9 = document.createElement("button");
button9.setAttribute("class", "align");
button9.setAttribute("value", "9");
button9.setAttribute("id", "9");
button9.innerText = "9";
calcDiv.append(button9);

var div = document.createElement("button");
div.setAttribute("class", "align");
div.setAttribute("id", "divide");
div.innerText = "/";
calcDiv.append(div);

var br = document.createElement("br");
// br.innerText = "1";
calcDiv.append(br);

var button4 = document.createElement("button");
button4.setAttribute("class", "align");
button4.setAttribute("value", "4");
button4.setAttribute("id", "4");
button4.innerText = "4";
calcDiv.append(button4);

var button5 = document.createElement("button");
button5.setAttribute("class", "align");
button5.setAttribute("value", "5");
button5.setAttribute("id", "5");
button5.innerText = "5";
calcDiv.append(button5);

var button6 = document.createElement("button");
button6.setAttribute("class", "align");
button6.setAttribute("value", "6");
button6.setAttribute("id", "6");
button6.innerText = "6";
calcDiv.append(button6);

var sub = document.createElement("button");
sub.setAttribute("class", "align");
sub.setAttribute("id", "subtract");
sub.innerText = "-";
calcDiv.append(sub);

var br = document.createElement("br");
// br.innerText = "1";
calcDiv.append(br);

var button1 = document.createElement("button");
button1.setAttribute("class", "align");
button1.setAttribute("value", "1");
button1.setAttribute("id", "1");
button1.innerText = "1";
calcDiv.append(button1);

var button2 = document.createElement("button");
button2.setAttribute("class", "align");
button2.setAttribute("value", "2");
button2.setAttribute("id", "2");
button2.innerText = "2";
calcDiv.append(button2);

var button3 = document.createElement("button");
button3.setAttribute("class", "align");
button3.setAttribute("value", "3");
button3.setAttribute("id", "3");
button3.innerText = "3";
calcDiv.append(button3);

var add = document.createElement("button");
add.setAttribute("class", "align");
add.setAttribute("id", "add");
add.innerText = "+";
calcDiv.append(add);

var br = document.createElement("br");
// br.innerText = "1";
calcDiv.append(br);

var button0 = document.createElement("button");
button0.setAttribute("class", "align");
button0.setAttribute("value", "0");
button0.setAttribute("id", "0");
button0.innerText = "0";
calcDiv.append(button0);

var button00 = document.createElement("button");
button00.setAttribute("class", "align");
button00.setAttribute("value", "00");
button00.setAttribute("id", "00");
button00.innerText = "00";
calcDiv.append(button00);

var equals = document.createElement("button");
equals.setAttribute("class", "merge");
equals.setAttribute("id", "equal");
equals.innerText = "=";
calcDiv.append(equals);

mainBox.append(calcDiv);



document.body.append(mainBox);

var select = document.querySelectorAll("button");
// console.log(select);

select.forEach(function (buttons) {
  buttons.addEventListener("click", function () {
    if (buttons.innerText === "=") {
      calculate();
    } else {
      display(buttons.innerText);
    }
  });
});

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  var inputNumber = document.getElementById("result").value;

  try {
    var result = eval(inputNumber);
    document.getElementById("result").value = result;
  } catch (error) {
    alert("Please Enter the Valid format");
  }
}

clear.addEventListener("click", clearAll);

function clearAll() {
  inputArea.value = "";
}

del.addEventListener("click", deleted);

function deleted() {
  // console.log(typeof(inputArea.value));
  inputArea.value = inputArea.value.slice(0, -4);
}
