import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import * as todoSlice from '../features/todo/todoSlice'
import * as todoUISlice from '../features/todo/todoUISlice'


const Item = (props: any) => {
    const dispatch = useDispatch();

    const editItem = (id: number) => {
        dispatch(todoUISlice.editView({ editItemId: id }));
    }
    return (
        <div className='col-12 item'>
            <div className='w-88 f-left'>
                <div className={'item-title ' + (props.item.state)}>{props.item.title}</div>
            </div>
            <div className='item-action w-12 f-left'>
                <button className="icon-button w-100 pull-left" onClick={(event) => editItem(props.item.id)}>
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
                        <path
                            d="M0 32l12-4 20-20-8-8-20 20zM4 28l2.016-5.984 4 4zM8 20l12-12 4 4-12 12z"
                        ></path>
                    </svg>
                </button>
            </div>
            {/* <div className='col-md-2 p-0 display-table-cell'>
                <button type="button" className="btn btn-icon pull-right" onClick={(event) => props.onMarkDone(props.item.id)}>
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
            </div> */}
            {/* <div className='col-md-2 p-0'>
                <button type="button" className="btn btn-flat" onClick={(event) => props.onRemoveItem(props.item.id)}>X</button>
            </div> */}
        </div>
    )
}

export default Item