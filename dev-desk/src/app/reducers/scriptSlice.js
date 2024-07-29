import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  scripts:[]
}

const cakeSlice = createSlice({
  name: 'script',
  initialState,
  reducers: {
    searched: (state, action) => {
        
    },
    displayed: (state, action) => {
    },
    updated: (state, action) => {

    },
    deleted: (state, action) => {

    }
  }
})

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions