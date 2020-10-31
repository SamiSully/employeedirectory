import React, {Component} from 'react';
import PropTypes from 'prop-types';

const EmployeeItem = ({ name, phone, email }) => {
    
    return (
        <div>
            {name} {phone} {email}
        </div>
    )

}

EmployeeItem.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeeItem;