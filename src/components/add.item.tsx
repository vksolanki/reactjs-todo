import { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import * as todoSlice from '../features/todo/todoSlice'
import * as todoUISlice from '../features/todo/todoUISlice'


const AddItem = (props: any) => {
    const [title, setTitle] = useState(props.title);
    const dispatch = useDispatch();
    const addNewItem = (id: number) => {
        if (id > 0) {
            dispatch(todoSlice.editTodo({ id, title }));
        } else {
            dispatch(todoSlice.addTodo(title));
        }
        dispatch(todoUISlice.listView(null));
    }

    const changeState = (id: number, state: string) => {
        dispatch(todoSlice.changeState({ id: id, state: state }));
        dispatch(todoUISlice.listView(null));
    }

    return (
        <div className='wrapper'>
            <div className='app-row w-100'>
                <input
                    id="my-textbox"
                    className='edit-title-text'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className='app-row'>
                <button type="button" className="btn btn-primary w-100" onClick={() => { addNewItem(props.id) }}>Save</button>
            </div>
            <div className='app-row item-actions'>
                <div className='w-33 f-left'>
                    <button type="button" className="btn btn-primary" onClick={() => { changeState(props.id, 'pending') }}>Pending</button>
                </div>
                <div className='w-33 f-left'>
                    <button type="button" className="btn btn-primary" onClick={() => { changeState(props.id, 'in-prog') }}>In Progress</button>
                </div>
                <div className='w-33 f-left'>
                    <button type="button" className="btn btn-primary" onClick={() => { changeState(props.id, 'done') }}>Done</button>
                </div>
            </div>
        </div>
    )
}

export default AddItem;