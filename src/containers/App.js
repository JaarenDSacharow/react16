import React, { Component } from 'react';
import './App.css';
import Main from '../components/Main/Main';
import People from '../components/People/People';

class App extends Component {

  state = { //you can only use state in a class that extends Component
    showPeople: false,
    people : [
      {
        id: 1,
        name: "Dan",
        age: 43,
        hobbies: "My Hobbies are Writing and Drawing."
      },
      {
        id: 2,
        name: "Molly",
        age: 24,
        hobbies: "My Hobbies are Coding and Electronics."

      },
      {
        id: 3,
        name: "Chuck",
        age: 26,
        hobbies: "My Hobbies are Enginnering and Automation."
      },

    ]
  }

 //handler to update a name
  nameChangedHandler = (event, id) => {

    //first find the spot in state that matches the ID argument, so we
    // know where it is in the 'people' state object
    const personIndex = this.state.people.findIndex(p => {
      //for some reason breakpoints wouldn't pause without this line below
      //debugger;
      return p.id === id;
    });

    // use spread operator to make a copy of the single person object, using
    // the index we got just above to find it in the 'people' state object
    const person = {
      ...this.state.people[personIndex]  
    };

     //change the copy of that person object with the name passed in from the event target
    person.name = event.target.value; 

    //make a copy of state with the spread operator, so we don't mutate state directly
    const people = [...this.state.people]; 
    //on that copy, replace the value with the single person copy 
    people[personIndex] = person;

    //finally, set state to the whole copy so we don't mutate state directly
    this.setState({
      people: people
    });
  }


  //simple handler to toggle visibility

  toggleShowPeopleHandler = () => {
    this.setState({
      showPeople: !this.state.showPeople
    })
  }

  //handler to remove a person at a given index

  deletePersonHandler = (index) => {

    //use the spread operator to make a copy rather than mutating state
    const people = [...this.state.people]; 
    
    //remove the element at the passed index from the copy
    people.splice(index, 1); 

    //now update the state with the copy
    this.setState({
      people: people
    })
  }

  render() {

    let people = null;

    if(this.state.showPeople) {
      people = (
        <div>
          <People 
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}  
          />
        </div>
      )
    }
    return (
      <div className="App">
      <Main
        people={this.state.people}
        click={this.toggleShowPeopleHandler}
        buttonClass={this.state.showPeople ? "toggleButtonVisible" : "toggleButtonHidden"}
     />
      {people}
      </div>
    );
  }
}

export default App;
