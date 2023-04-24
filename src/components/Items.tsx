import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Item from './item'
import { useDispatch, useSelector } from 'react-redux'
import * as todoSlice from '../features/todo/todoSlice'
import * as todoUISlice from '../features/todo/todoUISlice'
import AddItem from './add.item'


const Items = (props: any) => {
    const items = useSelector((state: any) => state.todo.items);
    const todoui = useSelector((state: any) => state.todoui.view);
    const editItemId = useSelector((state: any) => state.todoui.data.editItemId);
    let editItem = { id: null, title: '' };
    {
        const items = useSelector((state: any) => state.todo.items);
        const editItems = items.filter(a => a.id == editItemId);
        if (editItems.length > 0) {
            editItem = editItems[0];
            console.log('title: ', editItem.title);
        } else {
            editItem = { id: null, title: '' };
        }
    }
    console.log(todoui);
    const dispatch = useDispatch();

    const handleRemoveItem = (id: number) => {
        dispatch(todoSlice.removeTodo(id));
    }

    return (
        <div className='wrapper'>
            {(() => {
                if (todoui == "list-items") {
                    return (
                        <div className='wrapper'>
                            <ItemFilterActions></ItemFilterActions>
                            <ItemList></ItemList>
                        </div>
                    )
                } else if (todoui == "add-item" || todoui == "edit-item") {
                    return (
                        <AddItem id={editItem.id} title={editItem.title}></AddItem>
                    )
                } else {
                    return (
                        <div>test</div>
                    )
                }
            })()}
        </div>
    )
}

const ItemFilterActions = (props: any) => {
    const dispatch = useDispatch();
    const handleAddItem = () => {
        dispatch(todoUISlice.addView(null));
    }
    const handlefilter = (filter: string) => {
        dispatch(todoSlice.changeFilter({ filter }));
    }
    return (
        <div className="app-row">
            <div className="col-12">
                <select className="dropdown" onChange={(event) => { handlefilter(event.currentTarget.value) }}>
                    <option value={'all'}>All</option>
                    <option value={'pending'}>Pending</option>
                    <option value={'inprogress'}>Inprogress</option>
                    <option value={'done'}>Done</option>
                </select>
                <button className="icon-button pull-right item-action  btn-add-action" onClick={handleAddItem}>
                    <svg
                        className="icon"
                        fill="#FFFFFF"
                        width="800px"
                        height="800px"
                        viewBox="0 0 32 32"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>pencil</title>
                        <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
}

const ItemList = (props: any) => {
    const filter = useSelector((state: any) => state.todo.filter);
    const allItems = useSelector((state: any) => state.todo.items);
    let items: any[] = [];
    {
        if (filter == "all") {
            items = allItems;
        } else if (filter == "inprogress") {
            items = allItems.filter(x => x.state == 'in-prog');
        } else if (filter == "pending") {
            items = allItems.filter(x => x.state == 'pending');
        } else if (filter == "done") {
            items = allItems.filter(x => x.state == 'done');
        }
    }
    const dispatch = useDispatch();


    return (
        <div className='app-row'>
            {
                items?.map((item: any, i: number) =>
                    <Item key={i} item={item}></Item>
                )
            }
        </div>
    )
}

export default Items;

