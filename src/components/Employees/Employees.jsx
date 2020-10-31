import React, { Component } from "react";
import EmployeeItem from './EmployeeItem';
import PropTypes from 'prop-types';

class Employees extends Component {
  render() {
      console.log(this.props.employees)
    return this.props.employees.map((employee)=> (
    <EmployeeItem key={employee.id} employee={employee} _handleClick={this.props._handleClick}/>
    ));
  }
}

Employees.propTypes = {
    employees: PropTypes.array.isRequired
}

export default Employees;
