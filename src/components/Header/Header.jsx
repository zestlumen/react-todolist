import React, { useState } from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs';
import styles from './Header.module.css';

export default function Header({ filters, filter, onChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <header className={styles.header}>
            <ul className={styles.filters}>
                {filters.map((value, index) => (
                    <li key={index}>
                        <button
                            className={`${styles.filter} ${filter === value && styles.selected}`}
                            onClick={() => onChange(value)}
                        >
                            {value}
                        </button>
                    </li>
                ))}
            </ul>
            <button
                className={`${styles.toggle} ${darkMode ? styles.sun : styles.moon}`}
                onClick={toggleDarkMode}
            >
                {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
            </button>
        </header >
    );
}

