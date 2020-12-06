import React, { useState } from 'react';
import { FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DateTimeInput from './DateTimeInput/DateTimeInput';

import { checkValidity } from '../../../../shared/utility';

export default ({ icon, addon, onChange, className = '', name, type = 'text', required, readonly, placeholder, value = '', defaultValue = '', validation = {}, append, children }) => {
    const [touched, setTouched] = useState(false);

    const inputChangedHandler = e => {
        setTouched(true);
        onChange(e);
    }

    let content;

    if (type === 'datetime-local') content = <DateTimeInput id={name} name={name} required={required} readOnly={readonly} className={"w-100 d-flex text-small h-100"} value={value} defaultValue={value ? null : defaultValue} placeholder={placeholder} />
    else content = <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
            <InputGroupText>
                {icon ? <FontAwesomeIcon className="text-blue mx-1" fixedWidth icon={icon} /> : addon}
            </InputGroupText>
        </InputGroupAddon>

        {children ?
            <CustomInput valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} id={name} name={name} required={required} readOnly={readonly} value={value} defaultValue={value ? null : defaultValue} className={"text-small h-100 px-4 py-3"} placeholder={placeholder}>{children}</CustomInput>
            :
            <Input valid={touched && checkValidity(value, validation)} invalid={touched && !checkValidity(value, validation)} onChange={inputChangedHandler} type={type} id={name} name={name} required={required} readOnly={readonly} value={value} defaultValue={value ? null : defaultValue} className={"text-small h-100 px-4 py-3"} placeholder={placeholder} />
        }

        {append ? <InputGroupAddon addonType="append">
            <InputGroupText className="text-secondary text-small px-4">
                {append}
            </InputGroupText>
        </InputGroupAddon> : null}
    </InputGroup>;

    return <FormGroup className={className}>
        {content}
    </FormGroup>;
};