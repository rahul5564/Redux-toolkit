import React, {useState} from "react";
import { addUser } from "./userSlice";
import {useDispatch , useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import "./User.css";



export const Create = () => {
    const [Task,setTask] = useState('');
    const [Description,setDescription] = useState('');
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id : users[users.length - 1].id + 1 , Task : Task , description : Description }))
        navigate("/");
    }

    return(
        <div>
            <div>
                <label className="Head">Task:</label>
                <form onSubmit={handleSubmit} className="task-head">
                <input type="text" name="name" placeholder="Mention Task!" onChange={(e) => setTask(e.target.value)} required/>
                <input type="text" name="name" placeholder="Add your description!" onChange={(e) => setDescription(e.target.value)} required/>
                <br/>
                <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

