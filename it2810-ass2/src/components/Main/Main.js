import React from 'react';

function Main(props) {
    return (
        <h1 onClick={() => {props.fun("lalala")}}> { props.ex } </h1>
    );
}

export default Main;
