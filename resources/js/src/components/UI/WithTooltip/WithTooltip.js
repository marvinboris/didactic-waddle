import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

export default ({ content, id, children }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <>
            <span id={id}>{children}</span>
            <Tooltip isOpen={tooltipOpen} target={id} toggle={toggle}>
                {content}
            </Tooltip>
        </>
    );
}