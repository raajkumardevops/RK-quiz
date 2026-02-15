// ============================================
// QUIZ STATE
// ============================================
let index = 0;
let correct = 0;
let wrong = 0;

// Clone & shuffle QUESTIONS once (not options yet)
const questions = [...htmlQuestions].sort(() => Math.random() - 0.5);

// DOM ELEMENTS
const qText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsContainer");
const explanationBox = document.getElementById("explanationBox");
const counter = document.getElementById("questionCounter");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// ============================================
// SAFE OPTION SHUFFLE (KEEPS CORRECT ANSWER)
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
// RENDER QUESTION
// ============================================
function render() {
  const rawQ = questions[index];

  // Shuffle OPTIONS safely for every render
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

  // UI updates
  qText.textContent = q.question;
  counter.textContent = `Question ${index + 1} / ${questions.length}`;

  optionsBox.innerHTML = "";
  explanationBox.classList.add("d-none");
  explanationBox.textContent = "";
  nextBtn.disabled = true;

  // Render options
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
// CHECK ANSWER (100% CORRECT LOGIC)
// ============================================
function checkAnswer(selectedIndex, q) {
  const buttons = document.querySelectorAll(".list-group-item");

  // Disable all options
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

  if (index >= questions.length) {
    localStorage.setItem(
      "result",
      JSON.stringify({
        correct,
        wrong,
        total: questions.length
      })
    );
    window.location.href = "result.html";
    return;
  }

  render();
};

backBtn.onclick = () => {
  index--;
  render();
};

// ============================================
// START QUIZ
// ============================================
render();
