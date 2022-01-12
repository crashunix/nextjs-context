import { useContext, useState } from "react";
import ThemeButton from "../../components/themeButton";
import AuthContext from "../../stores/authContext";
import ThemeContext from "../../stores/themeContext";
import ToastContext from "../../stores/toastContext";

const Signup = () => {

    const { theme } = useContext(ThemeContext);
    const { signup, isLoading } = useContext(AuthContext);

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const { addToast } = useContext(ToastContext);

    return (
        <div className={ theme }>
            <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors">
                <div className="bg-white shadow-md rounded-md p-5 dark:bg-gray-900 transition-colors">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-lg dark:text-white">Signup</span>
                        <ThemeButton />
                    </div>
                    <div className="grid grid-cols-1 gap-2 pt-10 w-64">
                        <input type="text" className="py-1 px-2 h-10 bg-gray-100 rounded-sm dark:bg-gray-800 dark:text-white" placeholder="E-mail" value={ username } onChange={ (e) => setUsername(e.target.value) } />
                        <input type="password" className="py-1 px-2 h-10 bg-gray-100 rounded-sm dark:bg-gray-800 dark:text-white" placeholder="Password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
                        {/* <div className="flex items-center justify-center cursor-pointer py-4 dark:text-white" onClick={ () => addToast('info', 'Em construção', 'Estamos trabalhando nessa funcionalidade.') }>
                            Esqueci minha senha 🥴
                        </div> */}
                        <button className="bg-blue-400 h-10 w-full rounded-sm text-white font-bold" onClick={ () => signup({ username: username, password: password }) }>{ isLoading ? '🤚' : 'Signup' }</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;