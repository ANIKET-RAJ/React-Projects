import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'
import ValidationComponent from './ValidationComponent'
import ListComponent from './listComponent';

class App extends Component {

  state = {
    username : "Aniket Raj",
    tags : ["hello","hi","howru"],
    paragraphLength : 0,
    mylist :  [
      {
        id: 'a',
        firstname: 'Robin',
        lastname: 'Wieruch',
        year: 1988,
      },
      {
        id: 'b',
        firstname: 'Dave',
        lastname: 'Davidds',
        year: 1990,
      },
      {
        id: 'c',
        firstname: 'amit',
        lastname: 'Davidds',
        year: 1990,
      },
      {
        id: 'd',
        firstname: 'Kirps',
        lastname: 'Davidds',
        year: 1990,
      },
      {
        id: 'e',
        firstname: 'Rude',
        lastname: 'Davidds',
        year: 1990,
      },
      
    ]
  }

 

  nameChangedHandler = (event) => {
    this.setState({
      username : event.target.value,
      toggleTracker : false
    }
    )
  }

  nameToggleHandler = () =>{
    
  }

  paragraphLengthHandler = (event) =>{
    console.log("para handler called")
    this.setState({
      paragraphLength : event.target.value.length
    })
  }

  deleteItemHandler = (event) =>{
    console.log(event)
    var array = [...this.state.mylist];
    var index = array.findIndex(obj => obj.id === event)
      if (index !== -1) {
    array.splice(index, 1);
    this.setState({mylist: array});
      }
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I am App</h1>
        <UserInput change = {this.nameChangedHandler} username = {this.state.username}/><br/>        
        <UserOutput username = {this.state.username}/>
        <UserOutput username = "Hardik"/>
        <ul>
          {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
        </ul>
        <input type = "text" onChange = {this.paragraphLengthHandler} />
        <p>Paragraph length is : {this.state.paragraphLength}</p>
        <ValidationComponent lengt= {this.state.paragraphLength}/>
        <ListComponent mylist = {this.state.mylist} deleteItem={this.deleteItemHandler}/>
      </div>
    );
  }
}

export default App;
