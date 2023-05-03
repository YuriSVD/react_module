import axios from "axios";
import {baseURLForCars, baseURLForJSON} from "../configs";

const axiosServiceForCars = axios.create({baseURL: baseURLForCars});
const axiosServiceForJSON = axios.create({baseURL: baseURLForJSON});
export {axiosServiceForCars, axiosServiceForJSON}
