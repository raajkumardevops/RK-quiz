const bootstrapQuestions = [
{
id: 1,
level: "easy",
question: "What is Bootstrap?",
options: [
"A CSS framework for responsive web design",
"A JavaScript library for animations",
"A backend framework",
"A database management tool"
],
correctIndex: 0,
explanation: "Bootstrap is a popular front-end CSS framework used to build responsive and mobile-first websites."
},
{
id: 2,
level: "easy",
question: "Who developed Bootstrap?",
options: [
"Twitter",
"Google",
"Facebook",
"Microsoft"
],
correctIndex: 0,
explanation: "Bootstrap was originally developed by Twitter engineers."
},
{
id: 3,
level: "easy",
question: "Which language is primarily used by Bootstrap for styling?",
options: [
"CSS",
"Java",
"Python",
"PHP"
],
correctIndex: 0,
explanation: "Bootstrap mainly uses CSS along with optional JavaScript for components."
},
{
id: 4,
level: "easy",
question: "Which Bootstrap class creates a fixed-width responsive container?",
options: [
"container",
"container-fluid",
"box",
"wrapper"
],
correctIndex: 0,
explanation: "The container class provides a responsive fixed-width container."
},
{
id: 5,
level: "easy",
question: "Which class creates a full-width container in Bootstrap?",
options: [
"container-fluid",
"container",
"full-container",
"fluid"
],
correctIndex: 0,
explanation: "container-fluid spans the full width of the viewport."
},

{
id: 6,
level: "easy",
question: "Which Bootstrap system is used for layout?",
options: [
"Grid system",
"Flex system",
"Box system",
"Layer system"
],
correctIndex: 0,
explanation: "Bootstrap uses a 12-column grid system for layouts."
},
{
id: 7,
level: "easy",
question: "How many columns are there in Bootstrap’s grid system?",
options: [
"12",
"10",
"8",
"16"
],
correctIndex: 0,
explanation: "Bootstrap grid is divided into 12 columns."
},
{
id: 8,
level: "easy",
question: "Which class is used to create a row in Bootstrap?",
options: [
"row",
"column",
"grid-row",
"flex-row"
],
correctIndex: 0,
explanation: "The row class is used to wrap columns in Bootstrap."
},
{
id: 9,
level: "easy",
question: "Which class is used to define a column in Bootstrap?",
options: [
"col",
"column",
"grid-col",
"box"
],
correctIndex: 0,
explanation: "The col class defines a column inside a row."
},
{
id: 10,
level: "easy",
question: "Which Bootstrap class makes text center aligned?",
options: [
"text-center",
"align-center",
"center-text",
"text-middle"
],
correctIndex: 0,
explanation: "text-center horizontally centers text."
},

{
id: 11,
level: "medium",
question: "Which breakpoint is used for small devices in Bootstrap?",
options: [
"sm",
"xs",
"md",
"lg"
],
correctIndex: 0,
explanation: "The sm breakpoint targets small devices like phones."
},
{
id: 12,
level: "medium",
question: "Which breakpoint targets medium devices?",
options: [
"md",
"sm",
"lg",
"xl"
],
correctIndex: 0,
explanation: "The md breakpoint is used for tablets and small laptops."
},
{
id: 13,
level: "medium",
question: "Which class hides content on all screen sizes?",
options: [
"d-none",
"hidden",
"invisible",
"hide-all"
],
correctIndex: 0,
explanation: "d-none hides elements across all breakpoints."
},
{
id: 14,
level: "medium",
question: "Which class displays content only on large screens?",
options: [
"d-none d-lg-block",
"d-lg-only",
"show-lg",
"visible-lg"
],
correctIndex: 0,
explanation: "d-none d-lg-block hides content except on large screens."
},
{
id: 15,
level: "medium",
question: "Which Bootstrap utility adds margin on all sides?",
options: [
"m-3",
"p-3",
"margin-3",
"space-3"
],
correctIndex: 0,
explanation: "m-3 adds margin on all sides."
},

{
id: 16,
level: "medium",
question: "Which utility class adds padding on all sides?",
options: [
"p-3",
"m-3",
"padding-3",
"space-3"
],
correctIndex: 0,
explanation: "p-3 adds padding on all sides."
},
{
id: 17,
level: "medium",
question: "Which class makes an image responsive?",
options: [
"img-fluid",
"img-responsive",
"image-fluid",
"responsive-img"
],
correctIndex: 0,
explanation: "img-fluid scales images according to the parent container."
},
{
id: 18,
level: "medium",
question: "Which class styles a button with primary color?",
options: [
"btn-primary",
"btn-main",
"btn-blue",
"btn-default"
],
correctIndex: 0,
explanation: "btn-primary applies the primary theme color to a button."
},
{
id: 19,
level: "medium",
question: "Which base class is required for all Bootstrap buttons?",
options: [
"btn",
"button",
"btn-base",
"action"
],
correctIndex: 0,
explanation: "The btn class is required for all Bootstrap buttons."
},
{
id: 20,
level: "medium",
question: "Which class creates an outlined button?",
options: [
"btn-outline-primary",
"btn-border",
"btn-ghost",
"btn-line"
],
correctIndex: 0,
explanation: "btn-outline-* creates outline-style buttons."
},

{
id: 21,
level: "hard",
question: "Which Bootstrap component is used for navigation menus?",
options: [
"Navbar",
"Card",
"Alert",
"Badge"
],
correctIndex: 0,
explanation: "The Navbar component is used to create responsive navigation headers."
},
{
id: 22,
level: "hard",
question: "Which class expands the navbar on large screens?",
options: [
"navbar-expand-lg",
"navbar-lg",
"expand-lg",
"nav-lg"
],
correctIndex: 0,
explanation: "navbar-expand-lg makes the navbar horizontal on large screens."
},
{
id: 23,
level: "hard",
question: "Which Bootstrap class styles a card container?",
options: [
"card",
"panel",
"box",
"tile"
],
correctIndex: 0,
explanation: "The card class creates a flexible content container."
},
{
id: 24,
level: "hard",
question: "Which class adds a header section inside a card?",
options: [
"card-header",
"card-top",
"card-title",
"header"
],
correctIndex: 0,
explanation: "card-header defines the header area of a card."
},
{
id: 25,
level: "hard",
question: "Which class adds body content inside a card?",
options: [
"card-body",
"card-content",
"card-main",
"body"
],
correctIndex: 0,
explanation: "card-body holds the main content of a card."
},

{
id: 26,
level: "hard",
question: "Which component is used to display dismissible messages?",
options: [
"Alert",
"Toast",
"Modal",
"Badge"
],
correctIndex: 0,
explanation: "Alerts are used to show contextual feedback messages."
},
{
id: 27,
level: "hard",
question: "Which class makes an alert dismissible?",
options: [
"alert-dismissible",
"alert-close",
"alert-dismiss",
"alert-hide"
],
correctIndex: 0,
explanation: "alert-dismissible enables closing alerts with a button."
},
{
id: 28,
level: "hard",
question: "Which Bootstrap component displays content in a popup window?",
options: [
"Modal",
"Toast",
"Dropdown",
"Tooltip"
],
correctIndex: 0,
explanation: "The Modal component displays content in a dialog overlay."
},
{
id: 29,
level: "hard",
question: "Which attribute is required to toggle a modal?",
options: [
"data-bs-toggle",
"data-toggle",
"toggle-modal",
"modal-trigger"
],
correctIndex: 0,
explanation: "data-bs-toggle is required in Bootstrap 5 for toggling components."
},
{
id: 30,
level: "hard",
question: "Which attribute specifies the target modal ID?",
options: [
"data-bs-target",
"href",
"target",
"modal-id"
],
correctIndex: 0,
explanation: "data-bs-target links the trigger to a specific modal."
},
{
id: 31,
level: "easy",
question: "Which Bootstrap class makes text bold?",
options: ["fw-bold", "text-bold", "font-bold", "bold"],
correctIndex: 0,
explanation: "fw-bold applies a bold font weight using Bootstrap utility classes."
},
{
id: 32,
level: "easy",
question: "Which class makes text italic in Bootstrap?",
options: ["fst-italic", "text-italic", "font-italic", "italic"],
correctIndex: 0,
explanation: "fst-italic applies italic font style in Bootstrap 5."
},
{
id: 33,
level: "easy",
question: "Which Bootstrap utility controls text color?",
options: ["text-*", "color-*", "font-*", "bg-text-*"],
correctIndex: 0,
explanation: "text-* utilities are used to change text color in Bootstrap."
},
{
id: 34,
level: "easy",
question: "Which class applies primary text color?",
options: ["text-primary", "color-primary", "primary-text", "text-main"],
correctIndex: 0,
explanation: "text-primary applies the primary theme color to text."
},
{
id: 35,
level: "easy",
question: "Which Bootstrap class aligns text to the right?",
options: ["text-end", "text-right", "align-right", "right-text"],
correctIndex: 0,
explanation: "text-end aligns text to the right in Bootstrap 5."
},

{
id: 36,
level: "medium",
question: "Which Bootstrap class controls element visibility?",
options: ["d-*", "visible-*", "show-*", "display-*"],
correctIndex: 0,
explanation: "d-* classes control display and visibility of elements."
},
{
id: 37,
level: "medium",
question: "Which class displays an element as flex?",
options: ["d-flex", "flex", "display-flex", "flexbox"],
correctIndex: 0,
explanation: "d-flex enables Flexbox layout on an element."
},
{
id: 38,
level: "medium",
question: "Which class hides an element visually but keeps it accessible?",
options: ["visually-hidden", "d-none", "invisible", "hidden"],
correctIndex: 0,
explanation: "visually-hidden hides content visually but keeps it accessible to screen readers."
},
{
id: 39,
level: "medium",
question: "Which utility adds horizontal padding?",
options: ["px-*", "py-*", "p-*", "mx-*"],
correctIndex: 0,
explanation: "px-* adds padding on the left and right sides."
},
{
id: 40,
level: "medium",
question: "Which utility adds vertical margin?",
options: ["my-*", "mx-*", "m-*", "py-*"],
correctIndex: 0,
explanation: "my-* applies margin to top and bottom."
},

{
id: 41,
level: "medium",
question: "Which Bootstrap class rounds element corners?",
options: ["rounded", "border-radius", "radius", "curve"],
correctIndex: 0,
explanation: "rounded applies a default border radius."
},
{
id: 42,
level: "medium",
question: "Which class makes an element fully circular?",
options: ["rounded-circle", "rounded-full", "circle", "round"],
correctIndex: 0,
explanation: "rounded-circle makes the element circular."
},
{
id: 43,
level: "medium",
question: "Which utility adds a shadow to an element?",
options: ["shadow", "box-shadow", "elevation", "depth"],
correctIndex: 0,
explanation: "shadow adds a subtle box-shadow effect."
},
{
id: 44,
level: "medium",
question: "Which class removes box shadow?",
options: ["shadow-none", "no-shadow", "shadow-0", "remove-shadow"],
correctIndex: 0,
explanation: "shadow-none removes any box shadow."
},
{
id: 45,
level: "medium",
question: "Which utility sets width to 100%?",
options: ["w-100", "width-100", "full-width", "w-full"],
correctIndex: 0,
explanation: "w-100 sets the element width to 100%."
},

{
id: 46,
level: "hard",
question: "Which Bootstrap component groups list content with styles?",
options: ["List group", "Card", "Table", "Dropdown"],
correctIndex: 0,
explanation: "List group displays a series of content items with consistent styling."
},
{
id: 47,
level: "hard",
question: "Which class styles an active list group item?",
options: ["active", "selected", "current", "on"],
correctIndex: 0,
explanation: "active highlights the current list group item."
},
{
id: 48,
level: "hard",
question: "Which component shows progress of a task?",
options: ["Progress", "Spinner", "Alert", "Badge"],
correctIndex: 0,
explanation: "The Progress component displays task completion visually."
},
{
id: 49,
level: "hard",
question: "Which class defines the progress bar container?",
options: ["progress", "progress-bar", "bar", "loader"],
correctIndex: 0,
explanation: "progress wraps the progress bar element."
},
{
id: 50,
level: "hard",
question: "Which class represents the filled portion of progress?",
options: ["progress-bar", "progress-fill", "bar-fill", "loader-bar"],
correctIndex: 0,
explanation: "progress-bar indicates the completed portion."
},

{
id: 51,
level: "hard",
question: "Which Bootstrap component shows loading indicators?",
options: ["Spinner", "Loader", "Progress", "Toast"],
correctIndex: 0,
explanation: "Spinners indicate loading or processing states."
},
{
id: 52,
level: "hard",
question: "Which class creates a border around an element?",
options: ["border", "outline", "frame", "box"],
correctIndex: 0,
explanation: "border adds a border to an element."
},
{
id: 53,
level: "hard",
question: "Which utility removes borders?",
options: ["border-0", "no-border", "border-none", "border-remove"],
correctIndex: 0,
explanation: "border-0 removes all borders."
},
{
id: 54,
level: "hard",
question: "Which class aligns items vertically in Flexbox?",
options: ["align-items-center", "justify-content-center", "align-center", "items-center"],
correctIndex: 0,
explanation: "align-items-center centers items along the cross axis."
},
{
id: 55,
level: "hard",
question: "Which class aligns items horizontally in Flexbox?",
options: ["justify-content-center", "align-items-center", "content-center", "center"],
correctIndex: 0,
explanation: "justify-content-center centers items along the main axis."
},

{
id: 56,
level: "easy",
question: "Which class applies a light background color?",
options: ["bg-light", "bg-white", "bg-gray", "background-light"],
correctIndex: 0,
explanation: "bg-light applies a light gray background."
},
{
id: 57,
level: "easy",
question: "Which class applies a dark background color?",
options: ["bg-dark", "bg-black", "bg-gray-dark", "dark-bg"],
correctIndex: 0,
explanation: "bg-dark applies a dark background."
},
{
id: 58,
level: "easy",
question: "Which class sets text color suitable for dark backgrounds?",
options: ["text-light", "text-white", "light-text", "font-light"],
correctIndex: 0,
explanation: "text-light provides readable text on dark backgrounds."
},
{
id: 59,
level: "easy",
question: "Which class sets text color to muted?",
options: ["text-muted", "text-fade", "text-gray", "muted"],
correctIndex: 0,
explanation: "text-muted applies a subdued text color."
},
{
id: 60,
level: "easy",
question: "Which class applies a success theme color?",
options: ["text-success", "text-green", "success-text", "ok-text"],
correctIndex: 0,
explanation: "text-success applies the success (green) color."
},

{
id: 61,
level: "medium",
question: "Which component displays short status labels?",
options: ["Badge", "Alert", "Toast", "Chip"],
correctIndex: 0,
explanation: "Badges display small count or status indicators."
},
{
id: 62,
level: "medium",
question: "Which class styles a badge?",
options: ["badge", "label", "tag", "status"],
correctIndex: 0,
explanation: "badge applies badge styling."
},
{
id: 63,
level: "medium",
question: "Which class creates pill-shaped badges?",
options: ["rounded-pill", "badge-pill", "pill", "round-badge"],
correctIndex: 0,
explanation: "rounded-pill makes badges pill-shaped."
},
{
id: 64,
level: "medium",
question: "Which Bootstrap component displays brief notifications?",
options: ["Toast", "Alert", "Modal", "Tooltip"],
correctIndex: 0,
explanation: "Toasts show brief, non-intrusive notifications."
},
{
id: 65,
level: "medium",
question: "Which class positions toast at the top right?",
options: ["top-0 end-0", "toast-top-right", "position-top-right", "top-end"],
correctIndex: 0,
explanation: "top-0 end-0 utilities position toasts in the top-right corner."
},

{
id: 66,
level: "hard",
question: "Which Bootstrap component shows contextual help on hover?",
options: ["Tooltip", "Popover", "Toast", "Modal"],
correctIndex: 0,
explanation: "Tooltips display brief information on hover or focus."
},
{
id: 67,
level: "hard",
question: "Which component shows rich content on click or hover?",
options: ["Popover", "Tooltip", "Toast", "Alert"],
correctIndex: 0,
explanation: "Popovers show more detailed content than tooltips."
},
{
id: 68,
level: "hard",
question: "Which attribute enables tooltips in Bootstrap 5?",
options: ["data-bs-toggle", "data-toggle", "data-tooltip", "toggle"],
correctIndex: 0,
explanation: "data-bs-toggle is used to enable JavaScript components."
},
{
id: 69,
level: "hard",
question: "Which Bootstrap component creates dropdown menus?",
options: ["Dropdown", "Select", "Menu", "List"],
correctIndex: 0,
explanation: "Dropdowns toggle contextual overlays for links or actions."
},
{
id: 70,
level: "hard",
question: "Which class toggles dropdown visibility?",
options: ["dropdown-toggle", "dropdown-open", "toggle-menu", "menu-toggle"],
correctIndex: 0,
explanation: "dropdown-toggle triggers the dropdown menu."
},

{
id: 71,
level: "easy",
question: "Which class adds spacing between grid columns?",
options: ["g-*", "gap-*", "col-gap-*", "space-*"],
correctIndex: 0,
explanation: "g-* controls gutters between columns."
},
{
id: 72,
level: "easy",
question: "Which utility aligns items vertically center in grid or flex?",
options: ["align-items-center", "items-center", "center-vertical", "v-center"],
correctIndex: 0,
explanation: "align-items-center vertically centers items."
},
{
id: 73,
level: "easy",
question: "Which utility aligns content horizontally center?",
options: ["justify-content-center", "content-center", "center", "align-center"],
correctIndex: 0,
explanation: "justify-content-center horizontally centers content."
},
{
id: 74,
level: "easy",
question: "Which class sets an element position to relative?",
options: ["position-relative", "relative", "pos-relative", "rel"],
correctIndex: 0,
explanation: "position-relative sets position: relative."
},
{
id: 75,
level: "easy",
question: "Which class sets an element position to absolute?",
options: ["position-absolute", "absolute", "pos-absolute", "abs"],
correctIndex: 0,
explanation: "position-absolute sets position: absolute."
},

{
id: 76,
level: "medium",
question: "Which utility fixes an element to viewport?",
options: ["position-fixed", "fixed", "pos-fixed", "lock"],
correctIndex: 0,
explanation: "position-fixed fixes an element to the viewport."
},
{
id: 77,
level: "medium",
question: "Which utility sticks an element during scroll?",
options: ["position-sticky", "sticky", "pos-sticky", "float"],
correctIndex: 0,
explanation: "position-sticky sticks element based on scroll."
},
{
id: 78,
level: "medium",
question: "Which utility places element at top?",
options: ["top-0", "top", "t-0", "y-0"],
correctIndex: 0,
explanation: "top-0 positions element at top."
},
{
id: 79,
level: "medium",
question: "Which utility places element at right?",
options: ["end-0", "right-0", "r-0", "x-0"],
correctIndex: 0,
explanation: "end-0 positions element to the right."
},
{
id: 80,
level: "medium",
question: "Which utility sets z-index to highest?",
options: ["z-3", "z-top", "z-max", "z-high"],
correctIndex: 0,
explanation: "z-3 applies a higher z-index value."
},

{
id: 81,
level: "hard",
question: "Which Bootstrap class controls column ordering?",
options: ["order-*", "col-order", "reorder", "order-col"],
correctIndex: 0,
explanation: "order-* utilities control flex item order."
},
{
id: 82,
level: "hard",
question: "Which class pushes columns to the end?",
options: ["ms-auto", "me-auto", "push-end", "float-end"],
correctIndex: 0,
explanation: "ms-auto applies auto margin to the start side."
},
{
id: 83,
level: "hard",
question: "Which utility floats an element to the right?",
options: ["float-end", "float-right", "end-float", "right"],
correctIndex: 0,
explanation: "float-end floats elements to the right in Bootstrap 5."
},
{
id: 84,
level: "hard",
question: "Which utility clears floats?",
options: ["clearfix", "clear", "float-clear", "reset"],
correctIndex: 0,
explanation: "clearfix clears floated elements."
},
{
id: 85,
level: "hard",
question: "Which Bootstrap component shows hierarchical navigation?",
options: ["Breadcrumb", "Pagination", "Navbar", "Tabs"],
correctIndex: 0,
explanation: "Breadcrumbs indicate the current page hierarchy."
},

{
id: 86,
level: "medium",
question: "Which component divides content into pages?",
options: ["Pagination", "Tabs", "Carousel", "Steps"],
correctIndex: 0,
explanation: "Pagination splits content across multiple pages."
},
{
id: 87,
level: "medium",
question: "Which component cycles through content slides?",
options: ["Carousel", "Slider", "Gallery", "Swiper"],
correctIndex: 0,
explanation: "Carousel cycles through images or content slides."
},
{
id: 88,
level: "medium",
question: "Which class activates a carousel slide?",
options: ["active", "current", "show", "open"],
correctIndex: 0,
explanation: "active marks the visible carousel item."
},
{
id: 89,
level: "medium",
question: "Which attribute enables automatic slide cycling?",
options: ["data-bs-ride", "data-ride", "auto-slide", "cycle"],
correctIndex: 0,
explanation: "data-bs-ride enables automatic carousel cycling."
},
{
id: 90,
level: "hard",
question: "Which Bootstrap component switches content without reloading?",
options: ["Tabs", "Accordion", "Collapse", "Dropdown"],
correctIndex: 0,
explanation: "Tabs switch between content sections dynamically."
},



{
id: 91,
level: "easy",
question: "Which Bootstrap class adds a border with primary color?",
options: ["border-primary", "border-blue", "primary-border", "border-main"],
correctIndex: 0,
explanation: "border-primary applies the primary theme color to the border."
},
{
id: 92,
level: "easy",
question: "Which class removes rounded corners from an element?",
options: ["rounded-0", "no-radius", "radius-none", "flat"],
correctIndex: 0,
explanation: "rounded-0 removes any border radius."
},
{
id: 93,
level: "easy",
question: "Which class makes an image thumbnail styled?",
options: ["img-thumbnail", "img-thumb", "thumbnail", "img-preview"],
correctIndex: 0,
explanation: "img-thumbnail adds a bordered thumbnail style to images."
},
{
id: 94,
level: "easy",
question: "Which class floats an element to the start?",
options: ["float-start", "float-left", "start-float", "left"],
correctIndex: 0,
explanation: "float-start floats an element to the start side."
},
{
id: 95,
level: "easy",
question: "Which class hides overflow content?",
options: ["overflow-hidden", "hidden", "d-hidden", "clip"],
correctIndex: 0,
explanation: "overflow-hidden hides overflowing content."
},

{
id: 96,
level: "medium",
question: "Which utility sets height to 100%?",
options: ["h-100", "height-100", "full-height", "h-full"],
correctIndex: 0,
explanation: "h-100 sets the element height to 100% of its parent."
},
{
id: 97,
level: "medium",
question: "Which class sets minimum viewport height?",
options: ["min-vh-100", "vh-100", "height-vh", "min-height-100"],
correctIndex: 0,
explanation: "min-vh-100 sets minimum height to full viewport."
},
{
id: 98,
level: "medium",
question: "Which utility aligns items at the bottom in Flexbox?",
options: ["align-items-end", "align-items-bottom", "items-end", "flex-end"],
correctIndex: 0,
explanation: "align-items-end aligns items to the bottom."
},
{
id: 99,
level: "medium",
question: "Which utility distributes space evenly between flex items?",
options: ["justify-content-between", "justify-content-around", "space-between", "flex-space"],
correctIndex: 0,
explanation: "justify-content-between distributes space between items."
},
{
id: 100,
level: "medium",
question: "Which utility distributes space around flex items?",
options: ["justify-content-around", "justify-content-between", "space-around", "around"],
correctIndex: 0,
explanation: "justify-content-around distributes space around items."
},

{
id: 101,
level: "medium",
question: "Which class aligns items evenly including edges?",
options: ["justify-content-evenly", "justify-content-around", "justify-content-between", "evenly"],
correctIndex: 0,
explanation: "justify-content-evenly distributes equal space including edges."
},
{
id: 102,
level: "medium",
question: "Which class centers an element absolutely?",
options: [
"top-50 start-50 translate-middle",
"center-absolute",
"absolute-center",
"position-center"
],
correctIndex: 0,
explanation: "Using top-50, start-50, and translate-middle centers absolutely positioned elements."
},
{
id: 103,
level: "medium",
question: "Which utility controls text wrapping?",
options: ["text-wrap", "wrap-text", "text-break", "word-wrap"],
correctIndex: 0,
explanation: "text-wrap controls text wrapping behavior."
},
{
id: 104,
level: "medium",
question: "Which utility prevents text wrapping?",
options: ["text-nowrap", "no-wrap", "nowrap", "text-no"],
correctIndex: 0,
explanation: "text-nowrap prevents text from wrapping."
},
{
id: 105,
level: "medium",
question: "Which utility truncates overflowing text?",
options: ["text-truncate", "truncate", "ellipsis", "text-cut"],
correctIndex: 0,
explanation: "text-truncate shortens text with ellipsis."
},

{
id: 106,
level: "hard",
question: "Which Bootstrap component collapses content vertically?",
options: ["Collapse", "Accordion", "Dropdown", "Tabs"],
correctIndex: 0,
explanation: "Collapse shows or hides content vertically."
},
{
id: 107,
level: "hard",
question: "Which class enables collapse behavior?",
options: ["collapse", "collapsible", "collapse-show", "hide"],
correctIndex: 0,
explanation: "collapse enables collapsible content."
},
{
id: 108,
level: "hard",
question: "Which class shows collapsed content?",
options: ["show", "open", "active", "visible"],
correctIndex: 0,
explanation: "show makes collapsed content visible."
},
{
id: 109,
level: "hard",
question: "Which component allows only one item open at a time?",
options: ["Accordion", "Collapse", "Tabs", "Navbar"],
correctIndex: 0,
explanation: "Accordion ensures only one section is open."
},
{
id: 110,
level: "hard",
question: "Which attribute links accordion items together?",
options: ["data-bs-parent", "data-parent", "parent-id", "accordion-parent"],
correctIndex: 0,
explanation: "data-bs-parent groups accordion items."
},

{
id: 111,
level: "easy",
question: "Which class adds a close (X) button?",
options: ["btn-close", "close", "btn-x", "close-btn"],
correctIndex: 0,
explanation: "btn-close creates a close button."
},
{
id: 112,
level: "easy",
question: "Which class makes a button disabled?",
options: ["disabled", "btn-disabled", "disable", "inactive"],
correctIndex: 0,
explanation: "disabled prevents button interaction."
},
{
id: 113,
level: "easy",
question: "Which class visually disables a link?",
options: ["disabled", "link-disabled", "text-muted", "inactive"],
correctIndex: 0,
explanation: "disabled visually and functionally disables links."
},
{
id: 114,
level: "easy",
question: "Which class creates a horizontal divider?",
options: ["dropdown-divider", "hr", "divider", "line"],
correctIndex: 0,
explanation: "dropdown-divider adds a horizontal divider."
},
{
id: 115,
level: "easy",
question: "Which class styles form labels?",
options: ["form-label", "label", "input-label", "field-label"],
correctIndex: 0,
explanation: "form-label styles labels consistently."
},

{
id: 116,
level: "medium",
question: "Which class styles text inputs?",
options: ["form-control", "input", "text-input", "form-input"],
correctIndex: 0,
explanation: "form-control styles text-based form inputs."
},
{
id: 117,
level: "medium",
question: "Which class styles select dropdowns?",
options: ["form-select", "select", "dropdown-select", "input-select"],
correctIndex: 0,
explanation: "form-select styles select elements."
},
{
id: 118,
level: "medium",
question: "Which class groups form controls and buttons?",
options: ["input-group", "form-group", "control-group", "group"],
correctIndex: 0,
explanation: "input-group groups inputs with buttons or text."
},
{
id: 119,
level: "medium",
question: "Which class adds validation success state?",
options: ["is-valid", "valid", "success", "form-valid"],
correctIndex: 0,
explanation: "is-valid applies success validation styling."
},
{
id: 120,
level: "medium",
question: "Which class adds validation error state?",
options: ["is-invalid", "invalid", "error", "form-error"],
correctIndex: 0,
explanation: "is-invalid applies error validation styling."
},

{
id: 121,
level: "hard",
question: "Which class displays validation feedback text?",
options: ["invalid-feedback", "error-text", "feedback", "form-error"],
correctIndex: 0,
explanation: "invalid-feedback shows validation messages."
},
{
id: 122,
level: "hard",
question: "Which class displays success feedback text?",
options: ["valid-feedback", "success-text", "ok-feedback", "feedback-success"],
correctIndex: 0,
explanation: "valid-feedback shows success messages."
},
{
id: 123,
level: "hard",
question: "Which Bootstrap component handles off-canvas menus?",
options: ["Offcanvas", "Sidebar", "Drawer", "Panel"],
correctIndex: 0,
explanation: "Offcanvas creates hidden side panels."
},
{
id: 124,
level: "hard",
question: "Which class initializes offcanvas component?",
options: ["offcanvas", "canvas", "off-screen", "drawer"],
correctIndex: 0,
explanation: "offcanvas initializes off-canvas panels."
},
{
id: 125,
level: "hard",
question: "Which attribute toggles offcanvas visibility?",
options: ["data-bs-toggle", "data-toggle", "toggle-canvas", "canvas-toggle"],
correctIndex: 0,
explanation: "data-bs-toggle is used to toggle Bootstrap components."
},

{
id: 126,
level: "easy",
question: "Which utility hides content on print?",
options: ["d-print-none", "print-hide", "no-print", "hidden-print"],
correctIndex: 0,
explanation: "d-print-none hides elements when printing."
},
{
id: 127,
level: "easy",
question: "Which utility shows content only on print?",
options: ["d-print-block", "print-show", "print-only", "show-print"],
correctIndex: 0,
explanation: "d-print-block shows content only in print."
},
{
id: 128,
level: "easy",
question: "Which class makes text lowercase?",
options: ["text-lowercase", "lowercase", "text-small", "case-lower"],
correctIndex: 0,
explanation: "text-lowercase transforms text to lowercase."
},
{
id: 129,
level: "easy",
question: "Which class capitalizes the first letter of each word?",
options: ["text-capitalize", "capitalize", "text-upper", "title-case"],
correctIndex: 0,
explanation: "text-capitalize capitalizes each word."
},
{
id: 130,
level: "easy",
question: "Which class transforms text to uppercase?",
options: ["text-uppercase", "uppercase", "text-upper", "caps"],
correctIndex: 0,
explanation: "text-uppercase transforms text to uppercase."
},

{
id: 131,
level: "medium",
question: "Which utility controls text opacity?",
options: ["text-opacity-*", "opacity-text", "text-alpha", "fade-text"],
correctIndex: 0,
explanation: "text-opacity-* controls text transparency."
},
{
id: 132,
level: "medium",
question: "Which utility controls background opacity?",
options: ["bg-opacity-*", "opacity-bg", "bg-alpha", "fade-bg"],
correctIndex: 0,
explanation: "bg-opacity-* controls background transparency."
},
{
id: 133,
level: "medium",
question: "Which class sets position to fixed top?",
options: ["fixed-top", "top-fixed", "position-top", "stick-top"],
correctIndex: 0,
explanation: "fixed-top fixes element to top of viewport."
},
{
id: 134,
level: "medium",
question: "Which class sets position to fixed bottom?",
options: ["fixed-bottom", "bottom-fixed", "position-bottom", "stick-bottom"],
correctIndex: 0,
explanation: "fixed-bottom fixes element to bottom."
},
{
id: 135,
level: "medium",
question: "Which class makes images responsive in grid?",
options: ["img-fluid", "responsive-img", "img-responsive", "fluid-img"],
correctIndex: 0,
explanation: "img-fluid ensures responsive images."
},

{
id: 136,
level: "hard",
question: "Which Bootstrap JS dependency was removed in Bootstrap 5?",
options: ["jQuery", "Popper", "React", "Angular"],
correctIndex: 0,
explanation: "Bootstrap 5 removed jQuery dependency."
},
{
id: 137,
level: "hard",
question: "Which library is used for positioning tooltips?",
options: ["Popper", "jQuery", "Tether", "PositionJS"],
correctIndex: 0,
explanation: "Popper handles tooltip and popover positioning."
},
{
id: 138,
level: "hard",
question: "Which Bootstrap method initializes tooltips via JavaScript?",
options: ["new bootstrap.Tooltip()", "bootstrap.tooltip()", "initTooltip()", "Tooltip.init()"],
correctIndex: 0,
explanation: "new bootstrap.Tooltip() initializes tooltips."
},
{
id: 139,
level: "hard",
question: "Which method disposes a Bootstrap component?",
options: ["dispose()", "destroy()", "remove()", "close()"],
correctIndex: 0,
explanation: "dispose() cleans up component resources."
},
{
id: 140,
level: "hard",
question: "Which event fires when a modal is fully shown?",
options: ["shown.bs.modal", "show.bs.modal", "open.bs.modal", "display.bs.modal"],
correctIndex: 0,
explanation: "shown.bs.modal fires after modal is visible."
},

{
id: 141,
level: "hard",
question: "Which event fires before a modal is shown?",
options: ["show.bs.modal", "shown.bs.modal", "open.bs.modal", "before.modal"],
correctIndex: 0,
explanation: "show.bs.modal fires before modal appears."
},
{
id: 142,
level: "hard",
question: "Which event fires when a modal is hidden?",
options: ["hidden.bs.modal", "hide.bs.modal", "close.bs.modal", "off.bs.modal"],
correctIndex: 0,
explanation: "hidden.bs.modal fires after modal is hidden."
},
{
id: 143,
level: "hard",
question: "Which event fires before a collapse element hides?",
options: ["hide.bs.collapse", "hidden.bs.collapse", "close.bs.collapse", "off.bs.collapse"],
correctIndex: 0,
explanation: "hide.bs.collapse fires before collapsing."
},
{
id: 144,
level: "hard",
question: "Which event fires after a collapse element is shown?",
options: ["shown.bs.collapse", "show.bs.collapse", "open.bs.collapse", "display.bs.collapse"],
correctIndex: 0,
explanation: "shown.bs.collapse fires after expansion."
},
{
id: 145,
level: "hard",
question: "Which event fires when a tooltip is hidden?",
options: ["hidden.bs.tooltip", "hide.bs.tooltip", "close.bs.tooltip", "off.bs.tooltip"],
correctIndex: 0,
explanation: "hidden.bs.tooltip fires after tooltip hides."
},

{
id: 146,
level: "easy",
question: "Which class makes text wrap normally?",
options: ["text-wrap", "wrap", "normal-wrap", "auto-wrap"],
correctIndex: 0,
explanation: "text-wrap allows normal wrapping."
},
{
id: 147,
level: "easy",
question: "Which utility adds gap between flex items?",
options: ["gap-*", "g-*", "space-*", "flex-gap"],
correctIndex: 0,
explanation: "gap-* adds spacing between flex or grid items."
},
{
id: 148,
level: "easy",
question: "Which utility adds small shadow?",
options: ["shadow-sm", "shadow-small", "shadow-light", "sm-shadow"],
correctIndex: 0,
explanation: "shadow-sm applies a small shadow."
},
{
id: 149,
level: "easy",
question: "Which utility adds large shadow?",
options: ["shadow-lg", "shadow-large", "shadow-heavy", "lg-shadow"],
correctIndex: 0,
explanation: "shadow-lg applies a large shadow."
},
{
id: 150,
level: "easy",
question: "Which class removes all shadows?",
options: ["shadow-none", "no-shadow", "shadow-0", "remove-shadow"],
correctIndex: 0,
explanation: "shadow-none removes all shadows."
},

{
id: 151,
level: "medium",
question: "Which utility sets opacity to 50%?",
options: ["opacity-50", "opacity-half", "alpha-50", "fade-50"],
correctIndex: 0,
explanation: "opacity-50 sets element opacity to 50%."
},
{
id: 152,
level: "medium",
question: "Which utility sets overflow to auto?",
options: ["overflow-auto", "auto-overflow", "scroll-auto", "overflow"],
correctIndex: 0,
explanation: "overflow-auto adds scrollbars when needed."
},
{
id: 153,
level: "medium",
question: "Which utility enables vertical scrolling?",
options: ["overflow-y-auto", "scroll-y", "y-scroll", "overflow-vertical"],
correctIndex: 0,
explanation: "overflow-y-auto enables vertical scrolling."
},
{
id: 154,
level: "medium",
question: "Which utility enables horizontal scrolling?",
options: ["overflow-x-auto", "scroll-x", "x-scroll", "overflow-horizontal"],
correctIndex: 0,
explanation: "overflow-x-auto enables horizontal scrolling."
},
{
id: 155,
level: "medium",
question: "Which utility makes element unselectable?",
options: ["user-select-none", "no-select", "select-off", "disable-select"],
correctIndex: 0,
explanation: "user-select-none prevents text selection."
},

{
id: 156,
level: "hard",
question: "Which utility enables pointer events?",
options: ["pe-auto", "pointer-auto", "events-on", "enable-pointer"],
correctIndex: 0,
explanation: "pe-auto enables pointer events."
},
{
id: 157,
level: "hard",
question: "Which utility disables pointer events?",
options: ["pe-none", "pointer-none", "events-off", "disable-pointer"],
correctIndex: 0,
explanation: "pe-none disables pointer interactions."
},
{
id: 158,
level: "hard",
question: "Which class makes text selectable again?",
options: ["user-select-auto", "select-auto", "enable-select", "text-select"],
correctIndex: 0,
explanation: "user-select-auto restores default selection behavior."
},
{
id: 159,
level: "hard",
question: "Which utility controls vertical alignment of inline elements?",
options: ["align-baseline", "vertical-align", "baseline", "inline-align"],
correctIndex: 0,
explanation: "align-baseline aligns inline elements to baseline."
},
{
id: 160,
level: "hard",
question: "Which utility aligns inline elements to middle?",
options: ["align-middle", "align-center", "middle", "inline-center"],
correctIndex: 0,
explanation: "align-middle vertically aligns inline elements."
},

{
id: 161,
level: "hard",
question: "Which utility aligns inline elements to top?",
options: ["align-top", "align-start", "top-align", "inline-top"],
correctIndex: 0,
explanation: "align-top aligns inline elements to the top."
},
{
id: 162,
level: "hard",
question: "Which utility aligns inline elements to bottom?",
options: ["align-bottom", "align-end", "bottom-align", "inline-bottom"],
correctIndex: 0,
explanation: "align-bottom aligns inline elements to the bottom."
},
{
id: 163,
level: "hard",
question: "Which utility aligns text vertically inside table cells?",
options: ["align-middle", "text-middle", "v-center", "center-vertical"],
correctIndex: 0,
explanation: "align-middle vertically centers table cell content."
},
{
id: 164,
level: "hard",
question: "Which utility enables smooth scrolling?",
options: ["scroll-behavior-smooth", "smooth-scroll", "scroll-smooth", "animate-scroll"],
correctIndex: 0,
explanation: "scroll-behavior-smooth enables smooth scrolling."
},
{
id: 165,
level: "hard",
question: "Which utility controls visibility without affecting layout?",
options: ["invisible", "d-none", "hidden", "collapse"],
correctIndex: 0,
explanation: "invisible hides element but keeps layout space."
},

{
id: 166,
level: "easy",
question: "Which class shows element again after invisible?",
options: ["visible", "show", "d-block", "display"],
correctIndex: 0,
explanation: "visible restores element visibility."
},
{
id: 167,
level: "easy",
question: "Which utility adds underline to text?",
options: ["text-decoration-underline", "underline", "text-underline", "decoration"],
correctIndex: 0,
explanation: "text-decoration-underline underlines text."
},
{
id: 168,
level: "easy",
question: "Which utility removes text decoration?",
options: ["text-decoration-none", "no-decoration", "remove-underline", "text-clean"],
correctIndex: 0,
explanation: "text-decoration-none removes underlines."
},
{
id: 169,
level: "easy",
question: "Which class adds line-through text?",
options: ["text-decoration-line-through", "strike", "line-through", "text-strike"],
correctIndex: 0,
explanation: "text-decoration-line-through applies strikethrough."
},
{
id: 170,
level: "easy",
question: "Which utility resets font weight to normal?",
options: ["fw-normal", "font-normal", "text-normal", "weight-reset"],
correctIndex: 0,
explanation: "fw-normal sets font weight to normal."
},

{
id: 171,
level: "medium",
question: "Which utility sets font weight lighter?",
options: ["fw-light", "font-light", "weight-light", "light"],
correctIndex: 0,
explanation: "fw-light applies lighter font weight."
},
{
id: 172,
level: "medium",
question: "Which utility sets font weight bolder?",
options: ["fw-bolder", "font-bolder", "weight-bold", "bolder"],
correctIndex: 0,
explanation: "fw-bolder applies bolder font weight."
},
{
id: 173,
level: "medium",
question: "Which utility sets font size smaller?",
options: ["fs-6", "text-sm", "small", "font-small"],
correctIndex: 0,
explanation: "fs-6 applies smaller font size."
},
{
id: 174,
level: "medium",
question: "Which utility sets font size larger?",
options: ["fs-1", "text-lg", "large", "font-large"],
correctIndex: 0,
explanation: "fs-1 applies largest font size."
},
{
id: 175,
level: "medium",
question: "Which utility sets font size responsive?",
options: ["fs-*", "text-responsive", "font-auto", "responsive-font"],
correctIndex: 0,
explanation: "fs-* utilities control font sizes."
},

{
id: 176,
level: "hard",
question: "Which Bootstrap utility system is based on rem units?",
options: ["Spacing utilities", "Grid system", "Color system", "Display utilities"],
correctIndex: 0,
explanation: "Bootstrap spacing utilities use rem units."
},
{
id: 177,
level: "hard",
question: "Which Bootstrap feature ensures mobile-first design?",
options: ["Responsive breakpoints", "Flex utilities", "Grid rows", "Containers"],
correctIndex: 0,
explanation: "Bootstrap uses mobile-first responsive breakpoints."
},
{
id: 178,
level: "hard",
question: "Which breakpoint targets extra large screens?",
options: ["xxl", "xl", "lg", "md"],
correctIndex: 0,
explanation: "xxl targets very large screens."
},
{
id: 179,
level: "hard",
question: "Which breakpoint is applied by default without prefix?",
options: ["xs", "sm", "md", "lg"],
correctIndex: 0,
explanation: "xs is the default breakpoint with no prefix."
},
{
id: 180,
level: "hard",
question: "Which Bootstrap version introduced utility API?",
options: ["Bootstrap 5", "Bootstrap 4", "Bootstrap 3", "Bootstrap 2"],
correctIndex: 0,
explanation: "Bootstrap 5 introduced the utility API for customization."
}
];

