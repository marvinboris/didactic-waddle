import React, { useState } from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { checkValidity } from '../../../shared/utility';

export default ({ icon, addon, onChange, className = '', name, type = 'text', required, readonly, placeholder, value = '', validation = {}, append, children }) => {
    const [touched, setTouched] = useState(false);

    const inputChangedHandler = e => {
        setTouched(true);
        onChange(e);
    }

    return <FormGroup className={className}>
        <InputGroup className="bg-black-10 rounded-2" size="lg">
            <InputGroupAddon addonType="prepend">
                <InputGroupText className="bg-transparent border-left-0 border-top-0 border-bottom-0 border-border px-4">
                    {icon ? <FontAwesomeIcon className="text-orange mx-1" fixedWidth icon={icon} /> : addon}
                </InputGroupText>
            </InputGroupAddon>

            {children ?
                <CustomInput valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} name={name} required={required} readOnly={readonly} value={value} className={"bg-black-10 border-right-0 border-top-0 border-bottom-0 border-border text-small text-secondary h-100 px-4 py-3"} placeholder={placeholder}>{children}</CustomInput>
                :
                <Input valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} name={name} required={required} readOnly={readonly} value={value} className={"bg-transparent border-0 text-small text-secondary h-100 px-4 py-3"} placeholder={placeholder} />
            }

            {append ? <InputGroupAddon addonType="append">
                <InputGroupText className="bg-transparent border-0 text-secondary text-small px-4">
                    {append}
                </InputGroupText>
            </InputGroupAddon> : null}
        </InputGroup>
    </FormGroup>;
};