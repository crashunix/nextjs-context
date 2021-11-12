import { AnimatePresence, motion } from 'framer-motion'
import { createContext, useCallback, useEffect, useState } from 'react'
import Toast from '../components/toast'

const ToastContext = createContext({
    toasts: [],
    addToast: () => { },
    removeToast: () => { },
})

export const ToastContextProvider = ({ children }) => {

    const [toasts, setToasts] = useState([])

    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(
                () => {
                    setToasts(toasts => toasts.slice(1));
                },
                3000
            );
            console.log(toasts);
            return () => clearTimeout(timer);
        }
    }, [toasts])

    const addToast = useCallback(
        (type, message) => {
            var id = toasts.length;
            setToasts(toasts => [...toasts, { id, type, message, isVisible: true }]);
        },
        [setToasts],
    );

    const removeToast = () => {
        setToasts(toasts => toasts.slice(1));
    }

    const context = { toasts, addToast, removeToast };

    return (
        <ToastContext.Provider value={context}>
            {children}
            <div className="absolute top-0 left-0 flex pt-2 pl-2 space-y-2 flex-col w-48 pointer-events-none">
                {toasts.map((toast, index) => (
                    <Toast key={index} index={index} toast={toast}></Toast>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export default ToastContext;