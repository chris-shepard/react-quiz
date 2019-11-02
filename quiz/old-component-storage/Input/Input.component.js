import React from 'react';


class Input extends React.Component {


  componentDidMount() {
    document.getElementById(this.props.qNum).addEventListener('submit', (e) => {
      e.preventDefault();

      let result =document.getElementById(`${this.props.qNum}a`).value;
      this.props.onQuestionCompleted(result, this.props.qNum);
    })
  }

  render() {
    const {
      id, title, question, options,qNum, onQuestionCompleted, ...otherInputProps
    } = this.props;


    return (
      <form id={qNum} >
        <label htmlFor={title}>
          {question}<br></br>
          <input name={title} {...otherInputProps} id={`${this.props.qNum}a`}></input>
        </label><br></br>
        <button type="submit">Submit</button>
      </form>
    )
  }

}

export default Input;