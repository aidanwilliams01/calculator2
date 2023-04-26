function onPageLoad() {
  let form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const num1 = parseInt(document.querySelector("input#num1").value);
    const num2 = parseInt(document.querySelector("input#num2").value);
    const op = document.querySelector("input[name='op']:checked").value;
    if (op === "add") {
      document.querySelector("p").innerText = "Result: ".concat(num1 + num2);
    }
    else if (op === "sub") {
      document.querySelector("p").innerText = "Result: ".concat(num1 - num2);
    }
    else if (op === "mult") {
      document.querySelector("p").innerText = "Result: ".concat(num1 * num2);
    }
    else if (op === "div") {
      document.querySelector("p").innerText = "Result: ".concat(num1 / num2);
    }
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad)