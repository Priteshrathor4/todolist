import React from 'react'

import { Todos } from './Todos';
import { AddTodo } from './AddTodo';
import { useEffect, useState } from 'react';
export const MainPage = () => {
    let initTodo;
    if (localStorage.getItem('todos') === null) {
        initTodo = [];
    }
    else {
        initTodo = JSON.parse(localStorage.getItem('todos'));
    }
    const onDelete = (todo) => {
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));

        // console.log("Delete", todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    const addTodo = (title, desc) => {
        console.log(title, desc);
        let sno;
        if (todos.length === 0) {
            sno = 1;
        }
        else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            title: title,
            desc: desc,
            sno: sno,
        }
        console.log(myTodo);
        setTodos([...todos, myTodo])

        // localStorage.setItem('todos',JSON.stringify(todos));

    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    return (
        <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />

        </>
    )
}
