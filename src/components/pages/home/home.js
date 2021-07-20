import { Component } from "react";
import {Col, Row, Button} from 'reactstrap';
import RandomChar from '../../randomChar';
import ErrorMessage from "../../errorMessage";

import './home.scss';

export default class Home extends Component{

    state = {
        randomCharToggle: true,
        error: false,
    }

    toggle = ()=>{
        this.setState((state, props)=>{
            const randomCharToggle = state.randomCharToggle;
            return {
                randomCharToggle: !randomCharToggle
            }
        })
    }
    
    render(){
        if (this.state.error) {
            return <ErrorMessage/>;
        }
        const char = this.state.randomCharToggle ? <RandomChar interval={5000}/> : null;

        return (
            <>
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    {char}
                </Col>
            </Row>
            <Row>
                <Col className='mb-4'>
                    <Button onClick={this.toggle} className='btn-info'>Скрыть/Показать</Button>
                </Col>
            </Row>
            </>
        )
    }
}