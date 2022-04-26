import { useState } from "react";
import SingleComment from "../SingleComments/SingleComments";
import { commentCreate } from "../../redux/About/action"
import{ useDispatch, useSelector } from 'react-redux'
import uniqid from 'uniqid';
import {comments} from '../../redux/About/Reducer'
import './Comments.css'



export default function Comments(props){
    
    const [textComment, setTextComment] = useState('');

    const comments = useSelector(state => {
        const {comments} = state;
        return comments.comments
    });

    const dispatch = useDispatch();

    const hendleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handeleSubmit = (e) =>{
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment(e.target.value="");
    }

    return(
        <div className="card-comments">
            <form onSubmit={handeleSubmit} className='comment-item-create'>
                <input type='text' className="card-input" value={textComment} onChange={hendleInput}/>
                <input type='submit' hidden />
            </form>
            {!!comments.length && comments.map(res =>{
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}                                                   
