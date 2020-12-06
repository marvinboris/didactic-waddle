import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const centerButton = ({ children, color, icon, className, size }) =>
    <Button color={color} size={size} className={"d-inline-flex align-items-center rounded-2 px-4 " + className}>
        <FontAwesomeIcon icon={icon} className="mr-2" />
        <span className="text-x-small text-700">{children}</span>
    </Button>;

export default centerButton;