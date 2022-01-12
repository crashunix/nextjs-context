import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import ThemeButton from "../../components/themeButton";
import AuthContext from "../../stores/authContext";
import ThemeContext from "../../stores/themeContext";
import ToastContext from "../../stores/toastContext";

const Login = () => {

    const { theme } = useContext(ThemeContext);
    const { addToast } = useContext(ToastContext);

    const { signin } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();

    const handleSignin = (data) => {
        console.log(data);
        signin(data);
    }

    return (
        <div className={ theme }>
            <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors">
                <div className="bg-white shadow-md rounded-md p-5 dark:bg-gray-900 transition-colors">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-lg dark:text-white">Login</span>
                        <ThemeButton />
                    </div>
                    <form onSubmit={handleSubmit(handleSignin)} className="grid grid-cols-1 gap-2 pt-10 w-64">
                        <input name="username" {...register('username')} type="text" className="py-1 px-2 h-10 bg-gray-100 rounded-sm dark:bg-gray-800 dark:text-white" placeholder="Username " />
                        <input name="password" {...register('password')} type="password" className="py-1 px-2 h-10 bg-gray-100 rounded-sm dark:bg-gray-800 dark:text-white" placeholder="Password" />
                        <div className="flex items-center justify-center cursor-pointer py-4 dark:text-white" onClick={ () => addToast('info', 'Em construção', 'Estamos trabalhando nessa funcionalidade.') }>
                            Esqueci minha senha 🥴
                        </div>
                        {/* <button className="bg-blue-400 h-10 w-full rounded-sm text-white font-bold" onClick={ () => login({ username: username, password: password }) }>{ isLoading ? '🤚' : 'Login' }</button> */}
                        <button className="bg-blue-400 h-10 w-full rounded-sm text-white font-bold" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;