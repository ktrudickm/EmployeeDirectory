import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import Search from './components/Search';
import Main from './components/Main';
import API from './utils/API';
import './App.css';

class App extends React.Component {
  state = { employees: [], search: '' };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.dob,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchEmployee = (filter) => {
    console.log('Search', filter);
    const empFilter = this.state.employees.filter((employee) => {
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ employees: empFilter });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('Handle ', this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Button Clicked', this.state.search, e);
    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      <Main>
        <div className="container">
          <div className="row">
              <h2>The React Employee Directory</h2>
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </div>

          <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                  </tr>
                </thead>
                {[...this.state.employees].map((item) => (
                  <EmployeeTable
                    picture={item.picture}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    dob={item.dob}
                    key={item.key}
                  />
                ))}
              </table>
          </div>
        </div>
      </Main>
    );
  }
}

export default App;
