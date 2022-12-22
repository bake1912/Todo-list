import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';


type InputProps = {
    name?: string
    age?: number
    adress?: string








}


type ModalButtonProps = {
    putArray: Function
}



export const ModalButton = (propsButton: ModalButtonProps, propsInput: InputProps) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [array, setArray] = useState([{
        age: 0,
        name: 'text1',
        id: 1,
    },]);

    const showModal = () => {
        setIsModalOpen(true);


    };

    const handleOk = () => {
        propsButton.putArray()
        setIsModalOpen(false);



    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add
            </Button>
            <Modal title="Adding a new user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input onChange={(e)=>{}} name='Name: ' />
                <Input name='Adress: ' />
                <Input name='Age: ' />
            </Modal>
        </>
    );
};
