export const quizData = {
    topics: [
      {
        id: "aptitude",
        name: "Aptitude",
        levels: {
          easy: [
            {
              id: 1,
              question: "What is 15% of 200?",
              options: ["20", "30", "25", "35"],
              correctAnswer: 1,
              explanation: "15% of 200 = (15/100) × 200 = 30"
            },
            {
              id: 2,
              question: "If a train travels 60 miles in 1 hour, how far will it travel in 3 hours?",
              options: ["120 miles", "180 miles", "150 miles", "200 miles"],
              correctAnswer: 1,
              explanation: "Distance = Speed × Time = 60 × 3 = 180 miles"
            },
            {
              id: 3,
              question: "What is the next number in the series: 2, 4, 6, 8, ...?",
              options: ["9", "10", "11", "12"],
              correctAnswer: 1,
              explanation: "The pattern adds 2 to each number, so after 8 comes 10"
            },
            {
              id: 4,
              question: "If a rectangle has a length of 10 and a width of 5, what is its area?",
              options: ["50", "25", "15", "30"],
              correctAnswer: 0,
              explanation: "Area of rectangle = length × width = 10 × 5 = 50"
            },
            {
              id: 5,
              question: "What is the sum of angles in a triangle?",
              options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
              correctAnswer: 1,
              explanation: "The sum of angles in a triangle is always 180 degrees"
            },
            {
              id: 6,
              question: "If you roll a die, what is the probability of rolling a 3?",
              options: ["1/6", "1/3", "1/2", "1/4"],
              correctAnswer: 0,
              explanation: "A die has 6 equal faces, so probability of any number is 1/6"
            },
            {
              id: 7,
              question: "What is the value of x in the equation 2x + 3 = 7?",
              options: ["1", "2", "3", "4"],
              correctAnswer: 1,
              explanation: "2x + 3 = 7; 2x = 4; x = 2"
            },
            {
              id: 8,
              question: "If a car travels at 50 mph for 2 hours, how far does it go?",
              options: ["100 miles", "150 miles", "200 miles", "250 miles"],
              correctAnswer: 0,
              explanation: "Distance = Speed × Time = 50 × 2 = 100 miles"
            },
            {
              id: 9,
              question: "What is the median of the numbers: 3, 5, 7, 9, 11?",
              options: ["5", "6", "7", "8"],
              correctAnswer: 2,
              explanation: "In the ordered list 3,5,7,9,11, the middle number is 7"
            },
            {
              id: 10,
              question: "If a bag contains 3 red balls and 2 blue balls, what is the probability of picking a red ball?",
              options: ["2/5", "3/5", "1/2", "1/5"],
              correctAnswer: 1,
              explanation: "Probability = Number of favorable outcomes / Total outcomes = 3/5"
            }
          ],
          difficult: [
            {
              id: 1,
              question: "A man is 4 times as old as his son. In 20 years, he will be twice as old as his son. How old is the son now?",
              options: ["10", "15", "20", "25"],
              correctAnswer: 2,
              explanation: "Let son's age be x. Then: 4x + 20 = 2(x + 20). Solving this: 4x + 20 = 2x + 40; 2x = 20; x = 20"
            },
            {
              id: 2,
              question: "If the ratio of the ages of A and B is 3:4 and the sum of their ages is 56, what is A's age?",
              options: ["24", "28", "32", "36"],
              correctAnswer: 0,
              explanation: "Let A's age be 3x and B's age be 4x. Then: 3x + 4x = 56; 7x = 56; x = 8. So A's age = 3 × 8 = 24"
            },
            {
              id: 3,
              question: "A sum of money doubles itself in 5 years at simple interest. What is the rate of interest?",
              options: ["10%", "12%", "15%", "20%"],
              correctAnswer: 3,
              explanation: "Using SI formula: Amount = Principal(1 + rt), 2P = P(1 + 5r), 1 = 5r, r = 20%"
            },
            {
              id: 4,
              question: "If a and b are two numbers such that a + b = 20 and a - b = 4, what is the value of a?",
              options: ["12", "10", "8", "6"],
              correctAnswer: 0,
              explanation: "From equations: a + b = 20 and a - b = 4, adding them: 2a = 24, therefore a = 12"
            },
            {
              id: 5,
              question: "If the perimeter of a square is 64 cm, what is the area of the square?",
              options: ["256 cm²", "128 cm²", "64 cm²", "32 cm²"],
              correctAnswer: 0,
              explanation: "Perimeter = 4s, where s is side. So 64 = 4s, s = 16. Area = s² = 16² = 256 cm²"
            },
            {
              id: 6,
              question: "A man can complete a work in 10 days, and another man can complete the same work in 15 days. How long will they take to complete the work together?",
              options: ["6 days", "8 days", "10 days", "12 days"],
              correctAnswer: 0,
              explanation: "Using work formula: 1/x = 1/10 + 1/15 = (3+2)/30 = 5/30, therefore x = 6 days"
            },
            {
              id: 7,
              question: "If the cost price of an article is $200 and the selling price is $250, what is the profit percentage?",
              options: ["20%", "25%", "30%", "35%"],
              correctAnswer: 1,
              explanation: "Profit % = (Profit/CP) × 100 = (50/200) × 100 = 25%"
            },
            {
              id: 8,
              question: "A boat can go 30 km upstream and 45 km downstream in 6 hours. If the speed of the boat in still water is 12 km/h, what is the speed of the current?",
              options: ["2 km/h", "3 km/h", "4 km/h", "5 km/h"],
              correctAnswer: 1,
              explanation: "Let current speed be x. Then: 30/(12-x) + 45/(12+x) = 6. Solving this gives x = 3"
            },
            {
              id: 9,
              question: "If the sum of the squares of two consecutive integers is 85, what are the integers?",
              options: ["6 and 7", "7 and 8", "8 and 9", "9 and 10"],
              correctAnswer: 0,
              explanation: "Let numbers be n and n+1. Then n² + (n+1)² = 85. Solving gives n = 6"
            },
            {
              id: 10,
              question: "Three pipes A, B and C can fill a tank in 6 hours, 8 hours, and 12 hours respectively. How long will they take to fill the tank together?",
              options: ["2.4 hours", "3.2 hours", "4.8 hours", "5.6 hours"],
              correctAnswer: 0,
              explanation: "1/t = 1/6 + 1/8 + 1/12 = (24+18+12)/144 = 54/144 = 3/8, therefore t = 8/3 = 2.4 hours"
            }
          ]
        }
      },
      {
        id: "html",
        name: "HTML",
        levels: {
          easy: [
            {
              id: 1,
              question: "What does HTML stand for?",
              options: [
                "Hyper Text Markup Language",
                "High Text Markup Language",
                "Hyperlink and Text Markup Language",
                "Hyper Text Markup Link"
              ],
              correctAnswer: 0,
              explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages"
            },
            {
              id: 2,
              question: "Which HTML tag is used to define an internal style sheet?",
              options: ["<style>", "<css>", "<script>", "<link>"],
              correctAnswer: 0,
              explanation: "The <style> tag is used to define internal CSS styling within an HTML document"
            },
            {
              id: 3,
              question: "Which HTML element is used to create a hyperlink?",
              options: ["<link>", "<a>", "<href>", "<url>"],
              correctAnswer: 1,
              explanation: "The <a> tag is used to create hyperlinks in HTML"
            },
            {
              id: 4,
              question: "What is the correct HTML element for inserting a line break?",
              options: ["<break>", "<br>", "<lb>", "<newline>"],
              correctAnswer: 1,
              explanation: "The <br> tag is used to insert a single line break in HTML"
            },
            {
              id: 5,
              question: "Which HTML attribute is used to define inline styles?",
              options: ["styles", "class", "style", "font"],
              correctAnswer: 2,
              explanation: "The style attribute is used to specify inline CSS styles for an element"
            },
            {
              id: 6,
              question: "What is the purpose of the <head> tag in HTML?",
              options: [
                "To define the main content",
                "To contain meta-information",
                "To create a footer",
                "To display images"
              ],
              correctAnswer: 1,
              explanation: "The <head> tag contains meta information about the HTML document"
            },
            {
              id: 7,
              question: "Which HTML tag is used to define an unordered list?",
              options: ["<ol>", "<ul>", "<list>", "<li>"],
              correctAnswer: 1,
              explanation: "The <ul> tag defines an unordered (bulleted) list"
            },
            {
              id: 8,
              question: "What is the correct HTML for creating a checkbox?",
              options: [
                "<input type=\"checkbox\">",
                "<checkbox>",
                "<input type=\"check\">",
                "<check>"
              ],
              correctAnswer: 0,
              explanation: "The <input type=\"checkbox\"> creates a checkbox input element"
            },
            {
              id: 9,
              question: "Which HTML element is used to define a table?",
              options: ["<table>", "<tab>", "<tbody>", "<tr>"],
              correctAnswer: 0,
              explanation: "The <table> tag is used to create a table in HTML"
            },
            {
              id: 10,
              question: "What does the <title> tag do in HTML?",
              options: [
                "Displays the title on the webpage",
                "Sets the title of the document in the browser tab",
                "Creates a heading",
                "Defines the main title of the page"
              ],
              correctAnswer: 1,
              explanation: "The <title> tag defines the title shown in the browser's title bar or tab"
            }
          ],
          difficult: [
            {
              id: 1,
              question: "Which of the following is a semantic HTML element?",
              options: ["<div>", "<span>", "<header>", "<section>"],
              correctAnswer: 2,
              explanation: "<header> is a semantic element that specifies a header section of a document"
            },
            {
              id: 2,
              question: "What is the purpose of the <meta> tag in HTML?",
              options: [
                "To create links",
                "To provide metadata about the HTML document",
                "To define styles",
                "To create scripts"
              ],
              correctAnswer: 1,
              explanation: "The <meta> tag provides metadata about the HTML document such as character set, description, keywords, author, etc."
            },
            {
              id: 3,
              question: "How can you open a link in a new tab?",
              options: [
                "<a href=\"url\" target=\"_blank\">",
                "<a href=\"url\" newtab>",
                "<a href=\"url\" target=\"new\">",
                "<a href=\"url\" open=\"new\">"
              ],
              correctAnswer: 0,
              explanation: "The target=\"_blank\" attribute is used to open links in a new tab or window"
            }
          ]
        }
      },
      {
        id: "css",
        name: "CSS",
        levels: {
          easy: [
            {
              id: 1,
              question: "What does CSS stand for?",
              options: [
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Colorful Style Sheets"
              ],
              correctAnswer: 1,
              explanation: "CSS stands for Cascading Style Sheets, which is used to style HTML documents"
            },
            {
              id: 2,
              question: "How do you select an element with id 'header' in CSS?",
              options: ["#header", ".header", "header", "*header"],
              correctAnswer: 0,
              explanation: "The # symbol is used to select elements by their id in CSS"
            }
          ],
          difficult: [
            {
              id: 1,
              question: "What is the z-index property used for?",
              options: [
                "To set the width of an element",
                "To set the stacking order of elements",
                "To set the height of an element",
                "To set the transparency of an element"
              ],
              correctAnswer: 1,
              explanation: "The z-index property specifies the stack order of positioned elements"
            },
            {
              id: 2,
              question: "Which CSS property is used to create space between elements?",
              options: ["spacing", "margin", "padding", "border"],
              correctAnswer: 1,
              explanation: "The margin property is used to create space between elements"
            }
          ]
        }
      },
      {
        id: "javascript",
        name: "JavaScript",
        levels: {
          easy: [
            {
              id: 1,
              question: "What is JavaScript primarily used for?",
              options: [
                "Styling web pages",
                "Adding interactivity to web pages",
                "Creating databases",
                "Managing servers"
              ],
              correctAnswer: 1,
              explanation: "JavaScript is primarily used to add interactivity and dynamic behavior to web pages"
            },
            {
              id: 2,
              question: "How do you declare a variable in JavaScript?",
              options: ["var x", "variable x", "v x", "x = var"],
              correctAnswer: 0,
              explanation: "Variables in JavaScript are declared using var, let, or const keywords"
            },
            {
              id: 3,
              question: "What is the correct way to write an array in JavaScript?",
              options: [
                "var colors = ['red', 'green', 'blue']",
                "var colors = 'red', 'green', 'blue'",
                "var colors = (1:'red', 2:'green', 3:'blue')",
                "var colors = 'red' + 'green' + 'blue'"
              ],
              correctAnswer: 0,
              explanation: "Arrays in JavaScript are written using square brackets []"
            },
            {
              id: 4,
              question: "Which operator is used for equality comparison?",
              options: ["=", "==", "===", "===="],
              correctAnswer: 2,
              explanation: "=== is the strict equality operator in JavaScript"
            },
            {
              id: 5,
              question: "How do you write a comment in JavaScript?",
              options: [
                "// Comment",
                "<!-- Comment -->",
                "# Comment",
                "/* Comment */"
              ],
              correctAnswer: 0,
              explanation: "Single-line comments in JavaScript start with //"
            },
            {
              id: 6,
              question: "What is the correct way to write a function in JavaScript?",
              options: [
                "function myFunction()",
                "function = myFunction()",
                "function:myFunction()",
                "myFunction() = function"
              ],
              correctAnswer: 0,
              explanation: "Functions are declared using the function keyword followed by the function name"
            },
            {
              id: 7,
              question: "How do you call a function named 'myFunction'?",
              options: [
                "myFunction()",
                "call myFunction",
                "call function myFunction",
                "myFunction.call()"
              ],
              correctAnswer: 0,
              explanation: "Functions are called by using their name followed by parentheses"
            },
            {
              id: 8,
              question: "What is the correct way to write an IF statement in JavaScript?",
              options: [
                "if (x == 5)",
                "if x = 5",
                "if x == 5 then",
                "if x = 5 then"
              ],
              correctAnswer: 0,
              explanation: "IF statements use parentheses and comparison operators"
            },
            {
              id: 9,
              question: "How do you add an element to the end of an array?",
              options: [
                "arr.push(element)",
                "arr.add(element)",
                "arr.append(element)",
                "arr.insert(element)"
              ],
              correctAnswer: 0,
              explanation: "The push() method adds elements to the end of an array"
            },
            {
              id: 10,
              question: "What is the result of typeof 'Hello'?",
              options: ["string", "String", "text", "word"],
              correctAnswer: 0,
              explanation: "typeof operator returns 'string' for string values"
            }
          ],
          difficult: [
            {
              id: 1,
              question: "What is closure in JavaScript?",
              options: [
                "A function that has access to variables in its outer scope",
                "A function that closes the program",
                "A method to close browser window",
                "A way to end loops"
              ],
              correctAnswer: 0,
              explanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope"
            },
            {
              id: 2,
              question: "What is the purpose of the 'this' keyword in JavaScript?",
              options: [
                "Refers to the current function",
                "Refers to the current object",
                "Refers to the previous object",
                "Refers to the parent object"
              ],
              correctAnswer: 1,
              explanation: "'this' refers to the object that is currently executing the code"
            },
            {
              id: 3,
              question: "What is event bubbling?",
              options: [
                "Events bubble up through the DOM tree",
                "Events create bubbles in the browser",
                "A way to style elements",
                "A method to create pop-ups"
              ],
              correctAnswer: 0,
              explanation: "Event bubbling is when an event triggers on a child element and bubbles up through its parents"
            },
            {
              id: 4,
              question: "What is the difference between let and var?",
              options: [
                "let has block scope, var has function scope",
                "var has block scope, let has function scope",
                "They are the same",
                "let is not a valid keyword"
              ],
              correctAnswer: 0,
              explanation: "let introduces block scope, while var has function scope and can be hoisted"
            },
            {
              id: 5,
              question: "What is a Promise in JavaScript?",
              options: [
                "An object representing eventual completion of an async operation",
                "A guarantee in code",
                "A function that returns true or false",
                "A type of loop"
              ],
              correctAnswer: 0,
              explanation: "A Promise is an object representing the eventual completion or failure of an asynchronous operation"
            },
            {
              id: 6,
              question: "What is the purpose of async/await?",
              options: [
                "To handle asynchronous operations more easily",
                "To make code run faster",
                "To create loops",
                "To define variables"
              ],
              correctAnswer: 0,
              explanation: "async/await provides a more readable way to work with Promises and asynchronous code"
            },
            {
              id: 7,
              question: "What is destructuring in JavaScript?",
              options: [
                "A way to extract values from objects and arrays",
                "A way to delete variables",
                "A way to create objects",
                "A way to end programs"
              ],
              correctAnswer: 0,
              explanation: "Destructuring allows you to extract multiple values from data stored in objects and arrays"
            },
            {
              id: 8,
              question: "What is the spread operator used for?",
              options: [
                "To spread elements of an array or object",
                "To create spaces in strings",
                "To spread functions",
                "To create loops"
              ],
              correctAnswer: 0,
              explanation: "The spread operator (...) allows an array or object to be expanded"
            },
            {
              id: 9,
              question: "What is the purpose of Map in JavaScript?",
              options: [
                "To create a collection of key-value pairs",
                "To create a map of locations",
                "To map functions together",
                "To create arrays"
              ],
              correctAnswer: 0,
              explanation: "Map is a collection of key-value pairs where both keys and values can be of any type"
            },
            {
              id: 10,
              question: "What is the purpose of the reduce method?",
              options: [
                "To reduce an array to a single value",
                "To make arrays smaller",
                "To reduce memory usage",
                "To reduce function size"
              ],
              correctAnswer: 0,
              explanation: "reduce() method reduces an array to a single value by executing a reducer function on each element"
            }
          ]
        }
      },
      {
        id: "react",
        name: "React",
        levels: {
          easy: [
            {
              id: 1,
              question: "What is React?",
              options: [
                "A JavaScript library for building user interfaces",
                "A programming language",
                "A database management system",
                "A web server"
              ],
              correctAnswer: 0,
              explanation: "React is a JavaScript library developed by Facebook for building user interfaces"
            },
            {
              id: 2,
              question: "What is JSX?",
              options: [
                "A JavaScript XML syntax for writing React components",
                "A JavaScript compiler",
                "A React database",
                "A styling framework"
              ],
              correctAnswer: 0,
              explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in JavaScript"
            },
            {
              id: 3,
              question: "How do you create a functional component in React?",
              options: [
                "function MyComponent() { return <div>Hello</div>; }",
                "class MyComponent { }",
                "const MyComponent = div()",
                "create MyComponent()"
              ],
              correctAnswer: 0,
              explanation: "Functional components are JavaScript functions that return React elements"
            },
            {
              id: 4,
              question: "What is the purpose of useState?",
              options: [
                "To manage state in functional components",
                "To create styles",
                "To handle routing",
                "To make API calls"
              ],
              correctAnswer: 0,
              explanation: "useState is a Hook that allows you to add state to functional components"
            },
            {
              id: 5,
              question: "What is a prop in React?",
              options: [
                "Data passed from parent to child component",
                "A styling property",
                "A database property",
                "A JavaScript function"
              ],
              correctAnswer: 0,
              explanation: "Props are used to pass data from parent components to child components"
            },
            {
              id: 6,
              question: "How do you render a list in React?",
              options: [
                "Using map() method",
                "Using for loop",
                "Using while loop",
                "Using if statement"
              ],
              correctAnswer: 0,
              explanation: "The map() method is commonly used to render lists of elements in React"
            },
            {
              id: 7,
              question: "What is the virtual DOM?",
              options: [
                "A lightweight copy of the actual DOM",
                "A web browser",
                "A JavaScript function",
                "A React component"
              ],
              correctAnswer: 0,
              explanation: "Virtual DOM is a lightweight copy of the actual DOM that React uses for performance optimization"
            },
            {
              id: 8,
              question: "What is the purpose of useEffect?",
              options: [
                "To handle side effects in components",
                "To create components",
                "To style components",
                "To debug components"
              ],
              correctAnswer: 0,
              explanation: "useEffect is used to perform side effects in functional components"
            },
            {
              id: 9,
              question: "How do you handle events in React?",
              options: [
                "Using onClick={handleClick}",
                "Using onclick=handleClick",
                "Using onClick=\"handleClick\"",
                "Using click=handleClick"
              ],
              correctAnswer: 0,
              explanation: "React events are named using camelCase and pass a function as the event handler"
            },
            {
              id: 10,
              question: "What is the purpose of key prop in lists?",
              options: [
                "To help React identify which items have changed",
                "To style list items",
                "To count list items",
                "To sort list items"
              ],
              correctAnswer: 0,
              explanation: "Keys help React identify which items have changed, been added, or been removed"
            }
          ],
          difficult: [
            {
              id: 1,
              question: "What is the Context API used for?",
              options: [
                "To share data between components without prop drilling",
                "To create components",
                "To handle routing",
                "To make API calls"
              ],
              correctAnswer: 0,
              explanation: "Context provides a way to pass data through the component tree without passing props manually"
            },
            {
              id: 2,
              question: "What is the purpose of useCallback?",
              options: [
                "To memoize functions",
                "To create state",
                "To handle effects",
                "To manage context"
              ],
              correctAnswer: 0,
              explanation: "useCallback is used to memoize functions to prevent unnecessary re-renders"
            },
            {
              id: 3,
              question: "What is the purpose of useMemo?",
              options: [
                "To memoize computed values",
                "To create refs",
                "To handle state",
                "To manage effects"
              ],
              correctAnswer: 0,
              explanation: "useMemo is used to memoize computed values to optimize performance"
            },
            {
              id: 4,
              question: "What are React Portals?",
              options: [
                "A way to render children into a DOM node outside the parent hierarchy",
                "A routing system",
                "A state management tool",
                "A testing utility"
              ],
              correctAnswer: 0,
              explanation: "Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component"
            },
            {
              id: 5,
              question: "What is the purpose of useReducer?",
              options: [
                "To manage complex state logic",
                "To handle simple state",
                "To create effects",
                "To manage refs"
              ],
              correctAnswer: 0,
              explanation: "useReducer is used to manage complex state logic in React components"
            },
            {
              id: 6,
              question: "What is code splitting in React?",
              options: [
                "Breaking code into smaller chunks to improve performance",
                "Splitting components into files",
                "Breaking CSS into modules",
                "Dividing business logic"
              ],
              correctAnswer: 0,
              explanation: "Code splitting allows you to split your code into small chunks to improve application performance"
            },
            {
              id: 7,
              question: "What is the purpose of React.memo?",
              options: [
                "To prevent unnecessary re-renders of functional components",
                "To memorize data",
                "To cache API responses",
                "To store global state"
              ],
              correctAnswer: 0,
              explanation: "React.memo is a higher-order component that can be used to optimize performance by preventing unnecessary re-renders"
            },
            {
              id: 8,
              question: "What is the purpose of useRef?",
              options: [
                "To persist values between renders without causing re-renders",
                "To handle state",
                "To manage effects",
                "To create context"
              ],
              correctAnswer: 0,
              explanation: "useRef returns a mutable ref object that persists for the full lifetime of the component"
            },
            {
              id: 9,
              question: "What are custom hooks?",
              options: [
                "Reusable functions that contain component logic",
                "Built-in React hooks",
                "Third-party libraries",
                "Component styles"
              ],
              correctAnswer: 0,
              explanation: "Custom hooks are functions that allow you to extract component logic into reusable functions"
            },
            {
              id: 10,
              question: "What is the purpose of React.lazy?",
              options: [
                "To load components dynamically",
                "To create lazy state",
                "To delay effects",
                "To postpone rendering"
              ],
              correctAnswer: 0,
              explanation: "React.lazy enables dynamic imports and lazy loading of components to improve performance"
            }
          ]
        }
      },
      {
        id: "java",
        name: "Java",
        levels: {
          easy: [
            {
              id: 1,
              question: "What is the correct way to declare a main method in Java?",
              options: [
                "public static void main(String[] args)",
                "public void main(String args)",
                "static void main(String args)",
                "void main(String[] args)"
              ],
              correctAnswer: 0,
              explanation: "The main method must be public static void and accept String[] args as parameter"
            },
            {
              id: 2,
              question: "Which of these is not a primitive data type in Java?",
              options: ["int", "String", "boolean", "double"],
              correctAnswer: 1,
              explanation: "String is a class in Java, not a primitive data type"
            },
            {
              id: 3,
              question: "What is the size of int data type in Java?",
              options: ["16 bit", "32 bit", "64 bit", "8 bit"],
              correctAnswer: 1,
              explanation: "int in Java is 32 bits (4 bytes)"
            },
            {
              id: 4,
              question: "Which operator is used to compare two values in Java?",
              options: ["=", "==", ":=", "==="],
              correctAnswer: 1,
              explanation: "== is used for comparison, = is used for assignment"
            },
            {
              id: 5,
              question: "What is the default value of boolean in Java?",
              options: ["true", "false", "null", "0"],
              correctAnswer: 1,
              explanation: "The default value of boolean in Java is false"
            },
            {
              id: 6,
              question: "Which loop is guaranteed to execute at least once?",
              options: ["for loop", "while loop", "do-while loop", "for-each loop"],
              correctAnswer: 2,
              explanation: "do-while loop always executes at least once as the condition is checked after execution"
            },
            {
              id: 7,
              question: "What is the correct way to create an array in Java?",
              options: [
                "int[] arr = new int[5]",
                "int arr = new int[5]",
                "array int[] = new int(5)",
                "int arr[] = int[5]"
              ],
              correctAnswer: 0,
              explanation: "int[] arr = new int[5] is the correct syntax to create an array"
            },
            {
              id: 8,
              question: "Which keyword is used to inherit a class in Java?",
              options: ["extends", "implements", "inherit", "using"],
              correctAnswer: 0,
              explanation: "extends keyword is used for inheritance in Java"
            },
            {
              id: 9,
              question: "What is the output of System.out.println(5/2)?",
              options: ["2.5", "2", "2.0", "3"],
              correctAnswer: 1,
              explanation: "Integer division in Java returns an integer, so 5/2 equals 2"
            },
            {
              id: 10,
              question: "Which package is automatically imported in Java programs?",
              options: ["java.util", "java.lang", "java.io", "java.net"],
              correctAnswer: 1,
              explanation: "java.lang package is automatically imported in all Java programs"
            }
          ],
          difficult: [
            {
              id: 1,
              question: "What is the difference between StringBuilder and StringBuffer?",
              options: [
                "StringBuilder is not synchronized, StringBuffer is synchronized",
                "StringBuffer is not synchronized, StringBuilder is synchronized",
                "They are exactly the same",
                "StringBuilder is deprecated"
              ],
              correctAnswer: 0,
              explanation: "StringBuilder is not thread-safe but faster, StringBuffer is thread-safe but slower"
            },
            {
              id: 2,
              question: "What is the purpose of the 'final' keyword in Java?",
              options: [
                "To make a variable constant",
                "To prevent inheritance",
                "To prevent method overriding",
                "All of the above"
              ],
              correctAnswer: 3,
              explanation: "final can be used with variables (constant), classes (prevent inheritance), and methods (prevent overriding)"
            },
            {
              id: 3,
              question: "What is the difference between Comparable and Comparator interfaces?",
              options: [
                "Comparable provides natural ordering, Comparator provides custom ordering",
                "They are the same",
                "Comparator is deprecated",
                "Comparable is only for strings"
              ],
              correctAnswer: 0,
              explanation: "Comparable defines natural ordering through compareTo() method, Comparator allows custom ordering through compare() method"
            },
            {
              id: 4,
              question: "What is a marker interface in Java?",
              options: [
                "An empty interface used to signal something to the JVM",
                "An interface with one method",
                "An interface with multiple methods",
                "A deprecated interface"
              ],
              correctAnswer: 0,
              explanation: "A marker interface is an empty interface (like Serializable) that signals something to the JVM"
            },
            {
              id: 5,
              question: "What is the difference between throw and throws?",
              options: [
                "throw is used to explicitly throw an exception, throws declares exceptions",
                "They are the same",
                "throw is deprecated",
                "throws is used to catch exceptions"
              ],
              correctAnswer: 0,
              explanation: "throw keyword is used to explicitly throw an exception, throws keyword is used to declare exceptions that a method might throw"
            },
            {
              id: 6,
              question: "What is the purpose of the volatile keyword?",
              options: [
                "To indicate a variable may be modified by multiple threads",
                "To make a variable constant",
                "To improve performance",
                "To prevent inheritance"
              ],
              correctAnswer: 0,
              explanation: "volatile keyword ensures that a variable is read from and written to main memory, not from thread cache"
            },
            {
              id: 7,
              question: "What is the difference between HashSet and TreeSet?",
              options: [
                "HashSet is unordered, TreeSet maintains order",
                "They are the same",
                "TreeSet is deprecated",
                "HashSet is slower"
              ],
              correctAnswer: 0,
              explanation: "HashSet uses HashMap for storage and doesn't maintain order, TreeSet uses TreeMap and maintains natural ordering"
            },
            {
              id: 8,
              question: "What is the purpose of the transient keyword?",
              options: [
                "To prevent serialization of a variable",
                "To make a variable thread-safe",
                "To improve performance",
                "To make a variable constant"
              ],
              correctAnswer: 0,
              explanation: "transient keyword indicates that a variable should not be serialized when the object is serialized"
            },
            {
              id: 9,
              question: "What is a deadlock in Java?",
              options: [
                "When two threads are waiting for each other indefinitely",
                "When a program crashes",
                "When memory is full",
                "When CPU usage is 100%"
              ],
              correctAnswer: 0,
              explanation: "Deadlock occurs when two or more threads are blocked forever, waiting for each other"
            },
            {
              id: 10,
              question: "What is the difference between fail-fast and fail-safe iterators?",
              options: [
                "Fail-fast throws ConcurrentModificationException, fail-safe doesn't",
                "They are the same",
                "Fail-safe is deprecated",
                "Fail-fast is slower"
              ],
              correctAnswer: 0,
              explanation: "Fail-fast iterators throw exception if collection is modified while iterating, fail-safe iterators work on clone of collection"
            }
          ]
        }
      },
      {
        id: "python",
        name: "Python",
        levels: {
          easy: [
            {
              id: 1,
              question: "What is the correct way to declare a variable in Python?",
              options: [
                "x = 5",
                "var x = 5",
                "dim x = 5",
                "let x = 5"
              ],
              correctAnswer: 0,
              explanation: "In Python, variables are declared by simply assigning a value"
            },
            {
              id: 2,
              question: "Which of these is not a valid data type in Python?",
              options: ["int", "float", "string", "varchar"],
              correctAnswer: 3,
              explanation: "varchar is not a Python data type, it's commonly used in databases"
            },
            {
              id: 3,
              question: "How do you create a list in Python?",
              options: [
                "my_list = []",
                "my_list = list()",
                "Both A and B",
                "my_list = array()"
              ],
              correctAnswer: 2,
              explanation: "Lists can be created using either square brackets [] or list() constructor"
            },
            {
              id: 4,
              question: "What is the result of 3 * 'abc'?",
              options: ["abcabcabc", "abc3", "9", "Error"],
              correctAnswer: 0,
              explanation: "In Python, multiplying a string by a number repeats the string that many times"
            },
            {
              id: 5,
              question: "How do you comment multiple lines in Python?",
              options: [
                "Using triple quotes '''",
                "Using //",
                "Using /* */",
                "Using #"
              ],
              correctAnswer: 0,
              explanation: "Triple quotes ''' or \"\"\" can be used for multi-line comments in Python"
            },
            {
              id: 6,
              question: "What is the correct way to check if two variables are equal?",
              options: ["==", "is", "equals", "="],
              correctAnswer: 0,
              explanation: "== operator is used to compare values in Python"
            },
            {
              id: 7,
              question: "Which method is used to add an element to a list?",
              options: ["append()", "add()", "insert()", "extend()"],
              correctAnswer: 0,
              explanation: "append() method is used to add an element to the end of a list"
            },
            {
              id: 8,
              question: "What is the output of type(1/2) in Python 3?",
              options: ["float", "int", "double", "decimal"],
              correctAnswer: 0,
              explanation: "In Python 3, division always returns a float"
            },
            {
              id: 9,
              question: "How do you get the length of a string?",
              options: ["len()", "size()", "length()", "count()"],
              correctAnswer: 0,
              explanation: "len() function is used to get the length of strings, lists, and other sequences"
            },
            {
              id: 10,
              question: "What is the correct way to import a module in Python?",
              options: [
                "import module",
                "include module",
                "using module",
                "require module"
              ],
              correctAnswer: 0,
              explanation: "import keyword is used to import modules in Python"
            }
          ],
          difficult: [
            {
              id: 1,
              question: "What is a decorator in Python?",
              options: [
                "A function that modifies another function",
                "A class that inherits from another class",
                "A type of loop",
                "A built-in data type"
              ],
              correctAnswer: 0,
              explanation: "Decorators are functions that modify the behavior of another function or class"
            },
            {
              id: 2,
              question: "What is the difference between __str__ and __repr__?",
              options: [
                "__str__ is for users, __repr__ is for developers",
                "They are the same",
                "__str__ is deprecated",
                "__repr__ is only for debugging"
              ],
              correctAnswer: 0,
              explanation: "__str__ provides a readable string representation, __repr__ provides a detailed representation for debugging"
            },
            {
              id: 3,
              question: "What is a generator in Python?",
              options: [
                "A function that returns an iterator",
                "A type of loop",
                "A built-in module",
                "A class constructor"
              ],
              correctAnswer: 0,
              explanation: "Generators are functions that return an iterator using the yield keyword"
            },
            {
              id: 4,
              question: "What is the Global Interpreter Lock (GIL)?",
              options: [
                "A mutex that protects Python objects",
                "A type of loop",
                "A built-in function",
                "A module"
              ],
              correctAnswer: 0,
              explanation: "GIL is a mutex that prevents multiple native threads from executing Python bytecodes simultaneously"
            },
            {
              id: 5,
              question: "What is the difference between deep and shallow copy?",
              options: [
                "Deep copy creates new objects, shallow copy creates references",
                "They are the same",
                "Deep copy is deprecated",
                "Shallow copy is not possible"
              ],
              correctAnswer: 0,
              explanation: "Deep copy creates new objects recursively, shallow copy creates references to nested objects"
            },
            {
              id: 6,
              question: "What is a metaclass in Python?",
              options: [
                "A class that creates classes",
                "A type of variable",
                "A built-in function",
                "A module"
              ],
              correctAnswer: 0,
              explanation: "Metaclasses are classes for classes - they define how classes behave"
            },
            {
              id: 7,
              question: "What is the purpose of @property decorator?",
              options: [
                "To create getter/setter methods",
                "To create a class",
                "To define a loop",
                "To import modules"
              ],
              correctAnswer: 0,
              explanation: "@property decorator allows you to define properties that can be accessed like attributes"
            },
            {
              id: 8,
              question: "What is monkey patching in Python?",
              options: [
                "Modifying classes/modules at runtime",
                "A type of inheritance",
                "A built-in function",
                "A way to handle errors"
              ],
              correctAnswer: 0,
              explanation: "Monkey patching is dynamically modifying classes or modules at runtime"
            },
            {
              id: 9,
              question: "What is the difference between .py and .pyc files?",
              options: [
                ".pyc contains compiled bytecode",
                "They are the same",
                ".pyc is deprecated",
                ".py is not used anymore"
              ],
              correctAnswer: 0,
              explanation: ".py files contain source code, .pyc files contain compiled bytecode"
            },
            {
              id: 10,
              question: "What is the purpose of __slots__?",
              options: [
                "To restrict attribute creation",
                "To create new attributes",
                "To delete attributes",
                "To rename attributes"
              ],
              correctAnswer: 0,
              explanation: "__slots__ is used to explicitly declare data members and prevent creation of __dict__"
            }
          ]
        }
      }
    ]
  }