import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from "../actions";
import CardBody from './CardBody';

class Card extends React.Component {
    componentDidMount() {
        // Hard code user name for now
        const user = 'DeannaMarbeck';
        this.props.fetchData(user);
    }
    render() {
        const data = this.props.data;
        if (!data) {
            return <div>Loading...</div>
        }
        return <CardBody data={data} />
    }
}

const mapStateToProps = (state) => {
    return {data: state.data}
};
export default connect(mapStateToProps, {fetchData: fetchData})(Card);