import {configureStore} from '@reduxjs/toolkit'
import txtSlice from './Slice/txtSlice'
export default configureStore({
    reducer:{
          txtSlice,
    }
})