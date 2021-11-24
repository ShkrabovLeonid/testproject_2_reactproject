import React, {Component} from 'react';
import ItemList from '../../itemList';
import ErrorMessage from '../../errorMessage';
import GotApi from '../../../services/gotApi';
import { withRouter } from 'react-router-dom';
import './booksPage.scss';

class BooksPage extends Component{
    
    getGotApi = new GotApi();

    state = {
        error: false,
    }

    componentDidCatch= ()=>{
        this.setState((state)=>{
            return{
                error: !state.error
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
            onItemSelected={(itemID)=>{
                this.props.history.push(`${process.env.REACT_APP_PATH}books/${itemID}`)
            }}
            renderItem={(item)=> `(${item.id}) ${item.name}` }
            />
        )

        return (
            <>
            {listItem}
            </>
        )
    }
}

export default withRouter(BooksPage);