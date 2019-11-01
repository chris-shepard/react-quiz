import React from 'react';
import Quiz_Data from './Quiz.data';
import './Quiz.styles.css';
import Input from './components/Input/Input.component';
import InputCheckbox from './components/InputCheckbox/InputCheckbox.component';
import Select from './components/Select/Select.component';


class Quiz extends React.Component {
  constructor(props) {
    super(props);

    let answersObjectLength = Quiz_Data.questions.length;
    let answerArray = [];
    let i;
    for (i = 0; i < answersObjectLength; i++) {
      answerArray.push(i)
    };

    this.state = {
      quizInfo: Quiz_Data,
      response: {
        name: "",
        answers: answerArray
      }
    }

    console.log(this.state);
  }

  componentDidMount() {
    document.getElementById("nameForm").addEventListener("submit", (e) => {
      e.preventDefault();

      let result = document.getElementById('nameInput').value;
      let answersCopy = JSON.parse(JSON.stringify(this.state.response.answers));
      this.setState({
        response: {
          name: result,
          answers: answersCopy
        }
      })
      console.log(this.state);
    })
  }

  submitQuiz = (result, i) => {
    let answersCopy = JSON.parse(JSON.stringify(this.state.response.answers));
    let nameCopy = JSON.parse(JSON.stringify(this.state.response.name));
    let questionIndex = parseInt(i.substr(1));
    answersCopy[questionIndex] = result;
    this.setState({
      response: {
        name: nameCopy,
        answers: answersCopy
      }
    })
    //SEE #of completed questions.
  }



  render() {
    return (
      <div className="quiz">
        <h1>{this.state.quizInfo.name}</h1>
        <form id="nameForm">
          <input id="nameInput" type="text" placeholder="First name Last name"></input>
          <button type="submit">Submit</button>
        </form>
        {
          this.state.quizInfo.questions.map((q, i) => {
            if (q.component === "input" && q.properties.type === "checkbox") {
              return <InputCheckbox {...q.properties} key={q.properties.id} qNum={`q${i}`} onQuestionCompleted={this.submitQuiz} />
            } else if (q.component === "input") {
              return <Input {...q.properties} key={q.properties.id} qNum={`q${i}`} onQuestionCompleted={this.submitQuiz} />
            } else {
              return <Select {...q.properties} key={q.properties.id} qNum={`q${i}`} onQuestionCompleted={this.submitQuiz} />
            }
          })
        }
      </div>
    )
  }
}

export default Quiz;