import React from 'react';
import "./app-header.css";
const AppHeader = (props) => {
    return(
    <div className="head_block">
    <h1>Todo</h1>
        <h5 className="text_head_block">{props.toDo} more to do, {props.done}  done</h5>
    </div>
    );
}
export default AppHeader;