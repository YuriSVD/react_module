import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../../services";
import {Car} from "../Car/Car";
import {carActions} from "../../redux/slices";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars, carForUpdate} = useSelector(state => state.cars);
    useEffect(() => {
        carsService.getAll().then(value => value.data)
            .then(value => dispatch(carActions.setCars(value)))
    }, [cars])
    return (
        <div>
            <CarForm carForUpdate={carForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}

export {Cars};