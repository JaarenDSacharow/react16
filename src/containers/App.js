import React, { PureComponent } from 'react';
import './App.css';
import Main from '../components/Main/Main';
//import People from '../components/People/People';
import PeopleStateful from '../components/People/PeopleStateful'
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {  //pure component implements shouldComponentUpdate logic automatically
// App serves as the container, try to have state set here only
//you can only use state in a class that extends Component
//STATEFUL components are typically called containers
//STATELESS components rely on props and not state and cannot alter state

constructor(props){
  super(props); //you have to define super if you create your own constructor

  console.log('[App.js] Inside Constructor');

  this.state = { 
    authenticated: false,
    showPeople: false,
    toggleClicked: 0, 
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

}

componentWillMount(){
  console.log('[App.js] Inside componentWillMount()');
}

componentDidMount(){
  console.log('[App.js] Inside componentDidMount()');
}

componentDidUpdate(){
  console.log('[App.js] Inside componentDidUpdate()');
}
 
//this is commented out because this is a pure component rather than component
//could be a performance hit to do everywhere
//  shouldComponentUpdate( nextProps, nextState){
//   console.log('[App.js] Inside shouldComponentUpdate()', nextProps, nextState);
//   //return true;
//   //you can return false here based on a condition, there will be no rerender
//   return nextState.people !== this.state.people ||
//     nextState.showPeople !== this.state.showPeople
//  }

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

  //pass in prevState to make sure no other state version interferes
  // setState is async!
  toggleShowPeopleHandler = () => {
    this.setState((prevState, props) => { 
      return{
        showPeople: !this.state.showPeople,
        toggleClicked: prevState.toggleClicked + 1 
      }
      
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

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  }

  render() {
    console.log('[App.js] Inside render()');
    let people = null;

    if(this.state.showPeople) {
      people = (
        <div>
          <PeopleStateful 
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}  
          />
        </div>
      )
    }
    return (
      <Aux>
        <button onClick={()=>{this.setState({showPeople:true})}}>Show People (Demo pure component/shouldComponentUpdate)</button>
        <Main
          toggleClicked={this.state.toggleClicked}
          title={this.props.title}
          people={this.state.people}
          click={this.toggleShowPeopleHandler}
          buttonClass={this.state.showPeople ? "toggleButtonVisible" : "toggleButtonHidden"}
          login={this.loginHandler}
      />
      <AuthContext.Provider value={this.state.authenticated}>
        {people}
      </AuthContext.Provider>
        
      </Aux>
    );
  }
}

export default withClass(App, "App");
