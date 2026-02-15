const htmlQuestions = [

  // =======================
  // EASY (14 QUESTIONS)
  // =======================
  {
    level: "easy",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language"
    ],
    correctIndex: 0,
    explanation: "HTML stands for Hyper Text Markup Language."
  },
  {
    level: "easy",
    question: "Which tag is used to create a paragraph?",
    options: ["<p>", "<para>", "<text>", "<pg>"],
    correctIndex: 0,
    explanation: "<p> tag defines a paragraph."
  },
  {
    level: "easy",
    question: "Which tag inserts an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correctIndex: 0,
    explanation: "<img> is used to insert images."
  },
  {
    level: "easy",
    question: "Which tag creates a line break?",
    options: ["<br>", "<lb>", "<break>", "<hr>"],
    correctIndex: 0,
    explanation: "<br> inserts a line break."
  },
  {
    level: "easy",
    question: "Which tag is used for the largest heading?",
    options: ["<h1>", "<h6>", "<head>", "<heading>"],
    correctIndex: 0,
    explanation: "<h1> is the largest heading."
  },
  {
    level: "easy",
    question: "Which tag creates an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctIndex: 0,
    explanation: "<ul> creates an unordered list."
  },
  {
    level: "easy",
    question: "Which tag defines a list item?",
    options: ["<li>", "<ul>", "<ol>", "<list>"],
    correctIndex: 0,
    explanation: "<li> defines a list item."
  },
  {
    level: "easy",
    question: "Which attribute specifies image source?",
    options: ["src", "href", "alt", "path"],
    correctIndex: 0,
    explanation: "src specifies the image source."
  },
  {
    level: "easy",
    question: "Which attribute gives alternate text for image?",
    options: ["alt", "src", "title", "id"],
    correctIndex: 0,
    explanation: "alt provides alternate text."
  },
  {
    level: "easy",
    question: "Which tag is used to create a button?",
    options: ["<button>", "<btn>", "<click>", "<input>"],
    correctIndex: 0,
    explanation: "<button> creates a clickable button."
  },
  {
    level: "easy",
    question: "Which tag defines a form?",
    options: ["<form>", "<input>", "<fieldset>", "<label>"],
    correctIndex: 0,
    explanation: "<form> collects user input."
  },
  {
    level: "easy",
    question: "Which tag defines emphasized text?",
    options: ["<em>", "<i>", "<strong>", "<mark>"],
    correctIndex: 0,
    explanation: "<em> defines emphasized text."
  },
  {
    level: "easy",
    question: "Which tag defines strong importance?",
    options: ["<strong>", "<b>", "<em>", "<mark>"],
    correctIndex: 0,
    explanation: "<strong> shows strong importance."
  },
  {
    level: "easy",
    question: "Which tag defines horizontal rule?",
    options: ["<hr>", "<line>", "<br>", "<rule>"],
    correctIndex: 0,
    explanation: "<hr> creates a horizontal line."
  },

  // =======================
  // MEDIUM (13 QUESTIONS)
  // =======================
  {
    level: "medium",
    question: "Which attribute specifies link destination?",
    options: ["href", "src", "path", "link"],
    correctIndex: 0,
    explanation: "href specifies the URL."
  },
  {
    level: "medium",
    question: "Which tag defines a table?",
    options: ["<table>", "<tr>", "<td>", "<th>"],
    correctIndex: 0,
    explanation: "<table> defines a table."
  },
  {
    level: "medium",
    question: "Which tag defines a table row?",
    options: ["<tr>", "<td>", "<th>", "<row>"],
    correctIndex: 0,
    explanation: "<tr> defines a table row."
  },
  {
    level: "medium",
    question: "Which tag defines table data?",
    options: ["<td>", "<tr>", "<th>", "<data>"],
    correctIndex: 0,
    explanation: "<td> defines table cell."
  },
  {
    level: "medium",
    question: "Which input type hides typed characters?",
    options: ["password", "text", "hidden", "secure"],
    correctIndex: 0,
    explanation: "Password input hides characters."
  },
  {
    level: "medium",
    question: "Which tag defines navigation links?",
    options: ["<nav>", "<menu>", "<header>", "<links>"],
    correctIndex: 0,
    explanation: "<nav> contains navigation links."
  },
  {
    level: "medium",
    question: "Which attribute shows tooltip text?",
    options: ["title", "alt", "id", "class"],
    correctIndex: 0,
    explanation: "title shows tooltip on hover."
  },
  {
    level: "medium",
    question: "Which tag groups form fields?",
    options: ["<fieldset>", "<form>", "<group>", "<section>"],
    correctIndex: 0,
    explanation: "<fieldset> groups form fields."
  },
  {
    level: "medium",
    question: "Which tag defines a dropdown list?",
    options: ["<select>", "<option>", "<list>", "<dropdown>"],
    correctIndex: 0,
    explanation: "<select> creates dropdown."
  },
  {
    level: "medium",
    question: "Which tag defines an option in dropdown?",
    options: ["<option>", "<select>", "<item>", "<list>"],
    correctIndex: 0,
    explanation: "<option> defines dropdown option."
  },
  {
    level: "medium",
    question: "Which tag defines a label for input?",
    options: ["<label>", "<name>", "<input>", "<tag>"],
    correctIndex: 0,
    explanation: "<label> defines input label."
  },
  {
    level: "medium",
    question: "Which tag defines metadata?",
    options: ["<meta>", "<head>", "<title>", "<link>"],
    correctIndex: 0,
    explanation: "<meta> defines metadata."
  },
  {
    level: "medium",
    question: "Which tag defines document title?",
    options: ["<title>", "<meta>", "<head>", "<name>"],
    correctIndex: 0,
    explanation: "<title> defines page title."
  },

  // =======================
  // HARD (13 QUESTIONS)
  // =======================
  {
    level: "hard",
    question: "Which tag embeds another webpage?",
    options: ["<iframe>", "<frame>", "<embed>", "<object>"],
    correctIndex: 0,
    explanation: "<iframe> embeds another webpage."
  },
  {
    level: "hard",
    question: "Which element represents independent content?",
    options: ["<article>", "<div>", "<section>", "<aside>"],
    correctIndex: 0,
    explanation: "<article> is self-contained content."
  },
  {
    level: "hard",
    question: "Which attribute defines character encoding?",
    options: ["charset", "lang", "type", "encoding"],
    correctIndex: 0,
    explanation: "charset defines encoding."
  },
  {
    level: "hard",
    question: "Which tag defines date and time?",
    options: ["<time>", "<date>", "<clock>", "<datetime>"],
    correctIndex: 0,
    explanation: "<time> defines date and time."
  },
  {
    level: "hard",
    question: "Which element defines footer section?",
    options: ["<footer>", "<bottom>", "<end>", "<section>"],
    correctIndex: 0,
    explanation: "<footer> defines footer."
  },
  {
    level: "hard",
    question: "Which tag defines header section?",
    options: ["<header>", "<top>", "<head>", "<section>"],
    correctIndex: 0,
    explanation: "<header> defines header."
  },
  {
    level: "hard",
    question: "Which tag defines sidebar content?",
    options: ["<aside>", "<section>", "<div>", "<nav>"],
    correctIndex: 0,
    explanation: "<aside> defines sidebar content."
  },
  {
    level: "hard",
    question: "Which tag embeds multimedia?",
    options: ["<video>", "<media>", "<movie>", "<embed>"],
    correctIndex: 0,
    explanation: "<video> embeds video."
  },
  {
    level: "hard",
    question: "Which input type selects color?",
    options: ["color", "text", "range", "picker"],
    correctIndex: 0,
    explanation: "color input selects color."
  },
  {
    level: "hard",
    question: "Which input type selects date?",
    options: ["date", "time", "calendar", "day"],
    correctIndex: 0,
    explanation: "date input selects date."
  },
  {
    level: "hard",
    question: "Which tag defines progress bar?",
    options: ["<progress>", "<range>", "<meter>", "<bar>"],
    correctIndex: 0,
    explanation: "<progress> shows progress."
  },
  {
    level: "hard",
    question: "Which tag defines measurement?",
    options: ["<meter>", "<progress>", "<range>", "<bar>"],
    correctIndex: 0,
    explanation: "<meter> defines measurement."
  },
  {
    level: "hard",
    question: "Which method sends form data securely?",
    options: ["POST", "GET", "SEND", "SECURE"],
    correctIndex: 0,
    explanation: "POST sends data securely."
  }

];
