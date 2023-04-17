import React from 'react';

const Car = ({car, setCarForUpdate}) => {
    return (
        <div>
            <div>Id: {car.id}</div>
            <div>Brand: {car.brand}</div>
            <div>Prize: {car.price}</div>
            <div>Year: {car.year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
        </div>
    );
};

export default Car;