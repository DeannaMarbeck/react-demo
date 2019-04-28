import React from 'react';
import Card from './Card';
// import theme from '../theme';
import styled from 'styled-components';

const AppWrapper = styled.main`
    font-family: 'Roboto', sans-serif;
    text-align: center;
    display: flex;
    justify-content: center;
`;

const CardWrapper = styled.section`
    border: 2px solid grey;
    max-width: 250px;
    padding: 2em;
`;

const App = () => {
    return(
        <AppWrapper>
            <CardWrapper>
                <Card />
            </CardWrapper>
        </AppWrapper>
    )
};
export default App;