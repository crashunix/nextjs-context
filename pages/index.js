import { parseCookies } from "nookies";
import Head from 'next/head';
import EmptyLayout from "../layouts/empty";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import { isTokenExpired } from "../util/auth";
import Input from "../components/input";

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
        <div className="bg-blue-500">
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-xl text-white">Seja bem-vindo ao seu portal RH!</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col space-y-2">
                <input type="username" {...register("username")} />
                <Input></Input>
                <input type="password" {...register("password")} />
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
              <button type="submit">
                Entrar
              </button>
            </form>
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
