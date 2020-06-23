const checkbox = document.getElementById("checkbox");
const imgDiv = document.getElementById("img-div");
const title = document.getElementById("title");
const main = document.getElementById("main");
const icons = document.querySelectorAll('.fas');
const dates = document.querySelectorAll('.date');
const quote = document.getElementById('quote');
const tributeLink = document.getElementById('link');
const tributeTitle = document.getElementById('tribute-title');


function makeLight() {
  main.classList.add('light')
  main.classList.remove('dark')
  console.log("LIGHT")
  title.style.color = "black";
  tributeTitle.style.color = "black";
  document.body.style.backgroundColor = "white";
  icons[0].style.color = "black";
  icons[1].style.color = "#686868";
  for (let i = 0; i < dates.length; i++) {
    dates[i].classList.add('light');
    dates[i].classList.remove('dark');
  }
  quote.style.color = "black";
  tributeLink.style.color = "black";
}

function makeDark() {
  main.classList.add('dark')
  main.classList.remove('light')
  console.log("DARK");
  title.style.color = "white";
  tributeTitle.style.color = "white";
  document.body.style.backgroundColor = "#474747";
  icons[0].style.color = "#686868";
  icons[1].style.color = "white";
  for (let i = 0; i < dates.length; i++) {
    dates[i].classList.add('dark');
    dates[i].classList.remove('light');
  }
  quote.style.color = "white";
  tributeLink.style.color = "white";
}

function handleSwitch() {
  if (checkbox.checked) {
    makeLight();
  } else {
    makeDark();
  }
}

checkbox.addEventListener("click", handleSwitch);