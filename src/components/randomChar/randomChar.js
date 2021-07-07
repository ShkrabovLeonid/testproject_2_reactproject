import React, {Component} from 'react';
import GotApi from '../../services/gotApi';
import Spinner from '../spinner';
import ErrorMassage from '../errorMassage';

import './randomChar.scss';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    GotApi = new GotApi();

    state = {
        data: {},
        loading: true
    }

    onCharLoaded = (data) => {
        this.setState({
            data,
            loading:false,
            error:false
        })
    }

    onError = ()=>{
        this.setState({
            error:true,
            loading:false
        })
    }

    updateChar(){
        const id = Math.floor(Math.random()*140000 + 25);
        this.GotApi.getCharacter(id)
        .then((data)=>{
            this.onCharLoaded(data);
        })
        .catch(this.onError)
    }

    render() {
        const {data, loading, error } = this.state;

        const errorMassage = error ? <ErrorMassage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View data={data}></View> : null;

        return (
            <div className="random-block rounded">
                {errorMassage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({data})=>{
    const {name, gender, born, died, culture} = data;
    return(
        <>
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{culture}</span>
            </li>
        </ul>
        </>
    )
}