import React from 'react';
import Table from './Table.js';

function App() {
  const columns = [
    { path: "id",   name: "ID" },
    { path: "name", name: "Name" },
    { path: "age",  name: "Age" },
    { path: "element",  name: "Element" },
  ];
  
  const data = [
    { id: 1, name: 'Kate',  age: 25, element: '🔥' },
    { id: 2, name: 'Tom',   age: 23, element: '💨' },
    { id: 3, name: 'Ann',   age: 26, element: '💦' },
    { id: 4, name: 'Jack',  age: 21, element: '🌳' }
  ];
  return (
    
    <div>
      <Table id="id" columns={columns} data={data} />
    </div>

  );
}

export default App;
