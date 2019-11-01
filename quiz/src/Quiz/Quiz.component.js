import React from 'react';
import Quiz_Data from './Quiz.data';
import './Quiz.styles.css';
import Input from './components/Input/Input.component';
import InputCheckbox from './components/InputCheckbox/InputCheckbox.component';
import Select from './components/Select/Select.component';
import ProgressIndicator from './components/ProgressIndicator/ProgressIndicator.component';


class Quiz extends React.Component {
  constructor(props) {
    super(props);

    let answersObjectLength = Quiz_Data.questions.length;
    let answerArray = [];
    let i;
    for (i = 0; i < answersObjectLength; i++) {
      answerArray.push({ value: i, isAnswered: false })
    };

    this.state = {
      quizInfo: Quiz_Data,
      response: {
        name: "",
        answers: answerArray,
        status: [0]
      }
    }

    console.log(this.state);
  }

  componentDidMount() {
    document.getElementById("nameForm").addEventListener("submit", (e) => {
      e.preventDefault();

      let result = document.getElementById('nameInput').value;
      let answersCopy = JSON.parse(JSON.stringify(this.state.response.answers));
      let statusCopy = JSON.parse(JSON.stringify(this.state.response.status));
      this.setState({
        response: {
          name: result,
          answers: answersCopy,
          status: statusCopy
        }
      })
      console.log(this.state);
    })
  }

  getCompletedValue = (array) => {
    let count = 0;
    array.forEach(e => {
      if (e.isAnswered === true){
        count++;
      }
    });
    return count;
  }

  submitQuiz = (result, i) => {
    let answersCopy = JSON.parse(JSON.stringify(this.state.response.answers));
    let nameCopy = JSON.parse(JSON.stringify(this.state.response.name));
    let statusCopy = JSON.parse(JSON.stringify(this.state.response.status));
    let questionIndex = parseInt(i.substr(1));
    answersCopy[questionIndex] = { value: result, isAnswered: true };
    statusCopy[0] = this.getCompletedValue(answersCopy);
    this.setState({
      response: {
        name: nameCopy,
        answers: answersCopy,
        status: statusCopy
      }
    })

    if(Quiz_Data.questions.length === statusCopy[0]) {
      let quiz = document.getElementById('submitCompletedQuiz');
      quiz.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log("Quiz Submitted")
      })
      quiz.firstChild.disabled = false;
    }

  }



  render() {
    return (
      <div className="quiz">
        <h1>{this.state.quizInfo.name}</h1>
        {
          this.state.response.status.map((s) => {
            return <ProgressIndicator value={s}  numOfQuestions= {Quiz_Data.questions.length} key={s} />
          })
        }

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

        <form id="submitCompletedQuiz">
          <button type="submit" disabled>Turn In Quiz</button>
        </form>
      </div>
    )
  }
}

export default Quiz;