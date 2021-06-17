import React from 'react';
import EmployeeTable from './components/EmployeeTable';
import Search from './components/Search';
import Main from './components/Main';
import API from './utils/API';
import './App.css';

class App extends React.Component {
  state = { employees: [], 
          filteredEmployees: [],
        search: '',
        orderSort: 'descend'
      };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((emps, i) => ({
            firstName: emps.name.first,
            lastName: emps.name.last,
            picture: emps.picture.large,
            email: emps.email,
            phone: emps.phone,
            dob: emps.dob,
            key: i,
          })),
          filteredEmployees: res.data.results.map((emps, i) => ({
            firstName: emps.name.first,
            lastName: emps.name.last,
            picture: emps.picture.large,
            email: emps.email,
            phone: emps.phone,
            dob: emps.dob,
            key: i,
          }))
        });
      })
      .catch((err) => console.log(err));
  }

  refreshPage() {
    window.location.reload(false);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSort = () => {
    if(this.state.orderSort === "descend"){
      this.setState({
        orderSort:'ascend'
      })
    }else{
      this.setState({
        orderSort:'descend'
      })
    }
    const compare = (a,b) =>{
 
      if(this.state.orderSort === "ascend"){
        return a.firstName.localeCompare(b.firstName);

      } else{
        return b.firstName.localeCompare(a.firstName);
      }
    }

    let sortUsers = this.state.filteredEmployees.sort(compare);
    this.setState({filteredEmployees: sortUsers})

  };


 

  handleFormSubmit = (event) => {
    let filter = event.target.value;

    const empFilter = this.state.employees.filter((employee) => {

      let val = Object.values(employee).join('').toLowerCase();

      return val.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: empFilter });
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
                <thead className="heading">
                  <tr>
                    <th>Photo</th>
                    <th className='sortName'
                      onClick={this.handleSort}
                    >First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                  </tr>
                </thead>
                {this.state.filteredEmployees.map((item, i) => (
                    <EmployeeTable 
                        key={i}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        email={item.email}
                        phone={item.phone}
                        picture={item.picture}
                        dob={item.dob.date}
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
