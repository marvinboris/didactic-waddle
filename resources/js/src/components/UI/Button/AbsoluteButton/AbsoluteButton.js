import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const absoluteButton = ({ children, color, icon, iconColor = 'reset', className = '', size = "lg", pill = false }) =>
    <Button color={color} size={size} className={"text-500 text-montserrat-alt " + (pill ? ' rounded-pill ' : '') + className}>
        <span className="position-relative px-4 d-inline-flex align-items-center small text-500">
            <span className="pr-2">{children}</span>
            <FontAwesomeIcon icon={icon} className={"ml-3 position-absolute text-" + iconColor} style={{ right: 0 }} />
        </span>
    </Button>;

export default absoluteButton;
