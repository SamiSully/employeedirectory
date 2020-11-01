import React, { Component } from "react";
import EmployeeItem from './EmployeeItem';
import PropTypes from 'prop-types';

class Employees extends Component {
  render() {

      // <button onClick={() => this.props._handleClick("name")}> Name </button>;
    return (this.props.employees.map((employee)=> ( <div>
    <EmployeeItem key={employee.id} employee={employee} _handleClick={this.props._handleClick}/>
    </div>))
    )
  }
}

Employees.propTypes = {
    employees: PropTypes.array.isRequired
}

export default Employees;
