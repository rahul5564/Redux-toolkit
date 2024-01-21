import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Create } from "./createUser";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUserDetails } from "./userSlice";
import "./User.css";

export const Home = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    console.log(users, "users Heyaaaaa mosam");


    const handleDelete = (id) => {
        dispatch(deleteUserDetails({id : id})); 
    }

    return(
        <div className="Main-div">
            <div>
                <h2 className="Head">Task Manager</h2>
            </div>
            <div>
            <button className="btn-link">
            <Link className="links" to="/Create">Create</Link>  
            </button>
            <div className="table-head">
            <table className="table">
                <thead className="td">
                    <td>Id</td>
                    <td>Taskname</td>
                    <td>Description</td>
                </thead>
                <tbody className="Content">
                    {users.map(({id,Task,description},index) => (
                        <tr key={index}>
                            <td>{id}</td>
                            <td>{Task}</td>
                            <td>{description}</td>
                            <p>
                            <Link className="links-mini" to={`UpdateUserDetails/:${id}`}>Edit</Link>
                            <Link className="links-mini red" onClick={() => handleDelete(id)}>Delete</Link>  
                            </p>                          
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            </div>
        </div>
    )
}