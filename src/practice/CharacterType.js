import React, {Component} from 'react';

class CharacterType extends Component {

    constructor(props){
      super(props);
      this.state = {typeValue: '', badAnswer: false};

      this.handleTypeValueChange = this.handleTypeValueChange.bind(this);
      this.tryTypeValue = this.tryTypeValue.bind(this);
    }
    handleTypeValueChange(event){
      this.setState({typeValue: event.target.value});
    }

    tryTypeValue(){
      var correctAnswer = this.props.currentProblem.answer;
      if(this.state.typeValue == ""){
        return;
      }
      if(this.state.typeValue.toUpperCase() == correctAnswer.toUpperCase()){
        this.setState({typeValue: ''});
        this.props.problemFinished();
      }else{
        this.setState({badAnswer: true, typeValue: ''});
        setTimeout(() => {
          this.setState({badAnswer: false});
        }, 500);
      }
    }
    render(){

      return (<div>
        <h2 className={"type-question " + (this.state.badAnswer ? "bad-type": "")}>{this.props.currentProblem.question}</h2>
        <input value={this.state.typeValue} onKeyPress={event => { if (event.key === 'Enter') { this.tryTypeValue(); } }} onChange={this.handleTypeValueChange} className="type-answer" type="text" maxLength="3"/>
      </div>);
    }
}

export default CharacterType;
