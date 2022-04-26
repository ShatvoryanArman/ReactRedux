import {combineReducers} from 'redux'
//sranov menq miacnum enq bolor redyusernery mer komponentin
import {likesReducer} from "./About/Reducer"
import contactReducer from './Contact/reducer';


const rootReducer = combineReducers({
      likes:likesReducer,
      contact:contactReducer,
      comments:likesReducer
})

export default rootReducer;