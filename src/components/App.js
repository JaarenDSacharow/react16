import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = { //you can only use state in a class that extends Component
    people : [
      {
        name: "Dan",
        age: 43,
        hobbies: "My Hobbies are Writing and Drawing."
      },
      {
        name: "Molly",
        age: 24,
        hobbies: "My Hobbies are Coding and Electronics."

      },
      {
        name: "Chuck",
        age: 26,
        hobbies: "My Hobbies are Enginnering and Automation."
      },

    ]
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked');
    //DON'T DO THIS this.state.people[0] = "Daniel";
    this.setState({
      people : [
        {
          name: newName,
          age: 43,
          hobbies: "My Hobbies are Writing and Drawing."
        },
        {
          name: "Molly Beans",
          age: 24,
          hobbies: "My Hobbies are Coding and Electronics."
  
        },
        {
          name: "Chuck",
          age: 26,
          hobbies: "My Hobbies are Enginnering and Automation."
        },
  
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      people : [
        {
          name: event.target.value,
          age: 43,
          hobbies: "My Hobbies are Writing and Drawing."
        },
        {
          name: "Molly Beans",
          age: 24,
          hobbies: "My Hobbies are Coding and Electronics."
  
        },
        {
          name: "Chuck",
          age: 26,
          hobbies: "My Hobbies are Enginnering and Automation."
        },
  
      ]
    });
  }

  render() {
    return (
      <div className="App">
      <h1>Hi, this is a React App</h1>
      <button className="updateButton" onClick={() => this.switchNameHandler('Daniel')}>Switch name</button>
      { 
        this.state.people.map((person)=> {
          return (
          <Person 
            changed = {this.nameChangedHandler}
            click={this.switchNameHandler.bind(this, 'Dan')}  // you can pass references to a method to a child component
            name={person.name} 
            age={person.age}>
            {person.hobbies}
          </Person>
          )
        })
      }
      </div>
    );
  }
}

export default App;
