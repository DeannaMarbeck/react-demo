import React from 'react';
import styled from 'styled-components';
import Variables from '../variables';

const H1 = styled.h1`
    font-size: 2em;
    font-weight: 700;
`;
const IMG = styled.img`
    max-height: 150px;
    max-width: auto;
`;
const A = styled.a`
    color: ${Variables.darkGrey};
    &:hover {
        color: ${Variables.blue};
    }
`;



const CardBody = ({data}) => {
    // console.log(props);
    return (
        <section>
            <H1>{data.name}</H1>
            <IMG src={data.avatar_url} alt="Avatar" />
            <p>{data.bio}</p>
            <p><A href={data.blog}>Website</A></p>
            <p><A href={data.url}>Github site</A></p>
        </section>
    )
}
export default CardBody;