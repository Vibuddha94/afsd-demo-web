function job(shortCut) {
  switch (shortCut.toUpperCase()) {
    case "INTERN":
      console.log("Intern Software Engineer");
      break;
    case "ASE":
      console.log("Associate Software Engineer");
      break;
    case "SE":
      console.log("Software Engineer");
      break;
    case "SSE":
      console.log("Senior Software Engineer");
      break;
    case "ATL":
      console.log("Associate Technical Lead");
      break;
    case "TL":
      console.log("Technical Lead");
      break;
    default:
      console.log("Jobless");
  }
}

job("tl");
console.log("For");
for (let i = 0; i < 10; i++) {
  console.log("Print " + i);
}

console.log("While");
let i = 0;
while (i < 10) {
  console.log("Print " + i);
  i++;
}

console.log("Do While");
var j = 0;
do {
  console.log("Print " + j);
  j++;
} while (j < -1);

console.log("\n\nArray");

let arr = [10, 20, 30, 40, 50];
console.log(arr);
// console.log("push");
// arr.push(60);
// console.log(arr);

// console.log("pop");
// arr.pop();
// console.log(arr);

// console.log("shift");
// arr.shift();
// console.log(arr);

console.log("unshift");
arr.unshift(0);
console.log(arr);

console.log("splice");
arr.splice(2, 2, 100, 200);
console.log(arr);

console.log("slice");
let arr2 = arr.slice(0, 5);
console.log(arr2);

console.log("\n\nObjects");

const car = {
  name: "BMW",
  model: "X5",
  year: 2020,
  color: "black",
  start: function () {
    console.log("Car started");
  },
};

console.log(car);
console.log(car.name);
console.log(car.model);
car.start();

console.log("\n\n========================================");

let x = false;

function btnClick() {
  console.log("Button clicked");
  x = !x;
  if (x) {
    document.getElementById("d-1").innerText = "ACPT";
    document.getElementById("d-1").style.color = "red";
  } else {
    document.getElementById("d-1").innerText = "";
  }

  document.getElementById("d-2").innerHTML = "<h2> Inside Div</h2>";
}

// red button green button

function redBtnClick() {
  document.getElementById("c-1").style.backgroundColor = "red";
}

function blueBtnClick() {
  document.getElementById("c-1").style.backgroundColor = "blue";
}

function onOver() {
  document.getElementById("c-1").style.backgroundColor = "red";
}

function onOut() {
  document.getElementById("c-1").style.backgroundColor = "green";
}

let arrr = [10, 20, 30, 40, 50];
console.log(arrr);

arrr.splice(2, 0, 70, 80);
console.log(arrr);

function keyUp() {
  let text = document.getElementById("inp").value;
  document.getElementById("h").innerText = text;
}

document.getElementById("inp").value = "AFSD";
