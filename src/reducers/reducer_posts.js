import { FETCH_POSTS, FETCH_POST, DELETE_POST  } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type){
        case DELETE_POST:
            return _.omit(state, action.payload); 

        case FETCH_POST:
            // const post = action.payload.data; we will use this if we only had es5
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data };

        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id'); //make id the object starter

        default:
            return state;

    }
}