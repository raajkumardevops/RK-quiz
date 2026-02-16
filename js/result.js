function loadResultPage() {
  const r = JSON.parse(localStorage.getItem("result"));
  if (!r) return;

  // SAFE DOM SETTERS
  const topicEl = document.getElementById("topicText");
  const levelEl = document.getElementById("levelText");
  const totalEl = document.getElementById("totalText");
  const correctEl = document.getElementById("correctText");
  const wrongEl = document.getElementById("wrongText");
  const scoreEl = document.getElementById("scoreText");
  const bestEl = document.getElementById("bestScoreText");

  if (topicEl) topicEl.textContent = `Topic: ${r.topic.toUpperCase()}`;
  if (levelEl) levelEl.textContent = `Level: ${r.level.toUpperCase()}`;
  if (totalEl) totalEl.textContent = `Total Questions: ${r.total}`;
  if (correctEl) correctEl.textContent = `Correct Answers: ${r.correct}`;
  if (wrongEl) wrongEl.textContent = `Wrong Answers: ${r.wrong}`;
  if (scoreEl) scoreEl.textContent = `Score: ${r.correct} / ${r.total}`;

  // BEST SCORE (FIXED)
  const key = `${r.topic}_${r.level}_best`;
  const storedBest = Number(localStorage.getItem(key)) || 0;
  const best = Math.max(r.correct, storedBest);

  localStorage.setItem(key, best);

  if (bestEl) {
    bestEl.textContent = `Best Score: ${best} / ${r.total}`;
  }

  // BUTTON ACTIONS
  document.getElementById("restartBtn").onclick = () => {
    window.location.href = "quiz.html";
  };

  document.getElementById("homeBtn").onclick = () => {
    window.location.href = "index.html";
  };
}
