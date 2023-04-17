import './App.css';
import Cars from "./components/Cars/Cars";
import {useEffect, useState} from "react";
import {axiosService} from "./services/axios.service";
import {carsService} from "./services/cars.service";
function App() {
    return (
        <div>
            <Cars/>
        </div>
    );
}

export default App;
