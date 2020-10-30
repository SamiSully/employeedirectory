import React, { Component } from "react";

class Employees extends Component {
  render() {
      console.log(this.props.employees)
    return this.props.employees.map((employee)=> (
    <h3>{employee.name} {employee.phone}</h3>
    ));
  }
}

export default Employees;
