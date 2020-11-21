import React, {Component} from 'react';
import {BrowserRouter as Link, withRouter} from "react-router-dom";
import history from '../history';

import './Selections.css';

var hiraganaData = {
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
  'hi-nn': {n: 'ん'}
};

var katakanaData = {
  'ka-a': {a: 'ア', i: 'カ', u: 'タ', e: 'マ', o: 'ヤ'},
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

class Selection extends Component {
  constructor(props){
    super(props);
    this.state = {"ws": "hiragana", 'sets-checked': []};

    this.toggleSet = this.toggleSet.bind(this);
  }
  componentDidMount(){
    if(localStorage.getItem("sets-checked") != null){
      this.setState({"sets-checked": JSON.parse(localStorage.getItem("sets-checked"))});
    }
  }
  toggleSet(event, setIdentifier){
    var arr = this.state['sets-checked'];

    if(this.state['sets-checked'].includes(setIdentifier)){
      arr.splice(arr.indexOf(setIdentifier), 1);
    }else{
      arr.push(setIdentifier);
    }

    this.setState({'sets-checked': arr});
    localStorage.setItem('sets-checked', JSON.stringify(arr));
  }
  render(){

    var characterSetElements = [];

    var dataUsing;

    if(this.state.ws == "hiragana"){
      dataUsing = hiraganaData;
    }else{
      dataUsing = katakanaData;
    }

    for (const [setIdentifier, set] of Object.entries(dataUsing)) {

        var setIsChecked = this.state['sets-checked'].includes(setIdentifier);

        var characterElements = [];
        var key = 0;
        for (const [translation, character] of Object.entries(set)) {
          characterElements.push(<div key={key++} className={"character-box " + (setIsChecked ? "toggled-box": "")}><span className="japanese-character">{character}</span><br/><span className="translation">{character != '' && translation}</span></div>);
        }

        var checkboxElement = (
          <label key={key++} className="container">
            <input type="checkbox" checked={setIsChecked} onChange={(e) => this.toggleSet(e, setIdentifier)}/>
            <span className="checkmark"></span>
          </label>
        );

        characterElements.push(checkboxElement);

        var setElement = (<div className="set" key={setIdentifier} onClick={() => this.toggleSet(null, setIdentifier)}>{characterElements}</div>);
        characterSetElements.push(setElement);
    }

    return (
      <div>
        <span className="select-msg">Select your character sets and then proceed to <span className="practice-href" onClick={() => {this.props.history.push('/practice-characters')}}>Practice</span></span>
        <div className="language-selection">
          <button className={"language-btn " + (this.state.ws == "hiragana" ? "language-selected" : "")} onClick={() => {this.setState({"ws": "hiragana"})}}>Hiragana(ひらがな)</button>
          <button className={"language-btn " + (this.state.ws == "katakana" ? "language-selected" : "")} onClick={() => {this.setState({"ws": "katakana"})}}>Katakana(カタカナ)</button>
        </div>
        <div className="character-sets">
          {characterSetElements}
        </div>
      </div>
    );
  }
}

export default withRouter(Selection);
