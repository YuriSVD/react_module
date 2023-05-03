import {axiosServiceForCars} from "./axios.service";
import {urls} from "../configs";

const carsService = {
    getAll: () => axiosServiceForCars.get(urls.cars),
    createCar: (car) => axiosServiceForCars.post(urls.cars, car),
    getById: (id) => axiosServiceForCars.get(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosServiceForCars.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosServiceForCars.delete(`${urls.cars}/${id}`)
}
export {carsService}