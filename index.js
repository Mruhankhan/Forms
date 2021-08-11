let form = document.getElementById("form")
let radio = Array.from(document.getElementsByClassName("form-check-input"))

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const checkedAnswer = radio.filter((answer) => answer.checked)
  checkedAnswer.forEach((answer) => {
    const isCorrect = answer.value === "correct"
    const notCorrect = answer.value === "wrong"
    const quistonItem = answer.closest(".form-check")
    if (isCorrect) {
      quistonItem.classList.add("form-li-correct")
      quistonItem.classList.remove("form-li-wrong")
    }
    if (notCorrect) {
      quistonItem.classList.add("form-li-wrong")
      quistonItem.classList.remove("form-li-correct")
    }
  })
})
