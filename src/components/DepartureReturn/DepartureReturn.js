import React, { useContext, useRef } from 'react';
import { FromContext } from '../../context/Context';

const DepartureReturn = () => {
    const startDate = useRef();
    const returnDate = useRef();
    const { setStartDate, setReturnDate, isRoundTrip, error } =
        useContext(FromContext);
    return (
        <div className='w-full border'>
            <div className="flex items-center gap-x-3">
                <div>
                    <label htmlFor="inputFrom">Departure</label>
                    <br />
                    <input
                        className="datefield"
                        ref={startDate}
                        type="date"
                        onChange={() => setStartDate(startDate.current.value)}
                    />
                    {error && (
                        <p className="text-sm text-red-500 mt-1">
                            *Please Enter A Departure Date
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="inputFrom">Return</label>
                    <br />
                    <input
                        className={` datefield ${
                            !isRoundTrip ? 'dark-input' : null
                        } `}
                        disabled={!isRoundTrip}
                        ref={returnDate}
                        type="date"
                        onChange={() => setReturnDate(returnDate.current.value)}
                    />
                    {error && (
                        <p className="text-sm text-red-500 mt-1">
                            *Please Enter A Return Date
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DepartureReturn;
