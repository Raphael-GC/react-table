//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Table from './Table.js';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//      </header>
//    </div>
//  );
//}



function App() {
  const columns = [
    { path: "id",   name: "ID" },
    { path: "name", name: "Name" },
    { path: "age",  name: "Age" },
    { path: "favFruit",  name: "Favourite Fruit" },
  ];
  
  const data = [
    { id: 1, name: 'Kate',  age: 25, favFruit: '🍏' },
    { id: 2, name: 'Tom',   age: 23, favFruit: '🍌' },
    { id: 3, name: 'Ann',   age: 26, favFruit: '🍊' },
    { id: 4, name: 'Jack',  age: 21, favFruit: '🍒' }
  ];
  return (
    
    <div>
      <Table id="id" columns={columns} data={data} />
    </div>

  );
}

export default App;
