import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Updateform()
{
    let[update,setUpdate]=useState({})
    let record=useParams()

    useEffect(()=>{
        axios.get("http://localhost:5000/users/"+record.index)
        .then((res)=>{
           setUpdate(res.data)
        })
    },setUpdate)
    function ChangeInput(e)
    {
        let {name,value}=e.target;
        setUpdate({...update,[name]:value})
    }
    let updateData=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:5000/users/"+update.id,update);
        setUpdate({})
    }
    return(
        <>
        <form action="" method="post" onSubmit={(e)=>updateData(e)}>
        <table border={1} align="center">
            <tr>
                <td>Username</td>
                <td><input type="text" name="username" value={update.username?update.username:""} onChange={(e)=>ChangeInput(e)} /></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password" name="password" value={update.password?update.password:""} onChange={(e)=>ChangeInput(e)}/></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="email" name="email" value={update.email?update.email:""} onChange={(e)=>ChangeInput(e)} /></td>
            </tr>
            <tr>
                <td></td>
            <td><input type="submit" name="edit" value={"Edit"} /></td>
            </tr>
        </table>
        </form>
        </>
    )
}
export default Updateform;