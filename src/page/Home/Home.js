import React, { useContext } from 'react';
import FormContainer from '../../components/FormContainer/FormContainer';
import Modal from '../../components/Modal/Modal';
import { FromContext } from '../../context/Context';

const Home = () => {
    const { isModalOpen } = useContext(FromContext);
    return (
        <div>
            <div className='container mx-auto'>
                <div className='my-10'>
                    <FormContainer />
                </div>
            </div>
            {isModalOpen && <Modal />}
        </div>
    );
};

export default Home;
