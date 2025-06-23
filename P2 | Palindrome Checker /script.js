const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  const cleaned = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

checkBtn.addEventListener("click", () => {
  const userInput = textInput.value;

  if (userInput.trim() === "") {
    alert("Please input a value");
    return;
  }

  const palindromeCheck = isPalindrome(userInput)
    ? `${userInput} is a palindrome.`
    : `${userInput} is not a palindrome.`;

  result.textContent = palindromeCheck;
});
