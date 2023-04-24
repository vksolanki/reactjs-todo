import { createSlice } from '@reduxjs/toolkit'
const LIST_ITEMS = 'list-item';
const ADD_ITEM = 'add-item';

const initialState = {
    view: 'list-items',
    data: { editItemId: null }
}
const todoUISlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        listView(state, action) {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.view = 'list-items';
            state.data = { editItemId: null };
        },
        addView(state, action) {
            state.view = 'add-item';
            state.data = { editItemId: null };
        },
        editView(state, action) {
            state.view = 'edit-item';
            state.data.editItemId = action.payload.editItemId;

        }
    },
})

// Action creators are generated for each case reducer function
export const { listView, addView, editView } = todoUISlice.actions

export default todoUISlice.reducer