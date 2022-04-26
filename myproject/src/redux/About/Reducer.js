import { INCREMENT, DECREMENT, COMENT_CREATE } from './types'

const initialState = {
    likes: 0,
    comments: []
}

export const likesReducer = (state = initialState, action) => {
    console.log("likesReducer >", action);

    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                likes: state.likes + 1
            }
        case DECREMENT:
            return{
                ...state,
                likes: state.likes - 1
            }
        case COMENT_CREATE:
                return{
                    ...state,
                    comments: [...state.comments, action.data]
                }

            default:
                return state;
    }
}