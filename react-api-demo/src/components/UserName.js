import React from 'react';
import styled from 'styled-components';
import Variables from '../variables';

const INPUT = styled.input`
    // display: block;
    font-size: 100%;
    margin: 1em 0;
`;

const FORM = styled.form`
    margin-top: 2em;
    background-color: ${Variables.cream};
    padding: 1em;
`;


class UserName extends React.Component {
    state = {user: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onNameSubmit(this.state.user);
    };
    render() {
        return (
            <FORM onSubmit={this.onFormSubmit}>
                <label>Enter new username:</label>
                <INPUT type="text"
                       value={this.state.user}
                       onChange={(e) => this.setState({user: e.target.value})}
                />
            </FORM>
        )
    }
};
export default UserName;