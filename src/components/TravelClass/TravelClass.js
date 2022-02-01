import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import { FromContext } from '../../context/Context';

const TravelClass = () => {
    const passengerRef = useRef();
    const { setPassengerAndClass } = useContext(FromContext);
    const [passengerCount, setPassengerCount] = useState(1);
    const [travelClass, setTravelClass] = useState('Economy');
    const [isPortalOpen, setIsPortalOpen] = useState(false);

    const decrementHandeler = () => {
        if (passengerCount > 1) {
            setPassengerCount((prev) => prev - 1);
        }
    };
    const incrimentHandler = () => {
        setPassengerCount((prev) => prev + 1);
    };
    useEffect(() => {
        const travelClassAndPassenger = {
            passenger: passengerCount,
            TravelClass: travelClass,
        };
        setPassengerAndClass(travelClassAndPassenger);
    }, [travelClass, passengerCount, setPassengerAndClass]);

    return (
        <div>
            <div>
                <label htmlFor="travel class">Passengers/travel class</label>
                <br />
                <p
                    onClick={() => setIsPortalOpen(!isPortalOpen)}
                    className="field cursor-pointer travel-class"
                >
                    {passengerCount} passenger, {travelClass || 'Economy'}
                </p>
                {isPortalOpen && (
                    <div className="border-2 py-5 travel-class-portal outline outline-3 outline-blue-200">
                        <div className="p-3">
                            <label className="text-xl" htmlFor="travel class">
                                Travel Class
                            </label>
                            <br />
                            <select
                                className="field text-lg"
                                name="travel class"
                                ref={passengerRef}
                                onChange={() =>
                                    setTravelClass(passengerRef.current.value)
                                }
                            >
                                <option
                                    className="text-lg mb-2"
                                    value="Economy"
                                >
                                    Economy{' '}
                                </option>
                                <option
                                    className="text-lg mb-2"
                                    value="Premium"
                                >
                                    Premium{' '}
                                </option>
                                <option
                                    className="text-lg mb-2"
                                    value="Upper Class"
                                >
                                    Upper Class{' '}
                                </option>
                            </select>
                        </div>
                        <hr />
                        <div className="p-3">
                            <p className="my-2 text-xl">Passenger</p>
                            <div className="flex justify-between items-center my-5">
                                <div>
                                    <h2 className="text-xl mb-1">Adult</h2>
                                    <h3>Age 16 and over</h3>
                                </div>
                                <div className="flex justify-around items-center border bg-slate-100">
                                    <button
                                        type="button"
                                        className=" py-2 px-5 text-red-600 text-4xl"
                                        value="adult"
                                        onClick={decrementHandeler}
                                    >
                                        -
                                    </button>
                                    <span className=" py-2 px-5">
                                        {passengerCount}
                                    </span>
                                    <button
                                        type="button"
                                        className=" py-2 px-5 text-red-600 text-4xl"
                                        value="adult"
                                        onClick={incrimentHandler}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="flex justify-center my-5 items-center">
                            <button
                                onClick={() => setIsPortalOpen(false)}
                                className="py-3 px-10 text-xl cursor-pointer border-red-600 border text-red-600"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TravelClass;
