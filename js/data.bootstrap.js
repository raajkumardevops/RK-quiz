// =====================================================
// BOOTSTRAP QUIZ DATA (40 QUESTIONS)
// Levels: easy / medium / hard
// =====================================================

const bootstrapQuestions = [

  // =======================
  // EASY (14)
  // =======================
  {
    level: "easy",
    question: "What is Bootstrap?",
    options: [
      "A CSS framework",
      "A JavaScript library",
      "A database",
      "A browser"
    ],
    correctIndex: 0,
    explanation: "Bootstrap is a CSS framework for responsive design."
  },
  {
    level: "easy",
    question: "Which company developed Bootstrap?",
    options: ["Twitter", "Google", "Facebook", "Microsoft"],
    correctIndex: 0,
    explanation: "Bootstrap was developed by Twitter."
  },
  {
    level: "easy",
    question: "Which class creates a responsive container?",
    options: ["container", "box", "wrapper", "content"],
    correctIndex: 0,
    explanation: ".container creates a responsive fixed-width container."
  },
  {
    level: "easy",
    question: "Which class makes text center aligned?",
    options: ["text-center", "align-center", "center-text", "text-align"],
    correctIndex: 0,
    explanation: ".text-center centers text."
  },
  {
    level: "easy",
    question: "Which class adds margin?",
    options: ["m-3", "p-3", "space-3", "gap-3"],
    correctIndex: 0,
    explanation: "m-* adds margin."
  },
  {
    level: "easy",
    question: "Which class adds padding?",
    options: ["p-3", "m-3", "pad-3", "space-3"],
    correctIndex: 0,
    explanation: "p-* adds padding."
  },
  {
    level: "easy",
    question: "Which class makes button blue?",
    options: ["btn-primary", "btn-blue", "btn-info", "btn-main"],
    correctIndex: 0,
    explanation: "btn-primary creates blue button."
  },
  {
    level: "easy",
    question: "Which class makes image responsive?",
    options: ["img-fluid", "img-responsive", "img-fit", "img-auto"],
    correctIndex: 0,
    explanation: "img-fluid makes images responsive."
  },
  {
    level: "easy",
    question: "Which class hides element?",
    options: ["d-none", "hidden", "hide", "invisible"],
    correctIndex: 0,
    explanation: "d-none hides element."
  },
  {
    level: "easy",
    question: "Which grid system uses 12 columns?",
    options: ["Bootstrap grid", "Flexbox", "CSS grid", "HTML table"],
    correctIndex: 0,
    explanation: "Bootstrap grid system has 12 columns."
  },
  {
    level: "easy",
    question: "Which class makes element full width?",
    options: ["w-100", "width-100", "full-width", "block"],
    correctIndex: 0,
    explanation: "w-100 makes width 100%."
  },
  {
    level: "easy",
    question: "Which class creates a card?",
    options: ["card", "panel", "box", "tile"],
    correctIndex: 0,
    explanation: "card class creates card component."
  },
  {
    level: "easy",
    question: "Which class creates navbar?",
    options: ["navbar", "nav", "navigation", "menu"],
    correctIndex: 0,
    explanation: "navbar creates navigation bar."
  },
  {
    level: "easy",
    question: "Which class adds shadow?",
    options: ["shadow", "box-shadow", "shadowed", "depth"],
    correctIndex: 0,
    explanation: "shadow adds box shadow."
  },

  // =======================
  // MEDIUM (13)
  // =======================
  {
    level: "medium",
    question: "Which breakpoint targets large screens?",
    options: ["lg", "md", "sm", "xl"],
    correctIndex: 0,
    explanation: "lg targets large screens."
  },
  {
    level: "medium",
    question: "Which class creates a row?",
    options: ["row", "col", "grid", "flex"],
    correctIndex: 0,
    explanation: "row creates grid row."
  },
  {
    level: "medium",
    question: "Which class spans 6 columns?",
    options: ["col-6", "col-md-6", "span-6", "grid-6"],
    correctIndex: 0,
    explanation: "col-6 spans 6 columns."
  },
  {
    level: "medium",
    question: "Which utility aligns items vertically center?",
    options: ["align-items-center", "justify-content-center", "text-center", "items-center"],
    correctIndex: 0,
    explanation: "align-items-center aligns vertically."
  },
  {
    level: "medium",
    question: "Which class shows element only on large screens?",
    options: ["d-lg-block", "d-none-lg", "show-lg", "visible-lg"],
    correctIndex: 0,
    explanation: "d-lg-block shows on lg screens."
  },
  {
    level: "medium",
    question: "Which class creates modal?",
    options: ["modal", "popup", "dialog", "window"],
    correctIndex: 0,
    explanation: "modal creates popup dialog."
  },
  {
    level: "medium",
    question: "Which class makes list horizontal?",
    options: ["list-group-horizontal", "list-inline", "inline-list", "list-row"],
    correctIndex: 0,
    explanation: "list-group-horizontal makes list horizontal."
  },
  {
    level: "medium",
    question: "Which class disables button?",
    options: ["disabled", "btn-disabled", "disable", "inactive"],
    correctIndex: 0,
    explanation: "disabled disables button."
  },
  {
    level: "medium",
    question: "Which class changes text color?",
    options: ["text-danger", "text-red", "color-danger", "font-danger"],
    correctIndex: 0,
    explanation: "text-danger sets red color."
  },
  {
    level: "medium",
    question: "Which utility makes element sticky?",
    options: ["sticky-top", "fixed-top", "position-sticky", "top-sticky"],
    correctIndex: 0,
    explanation: "sticky-top makes element sticky."
  },
  {
    level: "medium",
    question: "Which class adds gap between columns?",
    options: ["g-3", "gap-3", "space-3", "col-gap"],
    correctIndex: 0,
    explanation: "g-* adds gutter."
  },
  {
    level: "medium",
    question: "Which class rounds image to circle?",
    options: ["rounded-circle", "img-circle", "circle", "rounded"],
    correctIndex: 0,
    explanation: "rounded-circle creates circle image."
  },
  {
    level: "medium",
    question: "Which class makes text uppercase?",
    options: ["text-uppercase", "uppercase", "text-cap", "font-upper"],
    correctIndex: 0,
    explanation: "text-uppercase transforms text."
  },

  // =======================
  // HARD (13)
  // =======================
  {
    level: "hard",
    question: "Which Bootstrap utility enables flexbox?",
    options: ["d-flex", "flex", "display-flex", "flexbox"],
    correctIndex: 0,
    explanation: "d-flex enables flexbox."
  },
  {
    level: "hard",
    question: "Which class aligns items horizontally center?",
    options: ["justify-content-center", "align-items-center", "text-center", "center"],
    correctIndex: 0,
    explanation: "justify-content-center aligns horizontally."
  },
  {
    level: "hard",
    question: "Which class hides element on small screens?",
    options: ["d-none d-sm-block", "d-sm-none", "hide-sm", "hidden-sm"],
    correctIndex: 0,
    explanation: "d-none d-sm-block hides on small screens."
  },
  {
    level: "hard",
    question: "Which class creates responsive columns?",
    options: ["col-md-6", "grid-6", "responsive-col", "col-flex"],
    correctIndex: 0,
    explanation: "col-md-* creates responsive columns."
  },
  {
    level: "hard",
    question: "Which class makes navbar fixed?",
    options: ["fixed-top", "navbar-fixed", "sticky", "nav-fixed"],
    correctIndex: 0,
    explanation: "fixed-top fixes navbar."
  },
  {
    level: "hard",
    question: "Which class adds fade animation to modal?",
    options: ["fade", "animate", "transition", "smooth"],
    correctIndex: 0,
    explanation: "fade adds animation."
  },
  {
    level: "hard",
    question: "Which class creates accordion?",
    options: ["accordion", "collapse", "toggle", "expand"],
    correctIndex: 0,
    explanation: "accordion creates collapsible content."
  },
  {
    level: "hard",
    question: "Which utility controls overflow?",
    options: ["overflow-auto", "overflow", "scroll", "auto-scroll"],
    correctIndex: 0,
    explanation: "overflow-auto controls overflow."
  },
  {
    level: "hard",
    question: "Which class makes image thumbnail?",
    options: ["img-thumbnail", "img-thumb", "thumbnail", "thumb"],
    correctIndex: 0,
    explanation: "img-thumbnail creates thumbnail."
  },
  {
    level: "hard",
    question: "Which utility changes opacity?",
    options: ["opacity-50", "opacity", "fade-50", "transparent"],
    correctIndex: 0,
    explanation: "opacity-50 sets opacity."
  },
  {
    level: "hard",
    question: "Which class creates alert box?",
    options: ["alert", "message", "notify", "box"],
    correctIndex: 0,
    explanation: "alert creates alert box."
  },
  {
    level: "hard",
    question: "Which class creates progress bar?",
    options: ["progress", "loader", "bar", "loading"],
    correctIndex: 0,
    explanation: "progress creates progress bar."
  },
  {
    level: "hard",
    question: "Which class aligns text end?",
    options: ["text-end", "text-right", "align-end", "end"],
    correctIndex: 0,
    explanation: "text-end aligns text to right."
  }

];
