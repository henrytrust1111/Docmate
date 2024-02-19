import { createSlice } from "@reduxjs/toolkit"

const initialState={
    school:""
}

const productState = createSlice({
    name:"Rose",
    initialState,
    reducers:{
        mySchool:(state, actions)=>{
            state.school=actions.payload
            console.log(actions.payload)
        }
    },
});

export const {mySchool} = productState.actions
export default productState.reducer


