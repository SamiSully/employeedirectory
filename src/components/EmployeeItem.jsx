import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class EmployeeItem extends Component {
    render () {
    return (
        <div>
            <p> {this.props.employee.name} </p>
        </div>
    )
}
}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeeItem;