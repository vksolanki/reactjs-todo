import { createSlice, current } from '@reduxjs/toolkit'
const initialState = {
    totalItems: 1,
    items: [{ id: 1, title: "test", state: 'pending' }],
    filter: 'all'
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.items.push({ id: state.totalItems + 1, title: action.payload, state: 'pending' });
            state.totalItems += 1;
        },
        editTodo(state, action) {
            const items = [...current(state).items];
            state.items = items.map(element => {
                if (element.id == action.payload.id) {
                    const item = { ...element, title: action.payload.title };
                    return item;
                }
                return element;
            });
        },
        removeTodo(state, action) {
            const currentState = current(state);
            state.items = currentState.items.filter(x => x.id != action.payload);
        },
        changeState(state, action) {
            const items = [...current(state).items];
            state.items = items.map(element => {
                if (element.id == action.payload.id) {
                    const item = { ...element, state: action.payload.state };
                    return item;
                }
                return element;
            });
        },
        changeFilter(state, action) {
            state.filter = action.payload.filter;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, editTodo, removeTodo, changeState, changeFilter } = todoSlice.actions

export default todoSlice.reducer