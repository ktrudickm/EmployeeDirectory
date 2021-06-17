import React from 'react';

function EmployeeTable(props) {

  date = () => {

    return 
  }

  return (
    <thead>
      <tr>
        <th>
          <img alt={props.firstName + " " + props.lastName} src={props.picture} />
        </th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{date(props.dob)}</td>
      </tr>
    </thead>
  );
}

export default EmployeeTable;