import {GET_POSTS} from './actionTypes';


export const formReducer = (
    state = false,
    action: any
) => {
    switch (action.type) {
        case GET_POSTS:
            return false;

        default:
            return state;
    }
};
