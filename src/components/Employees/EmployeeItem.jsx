import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class EmployeeItem extends Component {
    getStyle = () => {
        return {
            background: 'lightgray',
            borderBottom: '1px #000 solid',
        }
    }
    render () {
    return (
        <div style={this.getStyle()}>
            <button onClick={() => this.props._handleClick("name")}> {this.props.employee.name}</button>
            <button onClick={() => this.props._handleClick("phone")}>{this.props.employee.phone}</button>
             <button onClick={()=> this.props._handleClick("email") }>{this.props.employee.email}</button>
        </div>
    )
}
}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeeItem;