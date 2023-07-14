import { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue: string) {
    let saved;
    if (typeof window !== 'undefined') {
        saved = localStorage.getItem(key);
    }
    const initial = saved ? JSON.parse(saved) : '';
    return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);

    return [value, setValue];
};
