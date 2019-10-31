import React from 'react';


class InputCheckbox extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    document.getElementById(this.props.id).addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(document.getElementById(this.props.id))
    })
  }

  render() {
    const {
      id, question, options,
    } = this.props;

    return (
      <form id={id} key={id}>
        <span>{question}</span>{
          options.map((o) => {
            return <div key={`${o.value}Input`}><input type="checkbox" value={o.value} key={`${o.value}checkValue`}></input>{o.content}</div>
          })
        }
        <button type="submit">Submit</button>
      </form>)

  }

}

export default InputCheckbox;