import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo;

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status });
    };

    const handleDelete = () => {
        onDelete(todo);
    };

    return (
        <li className={styles.todo_li}>
            <input
                className={styles.checkbox}
                id={id}
                type='checkbox'
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label
                type='text'
                className={`${styles.input} ${status === 'completed' ? styles.checked_text : styles.text}`}
                htmlFor={id}
            >
                {text}</label>
            <button className={styles.close_icon} onClick={handleDelete}><IoMdClose /></button>
        </li>
    );
}