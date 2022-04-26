import React from "react";
import './Register.css'
import {useForm} from 'react-hook-form'
import Input from "../../Components/input/input";

export default function Register(){
    const {handleSubmit, control} = useForm();
    const onSubmit = (data)=> console.log(data);
    return(
        <div className="formHeader">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="firstname" control={control} type="text" placeholder="firstName"/>
                <Input name="lastname" control={control} type="text" placeholder="lastName"/>
                <Input name="email" control={control} type="email" placeholder="email"/>
                <Input name="password" control={control} type="password" placeholder="password"/>
                <input type="submit" className="inpSub" value={"Submit"}/>
            </form>
        </div>
    )
}