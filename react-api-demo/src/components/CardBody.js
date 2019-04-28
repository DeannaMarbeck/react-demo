import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 2em;
    font-weight: 700;
`;



const CardBody = ({data}) => {
    // console.log(props);
    return (
        <section>
            <H1>{data.name}</H1>
            <h2>{data.bio}</h2>
            <img src={data.avatar_url} alt="Avatar" />
            <p><a href={data.blog}>Website</a></p>
            <p><a href={data.url}>Github site</a></p>
        </section>
    )
}
export default CardBody;