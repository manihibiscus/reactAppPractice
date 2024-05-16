import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './Slice'
// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer:{
        counter:homeReducer
    }
})