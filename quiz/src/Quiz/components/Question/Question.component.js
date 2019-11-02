import React from 'react';

class Question extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentDidMount() {
        document.getElementById(this.props.qNum).addEventListener('submit', (e) => {
            e.preventDefault();

            if (this.props.component === "input" && this.props.type === "checkbox") {
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
            } else if (this.props.component === "input") {
                let result = document.getElementById(`${this.props.qNum}a`).value;
                this.props.onQuestionCompleted(result, this.props.qNum);
            } else if (this.props.component === "select") {
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
            } else {
                return new Error("This input is not valid")
            }
        });
    }

    render() {
        if (this.props.component === "input" && this.props.type === "checkbox") {
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
        } else if (this.props.component === "input") {
            const {
                id, title, question, options, qNum, onQuestionCompleted, ...otherInputProps
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
        } else if (this.props.component === "select") {
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
        } else {
            return <div>Ooops, Something went wrong with this question</div>;
        }
    }
}

export default Question;