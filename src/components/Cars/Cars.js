import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carsService} from "../../services";
import {Car} from "../Car";
import {carActions} from "../../redux";
import {CarForm} from "../CarForm";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars);
    useEffect(() => {
        carsService.getAll().then(value => value.data)
            .then(value => dispatch(carActions.setCars(value)))
    }, [cars])
    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    )
}

export {Cars};