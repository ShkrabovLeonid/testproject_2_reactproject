import React from 'react';
import './errorMassage.scss'
import img from './got.jpeg';

const ErrorMassage = ()=>{
    return(
        <>
        {/* <img src={process.env.PUBLIC_URL + '/img/got.jpeg'} alt=""></img> */}
        <img src={img} alt=""></img>
        <span>Произошла ошибка</span>
        </>
    )
}

export default ErrorMassage;