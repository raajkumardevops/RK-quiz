const htmlQuestions = [
{
id: 1,
level: "easy",
question: "What does HTML stand for?",
options: [
"HyperText Markup Language",
"HighText Machine Language",
"Hyperlink and Text Markup Language",
"Home Tool Markup Language"
],
correctIndex: 0,
explanation: "HTML stands for HyperText Markup Language and is used to structure content on the web."
},
{
id: 2,
level: "easy",
question: "Which HTML tag is used to create a paragraph?",
options: ["<p>", "<para>", "<paragraph>", "<text>"],
correctIndex: 0,
explanation: "The <p> tag defines a paragraph in HTML documents."
},
{
id: 3,
level: "easy",
question: "Which tag is used to create a main heading?",
options: ["<h1>", "<head>", "<header>", "<title>"],
correctIndex: 0,
explanation: "The <h1> tag represents the most important heading in HTML."
},
{
id: 4,
level: "easy",
question: "Which HTML tag is used to display an image?",
options: ["<img>", "<image>", "<pic>", "<src>"],
correctIndex: 0,
explanation: "The <img> tag is used to embed images in an HTML page."
},
{
id: 5,
level: "easy",
question: "Which attribute specifies the image source in an <img> tag?",
options: ["src", "href", "alt", "path"],
correctIndex: 0,
explanation: "The src attribute defines the path or URL of the image file."
},
{
id: 6,
level: "easy",
question: "Which tag is used to create a hyperlink?",
options: ["<a>", "<link>", "<href>", "<url>"],
correctIndex: 0,
explanation: "The <a> tag is used to create hyperlinks in HTML."
},
{
id: 7,
level: "easy",
question: "What is the correct HTML tag for a line break?",
options: ["<br>", "<lb>", "<break>", "<line>"],
correctIndex: 0,
explanation: "The <br> tag inserts a single line break in text."
},
{
id: 8,
level: "easy",
question: "Which tag is used to create an unordered list?",
options: ["<ul>", "<ol>", "<li>", "<list>"],
correctIndex: 0,
explanation: "The <ul> tag defines an unordered (bulleted) list."
},
{
id: 9,
level: "easy",
question: "Which tag represents a list item?",
options: ["<li>", "<item>", "<ul>", "<list-item>"],
correctIndex: 0,
explanation: "The <li> tag is used to define individual list items."
},
{
id: 10,
level: "easy",
question: "Which HTML tag is used to make text bold?",
options: ["<b>", "<strong>", "<bold>", "<em>"],
correctIndex: 0,
explanation: "The <b> tag visually bolds text without adding semantic importance."
},

{
id: 11,
level: "medium",
question: "Which HTML attribute provides alternative text for an image?",
options: ["alt", "title", "name", "desc"],
correctIndex: 0,
explanation: "The alt attribute provides descriptive text when an image cannot be displayed."
},
{
id: 12,
level: "medium",
question: "What is the purpose of the <head> tag?",
options: [
"To contain metadata and links",
"To display visible content",
"To create headers",
"To store images"
],
correctIndex: 0,
explanation: "The <head> tag contains metadata such as title, styles, and scripts."
},
{
id: 13,
level: "medium",
question: "Which tag is used to define a table row?",
options: ["<tr>", "<td>", "<th>", "<row>"],
correctIndex: 0,
explanation: "The <tr> tag defines a row in an HTML table."
},
{
id: 14,
level: "medium",
question: "Which input type is used for entering an email address?",
options: ["email", "text", "mail", "address"],
correctIndex: 0,
explanation: "The email input type enables email-specific validation."
},
{
id: 15,
level: "medium",
question: "What does the <label> tag do in a form?",
options: [
"Associates text with form controls",
"Submits the form",
"Validates input",
"Groups fields"
],
correctIndex: 0,
explanation: "The <label> tag improves accessibility by linking text to form inputs."
},
{
id: 16,
level: "medium",
question: "Which tag is used to embed a video?",
options: ["<video>", "<media>", "<movie>", "<mp4>"],
correctIndex: 0,
explanation: "The <video> tag embeds video content directly into the page."
},
{
id: 17,
level: "medium",
question: "Which attribute opens a link in a new tab?",
options: ["target=_blank", "newtab", "open=new", "rel=new"],
correctIndex: 0,
explanation: "target=_blank opens the linked document in a new browser tab."
},
{
id: 18,
level: "medium",
question: "What is the default display value of a <div> element?",
options: ["block", "inline", "inline-block", "none"],
correctIndex: 0,
explanation: "The <div> element is a block-level element by default."
},
{
id: 19,
level: "medium",
question: "Which tag is used to define navigation links?",
options: ["<nav>", "<menu>", "<section>", "<links>"],
correctIndex: 0,
explanation: "The <nav> tag represents a section containing navigation links."
},
{
id: 20,
level: "medium",
question: "Which HTML tag represents emphasized text?",
options: ["<em>", "<i>", "<strong>", "<b>"],
correctIndex: 0,
explanation: "The <em> tag adds semantic emphasis to text."
},

{
id: 21,
level: "hard",
question: "What is the primary purpose of semantic HTML?",
options: [
"To improve meaning and accessibility",
"To reduce file size",
"To add styles",
"To execute scripts"
],
correctIndex: 0,
explanation: "Semantic HTML improves structure, accessibility, and SEO by conveying meaning."
},
{
id: 22,
level: "hard",
question: "Which attribute is used with <form> to define submission method?",
options: ["method", "action", "type", "submit"],
correctIndex: 0,
explanation: "The method attribute defines how form data is sent, such as GET or POST."
},
{
id: 23,
level: "hard",
question: "Which HTML5 tag is used to define independent content?",
options: ["<article>", "<section>", "<aside>", "<div>"],
correctIndex: 0,
explanation: "The <article> tag represents self-contained, reusable content."
},
{
id: 24,
level: "hard",
question: "What is the role of the <meta charset=UTF-8> tag?",
options: [
"Defines character encoding",
"Sets viewport size",
"Links external files",
"Adds keywords"
],
correctIndex: 0,
explanation: "It ensures correct rendering of characters by defining encoding."
},
{
id: 25,
level: "hard",
question: "Which tag is best suited for marking up time-related data?",
options: ["<time>", "<date>", "<span>", "<meta>"],
correctIndex: 0,
explanation: "The <time> tag represents dates or times in a machine-readable format."
},
{
id: 26,
level: "hard",
question: "Which attribute improves form accessibility by describing inputs?",
options: ["aria-label", "placeholder", "name", "value"],
correctIndex: 0,
explanation: "aria-label provides accessible names for assistive technologies."
},
{
id: 27,
level: "hard",
question: "What is the purpose of the <template> tag?",
options: [
"To hold reusable HTML not rendered immediately",
"To style components",
"To execute scripts",
"To load data"
],
correctIndex: 0,
explanation: "The <template> tag stores HTML that can be cloned using JavaScript."
},
{
id: 28,
level: "hard",
question: "Which tag is used for scalable vector graphics?",
options: ["<svg>", "<canvas>", "<vector>", "<graphic>"],
correctIndex: 0,
explanation: "The <svg> tag defines scalable vector-based graphics."
},
{
id: 29,
level: "hard",
question: "What does the 'defer' attribute do in a script tag?",
options: [
"Delays script execution until HTML parsing completes",
"Runs script immediately",
"Loads script asynchronously",
"Prevents script loading"
],
correctIndex: 0,
explanation: "defer ensures scripts execute after the document has been parsed."
},
{
id: 30,
level: "hard",
question: "Which HTML element is used as a container for external applications?",
options: ["<iframe>", "<embed>", "<object>", "<external>"],
correctIndex: 0,
explanation: "The <iframe> tag embeds another HTML page within the current page."
},
{
id: 31,
level: "easy",
question: "Which HTML tag is used to display italic text?",
options: ["<i>", "<em>", "<italic>", "<it>"],
correctIndex: 0,
explanation: "The <i> tag is used to visually display text in italic style without semantic emphasis."
},
{
id: 32,
level: "easy",
question: "Which tag is used to create a checkbox in a form?",
options: [
"<input type=checkbox>",
"<checkbox>",
"<check>",
"<input type=check>"
],
correctIndex: 0,
explanation: "A checkbox is created using the input tag with type set to checkbox."
},
{
id: 33,
level: "easy",
question: "Which HTML element defines the document title shown in the browser tab?",
options: ["<title>", "<head>", "<meta>", "<header>"],
correctIndex: 0,
explanation: "The <title> tag defines the title of the document displayed in the browser tab."
},
{
id: 34,
level: "easy",
question: "Which tag is used to group related form elements?",
options: ["<fieldset>", "<group>", "<formgroup>", "<section>"],
correctIndex: 0,
explanation: "The <fieldset> tag groups related form controls and labels together."
},
{
id: 35,
level: "easy",
question: "Which attribute is required for an input field to be mandatory?",
options: ["required", "validate", "mandatory", "must"],
correctIndex: 0,
explanation: "The required attribute ensures the input must be filled before form submission."
},
{
id: 36,
level: "medium",
question: "Which HTML tag is used to define a footer for a document or section?",
options: ["<footer>", "<bottom>", "<section-footer>", "<end>"],
correctIndex: 0,
explanation: "The <footer> tag represents footer content for a section or page."
},
{
id: 37,
level: "medium",
question: "What is the purpose of the <aside> element?",
options: [
"To hold content indirectly related to the main content",
"To display advertisements only",
"To create navigation menus",
"To wrap main content"
],
correctIndex: 0,
explanation: "The <aside> element contains content related but not central to the main content."
},
{
id: 38,
level: "medium",
question: "Which attribute uniquely identifies an HTML element?",
options: ["id", "class", "name", "key"],
correctIndex: 0,
explanation: "The id attribute uniquely identifies a single element within a document."
},
{
id: 39,
level: "medium",
question: "Which tag is used to mark highlighted or important text?",
options: ["<mark>", "<highlight>", "<strong>", "<span>"],
correctIndex: 0,
explanation: "The <mark> tag highlights text for reference or emphasis."
},
{
id: 40,
level: "medium",
question: "Which input attribute limits the maximum number of characters?",
options: ["maxlength", "max", "limit", "length"],
correctIndex: 0,
explanation: "The maxlength attribute restricts the maximum number of characters allowed."
},
{
id: 41,
level: "medium",
question: "Which tag is used to define table header cells?",
options: ["<th>", "<td>", "<thead>", "<header>"],
correctIndex: 0,
explanation: "The <th> tag defines header cells that describe columns or rows."
},
{
id: 42,
level: "medium",
question: "What does the <progress> element represent?",
options: [
"Completion progress of a task",
"Loading animation",
"Download speed",
"User activity"
],
correctIndex: 0,
explanation: "The <progress> element represents the completion progress of a task."
},
{
id: 43,
level: "hard",
question: "Which attribute is used to associate a label with a form input?",
options: ["for", "bind", "target", "ref"],
correctIndex: 0,
explanation: "The for attribute links a label to an input using the input's id."
},
{
id: 44,
level: "hard",
question: "What is the function of the <noscript> tag?",
options: [
"Displays content when JavaScript is disabled",
"Blocks script execution",
"Loads fallback scripts",
"Enables scripting"
],
correctIndex: 0,
explanation: "The <noscript> tag provides alternate content when JavaScript is not supported."
},
{
id: 45,
level: "hard",
question: "Which HTML element defines machine-readable metadata?",
options: ["<meta>", "<data>", "<info>", "<head>"],
correctIndex: 0,
explanation: "The <meta> tag defines metadata such as charset, description, and viewport."
},
{
id: 46,
level: "hard",
question: "What does the contenteditable attribute enable?",
options: [
"Allows users to edit content directly",
"Loads external content",
"Enables form validation",
"Locks content"
],
correctIndex: 0,
explanation: "contenteditable allows elements to be edited by the user in the browser."
},
{
id: 47,
level: "hard",
question: "Which HTML element is best for representing numerical measurements?",
options: ["<meter>", "<progress>", "<range>", "<value>"],
correctIndex: 0,
explanation: "The <meter> tag represents scalar measurements within a known range."
},
{
id: 48,
level: "hard",
question: "Which attribute prevents an input field from being modified?",
options: ["readonly", "disabled", "locked", "static"],
correctIndex: 0,
explanation: "readonly prevents editing while still allowing the value to be submitted."
},
{
id: 49,
level: "hard",
question: "What is the purpose of the <base> tag?",
options: [
"Defines a base URL for relative links",
"Sets default styles",
"Loads scripts",
"Defines root element"
],
correctIndex: 0,
explanation: "The <base> tag specifies a base URL for all relative URLs in the document."
},
{
id: 50,
level: "hard",
question: "Which HTML feature improves accessibility for screen readers?",
options: [
"Semantic elements",
"Inline styles",
"Deprecated tags",
"Table layouts"
],
correctIndex: 0,
explanation: "Semantic elements convey meaning and improve accessibility for assistive technologies."
},
{
id: 51,
level: "easy",
question: "Which tag is used to create an ordered list?",
options: ["<ol>", "<ul>", "<li>", "<list>"],
correctIndex: 0,
explanation: "The <ol> tag creates an ordered or numbered list."
},
{
id: 52,
level: "easy",
question: "Which tag is used to display preformatted text?",
options: ["<pre>", "<code>", "<format>", "<text>"],
correctIndex: 0,
explanation: "The <pre> tag preserves spaces and line breaks in the text."
},
{
id: 53,
level: "medium",
question: "Which attribute specifies inline CSS styles?",
options: ["style", "css", "design", "format"],
correctIndex: 0,
explanation: "The style attribute allows applying CSS directly to an HTML element."
},
{
id: 54,
level: "medium",
question: "Which HTML tag is used to define a section of content?",
options: ["<section>", "<div>", "<article>", "<main>"],
correctIndex: 0,
explanation: "The <section> tag groups related content with a thematic purpose."
},
{
id: 55,
level: "medium",
question: "Which attribute specifies a tooltip text?",
options: ["title", "hint", "tooltip", "info"],
correctIndex: 0,
explanation: "The title attribute displays tooltip text when hovering over an element."
},
{
id: 56,
level: "hard",
question: "Which HTML tag defines the main content of a document?",
options: ["<main>", "<body>", "<section>", "<content>"],
correctIndex: 0,
explanation: "The <main> tag represents the dominant content of the document."
},
{
id: 57,
level: "hard",
question: "What is the purpose of the sandbox attribute in an iframe?",
options: [
"Restricts actions within the iframe",
"Improves loading speed",
"Applies styles",
"Allows script execution"
],
correctIndex: 0,
explanation: "The sandbox attribute applies security restrictions to iframe content."
},
{
id: 58,
level: "hard",
question: "Which tag is used to define keyboard input?",
options: ["<kbd>", "<key>", "<input>", "<code>"],
correctIndex: 0,
explanation: "The <kbd> tag represents user keyboard input."
},
{
id: 59,
level: "hard",
question: "Which attribute specifies the relationship between the current and linked document?",
options: ["rel", "type", "link", "connect"],
correctIndex: 0,
explanation: "The rel attribute defines the relationship between the current document and the linked resource."
},
{
id: 60,
level: "hard",
question: "Which HTML element is used to embed audio content?",
options: ["<audio>", "<sound>", "<media>", "<mp3>"],
correctIndex: 0,
explanation: "The <audio> tag embeds sound content such as music or recordings."
},
{
id: 61,
level: "easy",
question: "Which HTML tag is used to define the body of a webpage?",
options: ["<body>", "<main>", "<content>", "<page>"],
correctIndex: 0,
explanation: "The <body> tag contains all the visible content of an HTML document."
},
{
id: 62,
level: "easy",
question: "Which tag is used to create a horizontal line?",
options: ["<hr>", "<line>", "<break>", "<divider>"],
correctIndex: 0,
explanation: "The <hr> tag represents a thematic break and displays a horizontal rule."
},
{
id: 63,
level: "easy",
question: "Which HTML element is used to display computer code inline?",
options: ["<code>", "<pre>", "<kbd>", "<samp>"],
correctIndex: 0,
explanation: "The <code> tag is used to represent a fragment of computer code."
},
{
id: 64,
level: "easy",
question: "Which attribute specifies the destination URL in a hyperlink?",
options: ["href", "src", "link", "url"],
correctIndex: 0,
explanation: "The href attribute defines the URL the link points to."
},
{
id: 65,
level: "easy",
question: "Which tag is used to create a drop-down list?",
options: ["<select>", "<dropdown>", "<optionlist>", "<menu>"],
correctIndex: 0,
explanation: "The <select> tag creates a drop-down list in forms."
},
{
id: 66,
level: "easy",
question: "Which tag is used to define an option inside a drop-down list?",
options: ["<option>", "<item>", "<select-item>", "<choice>"],
correctIndex: 0,
explanation: "The <option> tag defines each selectable option in a <select> element."
},
{
id: 67,
level: "easy",
question: "Which HTML tag is used to define a caption for a table?",
options: ["<caption>", "<title>", "<thead>", "<label>"],
correctIndex: 0,
explanation: "The <caption> tag provides a title or explanation for a table."
},
{
id: 68,
level: "easy",
question: "Which attribute disables an input field?",
options: ["disabled", "readonly", "blocked", "inactive"],
correctIndex: 0,
explanation: "The disabled attribute prevents user interaction and submission."
},
{
id: 69,
level: "easy",
question: "Which tag is used to define small print text?",
options: ["<small>", "<tiny>", "<sub>", "<span>"],
correctIndex: 0,
explanation: "The <small> tag represents side comments or fine print."
},
{
id: 70,
level: "easy",
question: "Which tag is used to underline text?",
options: ["<u>", "<underline>", "<em>", "<mark>"],
correctIndex: 0,
explanation: "The <u> tag underlines text, often used for annotations."
},

{
id: 71,
level: "medium",
question: "Which HTML element groups table header content?",
options: ["<thead>", "<tbody>", "<tr>", "<th>"],
correctIndex: 0,
explanation: "The <thead> tag groups header rows in a table."
},
{
id: 72,
level: "medium",
question: "Which element groups the main body rows of a table?",
options: ["<tbody>", "<thead>", "<tfoot>", "<group>"],
correctIndex: 0,
explanation: "The <tbody> tag groups the main content rows of a table."
},
{
id: 73,
level: "medium",
question: "Which element defines footer rows in a table?",
options: ["<tfoot>", "<footer>", "<tr>", "<end>"],
correctIndex: 0,
explanation: "The <tfoot> tag groups footer content in a table."
},
{
id: 74,
level: "medium",
question: "Which attribute automatically focuses an input field on page load?",
options: ["autofocus", "focus", "active", "default"],
correctIndex: 0,
explanation: "The autofocus attribute places the cursor in the input automatically."
},
{
id: 75,
level: "medium",
question: "Which input type hides entered characters?",
options: ["password", "hidden", "secure", "private"],
correctIndex: 0,
explanation: "The password input type masks entered characters for privacy."
},
{
id: 76,
level: "medium",
question: "Which HTML tag represents emphasized importance?",
options: ["<strong>", "<b>", "<mark>", "<i>"],
correctIndex: 0,
explanation: "The <strong> tag conveys strong importance semantically."
},
{
id: 77,
level: "medium",
question: "Which attribute specifies accepted file types in file input?",
options: ["accept", "type", "format", "files"],
correctIndex: 0,
explanation: "The accept attribute restricts selectable file types."
},
{
id: 78,
level: "medium",
question: "Which HTML element represents self-contained media content?",
options: ["<figure>", "<media>", "<img>", "<section>"],
correctIndex: 0,
explanation: "The <figure> tag wraps media with optional captions."
},
{
id: 79,
level: "medium",
question: "Which tag provides a caption for a figure element?",
options: ["<figcaption>", "<caption>", "<label>", "<title>"],
correctIndex: 0,
explanation: "The <figcaption> tag describes the content of a <figure>."
},
{
id: 80,
level: "medium",
question: "Which input type allows selecting a date?",
options: ["date", "calendar", "datetime", "day"],
correctIndex: 0,
explanation: "The date input type provides a date picker UI."
},

{
id: 81,
level: "hard",
question: "Which attribute controls browser autocomplete behavior?",
options: ["autocomplete", "remember", "autofill", "history"],
correctIndex: 0,
explanation: "The autocomplete attribute enables or disables form autofill."
},
{
id: 82,
level: "hard",
question: "Which HTML element represents a scalar value within a known range?",
options: ["<meter>", "<progress>", "<range>", "<value>"],
correctIndex: 0,
explanation: "The <meter> element represents measurements like disk usage or ratings."
},
{
id: 83,
level: "hard",
question: "Which attribute allows multiple file selection in file input?",
options: ["multiple", "many", "files", "multi"],
correctIndex: 0,
explanation: "The multiple attribute allows selecting more than one file."
},
{
id: 84,
level: "hard",
question: "Which HTML tag defines a clickable button?",
options: ["<button>", "<input>", "<btn>", "<click>"],
correctIndex: 0,
explanation: "The <button> tag creates a clickable button element."
},
{
id: 85,
level: "hard",
question: "Which attribute submits a form to a specific URL?",
options: ["action", "method", "target", "route"],
correctIndex: 0,
explanation: "The action attribute defines where form data is sent."
},
{
id: 86,
level: "hard",
question: "Which HTML element represents user input examples?",
options: ["<samp>", "<code>", "<kbd>", "<pre>"],
correctIndex: 0,
explanation: "The <samp> tag represents sample output from programs."
},
{
id: 87,
level: "hard",
question: "Which attribute defines the language of the document?",
options: ["lang", "language", "locale", "type"],
correctIndex: 0,
explanation: "The lang attribute specifies the primary language for accessibility."
},
{
id: 88,
level: "hard",
question: "Which HTML element defines a disclosure widget?",
options: ["<details>", "<summary>", "<dialog>", "<popup>"],
correctIndex: 0,
explanation: "The <details> element creates expandable disclosure content."
},
{
id: 89,
level: "hard",
question: "Which tag defines the visible heading of a details element?",
options: ["<summary>", "<title>", "<caption>", "<header>"],
correctIndex: 0,
explanation: "The <summary> tag provides a visible label for <details>."
},
{
id: 90,
level: "hard",
question: "Which attribute ensures an input value matches a regex pattern?",
options: ["pattern", "regex", "match", "validate"],
correctIndex: 0,
explanation: "The pattern attribute enforces regular expression validation."
},

{
id: 91,
level: "easy",
question: "Which tag is used to create a superscript text?",
options: ["<sup>", "<sub>", "<small>", "<top>"],
correctIndex: 0,
explanation: "The <sup> tag displays text as superscript."
},
{
id: 92,
level: "easy",
question: "Which tag is used to create a subscript text?",
options: ["<sub>", "<sup>", "<small>", "<down>"],
correctIndex: 0,
explanation: "The <sub> tag displays text as subscript."
},
{
id: 93,
level: "medium",
question: "Which attribute defines the visible width of an input field?",
options: ["size", "width", "length", "cols"],
correctIndex: 0,
explanation: "The size attribute sets the visible width of input fields."
},
{
id: 94,
level: "medium",
question: "Which tag is used to embed external content like PDFs?",
options: ["<embed>", "<iframe>", "<object>", "<external>"],
correctIndex: 0,
explanation: "The <embed> tag embeds external resources such as PDFs."
},
{
id: 95,
level: "medium",
question: "Which input type is used to select a color?",
options: ["color", "picker", "palette", "rgb"],
correctIndex: 0,
explanation: "The color input type provides a color picker interface."
},
{
id: 96,
level: "hard",
question: "Which attribute specifies the text direction of content?",
options: ["dir", "direction", "flow", "align"],
correctIndex: 0,
explanation: "The dir attribute controls text direction like ltr or rtl."
},
{
id: 97,
level: "hard",
question: "Which element represents dialog boxes or modals?",
options: ["<dialog>", "<modal>", "<popup>", "<window>"],
correctIndex: 0,
explanation: "The <dialog> element represents dialogs and modal windows."
},
{
id: 98,
level: "hard",
question: "Which attribute allows a dialog to be shown as modal?",
options: ["open", "modal", "active", "show"],
correctIndex: 0,
explanation: "The open attribute controls the visibility of a dialog."
},
{
id: 99,
level: "hard",
question: "Which HTML element defines ruby annotations?",
options: ["<ruby>", "<rt>", "<rp>", "<annotation>"],
correctIndex: 0,
explanation: "The <ruby> tag represents ruby annotations for East Asian typography."
},
{
id: 100,
level: "hard",
question: "Which tag defines the pronunciation of ruby text?",
options: ["<rt>", "<rp>", "<ruby>", "<phonetic>"],
correctIndex: 0,
explanation: "The <rt> tag defines the pronunciation text in ruby annotations."
},
{
id: 101,
level: "hard",
question: "Which tag provides fallback text for ruby annotations?",
options: ["<rp>", "<rt>", "<ruby>", "<alt>"],
correctIndex: 0,
explanation: "The <rp> tag provides fallback parentheses for unsupported browsers."
},
{
id: 102,
level: "medium",
question: "Which attribute defines minimum value for numeric input?",
options: ["min", "low", "start", "from"],
correctIndex: 0,
explanation: "The min attribute sets the minimum acceptable value."
},
{
id: 103,
level: "medium",
question: "Which attribute defines maximum value for numeric input?",
options: ["max", "high", "end", "to"],
correctIndex: 0,
explanation: "The max attribute sets the maximum acceptable value."
},
{
id: 104,
level: "medium",
question: "Which attribute defines increment steps for numeric input?",
options: ["step", "jump", "interval", "gap"],
correctIndex: 0,
explanation: "The step attribute controls allowed value intervals."
},
{
id: 105,
level: "easy",
question: "Which tag is used to strike through text?",
options: ["<del>", "<strike>", "<s>", "<remove>"],
correctIndex: 0,
explanation: "The <del> tag represents deleted or removed content."
},
{
id: 106,
level: "easy",
question: "Which tag is used to insert new content?",
options: ["<ins>", "<add>", "<new>", "<append>"],
correctIndex: 0,
explanation: "The <ins> tag represents inserted content."
},
{
id: 107,
level: "medium",
question: "Which HTML element defines contact information?",
options: ["<address>", "<contact>", "<info>", "<footer>"],
correctIndex: 0,
explanation: "The <address> tag represents contact information."
},
{
id: 108,
level: "medium",
question: "Which tag represents a thematic grouping of content?",
options: ["<section>", "<div>", "<group>", "<article>"],
correctIndex: 0,
explanation: "The <section> tag groups related thematic content."
},
{
id: 109,
level: "hard",
question: "Which attribute improves security for external links?",
options: ["rel=noopener", "secure", "sandbox", "protect"],
correctIndex: 0,
explanation: "rel=noopener prevents access to the window.opener object."
},
{
id: 110,
level: "hard",
question: "Which element represents variable names in math or programming?",
options: ["<var>", "<code>", "<kbd>", "<samp>"],
correctIndex: 0,
explanation: "The <var> tag represents variables in mathematical or programming contexts."
},
{
id: 111,
level: "easy",
question: "Which tag is used to display quoted text?",
options: ["<q>", "<quote>", "<blockquote>", "<cite>"],
correctIndex: 0,
explanation: "The <q> tag represents short inline quotations."
},
{
id: 112,
level: "medium",
question: "Which tag is used for long quotations?",
options: ["<blockquote>", "<q>", "<cite>", "<quote>"],
correctIndex: 0,
explanation: "The <blockquote> tag represents extended quotations."
},
{
id: 113,
level: "hard",
question: "Which attribute specifies referrer information for links?",
options: ["referrerpolicy", "ref", "policy", "origin"],
correctIndex: 0,
explanation: "The referrerpolicy attribute controls referrer information sent."
},
{
id: 114,
level: "medium",
question: "Which tag is used to define abbreviations?",
options: ["<abbr>", "<short>", "<acronym>", "<small>"],
correctIndex: 0,
explanation: "The <abbr> tag represents abbreviations with optional expansions."
},
{
id: 115,
level: "hard",
question: "Which HTML feature helps SEO by defining page structure?",
options: ["Semantic tags", "Inline styles", "Tables", "Frames"],
correctIndex: 0,
explanation: "Semantic tags improve SEO by providing meaningful structure."
},
{
id: 116,
level: "easy",
question: "Which tag is used to group inline elements?",
options: ["<span>", "<div>", "<group>", "<inline>"],
correctIndex: 0,
explanation: "The <span> tag groups inline elements without semantic meaning."
},
{
id: 117,
level: "medium",
question: "Which tag defines a description list?",
options: ["<dl>", "<ul>", "<ol>", "<list>"],
correctIndex: 0,
explanation: "The <dl> tag represents a description list."
},
{
id: 118,
level: "medium",
question: "Which tag defines a term in a description list?",
options: ["<dt>", "<dd>", "<li>", "<term>"],
correctIndex: 0,
explanation: "The <dt> tag defines a term name."
},
{
id: 119,
level: "medium",
question: "Which tag defines a description of a term?",
options: ["<dd>", "<dt>", "<desc>", "<li>"],
correctIndex: 0,
explanation: "The <dd> tag provides the description for a term."
},
{
id: 120,
level: "hard",
question: "Which HTML attribute allows lazy loading of images?",
options: ["loading=lazy", "defer", "async", "lazy"],
correctIndex: 0,
explanation: "loading=lazy defers image loading until needed."
},
{
id: 121,
level: "easy",
question: "Which HTML tag is used to define a header section for a page?",
options: ["<header>", "<head>", "<top>", "<section-header>"],
correctIndex: 0,
explanation: "The <header> tag represents introductory content or a set of navigational links."
},
{
id: 122,
level: "easy",
question: "Which tag is used to display text exactly as written including spaces?",
options: ["<pre>", "<code>", "<text>", "<format>"],
correctIndex: 0,
explanation: "The <pre> tag preserves whitespace and line breaks exactly as written."
},
{
id: 123,
level: "easy",
question: "Which attribute specifies an image description for screen readers?",
options: ["alt", "title", "desc", "aria"],
correctIndex: 0,
explanation: "The alt attribute provides descriptive text for images to assist accessibility tools."
},
{
id: 124,
level: "easy",
question: "Which tag is used to define a clickable image link?",
options: ["<a>", "<img>", "<link>", "<picture>"],
correctIndex: 0,
explanation: "Wrapping an image inside an <a> tag makes the image clickable."
},
{
id: 125,
level: "easy",
question: "Which tag is used to define emphasized text visually?",
options: ["<i>", "<em>", "<mark>", "<strong>"],
correctIndex: 0,
explanation: "The <i> tag is commonly used for visual emphasis such as italic text."
},
{
id: 126,
level: "easy",
question: "Which HTML tag defines the root element of a webpage?",
options: ["<html>", "<root>", "<document>", "<page>"],
correctIndex: 0,
explanation: "The <html> tag is the root element that wraps the entire HTML document."
},
{
id: 127,
level: "easy",
question: "Which tag is used to embed an image with multiple sources?",
options: ["<picture>", "<img>", "<source>", "<media>"],
correctIndex: 0,
explanation: "The <picture> tag allows multiple image sources for responsive images."
},
{
id: 128,
level: "easy",
question: "Which tag is used to define table data cells?",
options: ["<td>", "<tr>", "<th>", "<cell>"],
correctIndex: 0,
explanation: "The <td> tag defines standard data cells inside table rows."
},
{
id: 129,
level: "easy",
question: "Which attribute gives a hint inside an input field?",
options: ["placeholder", "title", "hint", "label"],
correctIndex: 0,
explanation: "The placeholder attribute shows hint text inside input fields."
},
{
id: 130,
level: "easy",
question: "Which tag is used to display emphasized deleted content?",
options: ["<del>", "<remove>", "<strike>", "<s>"],
correctIndex: 0,
explanation: "The <del> tag indicates text that has been removed from the document."
},

{
id: 131,
level: "medium",
question: "Which HTML tag is used to define a main navigation block?",
options: ["<nav>", "<menu>", "<header>", "<section>"],
correctIndex: 0,
explanation: "The <nav> tag is intended for grouping major navigation links."
},
{
id: 132,
level: "medium",
question: "Which element is used to group related options in a select menu?",
options: ["<optgroup>", "<group>", "<fieldset>", "<option>"],
correctIndex: 0,
explanation: "The <optgroup> tag groups related options inside a select element."
},
{
id: 133,
level: "medium",
question: "Which attribute defines whether an input field can be edited?",
options: ["readonly", "editable", "mutable", "enabled"],
correctIndex: 0,
explanation: "The readonly attribute prevents modification while allowing form submission."
},
{
id: 134,
level: "medium",
question: "Which tag represents content tangentially related to main content?",
options: ["<aside>", "<section>", "<article>", "<div>"],
correctIndex: 0,
explanation: "The <aside> tag contains secondary content such as sidebars."
},
{
id: 135,
level: "medium",
question: "Which attribute ensures a form input must match a specific format?",
options: ["pattern", "type", "format", "validate"],
correctIndex: 0,
explanation: "The pattern attribute enforces validation using regular expressions."
},
{
id: 136,
level: "medium",
question: "Which tag defines inline quotations?",
options: ["<q>", "<blockquote>", "<cite>", "<quote>"],
correctIndex: 0,
explanation: "The <q> tag is used for short inline quotations."
},
{
id: 137,
level: "medium",
question: "Which HTML tag defines machine-readable values?",
options: ["<data>", "<meta>", "<value>", "<info>"],
correctIndex: 0,
explanation: "The <data> tag links human-readable content with machine-readable values."
},
{
id: 138,
level: "medium",
question: "Which element defines expandable and collapsible content?",
options: ["<details>", "<dialog>", "<expand>", "<section>"],
correctIndex: 0,
explanation: "The <details> element allows users to toggle visibility of content."
},
{
id: 139,
level: "medium",
question: "Which attribute determines how a form is submitted?",
options: ["method", "action", "target", "submit"],
correctIndex: 0,
explanation: "The method attribute specifies GET or POST for form submission."
},
{
id: 140,
level: "medium",
question: "Which tag is used to embed scalable vector graphics inline?",
options: ["<svg>", "<canvas>", "<vector>", "<graphic>"],
correctIndex: 0,
explanation: "The <svg> tag embeds vector graphics directly in HTML."
},

{
id: 141,
level: "hard",
question: "Which attribute prevents an iframe from accessing parent content?",
options: ["sandbox", "secure", "isolated", "locked"],
correctIndex: 0,
explanation: "The sandbox attribute restricts iframe capabilities for security."
},
{
id: 142,
level: "hard",
question: "Which HTML element represents program output?",
options: ["<output>", "<samp>", "<code>", "<var>"],
correctIndex: 0,
explanation: "The <output> tag represents the result of a calculation or user action."
},
{
id: 143,
level: "hard",
question: "Which attribute improves performance by deferring script execution?",
options: ["defer", "async", "delay", "pause"],
correctIndex: 0,
explanation: "The defer attribute delays script execution until HTML parsing completes."
},
{
id: 144,
level: "hard",
question: "Which tag defines a modal dialog box?",
options: ["<dialog>", "<popup>", "<modal>", "<window>"],
correctIndex: 0,
explanation: "The <dialog> tag is used to create dialog boxes and modals."
},
{
id: 145,
level: "hard",
question: "Which attribute defines a fallback image source?",
options: ["srcset", "fallback", "backup", "alt-src"],
correctIndex: 0,
explanation: "The srcset attribute provides multiple image sources for different resolutions."
},
{
id: 146,
level: "hard",
question: "Which HTML element defines pronunciation annotations?",
options: ["<ruby>", "<rt>", "<rp>", "<phonetic>"],
correctIndex: 0,
explanation: "The <ruby> element is used for pronunciation guides in East Asian languages."
},
{
id: 147,
level: "hard",
question: "Which attribute specifies how links should be handled by the browser?",
options: ["target", "rel", "action", "mode"],
correctIndex: 0,
explanation: "The target attribute controls where the linked document opens."
},
{
id: 148,
level: "hard",
question: "Which HTML feature enhances accessibility for assistive technologies?",
options: ["ARIA attributes", "Inline CSS", "Deprecated tags", "Framesets"],
correctIndex: 0,
explanation: "ARIA attributes provide additional accessibility information to screen readers."
},
{
id: 149,
level: "hard",
question: "Which element defines a time-based value with machine readability?",
options: ["<time>", "<date>", "<meta>", "<data>"],
correctIndex: 0,
explanation: "The <time> element represents dates or times in a machine-readable format."
},
{
id: 150,
level: "hard",
question: "Which attribute prevents form submission if validation fails?",
options: ["required", "novalidate", "validate", "check"],
correctIndex: 0,
explanation: "The required attribute enforces validation before form submission."
},

{
id: 151,
level: "easy",
question: "Which tag is used to group block-level elements?",
options: ["<div>", "<span>", "<section>", "<group>"],
correctIndex: 0,
explanation: "The <div> tag is a generic container for block-level elements."
},
{
id: 152,
level: "easy",
question: "Which tag defines emphasized text semantically?",
options: ["<em>", "<i>", "<mark>", "<b>"],
correctIndex: 0,
explanation: "The <em> tag adds semantic emphasis to text."
},
{
id: 153,
level: "easy",
question: "Which tag is used to create a numbered list?",
options: ["<ol>", "<ul>", "<li>", "<list>"],
correctIndex: 0,
explanation: "The <ol> tag creates an ordered list."
},
{
id: 154,
level: "medium",
question: "Which tag is used to define metadata about the document?",
options: ["<meta>", "<info>", "<data>", "<head>"],
correctIndex: 0,
explanation: "The <meta> tag provides metadata such as charset and description."
},
{
id: 155,
level: "medium",
question: "Which attribute specifies a unique identifier for elements?",
options: ["id", "class", "name", "key"],
correctIndex: 0,
explanation: "The id attribute uniquely identifies an element within the document."
},
{
id: 156,
level: "medium",
question: "Which element defines a container for external HTML documents?",
options: ["<iframe>", "<embed>", "<object>", "<external>"],
correctIndex: 0,
explanation: "The <iframe> tag embeds another HTML page within the current page."
},
{
id: 157,
level: "hard",
question: "Which attribute improves security when opening external links?",
options: ["rel=noopener noreferrer", "secure", "sandbox", "safe"],
correctIndex: 0,
explanation: "rel=noopener noreferrer prevents access to the window.opener object."
},
{
id: 158,
level: "hard",
question: "Which HTML element defines a measurement within a range?",
options: ["<meter>", "<progress>", "<value>", "<range>"],
correctIndex: 0,
explanation: "The <meter> element represents scalar measurements."
},
{
id: 159,
level: "hard",
question: "Which attribute enables lazy loading for iframes?",
options: ["loading=lazy", "defer", "async", "delay"],
correctIndex: 0,
explanation: "loading=lazy delays iframe loading until needed."
},
{
id: 160,
level: "hard",
question: "Which HTML element represents keyboard input?",
options: ["<kbd>", "<key>", "<input>", "<code>"],
correctIndex: 0,
explanation: "The <kbd> tag represents user keyboard input."
},
{
id: 161,
level: "easy",
question: "Which tag is used to show sample output?",
options: ["<samp>", "<code>", "<output>", "<kbd>"],
correctIndex: 0,
explanation: "The <samp> tag represents sample output from programs."
},
{
id: 162,
level: "medium",
question: "Which element defines a group of related form controls?",
options: ["<fieldset>", "<group>", "<section>", "<formgroup>"],
correctIndex: 0,
explanation: "The <fieldset> tag groups related form elements together."
},
{
id: 163,
level: "medium",
question: "Which attribute specifies the language of the document?",
options: ["lang", "language", "locale", "region"],
correctIndex: 0,
explanation: "The lang attribute defines the primary language for accessibility."
},
{
id: 164,
level: "hard",
question: "Which element represents bidirectional text isolation?",
options: ["<bdi>", "<bdo>", "<dir>", "<span>"],
correctIndex: 0,
explanation: "The <bdi> tag isolates text direction to prevent layout issues."
},
{
id: 165,
level: "hard",
question: "Which element overrides text direction explicitly?",
options: ["<bdo>", "<bdi>", "<dir>", "<rtl>"],
correctIndex: 0,
explanation: "The <bdo> tag explicitly overrides text direction."
},
{
id: 166,
level: "hard",
question: "Which HTML element defines contact details for an author?",
options: ["<address>", "<contact>", "<footer>", "<info>"],
correctIndex: 0,
explanation: "The <address> tag contains contact information for authors."
},
{
id: 167,
level: "easy",
question: "Which tag is used to display emphasized inserted text?",
options: ["<ins>", "<add>", "<new>", "<insert>"],
correctIndex: 0,
explanation: "The <ins> tag represents newly inserted content."
},
{
id: 168,
level: "medium",
question: "Which attribute specifies the number of visible rows in a textarea?",
options: ["rows", "height", "lines", "size"],
correctIndex: 0,
explanation: "The rows attribute defines how many text rows are visible."
},
{
id: 169,
level: "medium",
question: "Which attribute specifies the number of visible columns in a textarea?",
options: ["cols", "width", "columns", "size"],
correctIndex: 0,
explanation: "The cols attribute sets the visible width of a textarea."
},
{
id: 170,
level: "hard",
question: "Which element defines a container for mathematical expressions?",
options: ["<math>", "<formula>", "<equation>", "<calc>"],
correctIndex: 0,
explanation: "The <math> element is used to embed MathML expressions."
},
{
id: 171,
level: "easy",
question: "Which tag is used to create a checkbox input?",
options: ["<input type=checkbox>", "<checkbox>", "<check>", "<input type=check>"],
correctIndex: 0,
explanation: "Checkboxes are created using the input tag with type checkbox."
},
{
id: 172,
level: "medium",
question: "Which attribute specifies a default selected option?",
options: ["selected", "default", "checked", "active"],
correctIndex: 0,
explanation: "The selected attribute marks an option as pre-selected."
},
{
id: 173,
level: "hard",
question: "Which HTML element defines a container for template content?",
options: ["<template>", "<slot>", "<pattern>", "<layout>"],
correctIndex: 0,
explanation: "The <template> tag holds HTML content not rendered immediately."
},
{
id: 174,
level: "hard",
question: "Which attribute prevents browser spell checking?",
options: ["spellcheck=false", "nospell", "disable-spell", "ignore"],
correctIndex: 0,
explanation: "spellcheck=false disables browser spell checking."
},
{
id: 175,
level: "easy",
question: "Which tag is used to display bold text semantically?",
options: ["<strong>", "<b>", "<bold>", "<em>"],
correctIndex: 0,
explanation: "The <strong> tag indicates strong importance."
},
{
id: 176,
level: "medium",
question: "Which attribute specifies the URL of a form submission?",
options: ["action", "method", "target", "route"],
correctIndex: 0,
explanation: "The action attribute defines where the form data is sent."
},
{
id: 177,
level: "hard",
question: "Which HTML feature helps browsers understand document outlines?",
options: ["Semantic elements", "CSS classes", "Inline styles", "Comments"],
correctIndex: 0,
explanation: "Semantic elements help browsers and assistive tools understand structure."
},
{
id: 178,
level: "easy",
question: "Which tag is used to group navigation links?",
options: ["<nav>", "<menu>", "<links>", "<header>"],
correctIndex: 0,
explanation: "The <nav> tag is intended for navigation sections."
},
{
id: 179,
level: "medium",
question: "Which attribute specifies a short hint for input fields?",
options: ["placeholder", "label", "title", "hint"],
correctIndex: 0,
explanation: "The placeholder attribute shows temporary hint text."
},
{
id: 180,
level: "hard",
question: "Which HTML element represents a progress indicator?",
options: ["<progress>", "<meter>", "<status>", "<loading>"],
correctIndex: 0,
explanation: "The <progress> element represents the completion progress of a task."
}
];
