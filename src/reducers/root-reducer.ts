import { combineReducers } from "redux";
import alertReducer from "./alerts/alerts";


const RootReducer = combineReducers({
    alerts: alertReducer,
});

export default RootReducer