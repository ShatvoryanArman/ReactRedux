import { connect } from 'react-redux'
import './Likes.css'
import { incrementLikes,decrementLikes } from '../../redux/About/action'

function Likes(props) {
    console.log("render>",props);
    return (
        <div className='button-control'>
            <button onClick={props.onIncrementLikes}>Like {props.likes}</button>
            <button disabled={props.likes===0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state) {
    console.log("mapStateToProps >",state);
    const {likes} = state;
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}


// function mapDispatchToProps(dispatch){
//     return {
//         onIncrementLikes: () =>{
//             const action = {type:'INCREMENT'}
//             dispatch(action);
//         },
//         onDecrementLikes: () =>{
//             const action = {type:'DECREMENT'}
//             dispatch(action)
//         }
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(Likes);

// ayspes stanum enq mer funkcianery  madDispatchProps
//aystex miacnum enq mer komponenty redux-in hatuk funkciayov connect
//ogtagorcum enq hatuk funkcia mapStateToProps, vorpesi karoxananq mer pahestic mer redux-in mer komponentic
//nuyny anum enq mer metodneri het ev ogtagorcum mapDispatchToProps

