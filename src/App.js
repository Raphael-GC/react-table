import React from 'react';
import Table from './Table.js';

function App() {
  const columns = [
    { path: "id",   name: "ID" },
    { path: "disciplina", name: "Disciplina" },
    { path: "temas", name: "Temas" },
    { path: "done",  name: "Done" },
    { path: "sm1",  name: "SM1" },
    { path: "sm2",  name: "SM2" },
    { path: "av1",  name: "AV1" },
    { path: "nf",  name: "NF" },
  ];
  
  const data = [
    { id: 1, disciplina: 'ARQUITETURA DE SISTEMAS DISTRIBUIDOS',  temas: 10, done: '', sm1: '', sm2: '', av1: '', nf: '' },
    { id: 2, disciplina: 'PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS',   temas: 10, done: '', sm1: '', sm2: '', av1: '', nf: '' },
    { id: 3, disciplina: 'DESENVOLVIMENTO RÁPIDO DE APLICAÇÕES EM PYTHON',   temas: 5, done: '', sm1: '', sm2: '', av1: '', nf: '' },
    { id: 4, disciplina: 'PROGRAMAÇÃO CLIENTE SERVIDOR',  temas: 5, done: '', sm1: '', sm2: '', av1: '', nf: '' },
    { id: 5, disciplina: 'ENGENHARIA DE USABILIDADE',  temas: 10, done: '', sm1: '', sm2: '', av1: '', nf: '' }
  ];
 
  // const data = [
 //   { id: 1, name: 'Kate',  age: 25, element: '🔥' },
 //   { id: 2, name: 'Tom',   age: 23, element: '💨' },
 //   { id: 3, name: 'Ann',   age: 26, element: '💦' },
 //   { id: 4, name: 'Jack',  age: 21, element: '🌳' }
 // ];
  return (
    
    <div>
      <Table id="id" columns={columns} data={data} />
    </div>

  );
}

export default App;
