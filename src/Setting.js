import React from 'react';

const Setting = (props) => {
    return (
        <h2 style={{textAlign: 'center', color: 'brown'}}>
            My name is { props.name }
        </h2>
    );
};

export default Setting;