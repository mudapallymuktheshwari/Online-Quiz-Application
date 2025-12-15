export const sampleQuestions = [
  {
    id: 1,
    question: "1. What is the Virtual DOM in React",
    options: [
      "(A) A physical representation of the DOM",
      "(B) lightweight JavaScript representation of the DOM",
      "(C) A database foe storing DOM elements",
      "(D) A CSS framework for styling",
    ],
    correctAnswer: 1,
    explanation:
      "The Virtual DOM (VDOM) in React is a programming concept where a virtual, lightweight representation of the UI is kept in memory and synced with the real Document Object Model (DOM) by a library like React DOM. ",
  },

  {
    id: 2,
    question: "2. What hook is used for state management in functional component?",
    options: [
    "(A) useState", 
    "(B) useContext",
    "(C) useEffect", 
    "(D) useReducer",
    ],
    correctAnswer: 0,
    explanation:
    "The primary hook used for state management in React functional components is useState.",
  },

  {
    id: 3,
    question: "3. What are props in React?",
    options:[
      "(A) Internal data managed by a component that can change over time.",
      "(B) Arguments passed into React components from their parent components.",
      "(C) Methods used to handle user interactions within a component.",
      "(D) A mechanism for managing global state in a React application.",
    ],
    correctAnswer: 1,
    explanation:
    "In React, props is short for properties. They are a fundamental mechanism for passing data from one component to another, typically from a parent component to its child components."
     },

  {
  id: 4,
  question: "4. What is JSX in React",
  options:[
    "(A) A syntax extension for JavaScript that allows you to write HTML-Like code in JavaScript.",
    "(B) A JavaScript library for managing asynchronous operations.",
    "(C) A testing framework for React applications.",
    "(D) A build tool used to compile React code.",
  ],
  correctAnswer: 0,
  explanation:
  "JSX (JavaScript XML) allows developers to write HTML-like syntax inside JavaScript, making UI code more readable.",
  },

  {
  id: 5,
  question: "5. What happens when you call setState in React?",
  options:[
    "(A) State changes immediately",
    "(B) React schedules a re-render",
    "(C) Component gets destroyed",
    "(D) Nothing happens",
  ],
  correctAnswer: 1,
  explanation:
  "setState is asynchronous; it schedules a re-render with updated state.",
  },

  {
  id: 6,
  question: "6. Which method is used to create React components in ES6?",
  options:[
    "(A) function Component() {}",
    "(B) class Component extends React.Component {}",
    "(C) React.createComponent()",
    "(D) Both A and B",
  ],
  correctAnswer: 3,
  explanation:
  "Components can be created using functional components (A) and class components (B).",
  },

  {
  id: 7,
  question: "7. What is the purpose of useRef hook?",
  options:[
    "(A) To manage global state",
    "(B) To memoize functions",
    "(C) To reference DOM elements or store mutable values",
    "(D) To replace Redux",
  ],
  correctAnswer: 2,
  explanation:
  "useRef provides a way to persist values without re-rendering and access DOM nodes directly.",
  },

  {
  id: 8,
  question: "8. Which of the following improves performance in React apps?",
  options:[
    "(A) Using React.memo",
    "(B) Avoiding keys in lists",
    "(C) Using setState inside loops",
    "(D) Keeping state deep inside nested components",
  ],
  correctAnswer: 0,
  explanation:
  "React.memo prevents unnecessary re-renders of functional components when props don’t change.",
  },

  {
    id: 9,
    question: "9. In React Router, which component is used for navigation?",
    options: [
      "(A) <Nav>",
      "(B) <Link>",
      "(C) <NavigateTo>",
      "(D) <Redirect></Redirect>",
    ],
    correctAnswer: 1,
    explanation:
    "<Link> is used to navigate between routes without refreshing the page.",
  },

  {
    id: 10,
    question: "10. What is the correct way to update state in React?",
    options: [
      "(A) this.state.count = 10",
      "(B) this.setState({ count: 10 })",
      "(C) updateState(count, 10)",
      "(D) set.count(10)",
    ],
    correctAnswer: 1,
    explanation:
    "In class components, state can only be updated using setState(), not by directly modifying this.state"
  }
]

