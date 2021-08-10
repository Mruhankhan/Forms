let form = document.getElementById("form")
let radio = document.getElementsByClassName("radio")
form.addEventListener("submit", (e) => {
  if (radio.value === "wrong") {
    alert()
  }
})
