import { createContext, useCallback, useEffect, useState } from 'react'

const ToastContext = createContext({
    toasts: [],
    addToast: () => {},
})

export const ToastContextProvider = ({ children }) => {

    const [toasts, setToasts] = useState([])

    useEffect(() => {
        console.log(toasts);
        if(toasts.length > 0) {
            const timer = setTimeout(
                () => setToasts(toasts => toasts.slice(1)),
                3000
            );
            return () => clearTimeout(timer);
        }
    }, [toasts])

    const addToast = useCallback(
        (toast) => {
            setToasts(toasts => [...toasts, toast]);
        },
        [setToasts],
    );

    const context = { toasts, addToast };

    return (
        <ToastContext.Provider value={context}>
            { children }
            <div className="fixed top-0 left-0 flex flex-col w-48 space-y-2 pt-2 pl-2">
                { toasts.map((toast, index) => (
                    <div key={index} className="bg-red-400 text-white px-4 py-3 rounded-md animate-fade-in-out">
                        <span>{ toast }</span>
                    </div>
                )) }
            </div>
        </ToastContext.Provider>
    );
}

export default ToastContext;