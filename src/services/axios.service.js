import axios from "axios";

import {baseURL} from "../configs";

const axiosServiceForCars = axios.create({baseURL});
export {axiosServiceForCars}
