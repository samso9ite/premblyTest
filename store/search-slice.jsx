import { createSlice } from '@reduxjs/toolkit';
import users from '../utils/users.json'

const searchSlice = createSlice({
    name:'Search',
    initialState: {
        records:[...users]
    },
    reducers: {
        // This updates the records state with the payload received
        updateRecord(state, action){
            const newRecords = action.payload
            state.records = newRecords
        }
    }
});

export const searchActions = searchSlice.actions

export default searchSlice