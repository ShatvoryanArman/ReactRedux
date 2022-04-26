import { DECREMENT, INCREMENT, COMENT_CREATE} from "./types"


export function incrementLikes(){
    return{
        type:INCREMENT
    }
}

export function decrementLikes(){
    return{
        type:DECREMENT
    }
}

export function commentCreate(text, id){
    return {
        type: COMENT_CREATE,
        data: {text, id}
    }
}