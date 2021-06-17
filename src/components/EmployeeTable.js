import React from 'react';

function EmployeeTable(props) {

  function date(date){
    date = new Date(date);
    let dob = [];
    dob.push(("0" + (date.getMonth() + 1)).slice(-2));
    dob.push(("0" + date.getDate()).slice(-2));
    dob.push(date.getFullYear());
    return dob.join("/");
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