import React from 'react';

const Form = ({
    placeholder,
    buttonText,
    value,
    onSubmitEvent,
    onChange }) => (
        <form onSubmit={onSubmitEvent}>
            <input
                className="w3-input w3-border"
                value={value}
                type="text"
                name="name"
                placeholder={placeholder}
                onChange={onChange}
            />
            <input
                className="w3-button w3-black w3-right w3-section"
                type="submit"
                value={buttonText} />
        </form>
    );

export default Form;