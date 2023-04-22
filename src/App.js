import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      robots: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => this.setState(() => {
      return {robots: users}
    }))
  }

  render(){
    return (
      <div className="App">
        {this.state.robots.map((robot) => {
            return( 
              <div key={robot.id}>
                <h1>{robot.name}</h1>
              </div>
            );
          })}
      </div>
    );
  }
  
}

export default App;
