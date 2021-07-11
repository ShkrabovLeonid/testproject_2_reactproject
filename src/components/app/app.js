import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage'
import ErrorMessage from '../errorMessage';


export default class App extends Component {
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

    render() {
        if (this.state.error) {
            return <ErrorMessage/>;
        }
        const char = this.state.randomCharToggle ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
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
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};