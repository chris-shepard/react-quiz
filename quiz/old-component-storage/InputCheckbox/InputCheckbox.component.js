import React from 'react';


class InputCheckbox extends React.Component {

  componentDidMount() {
    document.getElementById(this.props.qNum).addEventListener('submit', (e) => {
      e.preventDefault();
      let result = [];

      let numberOfOptions = this.props.options.length;
      let i;
      for (i = 0; i < numberOfOptions; i++) {
        let x = i;
        if (document.getElementById(`${this.props.qNum}a${i}`).checked === true) {
          result.push(this.props.options[x].value);
        }
      }

      this.props.onQuestionCompleted(result, this.props.qNum);
    })
  }

  render() {
    const {
      id, question, options, qNum
    } = this.props;

    return (
      <form id={qNum} key={id}>
        <span>{question}</span><br></br>{
          options.map((o, i) => {
            return <div key={`${o.value}Input`}><input type="checkbox" value={o.value} key={`${o.value}checkValue`} id={`${qNum}a${i}`}></input>{o.content}</div>
          })
        }<br></br>
        <button type="submit">Submit</button>
      </form>)

  }

}

export default InputCheckbox;