import {combineReducers} from 'redux';
import {formReducer} from "./reducers/form/reducer";

export const rootReducer = combineReducers({
    form: formReducer
});
