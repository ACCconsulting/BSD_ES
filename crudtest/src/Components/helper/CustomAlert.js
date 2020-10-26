import React from 'react';
import { Alert } from 'antd';

const CustomAlert = ({message,type}) => {
    return (
        <Alert message={message} type={type} showIcon />
    );
};

export default CustomAlert;

