import React from 'react';

const CatFact = (props) => {
    const { fact } = props;

    return (
        <div className='fact'>
            <p>{fact}</p>
        </div>
    )
}

export default CatFact; 