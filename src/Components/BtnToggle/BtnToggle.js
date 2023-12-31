import React, {useContext} from 'react'
import './BtnToggle.css'
import {ThemeContext} from '../../context/ThemeContext'

export default function BtnToggle() {

    const {toggleTheme, theme} = useContext(ThemeContext)

    return (
        <button 
        onClick={toggleTheme}
        className={theme ? "btn-toggle dark-btn" : "btn-toggle"}>
            {theme ? "LIGHT" : "DARK"}
        </button>
    )
}
