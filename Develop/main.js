$(document).ready(function () {
  var time = moment().format("MMM Do YY");
  console.log(time);

  for (let index = 0; index < 10; index++) {
    let time = document.getElementById("time" + index);

    let hour = time.querySelector(".hour").textContent;
    let description = time.querySelector(".description");
    let saveBtn = time.querySelector(".saveBtn");

    if (localStorage.getItem(hour)) {
      description.value = localStorage.getItem(hour);
    }

    saveBtn.addEventListener("click", function () {
      let value = description.value;
      localStorage.setItem(hour, value);
    });
  }
});
