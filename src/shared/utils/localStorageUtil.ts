const getLocalStorage = <T>(key: string, initialValue: T): T => {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    } catch (error) {
        return initialValue;
    }
};

const setLocalStorage = <T>(key: string, value: T): void => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

const clearStorage = <T>(key:string): void => {
    window.localStorage.removeItem(key)
}

export { getLocalStorage, setLocalStorage,  clearStorage};