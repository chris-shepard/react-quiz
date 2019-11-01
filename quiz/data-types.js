/********************************** Example Data********************************/

//Min-Requirements

const Quiz = {
  name: "Quiz's Name",
  id: 'myQuiz',
  questions: [
    inputTypeText,
    inputTypeCheckbox,
    inputTypeSelect
  ]
}
export default Quiz;

/****** Questions Types && Examples */ 


// <input type="text">
const inputTypeText = {
  component: "input",
  properties: {
    type: "text",
    id: "your_question_id",
    title: "",
    question: "What would you type to signify to the browser that you are creating an HTML5 document type",
    placeholder: "Ex) <ANSWER>",
  }
  //Returns string of text value
}

//<input type="checkbox">
const inputTypeCheckbox = {
  component: "input",
  properties: {
    id: "1111",
    type: "checkbox",
    title: "question3",
    question: "Which of the following are semantic html tags (can be more than one):",
    options: [
      { value: "span", content: "<span>" },
      { value: "section", content: "<section>" },
      { value: "footer", content: "<footer>" },
      { value: "div", content: "<div>" },
      { value: "header", content: "<header>" },
      { value: "aside", content: "<aside>" },
      { value: "br", content: "<br>" }
    ],
  }
  //Returns an array of selected values
}


// <select>     </select>

const inputTypeSelect = {
  component: "select",
  properties: {
    id: '233243933938383',
    title: 'css-selectors',
    question: "Which selector has the most specificity:",
    options: [
      { value: "a", content: "div > p > li" },
      { value: "b", content: "div.card p.small .terms" },
      { value: "c", content: "p.small a[href]" },
      { value: "d", content: "div p.small ul li" } 
    ],
  }
  //Returns selected options value on submit
}



export default Quiz;