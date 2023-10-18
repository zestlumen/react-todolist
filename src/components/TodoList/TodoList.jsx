import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
    const [todos, setTodos] = useState(() => readTodoFromLocal());

    const handleTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const handleUpdate = (updated) => {
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    };

    const handleDelete = (deleted) => {
        setTodos(todos.filter((t) => t.id != deleted.id));
    };

    const filtered = getFilteredItem(todos, filter);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <section className={styles.section}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <AddTodo addTodo={handleTodo} />
        </section>
    );
}

function getFilteredItem(todos, filter) {
    if (filter === 'all') return todos;
    return todos.filter((t) => t.status === filter);
}

function readTodoFromLocal() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}
