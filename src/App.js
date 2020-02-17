import React, {Component} from 'react';
import ContactData from '../src/components/containers/Contact-data/Contact-data';
import classes from './App.css';



class App extends Component{
  render(){
    return(
    <div className={classes.App}>
      <h1>Hello kitty!</h1>
      <ContactData />
    </div>
    );
  }
}

export default App;
