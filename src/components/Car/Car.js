import {carsService} from "../../services/cars.service";
const Car = ({car, setCarForUpdate, setAllCars}) => {
    return (
        <div>
            <div>Id: {car.id}</div>
            <div>Brand: {car.brand}</div>
            <div>Prize: {car.price}</div>
            <div>Year: {car.year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={async () => {
                await carsService.deleteById(car.id);
                setAllCars(prev=>!prev);
            }}>Delete</button>
        </div>
    );
};

export default Car;