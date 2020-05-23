import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox} from './components/search-box/search.component'

// the parent component surrounds everything in our app

class App extends Component {
// the state is being passed down to the Cardlist component as an attribute
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField:''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleChange(e){
    this.setState({searchField:e.target.value})
  }
  // 10A, kunle idowu street, idado estate, agungi
  //fob02728

  render() {

    const monsters = this.state.monsters;  
    const searchfield = this.state.searchField;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchfield.toLowerCase())
      )
      console.log(filteredMonsters)
    
    return (
      // the state is passed down as an attribute to CardList
      // the CardLi st recieves it as a prop
      <div className="App">
        {/* <input type="search"
        placeholder=" search monsters" 
        onChange={e=>{
          this.setState({searchField:e.target.value}
        )
      }}
      /> */}

      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder='search monsters'
      handleChange = {this.handleChange}
      
      />
        <CardList monsters =  {filteredMonsters}/> 
      </div>

    )
  }
}

// whenever states are passed down to a component they are converted to props



export default App;








// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }