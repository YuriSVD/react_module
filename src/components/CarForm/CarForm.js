import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators";
import {carActions} from "../../redux/slices";
import {useDispatch} from "react-redux";

const CarForm = ({carForUpdate}) => {
    const dispatch = useDispatch();
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:"all", resolver:joiResolver(carValidator)});
    useEffect(() => {
        if (carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate:true})
            setValue("price", carForUpdate.price, {shouldValidate:true})
            setValue("year", carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate])
    const save = async (car) => {
        await dispatch(carActions.saveCar(car));
        reset();
    }
    const update = async (car) => {
        console.log(carForUpdate.id);
        await dispatch(carActions.updateCar({id: carForUpdate.id, car: car}));
        reset();
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

export {CarForm};