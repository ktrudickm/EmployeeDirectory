import React from "react";
import "./style.css"

const Employees = (props) => {
  return (
    <table className="table table-striped table-sortable text-center">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" data-field="name" data-sortable="true">
            <span onClick={() => props.sortBy("name", "lastname", "firstname")}>
              Name
            </span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("phone")}>Phone Number</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("email")}>Email Address</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("dob", "date")}>Date of Birth</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.state.filteredEmployees.map((employee) => {
          const { firstname, lastname } = employee.name;
          const fullName = `${firstname} ${lastname}`;

          // Format date
          const dob = props.formatDate(employee.dob.date);

          return (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.thumbnail} alt={fullName} />
              </td>
              <td className="align-middle">{fullName}</td>
              <td className="align-middle">
              <a href={`tel:+1${employee.phone}`}>{employee.phone}</a></td>
              <td className="align-middle email">
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td className="align-middle">{dob}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Employees;