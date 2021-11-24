import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../header';
import Home from '../pages/home/home';
import CharacterPage from '../pages/characterPage';
import BooksPage from '../pages/booksPage';
import HousesPage from '../pages/housesPage';
import BooksItem from '../pages/booksItem';
import ErrorMessage from '../errorMessage';

import './app.scss';

export default class App extends Component {
    state = {
        error: false,
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>;
        }

        return (
            <Router>
                <div className='app'> 
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Route path={process.env.REACT_APP_PATH}  exact component={Home}/>
                        <Route path={process.env.REACT_APP_PATH + 'characters'} component={CharacterPage}/>
                        <Route path={process.env.REACT_APP_PATH + 'houses'} component={HousesPage}/>
                        <Route path={process.env.REACT_APP_PATH + 'books'} exact component={BooksPage}/>
                        <Route path={process.env.REACT_APP_PATH + 'books/:id'} render={
                            ({match, location, history})=>{
                                return <BooksItem bookid={match.params.id}/>
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};