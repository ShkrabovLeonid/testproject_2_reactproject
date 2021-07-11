import React, {Component} from 'react';
import GotApi from '../../services/gotApi';
import Spinner from '../spinner';
import './itemList.scss';
export default class ItemList extends Component {

    getGotApi = new GotApi();

    state = {
        charList: null
    }

    componentDidMount = ()=>{
        this.getGotApi.getAllCharacters()
        .then((charList)=>{
            this.setState({charList})
        })
    };

    renderCharList = ()=>{
        return this.state.charList.map((item)=>{
            return (
                <li 
                key={item.id}
                className="list-group-item"
                onClick={()=>this.props.onCharSelected(item.id)}
                >
                {item.name}
                </li>
            )
        })
    }

    render() {
        const {charList} = this.state;
        if (!charList) {
            return <Spinner/>
        }
        const items = this.renderCharList(charList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}