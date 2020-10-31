import React, { Component } from "react";
import "./App.css";
import Employees from "./components/Employees/Employees";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {
    employees: [
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@test.com",
        phone: "423-234-2443",
        birthday: "12.1.1982",
      },
      {
        id: 2,
        name: "George Frank",
        email: "george.frank@test.com",
        phone: "565-453-8845",
        birthday: "8.12.1965",
      },
      {
        id: 3,
        name: "Harriet Smith",
        email: "harriet.smith@test.com",
        phone: "678-688-7878",
        birthday: "6.22.1979",
      },
    ],
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        this.setState({ employees: this.state.employees, result });
      });
  }

  handleClick = (key_to_sort) => {
    console.log("Clicked");
    this.setState({
      employees: this.state.employees.sort((a, b) =>
        a[key_to_sort].localeCompare(b[key_to_sort])
      ),
    });
  };

  render() {
    console.log(this.state.employees);
    return (
      <div className="App">
        <Navbar />
        <Employees
          _handleClick={this.handleClick}
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default App;
