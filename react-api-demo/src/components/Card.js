import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from "../actions";
// import styled from 'styled-components';
import CardBody from './CardBody';



class Card extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }
    render() {
        console.log(this.props.data);
        const data = this.props.data;
        if (!data) {
            return <div>Loading...</div>
        }
        return <CardBody data={data} />
    }
}

const mapStateToProps = (state) => {
    return {data: state.data}
}
export default connect(mapStateToProps, {fetchData: fetchData})(Card);