import React from 'react';
import './App.css';
import Image from './image/Image';
import AlphabetContainer from './alphapet/AlphabetContainer';
import Paragraph from './paragraph/Para';
import Word from './word/Word';
import AppButton from './buttons/Button';
class App extends React.Component {
    
  state = {
    word:[],
    hint: "",
    hintShow:"",
    checkedletter:[],
    mistake : 0
  };
 
  async fetchWord ()  {
    try{
      let response = await fetch(
        "https://random-word-api.herokuapp.com/word?number=1"
      );
      let json = await response.json();
      let word = json[0];
       console.log (word)
       this.fetchHint(word)
    }catch{
      this.fetchWord();
    }
    
  }

  componentDidMount() {
    this.fetchWord();
  }

  async  fetchHint(word) {
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    let json = await response.json();
    //check the if there is a defination for the word
    if (typeof json[0] === "object" && json[0].meanings.length !== 0) {
      let meanings = json[0].meanings;
      let definations = meanings[0].definitions;
      let  hint = definations[0].definition;
      console.log(hint);
      this.setState({
        word: word.split(""),
        hint: hint,
      })
      

    } else {

      this.fetchWord();
    }
  }
 
   onClickHandler =(value) =>{
     let indices ;
     if(this.state.checkedletter.length!==0){
      indices=this.state.checkedletter.map(ele => ele)
     }else{
      indices=[];
     }
     
    let char = this.state.word.find(ele => ele ===value);
    if(char){
    indices.push(char)
    this.setState({
      checkedletter:indices
    })
    }else{
       let numberOfMis=this.state.mistake;
       ++numberOfMis
       if(numberOfMis<=10){
        this.setState({
         mistake:numberOfMis
        })
        if(numberOfMis===10){
          this.setState({
            hintShow:"Try another"
          })
        }
       }
       }
       
    
      
  }
  playAgain =() =>{
    this.fetchWord();
    this.setState({
      word:[],
      hint: "",
      hintShow:"",
      checkedletter:[],
      mistake : 0
       
    })
    this.forceUpdate();
  }
  hintFun =() =>{
    this.setState({
      hintShow:this.state.hint
    })
  }

  
  
  render(){
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="header">HANG MAN</h1>
         <Paragraph text={"VANILA JAVA SCRIPT HANG MAN"} />
         <Paragraph text={"use the alphabet below to guss the word .or click hint to get clue"} />
        <AlphabetContainer  onclick={this.onClickHandler}/>
        <Paragraph text={this.state.hintShow} />
        <Word letters={this.state.word} checkedletter={this.state.checkedletter}/>
        <Image mistake={this.state.mistake} />
        <div className="btn-container">
           <AppButton text="Hint" oncliclk={this.hintFun}/>
           <AppButton text="Play again" oncliclk={this.playAgain}/>
        </div>
      </div>
    );
  }
  
}

export default App;
