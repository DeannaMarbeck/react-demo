import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import Variables from '../variables';

const AppWrapper = styled.main`
    font-family: 'Roboto', sans-serif;
    color: ${Variables.darkGrey};
    text-align: center;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    height: 90vh;
    margin: 0px auto;
    background-color: ${Variables.cream};
    padding: 2em;
`;

const CardWrapper = styled.div`
    border: 2px solid ${Variables.darkGrey};
    max-width: 250px;
    padding: 1em;
    background-color: #FFF;
    height: fit-content;
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