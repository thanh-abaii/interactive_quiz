import { Question } from '../types/quiz';

export const questionPool: Question[] = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinking Text Management Language"
    ],
    correctAnswer: 0,
    explanation: "HTML stands for Hypertext Markup Language. It's the standard markup language for creating web pages and web applications.",
    category: "HTML"
  },
  {
    id: 2,
    question: "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "foreground-color"],
    correctAnswer: 2,
    explanation: "The 'color' property in CSS is used to set the color of text content in an element.",
    category: "CSS"
  },
  {
    id: 3,
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["variable myVar;", "var myVar;", "declare myVar;", "v myVar;"],
    correctAnswer: 1,
    explanation: "In JavaScript, variables are declared using 'var', 'let', or 'const' keywords. 'var myVar;' is the traditional way to declare a variable.",
    category: "JavaScript"
  },
  {
    id: 4,
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<link>", "<href>", "<a>", "<url>"],
    correctAnswer: 2,
    explanation: "The <a> (anchor) tag is used to create hyperlinks in HTML. The 'href' attribute specifies the URL of the page the link goes to.",
    category: "HTML"
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 0,
    explanation: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media.",
    category: "CSS"
  },
  {
    id: 6,
    question: "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["append()", "push()", "add()", "insert()"],
    correctAnswer: 1,
    explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
    category: "JavaScript"
  },
  {
    id: 7,
    question: "What is the correct HTML tag for the largest heading?",
    options: ["<h6>", "<head>", "<h1>", "<heading>"],
    correctAnswer: 2,
    explanation: "<h1> represents the largest heading in HTML. Headings range from <h1> (largest) to <h6> (smallest).",
    category: "HTML"
  },
  {
    id: 8,
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "text-style", "font-style", "text-weight"],
    correctAnswer: 0,
    explanation: "The font-weight property in CSS is used to set how thick or thin characters should be displayed. 'bold' or numeric values like 700 make text bold.",
    category: "CSS"
  },
  {
    id: 9,
    question: "What is the correct way to write a JavaScript comment?",
    options: ["<!-- This is a comment -->", "// This is a comment", "# This is a comment", "/* This is a comment"],
    correctAnswer: 1,
    explanation: "In JavaScript, single-line comments start with //. Multi-line comments are enclosed between /* and */.",
    category: "JavaScript"
  },
  {
    id: 10,
    question: "Which HTML attribute is used to specify an inline style?",
    options: ["class", "style", "styles", "css"],
    correctAnswer: 1,
    explanation: "The 'style' attribute is used to add inline CSS styles directly to HTML elements.",
    category: "HTML"
  },
  {
    id: 11,
    question: "What does the CSS property 'display: flex' do?",
    options: [
      "Makes text flexible in size",
      "Creates a flexible layout container",
      "Displays content in a fixed position",
      "Makes images flexible"
    ],
    correctAnswer: 1,
    explanation: "The 'display: flex' property creates a flex container, enabling flexible layouts with powerful alignment and distribution capabilities.",
    category: "CSS"
  },
  {
    id: 12,
    question: "Which JavaScript method is used to remove the last element from an array?",
    options: ["pop()", "remove()", "delete()", "removeLast()"],
    correctAnswer: 0,
    explanation: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
    category: "JavaScript"
  },
  {
    id: 13,
    question: "What is the correct HTML tag for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<newline>"],
    correctAnswer: 2,
    explanation: "The <br> tag inserts a single line break in HTML. It's a self-closing tag and doesn't require a closing tag.",
    category: "HTML"
  },
  {
    id: 14,
    question: "Which CSS selector targets elements with a specific class?",
    options: ["#classname", ".classname", "*classname", "@classname"],
    correctAnswer: 1,
    explanation: "The dot (.) selector targets elements with a specific class attribute. For example, '.button' targets all elements with class='button'.",
    category: "CSS"
  },
  {
    id: 15,
    question: "What is the result of '3' + 2 in JavaScript?",
    options: ["5", "'32'", "32", "Error"],
    correctAnswer: 1,
    explanation: "In JavaScript, when you use the + operator with a string and number, it performs string concatenation. '3' + 2 results in the string '32'.",
    category: "JavaScript"
  }
];