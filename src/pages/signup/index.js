import { useContext, useState } from "react";
import ThemeButton from "../../components/themeButton";
import AuthContext from "../../stores/authContext";
import ThemeContext from "../../stores/themeContext";
import ToastContext from "../../stores/toastContext";

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { parseCookies } from "nookies";
import { Controller, useForm } from "react-hook-form";

const Signup = () => {

    const { theme } = useContext(ThemeContext);

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Nome de usuário é obrigatório')
            .default("")
            .min(3, "O nome de usuário deve conter pelo menos 3 caracteres")
            .max(30, "O nome de usuário deve conter no máximo 30 caracteres"),
        name: Yup.string().required('Nome é obrigatório').default(""),
        email: Yup.string()
            .required('E-mail é obrigatório').default(""),
        emailRepeat: Yup.string()
            .required('A confirmação de e-mail é obrigatória')
            .oneOf([Yup.ref('email')], 'Os endereços de e-mail não coincidem').default(""),
        password: Yup.string()
            .required('A senha obrigatória')
            .min(8, 'A senha deve ter no mínimo 8 caracteres').max(20, 'A senha deve conter no máximo 20 caracteres').default(""),
        passwordRepeat: Yup.string()
            .required('A confirmação de senha é obrigatória')
            .oneOf([Yup.ref('password')], 'As senhas não coincidem').default(""),
        // avatar: Yup.bool()
        //     .oneOf([true], "Aceite obrigatório").default(false)
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, control, formState: { errors } } = useForm(formOptions);

    const { signup, loading } = useContext(AuthContext);

    const [field, setField] = useState(''); // Apenas para o input de senha funcionar corretamente

    const onSubmitSignup = ({ username, name, email, password }) => {
        signup({ username, name, email, password });
    }

    return (
        <div className={theme}>
            <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
                <h1 className="text-gray-700">Cadastro</h1>
                <form className="flex flex-col" onSubmit={handleSubmit(onSubmitSignup)}>

                    <Controller
                        name="username"
                        value={field ? field : ''}
                        control={control}
                        render={({ field }) => (
                            <input name="username" className="text-lg" type="text" placeholder="Nome de usuário" {...field} />
                        )}
                    />

                    {errors.username?.message}

                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <input name="name" className="text-lg" type="text" placeholder="Nome" {...field} />
                        )}
                    />

                    {errors.name?.message}

                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <input name="email" className="text-lg" type="text" placeholder="E-mail" {...field} />
                        )}
                    />

                    {errors.email?.message}

                    <Controller
                        name="emailRepeat"
                        control={control}
                        render={({ field }) => (
                            <input name="emailRepeat" className="text-lg" type="text" placeholder="Confirme seu e-mail" {...field} />
                        )}
                    />

                    {errors.emailRepeat?.message}

                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <input name="password" className="text-lg" type="password" placeholder="Senha" {...field} />
                        )}
                    />

                    {errors.password?.message}

                    <Controller
                        name="passwordRepeat"
                        control={control}
                        render={({ field }) => (
                            <input name="passwordRepeat" className="text-lg" type="password" placeholder="Confirme sua senha" {...field} />
                        )}
                    />

                    {errors.passwordRepeat?.message}

                    <button className="rounded-lg p-4" type="submit">Prosseguir</button>

                </form>
            </div>
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    // const apiClient = getApiClient(ctx);
    const { ['inari.token']: token } = parseCookies(ctx);
    if (token && !isTokenExpired(token)) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {
        }
    }
}

export default Signup;