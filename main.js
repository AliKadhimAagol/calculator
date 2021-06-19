const years = document.getElementById("years");
const result = document.getElementById("result");
const calculate = document.querySelector(".btn");
const form = document.getElementById("age-calc");

calculate.addEventListener("click", function (e) {
  const day = new Date();
  if (years.value < 1920) {
    const warning = document.createElement("h1");
    warning.className = "warning-head";
    warning.appendChild(document.createTextNode("can not be less than 1920"));
    document.getElementById("age-calc").appendChild(warning);
  }
  // else if (years.value > day.getFullYear()) {
  //   console.log("ca");
  // } else {
  //   result.value = day.getFullYear() - years.value;
  // }

  e.preventDefault();
});
