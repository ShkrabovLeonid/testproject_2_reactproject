import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import './characterPage.scss';

export default class CharacterPage extends Component{
    
    state = {
        error: false,
        charSelectedId: null
    }

    componentDidCatch= ()=>{
        this.setState((state)=>{
            return{
                error: !state.error
            }
        })
    }

    onCharSelected = (id)=>{

        this.setState(()=>{
            return {
                charSelectedId: id
            }
        })
    }

    render(){
        if (this.state.error) {
            return <ErrorMessage/>;
        }
        return (
            <Row>
            <Col md='6'>
                <ItemList onCharSelected={this.onCharSelected} />
            </Col>
            <Col md='6'>
                <CharDetails charId={this.state.charSelectedId} />
            </Col>
        </Row>
        )
    }
}