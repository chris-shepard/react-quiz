const Quiz = {
  name: "HTML/CSS Basics",
  id: 'htmlQuiz',
  questions: [
    {
      component: "input",
      properties: {
        type: "text",
        id: "28472",
        title: "question1",
        question: "What would you type to signify to the browser that you are creating an HTML5 document type",
        placeholder: "Ex) <ANSWER>",
      }

    },
    {
      component: "input",
      properties: {
        type: "text",
        question: "What two elements are always the children of the <html> element?",
        placeholder: "Ex) div,input",
        title: "question2",
        id: "2294928",
      }

    },
    {
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



    },
    {
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

    },
    {
      component: "select",
      properties: {
        id:"77283",
        title: "screen-size",
        question: "On a mobile phone in portrait mode, with a screen width of 300 pixels, an element has a css rule of margin: 10vw 12px 1% 1rem; Which side of the element will have the largest margin?",
        options: [
          { value: "a", content: "Left" },
          { value: "b", content: "Right" },
          { value: "c", content: "Top" },
          { value: "d", content: "Bottom" }
        ],
      }

    },

  ]
}

export default Quiz;