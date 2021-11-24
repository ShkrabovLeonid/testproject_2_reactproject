import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to={process.env.REACT_APP_PATH}>
                Game of Thrones DB
                </Link>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <Link to={process.env.REACT_APP_PATH + 'characters'}>Characters</Link>
                </li>
                <li>
                    <Link to={process.env.REACT_APP_PATH + 'houses'}>Houses</Link>
                </li>
                <li>
                    <Link to={process.env.REACT_APP_PATH + 'books'}>Books</Link>
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;