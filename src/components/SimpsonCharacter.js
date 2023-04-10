import React from 'react';

const SimpsonCharacter = ({value}) => {
    return (
        <div>
            <h2>{value.name} {value.surname}</h2>
            <img src={value.photo} alt={value.name}/>
            <p>{value.info}</p>
        </div>
    );
};

export default SimpsonCharacter;