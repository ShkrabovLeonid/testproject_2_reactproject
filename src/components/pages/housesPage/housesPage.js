import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import RowBlock from '../../rowBlock';
import ErrorMessage from '../../errorMessage';
import GotApi from '../../../services/gotApi';
import './housesPage.scss';

export default class HousesPage extends Component{
    
    getGotApi = new GotApi();

    state = {
        error: false,
        itemSelectedId: null
    }

    componentDidCatch= ()=>{
        this.setState((state)=>{
            return{
                error: !state.error
            }
        })
    }

    onItemSelected = (id)=>{

        this.setState(()=>{
            return {
                itemSelectedId: id
            }
        })
    }

    render(){
        if (this.state.error) {
            return <ErrorMessage/>;
        }

        const listItem = (
            <ItemList
            getData={this.getGotApi.getHouses}
            onItemSelected={this.onItemSelected}
            renderItem={(item)=> `(${item.id}) ${item.name}` }
            />
        )
    
        const itemDetails = (
            <ItemDetails 
            itemId={this.state.itemSelectedId}
            getDataId={this.getGotApi.getHouse}
            >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ansetralWeapons' label='Ansetral weapons'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={listItem} right={itemDetails}/>
        )
    }
}