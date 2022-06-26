const generateUniqueId = () => Math.floor(100000 + Math.random() * 900000);
const list = [
  {
    question: "An HTML document can contain _____",
    options: [
      { text: "Attributes", id: generateUniqueId() },
      { text: "Tags", id: generateUniqueId() },
      { text: "Raw text", id: generateUniqueId() },
      { text: "All the answers are true", id: generateUniqueId() },
    ],
    answer: "All the answers are true",
  },
  {
    id: generateUniqueId(),
    question: "A page designed in HTML is called _____",
    options: [
      { text: "Application", id: generateUniqueId() },
      { text: "Cover page", id: generateUniqueId() },
      { text: "Front-end", id: generateUniqueId() },
      { text: "Web Page", id: generateUniqueId() },
    ],
    answer: "Web Page",
  },
  {
    id: generateUniqueId(),
    question: "The HTML document contains a root tag called ____",
    options: [
      { text: "HEAD", id: generateUniqueId() },
      { text: "Title", id: generateUniqueId() },
      { text: "Body", id: generateUniqueId() },
      { text: "HTML", id: generateUniqueId() },
    ],
    answer: "HTML",
  },
  {
    id: generateUniqueId(),
    question:
      "If we want to place text around an image, which CSS property should we use?",
    options: [
      { text: "push", id: generateUniqueId() },
      { text: "float", id: generateUniqueId() },
      { text: "align", id: generateUniqueId() },
      { text: "wrap", id: generateUniqueId() },
    ],
    answer: "float",
  },
  {
    id: generateUniqueId(),
    question:
      "Can we align an element by setting margin-left and margin-right?",
    options: [
      { text: "Yes its possible.", id: generateUniqueId() },
      { text: "No, its not possible.", id: generateUniqueId() },
    ],
    answer: "No, its not possible.",
  },
  {
    id: generateUniqueId(),
    question: "Choose the correct HTML tag for a large title.",
    options: [
      { text: "H1", id: generateUniqueId() },
      { text: "Heading", id: generateUniqueId() },
      { text: "Head", id: generateUniqueId() },
      { text: "H6", id: generateUniqueId() },
    ],
    answer: "H1",
  },
  {
    id: generateUniqueId(),
    question:
      "If we want to use a nice green dotted border around an image, which css property are we going to use?",
    options: [
      { text: "border-line", id: generateUniqueId() },
      { text: "border-style", id: generateUniqueId() },
      { text: "border-decoration", id: generateUniqueId() },
      { text: "border-color", id: generateUniqueId() },
    ],
    answer: "border-style",
  },
  {
    id: generateUniqueId(),
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    options: [
      { text: "var", id: generateUniqueId() },
      { text: "let", id: generateUniqueId() },
      { text: "Both A and B", id: generateUniqueId() },
      { text: "None of the above", id: generateUniqueId() },
    ],
    answer: "Both A and B",
  },
  {
    id: generateUniqueId(),
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    options: [
      { text: "getElementById()", id: generateUniqueId() },
      { text: "getElementByClassName()", id: generateUniqueId() },
      { text: "Both A and B", id: generateUniqueId() },
      { text: "None of the above", id: generateUniqueId() },
    ],
    answer: "Both A and B",
  },
  {
    id: generateUniqueId(),
    question: "How can a datatype be declared to be a constant type?",
    options: [
      { text: "const", id: generateUniqueId() },
      { text: "var", id: generateUniqueId() },
      { text: "let", id: generateUniqueId() },
      { text: "constant", id: generateUniqueId() },
    ],
    answer: "const",
  },
];
export default list;
