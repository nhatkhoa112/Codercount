export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const ADD_COLOR = "ADD_COLOR";
export const ADD_COLOR_BOX = "ADD_COLOR_BOX";

export function increaseCount(count){
    return{
        type: INCREASE_COUNT, 
        payload: count
    }
}


export function decreaseCount(count){
    return{
        type: DECREASE_COUNT, 
        payload: count
    }
}


export function addColor(color){
    return{
        type: ADD_COLOR, 
        payload: color
    }
}

export function addColorBox(color,idx){
    return {
        type :ADD_COLOR_BOX, 
        payload: color, 
        idx : idx,
    }
}