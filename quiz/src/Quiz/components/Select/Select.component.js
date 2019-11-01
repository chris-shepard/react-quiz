import React from 'react';

class Select extends React.Component {


  componentDidMount() {
    document.getElementById(this.props.qNum).addEventListener('submit', (e) => {
      e.preventDefault();

      let numberOfOptions = this.props.options.length;
      let i;
      let result;
      for (i = 0; i < numberOfOptions; i++) {
        var option = document.getElementById(`${this.props.qNum}a${i}`);
        if (option.selected === true) {
          result = option.value;
        }
      }
      this.props.onQuestionCompleted(result, this.props.qNum);
    })
  }

  render() {
    const {
      id, question, title, options
    } = this.props;

    return (
      <form id={this.props.qNum} >
        <label htmlFor={title}>{question}</label><br></br>
        <select name={title} id={`${id}Select`}>
          {
            options.map((o, i) => {
              return <option value={o.value} key={`${title}Option${i}`} id={`${this.props.qNum}a${i}`}>{o.content}</option>
            })
          }
        </select><br></br>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Select;