import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from "../actions";
import CardBody from './CardBody';
import UserName from './UserName';

class Card extends React.Component {

    componentDidMount() {
        // Hard code user name for initial display
        const user = 'DeannaMarbeck';
        this.props.fetchData(user);
    }
    onNameSubmit = (userName) => {
        this.props.fetchData(userName);
    };
    render() {
        const data = this.props.data;
        if (!data) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <CardBody data={data} />
                <UserName onNameSubmit={this.onNameSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {data: state.data}
};
export default connect(mapStateToProps, {fetchData: fetchData})(Card);