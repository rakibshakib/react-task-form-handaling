import { useState } from 'react';

const useFromData = () => {
    const [type, setType] = useState(null);
    const [departure, setDeparture] = useState('');
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [isRoundTrip, setisRoundTrip] = useState(true);
    const [passengerAndClass, setPassengerAndClass] = useState('');
    const [voucher, setVoucher] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submittedData, setSubmittedData] = useState({});
    const [error, setError] = useState(false);

    const onChangeHandeler = (value) => {
        if (value === 'Round Trip') {
            setisRoundTrip(true);
            setType(value);
        } else {
            setisRoundTrip(false);
            setType(value);
        }
    };
    const getSubmittedData = (e) => {
        e.preventDefault();
        if (
            !departure ||
            !destination ||
            !startDate || !passengerAndClass
        ) {
            setError(true)
        } else {
            setError(false)
            const submitedValue = {
                type,
                departure,
                destination,
                startDate,
                returnDate,
                passengerAndClass,
                voucher,
            };
            setSubmittedData(submitedValue);
            setIsModalOpen(true);
        }
    };
    return {
        getSubmittedData,
        setDeparture,
        setDestination,
        setStartDate,
        setReturnDate,
        isRoundTrip,
        setPassengerAndClass,
        setVoucher,
        onChangeHandeler,
        submittedData,
        isModalOpen,
        setIsModalOpen,
        error
    };
};
export default useFromData;
