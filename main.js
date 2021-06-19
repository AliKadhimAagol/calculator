const years = document.getElementById("years");
const result = document.getElementById("result");
const calculate = document.querySelector(".btn");
const form = document.getElementById("age-calc");

calculate.addEventListener("click", function (e) {
  const day = new Date();
  let warning = document.createElement("h1");
  warning.className = "warning-head";
  if (years.value < 1920) {
    warning.appendChild(document.createTextNode("can not be less than 1920"));
    document.getElementById("age-calc").appendChild(warning);
  } else if (years.value > day.getFullYear()) {
    warning.appendChild(document.createTextNode("can not be more than date"));
    document.getElementById("age-calc").appendChild(warning);
  } else {
    result.value = day.getFullYear() - years.value;
  }

  e.preventDefault();
});
