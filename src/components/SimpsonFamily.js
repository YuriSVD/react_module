import React from 'react';
import SimpsonCharacter from "./SimpsonCharacter";

const SimpsonFamily = ({simpsons}) => {
    return (
        <div>
            {
                simpsons.map((value, index) => (
                    <SimpsonCharacter
                        key={index}
                        value={value}
                    />
                ))
            }
        </div>
    );
};

export default SimpsonFamily;