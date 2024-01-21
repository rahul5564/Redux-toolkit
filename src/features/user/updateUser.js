
import React, {useState} from "react";
import {useDispatch , useSelector} from "react-redux";
import { UpdateUser } from "./userSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UpdateUserDetails = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const ExistingUser = users.filter((user) => user.id == id[1]);
    const {Task,description} = ExistingUser[0];    
    const [Upadtedtask,setUpdatedtask] = useState(Task);
    const [updatedDescription,updatedsetDescription] = useState(description);
    console.log("namee","description",description,Task)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(UpdateUser({id : id[1] , Task : Upadtedtask , description : updatedDescription}))
        navigate("/")
    }

    return(
        <div>
            <div>
                <h1>UpdateUser</h1>
                <label>Task:</label>
                <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Add Something!" value={Upadtedtask} onChange={(e) => setUpdatedtask(e.target.value)}/>
                <input type="text" name="name" placeholder="Add your description!" value={updatedDescription} onChange={(e) => updatedsetDescription(e.target.value)}/>
                <button>Submit</button>
                </form>
            </div>
        </div>
    )
}