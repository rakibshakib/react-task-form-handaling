import React, { useContext } from 'react';
import { FromContext } from '../../context/Context';
import DepartureReturn from '../DepartureReturn/DepartureReturn';
import InputField from '../InputField/InputField';
import TravelClass from '../TravelClass/TravelClass';

const FormContainer = () => {
    const {
        getSubmittedData,
        onChangeHandeler,
        setDeparture,
        setDestination,
        setVoucher,
        isRoundTrip,
    } = useContext(FromContext);

    return (
        <>
            <div className="custom-container">
                <h2 className="text-2xl md:text-5xl text-red-500 ">
                    Flight deals with Virgin Atlantic
                </h2>

                <form onSubmit={getSubmittedData}>
                    <div className="flex justify-items-start items-center my-5">
                        <div>
                            <input
                                type="radio"
                                name="click"
                                value="One Way"
                                onChange={() => onChangeHandeler('One Way')}
                            />
                            <label className="ml-3" htmlFor="click">
                                One Way
                            </label>
                        </div>
                        <div className="ml-5">
                            <input
                                checked={isRoundTrip}
                                type="radio"
                                name="click"
                                value="Round Trip"
                                onChange={() => onChangeHandeler('Round Trip')}
                            />
                            <label className="ml-3" htmlFor="click">
                                Round Trip
                            </label>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-5">
                        <InputField
                            icon
                            label={'From'}
                            handeler={setDeparture}
                            errMsg={'*Please Enter A Departure Point'}
                            placeHolder="Select Departure"
                        />
                        <InputField
                            icon
                            label={'To'}
                            handeler={setDestination}
                            errMsg={'*Please Enter A Destination'}
                            placeHolder="Select Destination"
                        />
                        <DepartureReturn />
                        <TravelClass />
                        <InputField
                            label={'Voucher or event code'}
                            handeler={setVoucher}
                            placeHolder="Enter Code"
                        />

                        <input
                            className="border-3 text-xl  font-medium border my-5 cursor-pointer bg-red-500 py-5 px-10 text-white"
                            type="submit"
                            value="Book Now"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default FormContainer;
