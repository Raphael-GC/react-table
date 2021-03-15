import React from 'react';


const tableStyle = {
    border: '1px solid black',
    borderCollapse: 'collapse',
    textAlign: 'center',
    width: '100%'
}

const tdStyle = {
  	border: '1px solid #85C1E9',
    background: 'white',
    padding: '5px'
};

const thStyle = {
  	border: '1px solid #3498DB',
    background: '#3498DB',
  	color: 'white',
    padding: '5px'
};

const Table = ({ id, columns, data }) => (
  <table style={tableStyle}>
    <tbody>
      <tr>
        {columns.map(({ path, name }) => (
          <th style={thStyle} key={path}>{name}</th>
        ))}
      </tr>
      {data.map((rowData) => (
        <tr key={rowData[id]}>
          {columns.map(({ path }) => (
            <td style={tdStyle} key={path}>
              {rowData[path]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;