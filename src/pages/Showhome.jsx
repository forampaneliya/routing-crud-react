import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

function Showhome()
{
    let [list,setList]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:5000/users")
      .then((res)=>{
        if(res)
        {
            let allrecord=res.data;
            setList(allrecord?allrecord:[])
            // toast.success("record inserted")       
    
        }
     
    })
})

function deleteData(id)
{
    axios.delete("http://localhost:5000/users/"+id)
}
    return(
        <>
        <table border={1} align="center">
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Delete</th>
            {
                list.map((v,i)=>{
                    return(
                        <>
                        <tr>
                            <td>{v.username}</td>
                            <td>{v.password}</td>
                            <td>{v.email}</td>
                            <td><button onClick={()=>deleteData(v.id)}>Delete</button></td>
                            <td><Link to={"/updateform/"+v.id}>Update</Link></td>
                        </tr>
                        </>
                    )
                })
            }
        </table>
                    <ToastContainer />

        </>
    )
}
export default Showhome;