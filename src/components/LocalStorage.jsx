import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';

function LocalStorage() {
    const [theme, setTheme] = useLocalStorage("theme", "dark");

    return (
    <div style={{backgroundColor: theme == 'dark' ? 'black' : 'white'}}>
        <h1 style={{color: theme == 'dark' ? 'white' : 'black'}}>LocalStorage</h1>
        <button onClick={() => theme === "light" ? setTheme("dark") : setTheme("light")}>Change theme</button>
    </div>
  )
}

export default LocalStorage
