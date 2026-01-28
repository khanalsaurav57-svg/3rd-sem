import React from 'react';
import { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContent';



export default function Dashboard() {
    const {theme, setTheme} = useContext(ThemeContext);

    const handleToggleTheme = () => {
        setTheme(theme ==="light" ? "dark" : "light");
    };

    console.log("Current theme:",theme);
  return (
    <>
    <div>
         Dashboard
    </div>
    <button onClick={ handleToggleTheme}> Toggle Theme</button>
    </>
  );
}
