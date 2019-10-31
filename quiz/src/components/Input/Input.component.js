import React from 'react';


class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.getElementById(this.props.id).addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(document.getElementById(`${this.props.id}input`).value)
    })
  }

  render() {
    const {
      id, title, question, options, ...otherInputProps
    } = this.props;


    return (
      <form id={id} >
        <label htmlFor={title}>
          {question}
          <input id={id + "input"} name={title} {...otherInputProps}></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }

}

export default Input;