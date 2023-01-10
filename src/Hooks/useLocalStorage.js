import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        if(localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key))
        }
        return defaultValue
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    console.log(key, value);
    return [value, setValue];
}
