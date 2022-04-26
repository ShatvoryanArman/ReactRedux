import "./SingleComments.css"
import { useState, useEffect } from 'react'

export default function SingleComment({data}){

    const [commentText, setCommentText]=useState('')
    const {text,id} = data;

    const handleUptade = (e)=>{
        e.preventDefault();
        console.log('submit ->>', commentText);
    }

    useEffect(()=>{
        if(text){
            setCommentText(text)
        }
    },[text])

    const handleInput = (e) =>{
        setCommentText(e.target.value)
    }


    return(
        <form onSubmit={handleUptade} className='comment-item'>
            <span className="comment-item-delet">X</span>
            <input type='text' value={commentText} onChange={handleInput}/>
            <input type='submit' hidden />
        </form>
    )
}