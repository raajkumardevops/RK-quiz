const cssQuestions = [
{
id: 1,
level: "easy",
question: "What does CSS stand for?",
options: [
"Cascading Style Sheets",
"Computer Style System",
"Creative Styling Syntax",
"Colorful Style Sheets"
],
correctIndex: 0,
explanation: "CSS stands for Cascading Style Sheets and is used to style and layout web pages."
},
{
id: 2,
level: "easy",
question: "Which CSS property is used to change text color?",
options: ["color", "font-color", "text-color", "foreground"],
correctIndex: 0,
explanation: "The color property sets the color of text content."
},
{
id: 3,
level: "easy",
question: "Which selector targets all paragraph elements?",
options: ["p", ".p", "#p", "*p"],
correctIndex: 0,
explanation: "The element selector 'p' selects all paragraph elements."
},
{
id: 4,
level: "easy",
question: "Which property sets the background color of an element?",
options: ["background-color", "bgcolor", "color", "background"],
correctIndex: 0,
explanation: "background-color defines the background color of an element."
},
{
id: 5,
level: "easy",
question: "How do you write a comment in CSS?",
options: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
correctIndex: 0,
explanation: "CSS comments are written using /* and */."
},

{
id: 6,
level: "easy",
question: "Which property controls text size?",
options: ["font-size", "text-size", "size", "font-style"],
correctIndex: 0,
explanation: "font-size controls the size of the text."
},
{
id: 7,
level: "easy",
question: "Which unit is relative to the parent element?",
options: ["%", "px", "cm", "pt"],
correctIndex: 0,
explanation: "Percentage units are relative to the parent element."
},
{
id: 8,
level: "easy",
question: "Which property is used to make text bold?",
options: ["font-weight", "font-style", "text-weight", "bold"],
correctIndex: 0,
explanation: "font-weight controls the thickness of text."
},
{
id: 9,
level: "easy",
question: "Which CSS property aligns text horizontally?",
options: ["text-align", "align", "horizontal-align", "float"],
correctIndex: 0,
explanation: "text-align sets horizontal alignment of text."
},
{
id: 10,
level: "easy",
question: "Which selector selects all elements?",
options: ["*", "all", "body", "html"],
correctIndex: 0,
explanation: "The universal selector (*) selects all elements."
},

{
id: 11,
level: "medium",
question: "Which CSS property controls the space inside an element?",
options: ["padding", "margin", "spacing", "gap"],
correctIndex: 0,
explanation: "Padding defines space between content and border."
},
{
id: 12,
level: "medium",
question: "Which property controls the space outside an element?",
options: ["margin", "padding", "border", "spacing"],
correctIndex: 0,
explanation: "Margin controls space outside the element."
},
{
id: 13,
level: "medium",
question: "Which display value hides an element but keeps its space?",
options: ["visibility: hidden", "display: none", "opacity: 0", "hidden"],
correctIndex: 0,
explanation: "visibility: hidden hides the element while preserving layout space."
},
{
id: 14,
level: "medium",
question: "Which display value removes an element from layout?",
options: ["display: none", "visibility: hidden", "opacity: 0", "remove"],
correctIndex: 0,
explanation: "display: none removes the element from the document flow."
},
{
id: 15,
level: "medium",
question: "Which property adds rounded corners?",
options: ["border-radius", "corner-radius", "round", "radius"],
correctIndex: 0,
explanation: "border-radius creates rounded corners."
},

{
id: 16,
level: "medium",
question: "Which property adds shadow to text?",
options: ["text-shadow", "box-shadow", "font-shadow", "shadow"],
correctIndex: 0,
explanation: "text-shadow adds shadow effects to text."
},
{
id: 17,
level: "medium",
question: "Which property adds shadow to elements?",
options: ["box-shadow", "element-shadow", "shadow", "border-shadow"],
correctIndex: 0,
explanation: "box-shadow applies shadow around elements."
},
{
id: 18,
level: "medium",
question: "Which position value is relative to the nearest positioned ancestor?",
options: ["absolute", "relative", "fixed", "static"],
correctIndex: 0,
explanation: "absolute positioning is relative to the nearest positioned ancestor."
},
{
id: 19,
level: "medium",
question: "Which position value is relative to the viewport?",
options: ["fixed", "absolute", "relative", "sticky"],
correctIndex: 0,
explanation: "fixed positioning is relative to the viewport."
},
{
id: 20,
level: "medium",
question: "Which property controls stacking order?",
options: ["z-index", "stack", "layer", "order"],
correctIndex: 0,
explanation: "z-index controls vertical stacking of positioned elements."
},

{
id: 21,
level: "hard",
question: "Which CSS layout module provides one-dimensional layouts?",
options: ["Flexbox", "Grid", "Float", "Position"],
correctIndex: 0,
explanation: "Flexbox is designed for one-dimensional layouts."
},
{
id: 22,
level: "hard",
question: "Which layout module supports two-dimensional layouts?",
options: ["Grid", "Flexbox", "Float", "Inline"],
correctIndex: 0,
explanation: "CSS Grid supports both rows and columns."
},
{
id: 23,
level: "hard",
question: "Which flex property defines main-axis alignment?",
options: ["justify-content", "align-items", "align-content", "flex-align"],
correctIndex: 0,
explanation: "justify-content aligns items along the main axis."
},
{
id: 24,
level: "hard",
question: "Which flex property defines cross-axis alignment?",
options: ["align-items", "justify-content", "align-self", "place-items"],
correctIndex: 0,
explanation: "align-items aligns items along the cross axis."
},
{
id: 25,
level: "hard",
question: "Which grid property defines column structure?",
options: ["grid-template-columns", "grid-columns", "grid-col", "columns"],
correctIndex: 0,
explanation: "grid-template-columns defines column sizes."
},

{
id: 26,
level: "hard",
question: "Which grid property defines row structure?",
options: ["grid-template-rows", "grid-rows", "rows", "grid-row-size"],
correctIndex: 0,
explanation: "grid-template-rows defines row sizes."
},
{
id: 27,
level: "hard",
question: "Which pseudo-class targets the first child?",
options: [":first-child", ":first", ":child-first", ":start"],
correctIndex: 0,
explanation: ":first-child selects the first child element."
},
{
id: 28,
level: "hard",
question: "Which pseudo-class targets hover state?",
options: [":hover", ":active", ":focus", ":visited"],
correctIndex: 0,
explanation: ":hover applies styles when the mouse is over an element."
},
{
id: 29,
level: "hard",
question: "Which pseudo-element targets the first line of text?",
options: ["::first-line", ":first-line", "::line", ":line"],
correctIndex: 0,
explanation: "::first-line styles the first line of text."
},
{
id: 30,
level: "hard",
question: "Which pseudo-element inserts content before an element?",
options: ["::before", "::after", ":before", ":start"],
correctIndex: 0,
explanation: "::before inserts generated content before an element."
},
{
id: 31,
level: "easy",
question: "Which CSS property is used to change the font of text?",
options: ["font-family", "font-style", "text-font", "font-type"],
correctIndex: 0,
explanation: "The font-family property specifies the font for an element."
},
{
id: 32,
level: "easy",
question: "Which CSS unit is relative to the root element font size?",
options: ["rem", "em", "px", "%"],
correctIndex: 0,
explanation: "The rem unit is relative to the root (html) font size."
},
{
id: 33,
level: "easy",
question: "Which property controls the thickness of borders?",
options: ["border-width", "border-size", "border-thickness", "border-style"],
correctIndex: 0,
explanation: "border-width sets the thickness of an element’s border."
},
{
id: 34,
level: "easy",
question: "Which property defines the style of a border?",
options: ["border-style", "border-type", "border-design", "border-format"],
correctIndex: 0,
explanation: "border-style defines whether the border is solid, dashed, dotted, etc."
},
{
id: 35,
level: "easy",
question: "Which CSS property removes underline from links?",
options: ["text-decoration", "font-style", "link-style", "underline"],
correctIndex: 0,
explanation: "Setting text-decoration to none removes underlines from links."
},

{
id: 36,
level: "medium",
question: "Which property controls the visibility of overflow content?",
options: ["overflow", "clip", "scroll", "hidden"],
correctIndex: 0,
explanation: "The overflow property controls how content exceeding boundaries is handled."
},
{
id: 37,
level: "medium",
question: "Which overflow value adds scrollbars only when needed?",
options: ["auto", "scroll", "hidden", "visible"],
correctIndex: 0,
explanation: "overflow: auto shows scrollbars only if content overflows."
},
{
id: 38,
level: "medium",
question: "Which CSS property defines the transparency of an element?",
options: ["opacity", "visibility", "alpha", "filter"],
correctIndex: 0,
explanation: "The opacity property sets the transparency level of an element."
},
{
id: 39,
level: "medium",
question: "Which property defines the space between letters?",
options: ["letter-spacing", "word-spacing", "line-height", "text-spacing"],
correctIndex: 0,
explanation: "letter-spacing controls spacing between individual characters."
},
{
id: 40,
level: "medium",
question: "Which property defines the space between lines of text?",
options: ["line-height", "letter-spacing", "text-height", "row-gap"],
correctIndex: 0,
explanation: "line-height controls the vertical spacing between text lines."
},

{
id: 41,
level: "medium",
question: "Which CSS property changes the cursor style?",
options: ["cursor", "pointer", "mouse", "hover"],
correctIndex: 0,
explanation: "The cursor property defines the mouse cursor appearance."
},
{
id: 42,
level: "medium",
question: "Which value makes the cursor appear as a hand?",
options: ["pointer", "hand", "click", "grab"],
correctIndex: 0,
explanation: "cursor: pointer indicates clickable elements."
},
{
id: 43,
level: "medium",
question: "Which property defines the order of flex items?",
options: ["order", "flex-order", "z-index", "position"],
correctIndex: 0,
explanation: "The order property controls the order of flex items."
},
{
id: 44,
level: "medium",
question: "Which property allows flex items to wrap onto multiple lines?",
options: ["flex-wrap", "flex-flow", "wrap", "flex-line"],
correctIndex: 0,
explanation: "flex-wrap allows flex items to wrap when space is insufficient."
},
{
id: 45,
level: "medium",
question: "Which shorthand property defines direction and wrapping in Flexbox?",
options: ["flex-flow", "flex-wrap", "flex-direction", "flex-align"],
correctIndex: 0,
explanation: "flex-flow is a shorthand for flex-direction and flex-wrap."
},

{
id: 46,
level: "hard",
question: "Which CSS concept determines which rule takes priority?",
options: ["specificity", "inheritance", "order", "priority"],
correctIndex: 0,
explanation: "Specificity determines which CSS rule is applied when conflicts occur."
},
{
id: 47,
level: "hard",
question: "Which selector has the highest specificity?",
options: ["ID selector", "Class selector", "Element selector", "Universal selector"],
correctIndex: 0,
explanation: "ID selectors have higher specificity than class or element selectors."
},
{
id: 48,
level: "hard",
question: "Which keyword forces a CSS rule to override others?",
options: ["!important", "override", "force", "priority"],
correctIndex: 0,
explanation: "The !important keyword overrides normal specificity rules."
},
{
id: 49,
level: "hard",
question: "Which CSS function performs dynamic calculations?",
options: ["calc()", "compute()", "math()", "value()"],
correctIndex: 0,
explanation: "calc() allows mathematical calculations inside CSS."
},
{
id: 50,
level: "hard",
question: "Which CSS function clamps a value between a minimum and maximum?",
options: ["clamp()", "limit()", "range()", "bound()"],
correctIndex: 0,
explanation: "clamp() sets a value between a defined minimum and maximum."
},

{
id: 51,
level: "hard",
question: "Which CSS feature enables responsive designs based on viewport width?",
options: ["media queries", "container queries", "flexbox", "grid"],
correctIndex: 0,
explanation: "Media queries apply styles based on screen size or conditions."
},
{
id: 52,
level: "hard",
question: "Which media feature targets device orientation?",
options: ["orientation", "rotation", "direction", "layout"],
correctIndex: 0,
explanation: "The orientation media feature targets portrait or landscape modes."
},
{
id: 53,
level: "hard",
question: "Which CSS property animates changes smoothly over time?",
options: ["transition", "transform", "animation", "motion"],
correctIndex: 0,
explanation: "Transitions animate property changes between states."
},
{
id: 54,
level: "hard",
question: "Which CSS property defines animation keyframes?",
options: ["@keyframes", "@frames", "@animate", "@motion"],
correctIndex: 0,
explanation: "@keyframes defines stages of an animation."
},
{
id: 55,
level: "hard",
question: "Which property defines how long a transition takes?",
options: ["transition-duration", "transition-time", "animation-duration", "duration"],
correctIndex: 0,
explanation: "transition-duration sets how long a transition lasts."
},

{
id: 56,
level: "easy",
question: "Which CSS property sets the background image?",
options: ["background-image", "image", "bg-image", "background"],
correctIndex: 0,
explanation: "background-image sets an image as the background of an element."
},
{
id: 57,
level: "easy",
question: "Which property controls background repetition?",
options: ["background-repeat", "repeat", "bg-repeat", "image-repeat"],
correctIndex: 0,
explanation: "background-repeat controls how background images repeat."
},
{
id: 58,
level: "easy",
question: "Which value prevents background repetition?",
options: ["no-repeat", "none", "stop", "disable"],
correctIndex: 0,
explanation: "no-repeat prevents the background image from repeating."
},
{
id: 59,
level: "easy",
question: "Which property controls background positioning?",
options: ["background-position", "background-align", "bg-position", "position"],
correctIndex: 0,
explanation: "background-position sets the starting position of a background image."
},
{
id: 60,
level: "easy",
question: "Which property controls background scaling?",
options: ["background-size", "background-scale", "bg-size", "scale"],
correctIndex: 0,
explanation: "background-size controls the size of the background image."
},
{
id: 61,
level: "easy",
question: "Which CSS property is used to set the width of an element?",
options: ["width", "size", "element-width", "box-width"],
correctIndex: 0,
explanation: "The width property defines the horizontal size of an element."
},
{
id: 62,
level: "easy",
question: "Which CSS property is used to set the height of an element?",
options: ["height", "size", "element-height", "box-height"],
correctIndex: 0,
explanation: "The height property defines the vertical size of an element."
},
{
id: 63,
level: "easy",
question: "Which value of position places an element in normal flow?",
options: ["static", "relative", "absolute", "fixed"],
correctIndex: 0,
explanation: "static is the default position value and keeps the element in normal flow."
},
{
id: 64,
level: "easy",
question: "Which CSS property hides content outside an element box?",
options: ["overflow", "clip-path", "visibility", "display"],
correctIndex: 0,
explanation: "The overflow property controls how extra content is handled."
},
{
id: 65,
level: "easy",
question: "Which property sets the font style to italic?",
options: ["font-style", "font-weight", "text-style", "style"],
correctIndex: 0,
explanation: "font-style controls normal, italic, or oblique text."
},

{
id: 66,
level: "medium",
question: "Which CSS property sets the maximum width of an element?",
options: ["max-width", "width-max", "limit-width", "max-size"],
correctIndex: 0,
explanation: "max-width prevents an element from growing wider than a set value."
},
{
id: 67,
level: "medium",
question: "Which CSS property sets the minimum height of an element?",
options: ["min-height", "height-min", "limit-height", "min-size"],
correctIndex: 0,
explanation: "min-height ensures an element does not shrink below a certain height."
},
{
id: 68,
level: "medium",
question: "Which property controls whether text wraps to the next line?",
options: ["white-space", "text-wrap", "word-break", "line-break"],
correctIndex: 0,
explanation: "white-space controls how text wrapping and spacing behave."
},
{
id: 69,
level: "medium",
question: "Which value prevents text from wrapping?",
options: ["nowrap", "no-wrap", "prevent", "inline"],
correctIndex: 0,
explanation: "white-space: nowrap prevents text from breaking into multiple lines."
},
{
id: 70,
level: "medium",
question: "Which property defines how words break when overflowing?",
options: ["word-break", "word-wrap", "overflow-wrap", "text-break"],
correctIndex: 0,
explanation: "word-break controls how words break when reaching container boundaries."
},

{
id: 71,
level: "medium",
question: "Which CSS property controls spacing between grid rows?",
options: ["row-gap", "grid-gap", "gap-row", "row-space"],
correctIndex: 0,
explanation: "row-gap defines the spacing between grid rows."
},
{
id: 72,
level: "medium",
question: "Which property controls spacing between grid columns?",
options: ["column-gap", "grid-gap", "gap-column", "column-space"],
correctIndex: 0,
explanation: "column-gap defines the spacing between grid columns."
},
{
id: 73,
level: "medium",
question: "Which shorthand property sets both row and column gaps?",
options: ["gap", "grid-gap", "space", "spacing"],
correctIndex: 0,
explanation: "The gap property sets spacing between rows and columns."
},
{
id: 74,
level: "medium",
question: "Which property aligns grid items horizontally?",
options: ["justify-items", "align-items", "place-items", "justify-content"],
correctIndex: 0,
explanation: "justify-items aligns grid items along the inline axis."
},
{
id: 75,
level: "medium",
question: "Which property aligns grid items vertically?",
options: ["align-items", "justify-items", "place-items", "align-content"],
correctIndex: 0,
explanation: "align-items aligns grid items along the block axis."
},

{
id: 76,
level: "hard",
question: "Which CSS property defines how an element is resized by the user?",
options: ["resize", "scale", "transform", "zoom"],
correctIndex: 0,
explanation: "The resize property allows users to resize elements like textareas."
},
{
id: 77,
level: "hard",
question: "Which property clips an element to a specific shape?",
options: ["clip-path", "mask", "overflow", "shape-outside"],
correctIndex: 0,
explanation: "clip-path clips elements to custom shapes."
},
{
id: 78,
level: "hard",
question: "Which CSS property defines a masking layer?",
options: ["mask-image", "clip-path", "filter", "opacity"],
correctIndex: 0,
explanation: "mask-image applies a mask layer to an element."
},
{
id: 79,
level: "hard",
question: "Which property applies visual effects like blur or grayscale?",
options: ["filter", "effect", "opacity", "transform"],
correctIndex: 0,
explanation: "The filter property applies graphical effects to elements."
},
{
id: 80,
level: "hard",
question: "Which CSS property controls 2D and 3D transformations?",
options: ["transform", "transition", "translate", "motion"],
correctIndex: 0,
explanation: "The transform property applies transformations like rotate and scale."
},

{
id: 81,
level: "hard",
question: "Which function moves an element along the X and Y axis?",
options: ["translate()", "move()", "shift()", "position()"],
correctIndex: 0,
explanation: "translate() moves an element horizontally and vertically."
},
{
id: 82,
level: "hard",
question: "Which function rotates an element?",
options: ["rotate()", "spin()", "turn()", "angle()"],
correctIndex: 0,
explanation: "rotate() rotates an element by a given degree."
},
{
id: 83,
level: "hard",
question: "Which function scales an element’s size?",
options: ["scale()", "resize()", "zoom()", "stretch()"],
correctIndex: 0,
explanation: "scale() increases or decreases the size of an element."
},
{
id: 84,
level: "hard",
question: "Which property defines the origin point for transformations?",
options: ["transform-origin", "origin", "transform-point", "anchor"],
correctIndex: 0,
explanation: "transform-origin sets the point around which transformations occur."
},
{
id: 85,
level: "hard",
question: "Which property controls the order of overlapping transformed elements?",
options: ["z-index", "stack-order", "layer", "depth"],
correctIndex: 0,
explanation: "z-index controls stacking order of positioned elements."
},

{
id: 86,
level: "easy",
question: "Which CSS property centers text horizontally?",
options: ["text-align", "align-text", "center-text", "horizontal-align"],
correctIndex: 0,
explanation: "text-align controls horizontal alignment of text."
},
{
id: 87,
level: "easy",
question: "Which value centers text?",
options: ["center", "middle", "auto", "balanced"],
correctIndex: 0,
explanation: "center aligns text to the middle horizontally."
},
{
id: 88,
level: "easy",
question: "Which property sets the font color?",
options: ["color", "font-color", "text-color", "foreground"],
correctIndex: 0,
explanation: "The color property defines the color of text."
},
{
id: 89,
level: "easy",
question: "Which CSS property removes bullets from lists?",
options: ["list-style", "list-type", "bullet-style", "marker"],
correctIndex: 0,
explanation: "list-style set to none removes bullets."
},
{
id: 90,
level: "easy",
question: "Which value removes list markers?",
options: ["none", "no-style", "remove", "hidden"],
correctIndex: 0,
explanation: "list-style: none removes list markers."
},

{
id: 91,
level: "medium",
question: "Which CSS property aligns flex items along the main axis?",
options: ["justify-content", "align-items", "align-content", "place-items"],
correctIndex: 0,
explanation: "justify-content aligns flex items along the main axis."
},
{
id: 92,
level: "medium",
question: "Which property aligns flex items along the cross axis?",
options: ["align-items", "justify-content", "align-self", "place-content"],
correctIndex: 0,
explanation: "align-items aligns flex items along the cross axis."
},
{
id: 93,
level: "medium",
question: "Which property allows an individual flex item to override alignment?",
options: ["align-self", "self-align", "item-align", "override-align"],
correctIndex: 0,
explanation: "align-self overrides the alignment for a single flex item."
},
{
id: 94,
level: "medium",
question: "Which property distributes extra space between flex lines?",
options: ["align-content", "justify-content", "gap", "space-between"],
correctIndex: 0,
explanation: "align-content controls spacing between flex lines."
},
{
id: 95,
level: "medium",
question: "Which value places items at the start of the container?",
options: ["flex-start", "start", "left", "begin"],
correctIndex: 0,
explanation: "flex-start aligns items to the start of the container."
},

{
id: 96,
level: "hard",
question: "Which CSS feature allows variables to be defined?",
options: ["CSS custom properties", "Sass variables", "Constants", "Tokens"],
correctIndex: 0,
explanation: "CSS custom properties allow reusable variable values."
},
{
id: 97,
level: "hard",
question: "Which syntax defines a CSS variable?",
options: ["--variable-name", "$variable", "@var", "var()"],
correctIndex: 0,
explanation: "CSS variables are defined using --variable-name syntax."
},
{
id: 98,
level: "hard",
question: "Which function accesses a CSS variable?",
options: ["var()", "get()", "value()", "use()"],
correctIndex: 0,
explanation: "var() retrieves the value of a CSS custom property."
},
{
id: 99,
level: "hard",
question: "Which CSS feature enables layout based on container size?",
options: ["Container queries", "Media queries", "Flexbox", "Grid"],
correctIndex: 0,
explanation: "Container queries apply styles based on parent container size."
},
{
id: 100,
level: "hard",
question: "Which at-rule defines container query conditions?",
options: ["@container", "@media", "@supports", "@query"],
correctIndex: 0,
explanation: "@container defines styles based on container conditions."
},

{
id: 101,
level: "easy",
question: "Which property changes the mouse cursor to a text selector?",
options: ["cursor", "text-cursor", "pointer", "select"],
correctIndex: 0,
explanation: "cursor controls the mouse cursor appearance."
},
{
id: 102,
level: "easy",
question: "Which value shows a text selection cursor?",
options: ["text", "pointer", "default", "edit"],
correctIndex: 0,
explanation: "cursor: text displays an I-beam cursor."
},
{
id: 103,
level: "medium",
question: "Which property sets the outline of an element?",
options: ["outline", "border", "stroke", "frame"],
correctIndex: 0,
explanation: "outline draws a line outside the border."
},
{
id: 104,
level: "medium",
question: "Which outline property sets thickness?",
options: ["outline-width", "outline-size", "outline-style", "outline-radius"],
correctIndex: 0,
explanation: "outline-width defines the thickness of the outline."
},
{
id: 105,
level: "medium",
question: "Which property controls outline offset?",
options: ["outline-offset", "outline-gap", "outline-space", "outline-margin"],
correctIndex: 0,
explanation: "outline-offset controls space between outline and element."
},

{
id: 106,
level: "hard",
question: "Which CSS property prevents text selection?",
options: ["user-select", "select", "no-select", "text-lock"],
correctIndex: 0,
explanation: "user-select controls whether text can be selected."
},
{
id: 107,
level: "hard",
question: "Which value disables text selection?",
options: ["none", "disable", "false", "off"],
correctIndex: 0,
explanation: "user-select: none disables text selection."
},
{
id: 108,
level: "hard",
question: "Which CSS property controls smooth scrolling?",
options: ["scroll-behavior", "scroll-style", "scroll-smooth", "behavior"],
correctIndex: 0,
explanation: "scroll-behavior controls scroll animation behavior."
},
{
id: 109,
level: "hard",
question: "Which value enables smooth scrolling?",
options: ["smooth", "auto", "animated", "ease"],
correctIndex: 0,
explanation: "scroll-behavior: smooth enables animated scrolling."
},
{
id: 110,
level: "hard",
question: "Which property hides scrollbars but allows scrolling?",
options: ["overflow", "scrollbar", "display", "visibility"],
correctIndex: 0,
explanation: "overflow controls scrolling behavior while hiding content."
},

{
id: 111,
level: "easy",
question: "Which CSS property sets the default font for the page?",
options: ["font-family", "font-style", "font", "text-style"],
correctIndex: 0,
explanation: "font-family defines the font used by text."
},
{
id: 112,
level: "easy",
question: "Which shorthand sets font size and family?",
options: ["font", "font-style", "text", "typography"],
correctIndex: 0,
explanation: "The font shorthand sets multiple font properties at once."
},
{
id: 113,
level: "medium",
question: "Which CSS property controls text overflow behavior?",
options: ["text-overflow", "overflow-text", "clip-text", "truncate"],
correctIndex: 0,
explanation: "text-overflow defines how overflowing text is displayed."
},
{
id: 114,
level: "medium",
question: "Which value shows ellipsis for overflowed text?",
options: ["ellipsis", "dots", "clip", "fade"],
correctIndex: 0,
explanation: "text-overflow: ellipsis shows three dots for truncated text."
},
{
id: 115,
level: "medium",
question: "Which property forces all text to uppercase?",
options: ["text-transform", "font-transform", "case", "capitalize"],
correctIndex: 0,
explanation: "text-transform controls text capitalization."
},

{
id: 116,
level: "hard",
question: "Which CSS at-rule checks browser feature support?",
options: ["@supports", "@media", "@container", "@check"],
correctIndex: 0,
explanation: "@supports applies styles based on feature support."
},
{
id: 117,
level: "hard",
question: "Which CSS feature improves rendering performance for animations?",
options: ["will-change", "optimize", "performance", "render"],
correctIndex: 0,
explanation: "will-change hints the browser about upcoming changes."
},
{
id: 118,
level: "hard",
question: "Which property isolates stacking contexts?",
options: ["isolation", "z-index", "position", "layer"],
correctIndex: 0,
explanation: "isolation creates a new stacking context."
},
{
id: 119,
level: "hard",
question: "Which property controls blend mode behavior?",
options: ["mix-blend-mode", "blend", "opacity", "filter"],
correctIndex: 0,
explanation: "mix-blend-mode defines how elements blend with backgrounds."
},
{
id: 120,
level: "hard",
question: "Which CSS property controls background blending?",
options: ["background-blend-mode", "blend-mode", "bg-mix", "background-mode"],
correctIndex: 0,
explanation: "background-blend-mode controls blending between background layers."
},
{
id: 121,
level: "easy",
question: "Which CSS property controls the thickness of text?",
options: ["font-weight", "font-size", "font-style", "text-weight"],
correctIndex: 0,
explanation: "The font-weight property defines how thick or thin the text appears."
},
{
id: 122,
level: "easy",
question: "Which value makes text bold?",
options: ["bold", "strong", "thick", "heavy"],
correctIndex: 0,
explanation: "The value bold increases the thickness of the font."
},
{
id: 123,
level: "easy",
question: "Which CSS property changes the style of list markers?",
options: ["list-style-type", "list-type", "marker-style", "bullet-style"],
correctIndex: 0,
explanation: "list-style-type defines the appearance of list markers."
},
{
id: 124,
level: "easy",
question: "Which value removes list markers?",
options: ["none", "hidden", "remove", "no-style"],
correctIndex: 0,
explanation: "Setting list-style-type to none removes bullets or numbers."
},
{
id: 125,
level: "easy",
question: "Which property sets the spacing between words?",
options: ["word-spacing", "letter-spacing", "line-height", "text-gap"],
correctIndex: 0,
explanation: "word-spacing controls the space between words."
},

{
id: 126,
level: "medium",
question: "Which CSS property defines how an image fits inside its container?",
options: ["object-fit", "image-fit", "background-size", "fit"],
correctIndex: 0,
explanation: "object-fit controls how replaced elements like images fit their container."
},
{
id: 127,
level: "medium",
question: "Which value maintains image aspect ratio while filling container?",
options: ["cover", "contain", "fill", "scale"],
correctIndex: 0,
explanation: "object-fit: cover fills the container while preserving aspect ratio."
},
{
id: 128,
level: "medium",
question: "Which value ensures the entire image is visible?",
options: ["contain", "cover", "fill", "none"],
correctIndex: 0,
explanation: "object-fit: contain scales the image to fit fully inside the container."
},
{
id: 129,
level: "medium",
question: "Which property defines how background images scroll?",
options: ["background-attachment", "background-scroll", "background-flow", "bg-attach"],
correctIndex: 0,
explanation: "background-attachment controls whether the background scrolls or stays fixed."
},
{
id: 130,
level: "medium",
question: "Which value keeps the background fixed during scroll?",
options: ["fixed", "static", "absolute", "sticky"],
correctIndex: 0,
explanation: "background-attachment: fixed keeps the background in place."
},

{
id: 131,
level: "medium",
question: "Which CSS property controls how table borders collapse?",
options: ["border-collapse", "table-layout", "border-style", "collapse"],
correctIndex: 0,
explanation: "border-collapse defines whether table borders are separated or collapsed."
},
{
id: 132,
level: "medium",
question: "Which value merges adjacent table borders?",
options: ["collapse", "merge", "combine", "join"],
correctIndex: 0,
explanation: "border-collapse: collapse merges adjacent table borders."
},
{
id: 133,
level: "medium",
question: "Which CSS property controls table column width calculation?",
options: ["table-layout", "column-width", "layout", "grid"],
correctIndex: 0,
explanation: "table-layout defines how column widths are calculated."
},
{
id: 134,
level: "medium",
question: "Which value makes table layout faster but fixed?",
options: ["fixed", "auto", "static", "locked"],
correctIndex: 0,
explanation: "table-layout: fixed speeds up layout by using fixed column widths."
},
{
id: 135,
level: "medium",
question: "Which property aligns text vertically inside table cells?",
options: ["vertical-align", "text-align", "align-items", "place-items"],
correctIndex: 0,
explanation: "vertical-align controls vertical positioning in inline and table-cell elements."
},

{
id: 136,
level: "hard",
question: "Which CSS property defines writing direction of text?",
options: ["writing-mode", "text-direction", "direction", "flow-mode"],
correctIndex: 0,
explanation: "writing-mode defines horizontal or vertical text flow."
},
{
id: 137,
level: "hard",
question: "Which value sets vertical text from top to bottom?",
options: ["vertical-rl", "vertical-lr", "horizontal-tb", "top-down"],
correctIndex: 0,
explanation: "vertical-rl displays text vertically from top to bottom."
},
{
id: 138,
level: "hard",
question: "Which CSS property controls how overflowing text is truncated?",
options: ["text-overflow", "overflow-wrap", "word-break", "white-space"],
correctIndex: 0,
explanation: "text-overflow defines how clipped text is indicated."
},
{
id: 139,
level: "hard",
question: "Which combination is required for text-overflow to work?",
options: [
"overflow hidden and white-space nowrap",
"display block only",
"position relative only",
"line-height fixed"
],
correctIndex: 0,
explanation: "text-overflow requires overflow hidden and no text wrapping."
},
{
id: 140,
level: "hard",
question: "Which CSS property controls scroll snapping?",
options: ["scroll-snap-type", "scroll-behavior", "scroll-lock", "snap"],
correctIndex: 0,
explanation: "scroll-snap-type enables snap points during scrolling."
},

{
id: 141,
level: "hard",
question: "Which property defines snap alignment of elements?",
options: ["scroll-snap-align", "scroll-align", "snap-align", "align-snap"],
correctIndex: 0,
explanation: "scroll-snap-align controls how elements snap into position."
},
{
id: 142,
level: "hard",
question: "Which CSS feature allows conditional styling based on browser support?",
options: ["@supports", "@media", "@container", "@if"],
correctIndex: 0,
explanation: "@supports applies styles only if a feature is supported."
},
{
id: 143,
level: "hard",
question: "Which property defines how an element participates in a flex container?",
options: ["flex", "flex-item", "flex-grow", "flex-flow"],
correctIndex: 0,
explanation: "The flex shorthand defines grow, shrink, and basis."
},
{
id: 144,
level: "hard",
question: "Which flex value allows an item to grow relative to others?",
options: ["flex-grow", "flex-shrink", "flex-basis", "flex-size"],
correctIndex: 0,
explanation: "flex-grow defines how much a flex item can grow."
},
{
id: 145,
level: "hard",
question: "Which flex value controls how an item shrinks?",
options: ["flex-shrink", "flex-grow", "flex-basis", "shrink"],
correctIndex: 0,
explanation: "flex-shrink defines how a flex item reduces in size."
},

{
id: 146,
level: "easy",
question: "Which CSS property adds space between border and margin?",
options: ["border", "padding", "margin", "gap"],
correctIndex: 1,
explanation: "Padding adds space between the content and the border."
},
{
id: 147,
level: "easy",
question: "Which CSS property draws a line around an element?",
options: ["border", "outline", "frame", "stroke"],
correctIndex: 0,
explanation: "The border property draws a line around an element."
},
{
id: 148,
level: "easy",
question: "Which shorthand property sets margin on all sides?",
options: ["margin", "padding", "spacing", "gap"],
correctIndex: 0,
explanation: "The margin shorthand sets margin for all four sides."
},
{
id: 149,
level: "easy",
question: "Which value centers a block element horizontally?",
options: ["margin: auto", "text-align: center", "align: center", "center"],
correctIndex: 0,
explanation: "margin: auto horizontally centers block elements with width."
},
{
id: 150,
level: "easy",
question: "Which CSS property controls element transparency?",
options: ["opacity", "visibility", "filter", "alpha"],
correctIndex: 0,
explanation: "opacity controls the transparency of an element."
},

{
id: 151,
level: "medium",
question: "Which CSS property defines how elements animate between states?",
options: ["transition", "animation", "transform", "motion"],
correctIndex: 0,
explanation: "transition controls smooth property changes."
},
{
id: 152,
level: "medium",
question: "Which property defines animation duration?",
options: ["animation-duration", "transition-duration", "duration", "time"],
correctIndex: 0,
explanation: "animation-duration sets how long an animation runs."
},
{
id: 153,
level: "medium",
question: "Which property controls animation repetition?",
options: ["animation-iteration-count", "animation-repeat", "loop", "repeat"],
correctIndex: 0,
explanation: "animation-iteration-count defines how many times an animation runs."
},
{
id: 154,
level: "medium",
question: "Which value makes animation repeat infinitely?",
options: ["infinite", "always", "loop", "forever"],
correctIndex: 0,
explanation: "infinite causes the animation to repeat endlessly."
},
{
id: 155,
level: "medium",
question: "Which property defines animation timing behavior?",
options: ["animation-timing-function", "animation-speed", "timing", "ease"],
correctIndex: 0,
explanation: "animation-timing-function controls animation acceleration."
},

{
id: 156,
level: "hard",
question: "Which timing function starts slow, speeds up, then slows down?",
options: ["ease-in-out", "linear", "ease-in", "ease-out"],
correctIndex: 0,
explanation: "ease-in-out accelerates then decelerates smoothly."
},
{
id: 157,
level: "hard",
question: "Which CSS property delays animation start?",
options: ["animation-delay", "transition-delay", "delay", "wait"],
correctIndex: 0,
explanation: "animation-delay sets a delay before animation begins."
},
{
id: 158,
level: "hard",
question: "Which CSS property defines animation direction?",
options: ["animation-direction", "animation-flow", "direction", "flow"],
correctIndex: 0,
explanation: "animation-direction controls playback direction."
},
{
id: 159,
level: "hard",
question: "Which value reverses animation every cycle?",
options: ["alternate", "reverse", "flip", "mirror"],
correctIndex: 0,
explanation: "alternate plays animation forward then backward."
},
{
id: 160,
level: "hard",
question: "Which CSS property controls whether animation styles persist?",
options: ["animation-fill-mode", "animation-state", "fill", "persist"],
correctIndex: 0,
explanation: "animation-fill-mode controls styles before and after animation."
},

{
id: 161,
level: "hard",
question: "Which value keeps final animation state applied?",
options: ["forwards", "both", "end", "retain"],
correctIndex: 0,
explanation: "forwards keeps the final animation state."
},
{
id: 162,
level: "hard",
question: "Which CSS property pauses or plays an animation?",
options: ["animation-play-state", "animation-state", "play", "pause"],
correctIndex: 0,
explanation: "animation-play-state controls whether animation runs or pauses."
},
{
id: 163,
level: "hard",
question: "Which value pauses an animation?",
options: ["paused", "stop", "halt", "freeze"],
correctIndex: 0,
explanation: "paused stops the animation temporarily."
},
{
id: 164,
level: "hard",
question: "Which CSS property improves animation performance?",
options: ["will-change", "optimize", "render", "performance"],
correctIndex: 0,
explanation: "will-change hints the browser about upcoming changes."
},
{
id: 165,
level: "hard",
question: "Which property creates a new stacking context?",
options: ["isolation", "z-index", "position", "layer"],
correctIndex: 0,
explanation: "isolation isolates stacking contexts."
},

{
id: 166,
level: "easy",
question: "Which CSS property sets the background color?",
options: ["background-color", "color", "bg", "background"],
correctIndex: 0,
explanation: "background-color defines the background color of an element."
},
{
id: 167,
level: "easy",
question: "Which value makes background transparent?",
options: ["transparent", "none", "clear", "invisible"],
correctIndex: 0,
explanation: "transparent makes the background invisible."
},
{
id: 168,
level: "easy",
question: "Which CSS property sets element display type?",
options: ["display", "position", "visibility", "layout"],
correctIndex: 0,
explanation: "display defines how an element is rendered."
},
{
id: 169,
level: "easy",
question: "Which display value places elements inline?",
options: ["inline", "block", "inline-block", "flex"],
correctIndex: 0,
explanation: "inline displays elements in the same line."
},
{
id: 170,
level: "easy",
question: "Which display value allows width and height inline?",
options: ["inline-block", "inline", "block", "flex"],
correctIndex: 0,
explanation: "inline-block allows sizing while staying inline."
},

{
id: 171,
level: "medium",
question: "Which display value enables Flexbox?",
options: ["flex", "grid", "block", "inline"],
correctIndex: 0,
explanation: "display: flex enables Flexbox layout."
},
{
id: 172,
level: "medium",
question: "Which display value enables Grid layout?",
options: ["grid", "flex", "block", "inline"],
correctIndex: 0,
explanation: "display: grid enables CSS Grid."
},
{
id: 173,
level: "medium",
question: "Which property defines the main axis direction in Flexbox?",
options: ["flex-direction", "flex-flow", "direction", "axis"],
correctIndex: 0,
explanation: "flex-direction defines the main axis orientation."
},
{
id: 174,
level: "medium",
question: "Which value arranges flex items vertically?",
options: ["column", "row", "vertical", "stack"],
correctIndex: 0,
explanation: "flex-direction: column stacks items vertically."
},
{
id: 175,
level: "medium",
question: "Which value arranges flex items horizontally?",
options: ["row", "column", "horizontal", "line"],
correctIndex: 0,
explanation: "flex-direction: row places items horizontally."
},

{
id: 176,
level: "hard",
question: "Which CSS property aligns items along the cross axis in Grid?",
options: ["align-items", "justify-items", "place-content", "align-content"],
correctIndex: 0,
explanation: "align-items aligns grid items along the block axis."
},
{
id: 177,
level: "hard",
question: "Which CSS property aligns items along the inline axis in Grid?",
options: ["justify-items", "align-items", "place-items", "justify-content"],
correctIndex: 0,
explanation: "justify-items aligns grid items along the inline axis."
},
{
id: 178,
level: "hard",
question: "Which shorthand aligns items in both axes?",
options: ["place-items", "align-items", "justify-items", "center-items"],
correctIndex: 0,
explanation: "place-items is shorthand for align-items and justify-items."
},
{
id: 179,
level: "hard",
question: "Which CSS property aligns the entire grid within its container?",
options: ["place-content", "align-items", "justify-items", "gap"],
correctIndex: 0,
explanation: "place-content aligns the grid tracks inside the container."
},
{
id: 180,
level: "hard",
question: "Which shorthand aligns grid content on both axes?",
options: ["place-content", "align-content", "justify-content", "grid-align"],
correctIndex: 0,
explanation: "place-content is shorthand for align-content and justify-content."
}
];



