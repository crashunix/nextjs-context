import { parseCookies } from "nookies";
import DefaultLayout from "../layouts/default";
import Head from 'next/head';

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>Home</div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  // const apiClient = getApiClient(ctx);
  const { ['pb.token']: token } = parseCookies(ctx);
  if(!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  // await apiClient.get('/auth/me');
  return {
    props: {}
  }
}

Home.layout = DefaultLayout;
