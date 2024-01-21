import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../../Data/dataList";

const userSlice = createSlice({
    name : "users",
    initialState: UserList,
    reducers:{
        addUser : (state,action) => {
            console.log(action);
            state.push(action.payload)
        },
        UpdateUser : (state,action) => {
            console.log(action.payload,"actionnnnnnnnnnnnnnnnnnnnn");
            const {id,Task, description } = action.payload;
            const updatedDetails = state.find((user) => user.id == id);
            console.log(updatedDetails,"actionnnnnnnnnnnnnnnnnnnnn");

            if(updatedDetails){
                updatedDetails.Task = Task;
                updatedDetails.description = description;
            }
        },
        deleteUserDetails : (state, action) => {
            const {id} = action.payload;
            const deletedDetails = state.find(user => user.id == id);
            if(deletedDetails){
                return state.filter(user => user.id !== id)
            }
        }
    }
})

export const {addUser,UpdateUser,deleteUserDetails} = userSlice.actions;
export default userSlice.reducer;