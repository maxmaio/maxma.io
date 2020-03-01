import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

render(){
  return (
    <div className="header">
      <img className="gravatar" src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600" alt="avatar" />
      <h4>Max Maio</h4>
  </div>
  );
}
}

export default App;
