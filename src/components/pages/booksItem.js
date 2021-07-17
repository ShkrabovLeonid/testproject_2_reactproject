import React, {Component} from 'react';
import GotApi from '../../services/gotApi';
import ItemDetails, { Field } from '../itemDetails';

export default class BooksItem extends Component{
    
    getGotApi = new GotApi();
    
    render(){
        return(
            <ItemDetails
            itemId={this.props.bookid}
            getDataId={this.getGotApi.getBook}
            >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
    }
}