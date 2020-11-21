import React, {Component} from 'react';

class CharacterSelect extends Component {

    constructor(props){
      super(props);
      this.state = {typeValue: '', badAnswer: false};

      this.trySelect = this.trySelect.bind(this);
    }
    trySelect(value){
      if(this.state.badAnswer){
        return;
      }
      var correctAnswer = this.props.currentProblem.answer;
      if(value.toUpperCase() == correctAnswer.toUpperCase()){
        this.props.problemFinished();
      }else{
        this.setState({badAnswer: true, typeValue: ''});
        setTimeout(() => {
          this.setState({badAnswer: false});
        }, 1000);
      }
    }
    render(){
      return (<div>
        <h2 className="select-question">{this.props.currentProblem.question}</h2>
        <div className="select-choices">
          {this.props.currentProblem.choices.map((value) => {
            return <div><span className={"select-choice " + (this.state.badAnswer ? "bad-choice" : "")} onClick={() => {this.trySelect(value)}}>{value}</span></div>
          })}
        </div>
      </div>);
    }
}

export default CharacterSelect;
