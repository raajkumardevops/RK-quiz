// ============================================
// STORAGE HELPERS (BEST SCORE + HISTORY)
// ============================================

function getStorageKey(topic, level) {
  return `quiz_${topic}_${level}`;
}

// Save attempt
function saveAttempt(result) {
  const key = getStorageKey(result.topic, result.level);

  const stored = JSON.parse(localStorage.getItem(key)) || {
    bestScore: 0,
    attempts: []
  };

  const score = result.correct;

  // Update best score
  if (score > stored.bestScore) {
    stored.bestScore = score;
  }

  // Add attempt history
  stored.attempts.push({
    date: new Date().toLocaleString(),
    score: score,
    total: result.total
  });

  localStorage.setItem(key, JSON.stringify(stored));
}

// Get stored result
function getStoredResult(topic, level) {
  const key = getStorageKey(topic, level);
  return JSON.parse(localStorage.getItem(key));
}
