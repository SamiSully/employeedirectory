import React, { Component } from "react";
import "./App.css";
import Employees from "./components/Employees";

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
        name: "George Foreman",
        email: "george.foreman@test.com",
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
  render() {
    console.log(this.state.employees);
    return (
      <div className="App">
        <h1>this is a test!</h1>
        <Employees employees={this.state.employees} />
      </div>
    );
  }
}

export default App;
