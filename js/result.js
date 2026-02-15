// ============================================
// RESULT PAGE LOGIC
// ============================================

function loadResultPage() {
  const result = JSON.parse(localStorage.getItem("result"));
  if (!result) return;

  const { topic, level, correct, wrong, total } = result;

  // Save attempt
  saveAttempt(result);

  const stored = getStoredResult(topic, level);

  // DOM elements
  document.getElementById("topicText").textContent =
    `Topic: ${topic.toUpperCase()} | Level: ${level.toUpperCase()}`;

  document.getElementById("totalText").textContent =
    `Total Questions: ${total}`;

  document.getElementById("correctText").textContent =
    `Correct Answers: ${correct}`;

  document.getElementById("wrongText").textContent =
    `Wrong Answers: ${wrong}`;

  document.getElementById("scoreText").textContent =
    `Your Score: ${correct} / ${total}`;

  document.getElementById("bestScoreText").textContent =
    `Best Score: ${stored.bestScore} / ${total}`;

  // Buttons
  document.getElementById("restartBtn").onclick = () => {
    window.location.href = "level.html";
  };

  document.getElementById("homeBtn").onclick = () => {
    window.location.href = "index.html";
  };
}
