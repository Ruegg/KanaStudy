import React,{Component} from 'react';

import './PracticeReading.css'

var directTranslations = {
  'あ': 'a',
  'い': 'i',
  'う': 'u',
  'え': 'e',
  'お': 'o',
  'か': 'ka',
  'き': 'ki',
  'く': 'ku',
  'け': 'ke',
  'こ': 'ko',
  'が': 'ga',
  'ぎ': 'gi',
  'ぐ': 'gu',
  'げ': 'ge',
  'ご': 'go',
  'さ': 'sa',
  'ざ': 'za',
  'し': 'shi',
  'じ': 'zi',
  'す': 'su',
  'ず': 'zu',
  'せ': 'se',
  'ぜ': 'ze',
  'そ': 'so',
  'ぞ': 'zo',
  'た': 'ta',
  'だ': 'da',
  'ち': 'chi',
  'ぢ': 'di',
  'つ': 'tsu',
  'づ': 'du',
  'て': 'te',
  'で': 'de',
  'と': 'to',
  'ど': 'do',
  'な': 'na',
  'に': 'ni',
  'ぬ': 'nu',
  'ね': 'ne',
  'の': 'no',
  'は': 'ha',
  'ば': 'ba',
  'ぱ': 'pa',
  'ひ': 'hi',
  'び': 'bi',
  'ぴ': 'pi',
  'ふ': 'fu',
  'ぶ': 'bu',
  'ぷ': 'pu',
  'へ': 'he',
  'べ': 'be',
  'ぺ': 'pe',
  'ほ': 'ho',
  'ぼ': 'bo',
  'ぽ': 'po',
  'ま': 'ma',
  'み': 'mi',
  'む': 'mu',
  'め': 'me',
  'も': 'mo',
  'や': 'ya',
  'ゆ': 'yu',
  'よ': 'yo',
  'ら': 'ra',
  'り': 'ri',
  'る': 'ru',
  'れ': 're',
  'ろ': 'ro',
  'わ': 'wa',
  'を': 'wo',
  'ん': 'n',
  'ア': 'a',
  'イ': 'i',
  'ウ': 'u',
  'エ': 'e',
  'オ': 'o',
  'カ': 'ka',
  'ガ': 'ga',
  'キ': 'ki',
  'gi': 'ギ',
  'ク': 'ku',
  'グ': 'gu',
  'ケ': 'ke',
  'ゲ': 'ge',
  'コ': 'ko',
  'ゴ': 'go',
  'サ': 'sa',
  'ザ': 'za',
  'シ': 'shi',
  'ジ': 'zi',
  'ス': 'su',
  'ズ': 'zu',
  'セ': 'se',
  'ゼ': 'ze',
  'ソ': 'so',
  'ゾ': 'zo',
  'タ': 'ta',
  'ダ': 'da',
  'チ': 'chi',
  'ヂ': 'di',
  'ツ': 'tsu',
  'ヅ': 'du',
  'テ': 'te',
  'デ': 'de',
  'ト': 'to',
  'ド': 'do',
  'ナ': 'na',
  'ニ': 'ni',
  'ヌ': 'nu',
  'ノ': 'no',
  'ハ': 'ha',
  'バ': 'ba',
  'パ': 'pa',
  'ヒ': 'hi',
  'ビ': 'bi',
  'ピ': 'pi',
  'フ': 'fu',
  'ブ': 'bu',
  'プ': 'pu',
  'ヘ': 'he',
  'ベ': 'be',
  'ペ': 'pe',
  'ホ': 'ho',
  'ボ': 'bo',
  'ポ': 'po',
  'マ': 'ma',
  'ミ': 'mi',
  'ム': 'mu',
  'メ': 'me',
  'モ': 'mo',
  'ヤ': 'ya',
  'ユ': 'yu',
  'ヨ': 'yo',
  'ラ': 'ra',
  'リ': 'ri',
  'ル': 'ru',
  'レ': 're',
  'ロ': 'ro',
  'ワ': 'wa',
  'ヲ': 'wo',
  'ン': 'n',
  'ヴ': 'vu'
};

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

var PRACTICE_TIME = 60;

var MAX_WPM = 200;

var WORDS_USING = MAX_WPM/2;//Because each hiragana character is 2 english characters

//Select just hiragana, or select hiragana and katakana
var hiraganaWords = ['こんにちは', 'ありがとう', 'さようなら', 'おはよう', 'おやすみ', 'はい', 'いいえ', 'すみません', 'わかりません', 'もしもし', 'いきます', 'えき', 'げつようび', 'ください', 'ごめんなさい', 'ともだち', 'にわとり', 'おいしい', 'すごい', 'みどり', 'おおかみ', 'おんがく', 'かぞく', 'せんせい', 'あした', 'せかい'];

var katakanaWords = ['レストラン', 'ホテル', 'クリスマス', 'カメラ', 'テレビ', 'アニメ', 'アイテム', 'グラス', 'ドア', 'カバン', 'ゼロ', 'ポスト', 'ガス', 'アルバイト', 'テニス', 'テキスト', 'ママ', 'プログラム'];

class PracticeReading extends Component {
  constructor(props){
    super(props);
    this.state = {"practice-state": "start", generatedWords: [], hiraganaChecked: true, katakanaChecked: true, wordInput: '', currentWordIndex: 0, offsetTop: 0, charactersFilled: 0, goodCharactersBadWord: 0, wordsWrong: [], secondsRemaining: PRACTICE_TIME, finishedEarly: false, finishedEarlyTime: 0};

    this.timer = 0;

    this.generateWords = this.generateWords.bind(this);
    this.tryWordCompletion = this.tryWordCompletion.bind(this);
    this.handleCharacterChange = this.handleCharacterChange.bind(this);
    this.readingStarted = this.readingStarted.bind(this);
    this.nextSecond = this.nextSecond.bind(this);
    this.readingEnded = this.readingEnded.bind(this);
    this.resetReadingTimer = this.resetReadingTimer.bind(this);
  }
  inputRefs = [];

  componentDidMount(){
    this.generateWords();
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.hiraganaChecked != this.state.hiraganaChecked || prevState.katakanaChecked != this.state.katakanaChecked){
      this.generateWords();
    }
  }

  setRef = (ref) => {
    this.inputRefs.push(ref);
  };

  readingStarted(){
    this.setState({"practice-state": "practice"});
    this.timer = setInterval(this.nextSecond, 1000);
  }

  nextSecond(){
    if(this.state.secondsRemaining > 0){
      this.setState({secondsRemaining: this.state.secondsRemaining-1});
    }else{
      this.readingEnded();
    }
  }

  readingEnded(){
    this.resetReadingTimer();
    this.setState({"practice-state": "finished"});
  }

  resetReadingTimer(){
    if(this.timer != 0){
      clearInterval(this.timer);
      this.timer = 0;
    }
    this.setState({secondsRemaining: PRACTICE_TIME});
  }

  generateWords(){
    var hiraganaWordCount = 0;
    var katakanaWordCount = 0;
    if(this.state.hiraganaChecked && !this.state.katakanaChecked){
      hiraganaWordCount = WORDS_USING;
    }else if(this.state.katakanaChecked && !this.state.hiraganaChecked){
      katakanaWordCount = WORDS_USING;
    }else if(this.state.katakanaChecked && this.state.hiraganaChecked){
      hiraganaWordCount = WORDS_USING/2;
      katakanaWordCount = WORDS_USING/2;
    }
    var words = [];
    for(var i= 0; i != hiraganaWordCount;i++){
      var randomHiraganaWord = hiraganaWords[Math.floor(Math.random() * hiraganaWords.length)];
      words.push(randomHiraganaWord);
    }
    for(var i= 0; i != katakanaWordCount;i++){
      var randomKatakanaWord = katakanaWords[Math.floor(Math.random() * katakanaWords.length)];
      words.push(randomKatakanaWord);
    }
    this.shuffle(words);
    this.resetReadingTimer();
    this.setState({generatedWords: words, wordInput: '', currentWordIndex: 0, offsetTop: 0, charactersFilled: 0, wordsWrong: [], "practice-state": "start", goodCharactersBadWord: 0, finishedEarly: false, finishedEarlyTime: 0});
  }

  shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  earlyFinish(){
    console.log("Early finish");
    var secondsTaken = PRACTICE_TIME-this.state.secondsRemaining;
    this.setState({"practice-state": "finished", finishedEarlyTime: secondsTaken});
    this.resetReadingTimer();//We don't want it to go off on the result screen
  }

  tryWordCompletion(){
    var fullTranslation = "";
    var currentWord = this.state.generatedWords[this.state.currentWordIndex];
    for (var i = 0; i < currentWord.length; i++) {
      var kanaChar = currentWord[i];
      fullTranslation += directTranslations[kanaChar];
    }

    if(fullTranslation.toLowerCase() != this.state.wordInput.toLowerCase()){
      var wordsWrong = this.state.wordsWrong;
      wordsWrong.push(this.state.currentWordIndex);
      this.setState({wordsWrong: wordsWrong, goodCharactersBadWord: this.state.goodCharactersBadWord+this.state.charactersFilled});
    }
    //wordsWrong

    var currentWordOffsetTop = this.inputRefs[this.state.currentWordIndex].offsetTop;

    if(this.state.currentWordIndex != (WORDS_USING-1)){//IF THIS ISN'T THE LAST WORD
      var nextWordOffsetTop = this.inputRefs[this.state.currentWordIndex+1].offsetTop;
      this.setState({currentWordIndex: this.state.currentWordIndex+1, charactersFilled: 0});

      if(nextWordOffsetTop > currentWordOffsetTop){
        this.setState({offsetTop: this.state.offsetTop+56})
      }
    }else{
      this.setState({currentWordIndex: this.state.currentWordIndex+1, charactersFilled: 0, finishedEarly: true});
      this.earlyFinish();
    }

    this.setState({wordInput: '', charactersFilled: 0});

  }
  handleCharacterChange(event){
    var currentWord = this.state.generatedWords[this.state.currentWordIndex];
    var currentInput = event.target.value;

    if(this.state["practice-state"] == "start"){
      this.setState({"practice-state": "practice"});
      this.readingStarted();
    }
    var copy = currentInput;
    var translations = [];

    var charactersFilled = 0;
    for (var i = 0; i < currentWord.length; i++) {
      var kanaChar = currentWord[i];
      var translation = directTranslations[kanaChar];
      if(copy.startsWith(translation)){
        charactersFilled++;
        copy = copy.substring(translation.length, copy.length);
      }else{
        break;
      }
    }

    this.setState({wordInput: event.target.value, charactersFilled: charactersFilled});
  }

  render(){

    if(this.state["practice-state"] == "start" || this.state["practice-state"] == "practice"){
      var wordElements = [];
      this.state.generatedWords.forEach((word, index) => {
        if(index == this.state.currentWordIndex){

          var wordCopy = word;

          var filled = word.substring(0, this.state.charactersFilled);

          var filledDOM = <span className="filled-character">{filled}</span>

          var rest = word.substring(this.state.charactersFilled, word.length);

          wordElements.push(<span ref={this.setRef} key={index} className="word focused-word">{filledDOM}{rest}</span>);
          return;
        }

        var classAdding = "";
        if(this.state.currentWordIndex > index){
          if(this.state.wordsWrong.indexOf(index) != -1){
            classAdding = "wrong";
          }else{
            classAdding = "correct";
          }
        }
        wordElements.push(<span ref={this.setRef} key={index} className={"word " + classAdding}>{word}</span>);
      });
      return (
        <div>
          <div className="reading-tools">
            <div className="reading-guides">
              <span className="reading-timer">
                {this.state.secondsRemaining == "60" ? "1:00" : "0:" + (this.state.secondsRemaining + "").padStart(2, '0')}
              </span>
              <button className="reading-restartbtn" onClick={this.generateWords}>↺</button>
            </div>
            <div className="reading-selection">
              <label className="container select-container">Hiragana
                <input onChange={() => {this.setState({hiraganaChecked: !this.state.hiraganaChecked});}} checked={this.state.hiraganaChecked} type="checkbox"/>
                <span className="checkmark select-checkmark"></span>
              </label>
              <label className="container select-container">
                Katakana
                <input onChange={() => {this.setState({katakanaChecked: !this.state.katakanaChecked});}} checked={this.state.katakanaChecked} type="checkbox"/>
                <span className="checkmark select-checkmark"></span>
              </label>
            </div>
          </div>
          <div className="word-box">
            <div className="moving-box" style={{"marginTop": -this.state.offsetTop}}>
              {wordElements}
            </div>
          </div>
          <div className="input-area">
            <input className="reading-input" onChange={this.handleCharacterChange} onKeyDown={event => { if(event.repeat){ return; } if (event.key === ' ') { this.tryWordCompletion(); event.preventDefault(); } }} type="text" value={this.state.wordInput} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
          </div>
          <span className="guide-text">Using the box above, type in the corresponding romaji. Press <b>space</b> to go to the next word.</span>
        </div>
      )
    }else if(this.state["practice-state"] == "finished"){

      var wordElements = [];
      this.state.generatedWords.forEach((word, index) => {

        if(index == this.state.currentWordIndex){

          var wordCopy = word;

          var filled = word.substring(0, this.state.charactersFilled);

          var filledDOM = <span className="filled-character">{filled}</span>

          var rest = word.substring(this.state.charactersFilled, word.length);

          wordElements.push(<span ref={this.setRef} key={index} className="word-preview focused-word">{filledDOM}{rest}</span>);
          return;
        }

        var classAdding = "";
        if(this.state.currentWordIndex > index){
          if(this.state.wordsWrong.indexOf(index) != -1){
            classAdding = "wrong";
          }else{
            classAdding = "correct";
          }
        }
        wordElements.push(<span ref={this.setRef} key={index} className={"word-preview " + classAdding}>{word}</span>);
      });

      var totalCharacters = this.state.goodCharactersBadWord;
      var wrongCharacters = 0;//Includes the whole word's characters, not just the one's they got wrong

      for(var i = 0; i != this.state.currentWordIndex;i++){
        var word = this.state.generatedWords[i];
        if(this.state.wordsWrong.indexOf(i) == -1){
          totalCharacters += word.length;
        }else{
          wrongCharacters += word.length;
        }
      }

      totalCharacters += this.state.charactersFilled;

      var accuracy = ((totalCharacters/(totalCharacters+wrongCharacters))*100).toFixed(2);

      var CPM = totalCharacters;

      if(this.state.finishedEarly){
        var time = Math.max(this.state.finishedEarlyTime, 1);
        CPM *= (PRACTICE_TIME/time);
        CPM = Math.round(CPM);
      }
      return (
        <div>
          <div className="results-bar">
            <span className="result">
              <span className="result-label">Speed: </span>{CPM} CPM
            </span>
            <span className="result">
              <span className="result-label">Accuracy: </span>{accuracy} %
            </span>
          </div>
          <div className="practice-preview">{wordElements}</div>
          <button className="practice-btn again-btn" onClick={this.generateWords}>Try again</button>
        </div>
      )
    }
  }
}

export default PracticeReading;
