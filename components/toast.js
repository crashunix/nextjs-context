import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import ToastContext from "../stores/toastContext";

const Toast = (props) => {

    const [ isVisible, setIsVisible ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 2500);
    }, []);

    return (
        <AnimatePresence>
            { isVisible &&
                <motion.div className="bg-red-400 text-white px-5 py-3 flex items-center rounded-md pointer-events-auto h-14"
                    initial={{
                        opacity: 0,
                        x: -192,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    exit={{
                        opacity: 0,
                        x: -192
                    }}
                    drag='x'
                    >
                        <span>{props.toast.message}</span>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Toast;