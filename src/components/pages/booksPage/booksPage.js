import React, {Component} from 'react';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import RowBlock from '../../rowBlock';
import ErrorMessage from '../../errorMessage';
import GotApi from '../../../services/gotApi';
import './booksPage.scss';

export default class BooksPage extends Component{
    
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
            getData={this.getGotApi.getBooks}
            onItemSelected={this.onItemSelected}
            renderItem={(item)=> `(${item.id}) ${item.name}` }
            />
        )
    
        const itemDetails = (
            <ItemDetails
            itemId={this.state.itemSelectedId}
            getDataId={this.getGotApi.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )

        return (
            <RowBlock left={listItem} right={itemDetails}/>
        )
    }
}