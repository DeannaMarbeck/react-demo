import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from "../actions";
import CardBody from './CardBody';

class Card extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        console.log(this.props.data);
        const data = this.props.data;
        if (!data) {
            return <main>Loading...</main>
        }
        return (
            <main>
                <CardBody data={data} />
            </main>

        );
    }
}

const mapStateToProps = (state) => {
    return {data: state.data}
}
export default connect(mapStateToProps, {fetchData: fetchData})(Card);