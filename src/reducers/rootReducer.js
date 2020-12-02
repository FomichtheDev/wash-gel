import {combineReducers} from "redux";
import sortParamsReducer from "./sortParamsReducer";
import gelsReducer from "./gelsReducer";
import menuStatusReducer from "./menuStatusReducer";
import washingPowderReducer from "./washingPowderReducer";

const rootReducer = combineReducers({
    sortParams: sortParamsReducer,
    menuStatus: menuStatusReducer,
    gels: gelsReducer,
    powders: washingPowderReducer,
});

export default rootReducer;
