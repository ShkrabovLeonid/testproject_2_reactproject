import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import RowBlock from '../../rowBlock';
import ErrorMessage from '../../errorMessage';
import GotApi from '../../../services/gotApi';
import './characterPage.scss';

export default class CharacterPage extends Component{
    
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
            getData={this.getGotApi.getCharacters}
            onItemSelected={this.onItemSelected}
            renderItem={(item)=> `(${item.id}) ${item.name}` }
            />
        )
    
        const itemDetails = (
            <ItemDetails 
            itemId={this.state.itemSelectedId}
            getDataId={this.getGotApi.getCharacter}
            >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={listItem} right={itemDetails}/>
        )
    }
}