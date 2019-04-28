import React from 'react';

const CardBody = ({data}) => {
    // console.log(props);
    return (
        <section>
            <h1>{data.name}</h1>
            <h2>{data.bio}</h2>
            <img src={data.avatar_url} alt="Avatar" />
            <p><a href={data.blog}>Website</a></p>
            <p><a href={data.url}>Github site</a></p>
        </section>
    )
}
export default CardBody;