import React from 'react';
import Quiz_Data from './Quiz.data';
import Input from '../../components/Input/Input.component';
import InputCheckbox from '../../components/InputCheckbox/InputCheckbox.component';

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizInfo: Quiz_Data,
      respone: {
        name: "",
        answers: []
      }
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.quizInfo.name}</h1>

        {
          this.state.quizInfo.questions.map((q) => {
            if (q.component === "input" && q.properties.type === "checkbox") {
              return <InputCheckbox {...q.properties} key={q.properties.id}/>
            } else if (q.component === "input") {
              return <Input {...q.properties} key={q.properties.id} />
            } else {
              return <div key={q.id}>hi</div>
            }
          })
        }

      </div>
    )
  }
}

export default Quiz;