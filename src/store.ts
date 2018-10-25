import axios from 'axios';
import {applyMiddleware, createStore} from 'redux'
import axiosMiddleware from 'redux-axios-middleware';
import {rootReducer} from "./reducer";

const client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    responseType: 'json'
});

export const store = createStore(
    rootReducer,
    applyMiddleware(
        axiosMiddleware(client),
    )
)
