import React from 'react';

interface RadioButtonProps {
    label: string;
    type: string;
    value: string;
    checked: boolean;
    onChange: any
}

export default (props:RadioButtonProps) => {
    const htmlFor = `${props.label}--${Math.random()}`;

    return (
        <React.Fragment>
            <label htmlFor = {htmlFor}>{props.label}</label>
            <input value={props.value} type={props.type} checked={props.checked} onChange={props.onChange}/>
        </React.Fragment>
    )
}