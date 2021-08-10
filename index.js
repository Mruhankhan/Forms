let form = document.getElementById("form")
let radio = Array.from(document.getElementsByClassName("form-check-input"))

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const checkedAnswer = radio.filter((answer) => answer.checked)
  checkedAnswer.forEach((answer) => {
    const isCorrect = answer.value === "correct"
    const quistonItem = answer.closest(".form-check")
    if (isCorrect) {
      quistonItem.classList.add()
    } else {
    }
  })
})
