import React, {useState, useEffect } from 'react';
import Spinner from '../spinner';
import './itemList.scss';


export default function ItemList({getData, onItemSelected, renderItem}) {


    const [itemList, setItemList] = useState([]);

    useEffect(()=>{
        getData()
        .then((data)=>{
            setItemList(data);
        })
    }, [])

    const renderitemList = ()=>{
        return itemList.map((item)=>{
            const {id} = item;
            const label = renderItem(item);
            return (
                <li 
                key={id}
                className="list-group-item"
                onClick={()=>onItemSelected(id)}
                >
                {label}
                </li>
            )
        })
    }

    if (!itemList) {
        return <Spinner/>
    }
    const items = renderitemList(itemList);
    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
}

ItemList.defaultProps = {
    onItemSelected: ()=>{}
}