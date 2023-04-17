import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/cars.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/car.validator";

const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:"all", resolver:joiResolver(carValidator)});
    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate:true})
            setValue("price", carForUpdate.price, {shouldValidate:true})
            setValue("year", carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate])
    const save = async (car) => {
        const {data} = await carsService.createCar(car);
        setAllCars(prev=>!prev);
        reset();
    }
    const update = async ({id, car}) => {
        //let update = await carsService.getById(id);

        const update = await carsService.updateById(car.id, car);
        console.log(update.data);
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={"brand"} {...register("brand")}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={"price"} {...register("price")}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={"year"} {...register("year")}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?"Update":"Save"}</button>
        </form>
    );
};

export default CarForm;