import * as actionTypes from './type'

const defaultState = {
    loading: "Loading..."
};

export default function contactReducer(state = defaultState, action){

    switch(action.type){
        case actionTypes.TODOLIST:{
            return {
                ...state,
                loading: true,
            };
        }

        default: return state;
    }
}