import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";
const Car = ({car}) => {
    const dispatch = useDispatch();
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={async () =>{
                await dispatch(carActions.carForUpdate(car))
            }}>Update</button>
            <button onClick={async () => {
               await dispatch(carActions.deleteCar(car))
            }}>Delete</button>
        </div>
    )
}

export {Car};