import { AnimatePresence, motion } from 'framer-motion'
import { createContext, useCallback, useEffect, useState } from 'react'
import Toast from '../components/toast'

const ToastContext = createContext({
    toasts: [],
    addToast: () => { },
})

export const ToastContextProvider = ({ children }) => {

    const [toasts, setToasts] = useState([])

    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(
                () => {
                    setToasts(toasts => toasts.slice(1));
                },
                3500
            );
            console.log(toasts);
            return () => clearTimeout(timer);
        }
    }, [toasts])

    const addToast = useCallback(
        (type, title, message) => {
            setToasts(toasts => [...toasts, { type, title, message }]);
        },
        [setToasts],
    );

    const context = { toasts, addToast };

    return (
        <ToastContext.Provider value={context}>
            {children}
            <div className="absolute top-0 left-0 flex pt-2 pl-2 space-y-2 flex-col pointer-events-none">
                {toasts.map((toast, index) => (
                    <Toast key={index} index={index} toast={toast}></Toast>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export default ToastContext;