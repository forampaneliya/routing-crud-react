import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


function Home() {
    let [data, setData] = useState({})

    let changeInput = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    console.log(data);
    let submitData = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/users", data)
            .then((res) => {
                if (res) {
                    // alert("record inserted") 
                    toast.success("record inserted")
                }
            }).catch((err) => {
                // alert("somthing wrong")
                toast.error("something wrong")
                console.log(err);

            })
        setData({})

    }


    return (
        <>
            <Link to="/showhome"> <button>Show Home</button></Link>
            <form action="" method="post" onSubmit={(e) => submitData(e)}>
                <table border={1} align="center">
                    <tr>
                        <td>Username</td>
                        <td><input type="text" name="username" onChange={(e) => changeInput(e)} value={data.username ? data.username : ""} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" onChange={(e) => changeInput(e)} value={data.password ? data.password : ""} /></td>
                    </tr>                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="email" onChange={(e) => changeInput(e)} value={data.email ? data.email : ""} /></td>
                    </tr>                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" /></td>
                    </tr>
                </table>

            </form>
            <ToastContainer />


        </>
    )
}
export default Home;