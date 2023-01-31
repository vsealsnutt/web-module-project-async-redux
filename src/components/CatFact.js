import React from 'react';
import data from '../data/facts';

const CatFact = (props) => {
    const { fact } = props;

    return (
        <div className='fact'>
            <p>{props.fact}</p>
        </div>
    )
}

export default CatFact; 