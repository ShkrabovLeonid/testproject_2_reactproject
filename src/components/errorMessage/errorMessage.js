import React from 'react';
import './errorMessage.scss';
import img from './got.jpeg';

const ErrorMessage = ()=>{
    return(
        <>
        {/* <img src={process.env.PUBLIC_URL + '/img/got.jpeg'} alt=""></img> */}
        <img src={img} alt=""></img>
        <span>Произошла ошибка</span>
        </>
    )
}

export default ErrorMessage;