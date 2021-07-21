import React, { useState, useEffect } from 'react';

function TestComp(params) {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([{
        name: 'Leonid',
        sex: 'Man'
    }]);

    useEffect(()=>{
        console.log(data)
    })

    return(
        <>
        <div>
            <p>Вы кликнули {count} раз</p>
            <button 
            className='btn' 
            onClick={()=>{
                setCount(count + 1)
            }}
            >
                Увеличить
            </button>
        </div>
        <div>
            <ul>
            {data.map((item)=>{
                return <li>{`Имя: ${item.name} Пол: ${item.sex}`}</li>;
            })}
            </ul>
            <button 
            className='btn btn-warning' 
            onClick={()=>{
                setData(data => {
                    return ([...data, {
                        name: 'Leonid2',
                        sex: 'Man2'
                    }]);
                })
            }}
            >
                Увеличить
            </button>
        </div>
        </>
    )
}

export default TestComp;