import {createSlice} from "@reduxjs/toolkit";

import {carsService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null
}
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload;
        },
        saveCar: (state, actions) => {
            const car = actions.payload;
            carsService.createCar(car);
        },
        deleteCar: (state, actions) => {
            const {id} = actions.payload;
            carsService.deleteById(id);
        },
        carForUpdate: (state, actions) => {
            state.carForUpdate = actions.payload;
        },
        updateCar: (state, actions) => {
            const car = actions.payload;
            carsService.updateById(car.id, car.car);
        }
    }
});
const {reducer: carReducer, actions} = carSlice;
const carActions = {...actions};
export {carActions, carReducer}