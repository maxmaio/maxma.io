import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import art1 from './components/art1';
import art2 from './components/art2';
import bday from './components/bday';
import art3 from './components/art3';
import maxBday from './components/maxBday';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>

            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/art1" component={art1} exact/>
             <Route path="/art2" component={art2} exact/>  
             <Route path="/bday" component={bday} exact/>   
             <Route path="/art3"  component={art3} exact/>
             <Route path="/maxBday" component={maxBday} exact/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

