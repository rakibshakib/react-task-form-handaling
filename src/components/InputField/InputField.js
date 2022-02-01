import React, { useContext, useRef } from 'react';
import { FromContext } from '../../context/Context';

const InputField = ({ handeler, label, errMsg = null, placeHolder }) => {
    const inputValue = useRef();
    const { error } = useContext(FromContext);

    return (
        <div>
            <label htmlFor="inputFrom">{label}</label>
            <br />
            <input
                className="field"
                ref={inputValue}
                type="text"
                placeholder={placeHolder}
                onChange={() => handeler(inputValue.current.value)}
            />
            {error && <p className="text-sm text-red-500 mt-1">{errMsg}</p>}
        </div>
    );
};

export default InputField;
