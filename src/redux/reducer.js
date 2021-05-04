import { 
    } from './actions';
import { initialState } from './states';
import {INCREASE_COUNT,DECREASE_COUNT, ADD_COLOR, ADD_COLOR_BOX } from './actions';

export let reducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREASE_COUNT:
            return {...state, count: action.payload +1};
        case DECREASE_COUNT:
            return {...state, count: action.payload -1};
        case ADD_COLOR:
            return {...state, color: action.payload};
        case ADD_COLOR_BOX:
            let t = state.boxColor;
            t[action.idx] = action.payload;
            console.log(action.idx)
            return {...state, boxColor: t };
    default:
    return state;
    }   

    
}