import React, {Component} from 'react';
import styled from 'styled-components';
import GotApi from '../../services/gotApi';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import './itemDetails.scss';

const ItemDetailsBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;

const Field = ({item, field, label})=>{
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {
    getGotApi = new GotApi();

    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount = ()=>{
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }
    
    onError(){
        this.setState({
            item: null,
            error: true
        })
    }

    updateItem = ()=>{
        if (!this.props.itemId) {
            return;
        }
        const id = this.props.itemId;

        this.setState({loading: true})

        const {getDataId} = this.props;
        getDataId(id)
        .then(this.onItemDetailsLoaded)
        .catch(() => this.onError())
    }

    render() {
        if (!this.state.item && this.state.error) {
            return <ErrorMessage/>
        } else if (!this.state.item) {
            return <span className="select-error">Please select a item</span>
        }

        const {item} = this.state;
        const {name} = item;

        if (this.state.loading) {
            return (
                <ItemDetailsBlock className='rounded'>
                    <Spinner/>
                </ItemDetailsBlock>
            )
        }

        return (
            <ItemDetailsBlock className='rounded'>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child)=>{
                        return React.cloneElement(child, {item})
                    })}
                </ul>
            </ItemDetailsBlock>
        );
    }
}