import React,{Component} from 'react';

import './PracticeCharacters.css'

import CharacterType from './CharacterType';
import CharacterSelect from './CharacterSelect';

//Show a random kana character and they must type in the result
//Show a spelling and they have to click the proper kana character

//Do sets of 20 characters, and show them the average comlpetion speed at the end
//10 characters select
//10 characters type

//Maybe keep thsoe times in local storage

const TYPE_PROBLEMS = 10;
const SELECT_PROBLEMS = 10;

var data = {
  'hi-a': {a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お'},
  'hi-k': {ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ'},
  'hi-s': {sa: 'さ', shi: 'し', su: 'す', se: 'せ', so: 'そ'},
  'hi-t': {ta: 'た', chi: 'ち', tsu: 'つ', te: 'て', to: 'と'},
  'hi-n': {na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の'},
  'hi-h': {ha: 'は', hi: 'ひ', fu: 'ふ', he: 'へ', ho: 'ほ'},
  'hi-m': {ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も'},
  'hi-y': {ya: 'や', yi: '', yu: 'ゆ', ye: '', yo: 'よ'},
  'hi-r': {ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ'},
  'hi-w': {wa: 'わ', wi: '', wu: '', we: '', wo: 'を'},
  'hi-nn': {n: 'ん'},
  'ka-a': {a: 'ア', i: 'イ', u: 'ウ', e: 'エ', o: 'オ'},
  'ka-k': {ka: 'カ', ki: 'キ', ku: 'ク', ke: 'ケ', ko: 'コ'},
  'ka-s': {sa: 'サ', shi: 'シ', su: 'ス', se: 'セ', so: 'ソ'},
  'ka-t': {ta: 'タ', chi: 'チ', tsu: 'ツ', te: 'テ', to: 'ト'},
  'ka-n': {na: 'ナ', ni: 'ニ', nu: 'ヌ', ne: 'ネ', no: 'ノ'},
  'ka-h': {ha: 'ハ', hi: 'ヒ', fu: 'フ', he: 'ヘ', ho: 'ホ'},
  'ka-m': {ma: 'マ', mi: 'ミ', mu: 'ム', me: 'メ', mo: 'モ'},
  'ka-y': {ya: 'ヤ', yi: '', yu: 'ユ', ye: '', yo: 'ヨ'},
  'ka-r': {ra: 'ラ', ri: 'リ', ru: 'ル', re: 'レ', ro: 'ロ'},
  'ka-w': {wa: 'ワ', wi: '', wu: '', we: '', wo: 'ヲ'},
  'ka-nn': {n: 'ン'}
};

class PracticeCharacters extends Component {
  constructor(props){
    super(props);
    this.state = {"practice-state": "start", "practice-start": 0, problems: [], timeElapsed: 0};

    this.startPractice = this.startPractice.bind(this);
    this.finishPractice = this.finishPractice.bind(this);
    this.problemFinished = this.problemFinished.bind(this);
  }
  problemFinished(){
    var problems = this.state.problems;
    if(problems.length == 1){
      this.finishPractice();
      return;
    }
    problems.splice(0, 1);
    this.setState({problems: problems});
  }
  startPractice(){
    var setsChecked = JSON.parse(localStorage.getItem("sets-checked"));

    var bulkCharacterTranslations = [];
    setsChecked.forEach((setIdentifier) => {
      var setData = data[setIdentifier];
      for (const [translation, character] of Object.entries(setData)) {
        if(character != ''){
          bulkCharacterTranslations.push({english: translation, japanese: character});
        }
      }
    });

    if(bulkCharacterTranslations.length < 5){
      alert("Please select more sets!");
      return;
    }

    var problems = [];

    for(var i = 0; i != TYPE_PROBLEMS;i++){
      var randomTranslation = bulkCharacterTranslations[Math.floor(Math.random() * bulkCharacterTranslations.length)];
      var problem = {type: 'type', question: randomTranslation.japanese, answer: randomTranslation.english};
      problems.push(problem);
    }
    for(var i = 0; i != SELECT_PROBLEMS;i++){
      var randomTranslation = bulkCharacterTranslations[Math.floor(Math.random() * bulkCharacterTranslations.length)];

      var possibleAnswers = [];

      while(possibleAnswers.length < 4){
        var possibleChoice = bulkCharacterTranslations[Math.floor(Math.random() * bulkCharacterTranslations.length)];
        if(randomTranslation.english != possibleChoice.english && !possibleAnswers.includes(possibleChoice.japanese)){
          possibleAnswers.push(possibleChoice.japanese);
        }
      }

      possibleAnswers.push(randomTranslation.japanese);//Add real answer

      possibleAnswers.sort(() => Math.random() - 0.5);//Shuffle it

      var problem = {type: 'select', question: randomTranslation.english, choices: possibleAnswers, answer: randomTranslation.japanese};
      problems.push(problem);
    }

    this.setState({"practice-state": "practice", "practice-start": Date.now(), problems: problems});
  }

  finishPractice(){
    var timeElapsed = Date.now()-this.state["practice-start"];
    this.setState({problems: [], badAnswer: false, typeValue: 0, "practice-state": "finished", timeElapsed: timeElapsed});
  }
  render(){

    var selectedSetElements = [];

    var setsChecked = JSON.parse(localStorage.getItem("sets-checked"));

    if(setsChecked != null){
      setsChecked.forEach( (setIdentifier) => {
        var set = data[setIdentifier];

        var characterElements = [];
        for (const [translation, character] of Object.entries(set)) {
          characterElements.push(<span key={translation} className="preview-character">{character}</span>);
        }

        var setElement = <div className="preview-set" key={setIdentifier}>{characterElements}</div>;
        selectedSetElements.push(setElement);
      });
    }

    if(this.state["practice-state"] == "start"){
      return (
        <div>
        <div className="selected-sets">
          {selectedSetElements}
        </div>
        <p className="notice-practice">You have the <span className="selected-amount">{selectedSetElements.length}</span> sets shown selected. Ready to begin?</p>
        <button className="practice-btn" onClick={this.startPractice}>Start</button>
        </div>
      );
    }else if(this.state["practice-state"] == "practice"){
      var currentProblem = this.state.problems[0];
      return (
        <div>
          <div className="problem-counter"><span>#{((TYPE_PROBLEMS+SELECT_PROBLEMS)+1)-this.state.problems.length}/{TYPE_PROBLEMS+SELECT_PROBLEMS}</span></div>
          {currentProblem.type == "type" &&
            <CharacterType problemFinished={this.problemFinished} currentProblem={currentProblem}/>
          }
          {currentProblem.type == "select" &&
            <CharacterSelect problemFinished={this.problemFinished} currentProblem={currentProblem}/>
          }

          {(this.state.problems.length == (TYPE_PROBLEMS+SELECT_PROBLEMS) && currentProblem.type == "type") &&
            <span className="guide-text">Type the proper romaji and press the <b>enter</b> key to continue</span>
          }

          {(this.state.problems.length == (TYPE_PROBLEMS+SELECT_PROBLEMS) && currentProblem.type == "select") &&
            <span className="guide-text">Click on the kana that matches the romaji</span>
          }

        </div>
      );
    }else if(this.state["practice-state"] == "finished"){
      return (
        <div>
          <h3 className="finished-msg">Well done!</h3>
          <h4 className="stats">You completed the practice in <span className="total-time">{(this.state.timeElapsed/1000).toFixed(2)} </span> seconds, averaging <span className="average-time">{((this.state.timeElapsed/1000)/(TYPE_PROBLEMS+SELECT_PROBLEMS)).toFixed(2)}</span> seconds per problem.</h4>
          <button className="again-btn" onClick={() => {this.setState({"practice-state": "start"})}}>Practice Again</button>
        </div>
      )
    }
  }
}

export default PracticeCharacters;
