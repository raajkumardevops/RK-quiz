// =====================================================
// CSS QUIZ DATA (40 QUESTIONS)
// Levels: easy / medium / hard
// =====================================================

const cssQuestions = [

  // =======================
  // EASY (14)
  // =======================
  {
    level: "easy",
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctIndex: 0,
    explanation: "CSS stands for Cascading Style Sheets."
  },
  {
    level: "easy",
    question: "Which property changes text color?",
    options: ["color", "font-color", "text-color", "foreground"],
    correctIndex: 0,
    explanation: "color property changes text color."
  },
  {
    level: "easy",
    question: "Which property changes background color?",
    options: ["background-color", "bgcolor", "color", "background"],
    correctIndex: 0,
    explanation: "background-color sets background color."
  },
  {
    level: "easy",
    question: "Which CSS property controls text size?",
    options: ["font-size", "text-size", "size", "font-style"],
    correctIndex: 0,
    explanation: "font-size controls text size."
  },
  {
    level: "easy",
    question: "Which symbol is used for class selector?",
    options: [".", "#", "*", "&"],
    correctIndex: 0,
    explanation: "Dot (.) is used for class selector."
  },
  {
    level: "easy",
    question: "Which symbol is used for id selector?",
    options: ["#", ".", "*", "&"],
    correctIndex: 0,
    explanation: "# is used for id selector."
  },
  {
    level: "easy",
    question: "Which property makes text bold?",
    options: ["font-weight", "font-style", "text-weight", "bold"],
    correctIndex: 0,
    explanation: "font-weight controls text thickness."
  },
  {
    level: "easy",
    question: "Which property removes underline from links?",
    options: ["text-decoration", "font-style", "underline", "decoration"],
    correctIndex: 0,
    explanation: "text-decoration removes underline."
  },
  {
    level: "easy",
    question: "Which property aligns text to center?",
    options: ["text-align", "align", "center", "float"],
    correctIndex: 0,
    explanation: "text-align aligns text."
  },
  {
    level: "easy",
    question: "Which unit is relative to parent font size?",
    options: ["em", "px", "cm", "mm"],
    correctIndex: 0,
    explanation: "em is relative to parent font size."
  },
  {
    level: "easy",
    question: "Which property adds space inside an element?",
    options: ["padding", "margin", "border", "spacing"],
    correctIndex: 0,
    explanation: "padding adds inner space."
  },
  {
    level: "easy",
    question: "Which property adds space outside an element?",
    options: ["margin", "padding", "border", "gap"],
    correctIndex: 0,
    explanation: "margin adds outer space."
  },
  {
    level: "easy",
    question: "Which property hides overflow content?",
    options: ["overflow", "display", "visibility", "float"],
    correctIndex: 0,
    explanation: "overflow controls extra content."
  },
  {
    level: "easy",
    question: "Which display value hides element completely?",
    options: ["none", "hidden", "block", "inline"],
    correctIndex: 0,
    explanation: "display: none hides element."
  },

  // =======================
  // MEDIUM (13)
  // =======================
  {
    level: "medium",
    question: "Which position value is relative to browser window?",
    options: ["fixed", "absolute", "relative", "static"],
    correctIndex: 0,
    explanation: "fixed positions relative to viewport."
  },
  {
    level: "medium",
    question: "Which property controls element stacking?",
    options: ["z-index", "index", "layer", "stack"],
    correctIndex: 0,
    explanation: "z-index controls stacking order."
  },
  {
    level: "medium",
    question: "Which display value places items in a row?",
    options: ["flex", "block", "inline", "grid"],
    correctIndex: 0,
    explanation: "flex creates flexible layouts."
  },
  {
    level: "medium",
    question: "Which property enables flexbox?",
    options: ["display: flex", "position: flex", "flex: true", "layout: flex"],
    correctIndex: 0,
    explanation: "display:flex enables flexbox."
  },
  {
    level: "medium",
    question: "Which property controls flex direction?",
    options: ["flex-direction", "flex-flow", "align-items", "justify-content"],
    correctIndex: 0,
    explanation: "flex-direction sets row or column."
  },
  {
    level: "medium",
    question: "Which property aligns items horizontally in flexbox?",
    options: ["justify-content", "align-items", "flex-align", "text-align"],
    correctIndex: 0,
    explanation: "justify-content aligns items horizontally."
  },
  {
    level: "medium",
    question: "Which property aligns items vertically in flexbox?",
    options: ["align-items", "justify-content", "align-content", "flex-align"],
    correctIndex: 0,
    explanation: "align-items aligns vertically."
  },
  {
    level: "medium",
    question: "Which unit is relative to viewport width?",
    options: ["vw", "vh", "em", "rem"],
    correctIndex: 0,
    explanation: "vw is viewport width unit."
  },
  {
    level: "medium",
    question: "Which pseudo-class targets hover state?",
    options: [":hover", ":active", ":focus", ":visit"],
    correctIndex: 0,
    explanation: ":hover targets hover state."
  },
  {
    level: "medium",
    question: "Which property rounds element corners?",
    options: ["border-radius", "border-style", "corner", "radius"],
    correctIndex: 0,
    explanation: "border-radius rounds corners."
  },
  {
    level: "medium",
    question: "Which property applies shadow to text?",
    options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
    correctIndex: 0,
    explanation: "text-shadow applies shadow to text."
  },
  {
    level: "medium",
    question: "Which property applies shadow to box?",
    options: ["box-shadow", "text-shadow", "shadow", "border-shadow"],
    correctIndex: 0,
    explanation: "box-shadow applies shadow to box."
  },
  {
    level: "medium",
    question: "Which value makes element invisible but keeps space?",
    options: ["visibility: hidden", "display: none", "opacity: 0", "hide"],
    correctIndex: 0,
    explanation: "visibility:hidden hides but keeps space."
  },

  // =======================
  // HARD (13)
  // =======================
  {
    level: "hard",
    question: "Which CSS function creates gradient?",
    options: ["linear-gradient()", "color-gradient()", "gradient()", "bg-gradient()"],
    correctIndex: 0,
    explanation: "linear-gradient creates gradients."
  },
  {
    level: "hard",
    question: "Which property enables grid layout?",
    options: ["display: grid", "grid: true", "layout: grid", "position: grid"],
    correctIndex: 0,
    explanation: "display:grid enables grid layout."
  },
  {
    level: "hard",
    question: "Which grid property defines columns?",
    options: ["grid-template-columns", "grid-columns", "grid-col", "template-columns"],
    correctIndex: 0,
    explanation: "grid-template-columns defines columns."
  },
  {
    level: "hard",
    question: "Which property defines animation name?",
    options: ["animation-name", "animation", "keyframes", "animate"],
    correctIndex: 0,
    explanation: "animation-name defines animation."
  },
  {
    level: "hard",
    question: "Which rule defines animation frames?",
    options: ["@keyframes", "@frames", "@animate", "@motion"],
    correctIndex: 0,
    explanation: "@keyframes defines animation frames."
  },
  {
    level: "hard",
    question: "Which property controls animation duration?",
    options: ["animation-duration", "animation-time", "duration", "time"],
    correctIndex: 0,
    explanation: "animation-duration controls duration."
  },
  {
    level: "hard",
    question: "Which property applies transition effect?",
    options: ["transition", "transform", "animate", "motion"],
    correctIndex: 0,
    explanation: "transition applies smooth changes."
  },
  {
    level: "hard",
    question: "Which function rotates element?",
    options: ["rotate()", "spin()", "turn()", "flip()"],
    correctIndex: 0,
    explanation: "rotate() rotates elements."
  },
  {
    level: "hard",
    question: "Which property scales element?",
    options: ["transform: scale()", "scale", "resize", "zoom"],
    correctIndex: 0,
    explanation: "scale() scales element."
  },
  {
    level: "hard",
    question: "Which property controls element opacity?",
    options: ["opacity", "visibility", "transparent", "alpha"],
    correctIndex: 0,
    explanation: "opacity controls transparency."
  },
  {
    level: "hard",
    question: "Which selector selects all elements?",
    options: ["*", "#", ".", "all"],
    correctIndex: 0,
    explanation: "* selects all elements."
  },
  {
    level: "hard",
    question: "Which selector selects direct child?",
    options: [">", "+", "~", "*"],
    correctIndex: 0,
    explanation: "> selects direct child."
  },
  {
    level: "hard",
    question: "Which selector selects adjacent sibling?",
    options: ["+", ">", "~", "*"],
    correctIndex: 0,
    explanation: "+ selects adjacent sibling."
  }

];
