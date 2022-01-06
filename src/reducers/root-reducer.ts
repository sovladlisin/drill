import { combineReducers } from "redux";
import alertReducer from "./alerts/alerts";
import { serviceReducer } from "./service/service";


const RootReducer = combineReducers({
    alerts: alertReducer,
    services: serviceReducer
});

export default RootReducer