import {GET_POSTS} from "./actionTypes";

export function loadPosts() {
    return {
        payload: {
            request:{
                url:'/posts'
            }
        },
        type: GET_POSTS
    }
}
