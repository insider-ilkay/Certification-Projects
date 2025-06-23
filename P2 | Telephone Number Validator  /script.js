const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validPhoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

checkBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validPhoneRegex.test(value);
  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${value}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${value}`;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  input.value = "";
});