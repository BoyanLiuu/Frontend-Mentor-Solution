import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import TodoListItem from './TodoListItem';
import { selectFilteredTodoIds } from '../todoList/todosSlice';

const StyledDragContainer = styled.div``;
const DragNDrop = () => {
    //hooks
    const dispatch = useDispatch();
    //get all to do id
    const todoIds = useSelector(selectFilteredTodoIds);
    // const [list, setList] = useState(todoIds);
    // console.log(todoIds);
    // drag and drop
    const dragNode = useRef();
    const [currId, setId] = useState(-1);
    const [currIndex, setIndex] = useState(-1);
    const handleDragStart = (e, todoId, idx) => {
        console.log(`drag start ${todoId},${idx}`);
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setDragging(true);
        setId(todoId);
        setIndex(idx);
    };
    const handleDragEnd = () => {
        console.log('ending drag..');

        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        setId(-1);
        setIndex(-1);
    };

    // this event happens when we grab a list and enter another list
    const handleDragEnter = (e, todoId, idx) => {
        if (currId !== todoId) {
            console.log('entering drag, not same');

            // console.log(list);
            // console.log(idx);
            // let newList = JSON.parse(JSON.stringify(list));
            // let temp = newList[currIndex];
            // newList[currIndex] = idx;
            // newList[idx] = temp;
            // setList(newList);
            // setList((oldList) => {
            //     let newList = JSON.parse(JSON.stringify(oldList));
            //     newList.splice(idx, 0);
            // });
        }
    };
    const [dragging, setDragging] = useState(false);

    const renderedListItems = todoIds.map((todoId, idx) => {
        return (
            <div
                key={todoId}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, todoId, idx)}
                onDragEnter={
                    dragging ? (e) => handleDragEnter(e, todoId, idx) : null
                }>
                <TodoListItem id={todoId} />
            </div>
        );
    });

    return <>{renderedListItems}</>;
};

export default DragNDrop;
