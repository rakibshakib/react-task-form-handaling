import React, { useContext, useRef } from 'react';
import { FromContext } from '../../context/Context';
import { IoLocationSharp } from 'react-icons/io5';

const InputField = ({ handeler, label, errMsg = null, placeHolder, icon }) => {
    const inputValue = useRef();
    const { error } = useContext(FromContext);

    return (
        <div>
            <label htmlFor="inputFrom">{label}</label>
            <br />
            <div className="flex justify-items-start items-center custom-bg">
                {icon && (
                    <span>
                        <IoLocationSharp />
                    </span>
                )}
                <input
                    className="field"
                    ref={inputValue}
                    type="text"
                    placeholder={placeHolder}
                    onChange={() => handeler(inputValue.current.value)}
                />
            </div>
            {error && <p className="text-sm text-red-500 mt-1">{errMsg}</p>}
        </div>
    );
};

export default InputField;
