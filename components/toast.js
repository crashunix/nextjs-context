import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import ToastContext from "../stores/toastContext";

const Toast = (props) => {

    const [ active, setActive ] = useState(true);

    return (
        <AnimatePresence>
            { active &&
                <motion.div className="bg-white flex p-1 pr-4 rounded-sm self-start space-x-2 opacity-0 relative pointer-events-auto cursor-pointer shadow-sm"
                    animate={{
                        x: [-100, 0, 0, 0, 0, 0, -100],
                        opacity: [0, 1, 1, 1, 1, 1, 0],
                        transitionEnd: {
                            display: "none",
                        }
                    }}
                    transition={{
                        duration: 3.5,
                    }}
                    exit={{
                        x: -100,
                        opacity: 0,
                        transitionEnd: {
                            display: "none"
                        },
                    }}
                    drag="x"
                    dragDirectionLock
                    >
                        <div className={ (props.toast.type === 'error' ? 'bg-red-200' : props.toast.type === 'info' ? 'bg-blue-200' : 'bg-gray-200') + ' w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-sm' }>
                            { props.toast.type === 'error' ? '❌' : props.toast.type === 'info' ? '📘' : '❕'}
                        </div>
                        <div className="flex flex-col">
                            {/* <span className="font-bold text-gray-600">{props.toast.title}</span> */}
                            <span className={ (props.toast.type === 'error' ? 'text-red-600' : props.toast.type === 'info' ? 'text-blue-600' : 'text-gray-600') + ' font-medium'}>{props.toast.title}</span>
                            <span className={ (props.toast.type === 'error' ? 'text-red-400' : props.toast.type === 'info' ? 'text-blue-400' : 'text-gray-400') + ' leading-none'}>{props.toast.message}</span>
                        </div>
                        <button className="px-2 text-lg font-bold absolute -right-1 -top-1 cursor-pointer" onClick={() => setActive(false)}>&times;</button>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Toast;