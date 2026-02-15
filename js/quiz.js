// ============================================
// CONFIG
// ============================================
const QUESTIONS_PER_QUIZ = 10;

// ============================================
// GET USER SELECTION
// ============================================
const selectedTopic = localStorage.getItem("selectedTopic");
const selectedLevel = localStorage.getItem("selectedLevel");

// ============================================
// GLOBAL STATE
// ============================================
let allQuestions = [];
let questions = [];
let index = 0;
let correct = 0;
let wrong = 0;

// ============================================
// DOM ELEMENTS
// ============================================
const qText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsContainer");
const explanationBox = document.getElementById("explanationBox");
const counter = document.getElementById("questionCounter");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// ============================================
// SAFE OPTION SHUFFLE
// ============================================
function shuffleOptions(options, correctIndex) {
  const mapped = options.map((opt, i) => ({
    text: opt,
    isCorrect: i === correctIndex
  }));

  for (let i = mapped.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mapped[i], mapped[j]] = [mapped[j], mapped[i]];
  }

  return {
    options: mapped.map(o => o.text),
    correctIndex: mapped.findIndex(o => o.isCorrect)
  };
}

// ============================================
// LOAD QUESTIONS (SYNC + ASYNC)
// ============================================
async function loadQuestions() {

  // ---------- STATIC TOPICS ----------
  if (selectedTopic === "html") {
    allQuestions = htmlQuestions;
  } else if (selectedTopic === "css") {
    allQuestions = cssQuestions;
  } else if (selectedTopic === "bootstrap") {
    allQuestions = bootstrapQuestions;
  }

  // ---------- JAVASCRIPT (FETCH) ----------
  else if (selectedTopic === "javascript") {
    try {
      const res = await fetch("js/data/js.data.json");
      allQuestions = await res.json();
    } catch (err) {
      alert("Failed to load JavaScript questions");
      console.error(err);
      return;
    }
  }

  // ---------- FILTER BY LEVEL ----------
  const filteredQuestions = allQuestions.filter(
    q => q.level === selectedLevel
  );

  // ---------- SAFETY CHECK ----------
  if (!filteredQuestions.length) {
    alert("No questions found for this level.");
    window.location.href = "level.html";
    return;
  }

  // ---------- SHUFFLE + LIMIT ----------
  questions = filteredQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, QUESTIONS_PER_QUIZ);

  render();
}

// ============================================
// RENDER QUESTION
// ============================================
function render() {
  const rawQ = questions[index];
  if (!rawQ) return;

  const shuffled = shuffleOptions(
    rawQ.options,
    rawQ.correctIndex
  );

  const q = {
    question: rawQ.question,
    options: shuffled.options,
    correctIndex: shuffled.correctIndex,
    explanation: rawQ.explanation
  };

  qText.textContent = q.question;
  counter.textContent = `Question ${index + 1} / ${QUESTIONS_PER_QUIZ}`;

  optionsBox.innerHTML = "";
  explanationBox.classList.add("d-none");
  explanationBox.textContent = "";
  nextBtn.disabled = true;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "list-group-item list-group-item-action";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i, q);
    optionsBox.appendChild(btn);
  });

  backBtn.disabled = index === 0;
}

// ============================================
// CHECK ANSWER
// ============================================
function checkAnswer(selectedIndex, q) {
  const buttons = document.querySelectorAll(".list-group-item");
  buttons.forEach(b => (b.disabled = true));

  if (selectedIndex === q.correctIndex) {
    buttons[selectedIndex].classList.add("bg-success", "text-white");
    correct++;
  } else {
    buttons[selectedIndex].classList.add("bg-danger", "text-white");
    buttons[q.correctIndex].classList.add("bg-success", "text-white");
    wrong++;
  }

  explanationBox.textContent = q.explanation;
  explanationBox.classList.remove("d-none");
  nextBtn.disabled = false;
}

// ============================================
// NAVIGATION
// ============================================
nextBtn.onclick = () => {
  index++;

  if (index >= QUESTIONS_PER_QUIZ) {
    localStorage.setItem(
      "result",
      JSON.stringify({
        topic: selectedTopic,
        level: selectedLevel,
        correct,
        wrong,
        total: QUESTIONS_PER_QUIZ
      })
    );
    window.location.href = "result.html";
    return;
  }

  render();
};

backBtn.onclick = () => {
  if (index === 0) return;
  index--;
  render();
};

// ============================================
// START QUIZ
// ============================================
loadQuestions();
