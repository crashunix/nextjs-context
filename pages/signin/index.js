import { parseCookies } from "nookies";
import Head from 'next/head';
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../../stores/authContext";
import { isTokenExpired } from "../../util/auth";
import EmptyLayout from "../../layouts/empty";

export default function Home({ ...props }) {

  const { register, handleSubmit } = useForm();

  const { signin } = useContext(AuthContext);

  const onSubmit = ({ username, password }) => {
    console.log(username, password);
    signin({ username, password });
  }

  return (
    <>
      <Head>
        <title>Bem-vindo ao Portal RH</title>
      </Head>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="bg-bl-dark-blue flex items-center">
          <div className="p-4 w-2/3 space-y-8 mx-auto flex flex-col items-center">
            <h2 className="text-2xl text-white w-2/3 text-center font-bold">Seja bem-vindo ao seu portal RH!</h2>
            <form className="flex flex-col space-y-10 w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-6">
                <input type="username" {...register("username")} className="bg-transparent outline-none border-b text-center placeholder-white px-2 py-1 text-white w-full" placeholder="E-mail" />
                <input type="password" {...register("password")} className="bg-transparent outline-none border-b text-center placeholder-white px-2 py-1 text-white w-full" placeholder="Senha" />
                {/* <Input
                  {...register("username")}
                  type="text"
                  color="lightBlue"
                  size="regular"
                  outline={false}
                  placeholder="E-mail"
                />
                <Input
                  {...register("password")}
                  type="text"
                  color="lightBlue"
                  size="regular"
                  outline={false}
                  placeholder="Senha"
                /> */}
              </div>
              <button type="submit" className="w-full px-4 py-2 text-white text-lg font-bold bg-bl-light-blue rounded-lg">
                Entrar
              </button>
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-1">
                  <input type="checkbox" id="remember"/>
                  <label htmlFor="remember">Lembrar de mim</label>
                </div>
                <a href="#">Esqueceu a senha?</a>
              </div>
            </form>
            <a href="#" className="text-bl-light-blue">Não tem acesso? <span className="font-bold">Fale com o Bullla</span></a>
          </div>
        </div>
        <div className="home__right"></div>
      </div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  // const apiClient = getApiClient(ctx);
  const { ['pb.token']: token } = parseCookies(ctx);
  if(token && !isTokenExpired(token)) {
    return {
      redirect: {
        destination: '/portal',
        permanent: false
      }
    }
  }
  return {
    props: {
    }
  }
}

Home.layout = EmptyLayout;
