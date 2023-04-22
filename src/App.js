import { Component } from 'react';

import './App.css';

class App extends Component {

  //29!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  constructor(){
    super();

    this.state = {
      robots: [],
      searchField: ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => this.setState(() => {
      return {robots: users}
    }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  };

  render(){
    const { robots, searchField } = this.state;
    const { onSearchChange} = this;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
      <input 
        className='search-box'
        type='search'
        placeholder='search robots'
        onChange={onSearchChange}
      />
        {filteredRobots.map((robot) => {
            return( 
              <div key={ robot.id }>
                <h1>{ robot.name }</h1>
              </div>
            );
          })}
      </div>
    );
  }
  
}

export default App;
