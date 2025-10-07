let num1, num2;
let score = 0;

function getRandomNumber() {
  return Math.floor(Math.random() * 50) + 10;
}

function findHCF(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function generateQuestion() {
  num1 = getRandomNumber();
  num2 = getRandomNumber();
  document.getElementById("num1").textContent = num1;
  document.getElementById("num2").textContent = num2;

  const correct = findHCF(num1, num2);
  const wrong1 = correct + Math.floor(Math.random() * 3) + 1;
  const wrong2 = correct - Math.floor(Math.random() * 2) - 1;

  const options = [correct, wrong1, wrong2].sort(() => Math.random() - 0.5);

  const optionDiv = document.getElementById("options");
  optionDiv.innerHTML = "";

  options.forEach((opt) => {
    const btn = document.createElement("div");
    btn.textContent = opt;
    btn.className = "option-btn";
    btn.onclick = () => checkAnswer(opt, correct);
    optionDiv.appendChild(btn);
  });

  document.getElementById("message").textContent = "";
}

function checkAnswer(selected, correct) {
  const msg = document.getElementById("message");
  if (selected === correct) {
    msg.textContent = "✅ Correct!";
    msg.style.color = "green";
    score++;
  } else {
    msg.textContent = `❌ Wrong! Correct answer: ${correct}`;
    msg.style.color = "red";
  }
  document.getElementById("score").textContent = "Score: " + score;
}

document.getElementById("nextBtn").addEventListener("click", generateQuestion);

generateQuestion();
