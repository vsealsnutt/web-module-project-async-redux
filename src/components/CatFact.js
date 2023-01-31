import React from 'react';

const CatFact = (props) => {
    const { getFact } = props;

    return (
        <div className='fact'>
            <p>{}</p>
        </div>
    )
}

export default CatFact; 