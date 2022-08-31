import React from 'react';

const Block = (props) => 
{
    return (
        <div onClick={() => props.changeImage(props.image)} 
            className={`${props.size}`}>
                <img src={props.image}></img>
        </div>
    );
};

export default Block;

