const htmlQuestions = [

/* =====================
   BASIC (1–20)
===================== */

{
  question: "What does HTML stand for?",
  options: [
    "Hyper Text Markup Language",
    "High Text Machine Language",
    "Hyperlinks Text Mark Language",
    "Home Tool Markup Language"
  ],
  correctIndex: 0,
  explanation: "HTML stands for Hyper Text Markup Language."
},
{
  question: "Which tag is used to create a hyperlink?",
  options: ["<a>", "<link>", "<href>", "<url>"],
  correctIndex: 0,
  explanation: "<a> tag is used to create hyperlinks."
},
{
  question: "Which tag is used to insert an image?",
  options: ["<img>", "<image>", "<src>", "<pic>"],
  correctIndex: 0,
  explanation: "<img> tag is used to insert images."
},
{
  question: "Which HTML tag is used for the largest heading?",
  options: ["<h1>", "<h6>", "<head>", "<heading>"],
  correctIndex: 0,
  explanation: "<h1> defines the largest heading."
},
{
  question: "Which tag is used to create a paragraph?",
  options: ["<p>", "<para>", "<text>", "<pg>"],
  correctIndex: 0,
  explanation: "<p> tag defines a paragraph."
},
{
  question: "Which tag creates a line break?",
  options: ["<br>", "<lb>", "<break>", "<hr>"],
  correctIndex: 0,
  explanation: "<br> inserts a line break."
},
{
  question: "Which tag is used to create an unordered list?",
  options: ["<ul>", "<ol>", "<li>", "<list>"],
  correctIndex: 0,
  explanation: "<ul> creates an unordered list."
},
{
  question: "Which tag defines a list item?",
  options: ["<li>", "<ul>", "<ol>", "<list>"],
  correctIndex: 0,
  explanation: "<li> defines a list item."
},
{
  question: "Which attribute specifies the image source?",
  options: ["src", "href", "alt", "path"],
  correctIndex: 0,
  explanation: "src specifies the image source."
},
{
  question: "Which attribute provides alternate text for images?",
  options: ["alt", "src", "title", "id"],
  correctIndex: 0,
  explanation: "alt provides alternative text."
},
{
  question: "Which tag is used to create a table?",
  options: ["<table>", "<tr>", "<td>", "<th>"],
  correctIndex: 0,
  explanation: "<table> defines a table."
},
{
  question: "Which tag defines a table row?",
  options: ["<tr>", "<td>", "<th>", "<row>"],
  correctIndex: 0,
  explanation: "<tr> defines a table row."
},
{
  question: "Which tag defines table data?",
  options: ["<td>", "<tr>", "<th>", "<data>"],
  correctIndex: 0,
  explanation: "<td> defines table data."
},
{
  question: "Which tag is used to create a form?",
  options: ["<form>", "<input>", "<button>", "<fieldset>"],
  correctIndex: 0,
  explanation: "<form> collects user input."
},
{
  question: "Which input type is used for passwords?",
  options: ["password", "text", "secure", "hidden"],
  correctIndex: 0,
  explanation: "password masks user input."
},
{
  question: "Which tag defines emphasized text?",
  options: ["<em>", "<i>", "<strong>", "<mark>"],
  correctIndex: 0,
  explanation: "<em> represents emphasized text."
},
{
  question: "Which tag defines strong importance?",
  options: ["<strong>", "<b>", "<em>", "<mark>"],
  correctIndex: 0,
  explanation: "<strong> indicates strong importance."
},
{
  question: "Which tag is used to create a button?",
  options: ["<button>", "<input>", "<click>", "<btn>"],
  correctIndex: 0,
  explanation: "<button> creates a clickable button."
},
{
  question: "Which tag defines a horizontal line?",
  options: ["<hr>", "<line>", "<br>", "<divider>"],
  correctIndex: 0,
  explanation: "<hr> defines a horizontal rule."
},
{
  question: "Which attribute specifies a unique identifier?",
  options: ["id", "class", "name", "key"],
  correctIndex: 0,
  explanation: "id uniquely identifies an element."
},

/* =====================
   INTERMEDIATE (21–40)
===================== */

{
  question: "Which attribute specifies the URL in a link?",
  options: ["href", "src", "link", "path"],
  correctIndex: 0,
  explanation: "href specifies the destination URL."
},
{
  question: "Which tag is used for navigation links?",
  options: ["<nav>", "<menu>", "<header>", "<links>"],
  correctIndex: 0,
  explanation: "<nav> defines navigation links."
},
{
  question: "Which tag groups related form fields?",
  options: ["<fieldset>", "<form>", "<group>", "<section>"],
  correctIndex: 0,
  explanation: "<fieldset> groups form elements."
},
{
  question: "Which attribute makes input mandatory?",
  options: ["required", "validate", "must", "important"],
  correctIndex: 0,
  explanation: "required makes input mandatory."
},
{
  question: "Which tag defines table headers?",
  options: ["<th>", "<td>", "<tr>", "<header>"],
  correctIndex: 0,
  explanation: "<th> defines table headers."
},
{
  question: "Which tag defines self-contained content?",
  options: ["<article>", "<section>", "<div>", "<span>"],
  correctIndex: 0,
  explanation: "<article> represents independent content."
},
{
  question: "Which tag defines content aside from main content?",
  options: ["<aside>", "<section>", "<div>", "<extra>"],
  correctIndex: 0,
  explanation: "<aside> defines side content."
},
{
  question: "Which tag is used to embed audio?",
  options: ["<audio>", "<sound>", "<media>", "<mp3>"],
  correctIndex: 0,
  explanation: "<audio> embeds audio content."
},
{
  question: "Which tag is used to embed video?",
  options: ["<video>", "<media>", "<movie>", "<mp4>"],
  correctIndex: 0,
  explanation: "<video> embeds video content."
},
{
  question: "Which tag embeds another webpage?",
  options: ["<iframe>", "<frame>", "<object>", "<embed>"],
  correctIndex: 0,
  explanation: "<iframe> embeds another webpage."
},
{
  question: "Which attribute opens a link in a new tab?",
  options: ["target='_blank'", "newtab", "open", "blank"],
  correctIndex: 0,
  explanation: "target='_blank' opens a new tab."
},
{
  question: "Which tag defines footer content?",
  options: ["<footer>", "<bottom>", "<end>", "<section>"],
  correctIndex: 0,
  explanation: "<footer> defines footer content."
},
{
  question: "Which tag defines header content?",
  options: ["<header>", "<top>", "<head>", "<section>"],
  correctIndex: 0,
  explanation: "<header> defines header content."
},
{
  question: "Which attribute specifies character encoding?",
  options: ["charset", "lang", "type", "encoding"],
  correctIndex: 0,
  explanation: "charset defines character encoding."
},
{
  question: "Which tag is semantic?",
  options: ["<main>", "<div>", "<span>", "<b>"],
  correctIndex: 0,
  explanation: "<main> is a semantic tag."
},
{
  question: "Which tag groups inline elements?",
  options: ["<span>", "<div>", "<section>", "<group>"],
  correctIndex: 0,
  explanation: "<span> groups inline elements."
},
{
  question: "Which attribute provides tooltip text?",
  options: ["title", "alt", "hover", "info"],
  correctIndex: 0,
  explanation: "title shows tooltip text."
},
{
  question: "Which tag defines time/date?",
  options: ["<time>", "<date>", "<clock>", "<datetime>"],
  correctIndex: 0,
  explanation: "<time> represents date/time."
},
{
  question: "Which tag defines progress?",
  options: ["<progress>", "<bar>", "<meter>", "<load>"],
  correctIndex: 0,
  explanation: "<progress> shows task progress."
},
{
  question: "Which tag defines measurement?",
  options: ["<meter>", "<progress>", "<scale>", "<value>"],
  correctIndex: 0,
  explanation: "<meter> represents a scalar measurement."
}

];
