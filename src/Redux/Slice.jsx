import { createSlice } from "@reduxjs/toolkit";

export const homeFunction = createSlice({
    name:"homeFunction",
    initialState:{togValue:true, darkMode:false, arrow:false},
    reducers:{
        menuClick:state=>{
            state.togValue=!state.togValue
        },
        modeChange:(state)=>{
            state.darkMode=!state.darkMode
        },
        arrowMode:(state)=>{
            state.arrow=!state.arrow
        }
    }
})

export const {menuClick, modeChange, arrowMode} = homeFunction.actions

export default homeFunction.reducer