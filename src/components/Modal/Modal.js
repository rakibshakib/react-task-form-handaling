import React, { useContext } from 'react';
import { FromContext } from '../../context/Context';

const Modal = () => {
    const { setIsModalOpen, submittedData } = useContext(FromContext);
    const { TravelClass, passenger } = submittedData?.passengerAndClass;

    return (
        <div className="flex justify-center items-center modal-container">
            <div className="flex flex-col w-3/5 h-4/6 bg-white p-3 rounded-md">
                <div className="modal-cancel-btn bg-white">
                    <button
                        className="hover:text-red-600 hover:font-extrabold"
                        onClick={() => setIsModalOpen(false)}
                    >
                        X Close
                    </button>
                </div>
                <div className=" w-full mx-auto my-2 h-full border rounded-md">
                    <div className="p-5">
                        <span className="text-2xl font-bold border-b-2 pb-2">
                            User Booking Details
                        </span>
                        <div className="mt-5 custom-title">
                            <h2>
                                Type:{' '}
                                <span>
                                    {submittedData?.type || 'Round Trip'}
                                </span>
                            </h2>
                            <h2>
                                Departure:{' '}
                                <span>{submittedData?.departure}</span>
                            </h2>
                            <h2>
                                Destination:{' '}
                                <span>{submittedData?.destination}</span>
                            </h2>
                            <h2>
                                Passenger: <span>{passenger}</span>
                            </h2>
                            <h2>
                                Travel Class: <span>{TravelClass || "Economy"}</span>
                            </h2>
                            <h2>
                                Start Date:{' '}
                                <span>{submittedData?.startDate}</span>
                            </h2>
                            <h2>
                                Return Date:{' '}
                                <span>{submittedData?.returnDate || ''}</span>
                            </h2>
                            <h2>
                                Voucher:{' '}
                                <span>{submittedData?.voucher || ''}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
