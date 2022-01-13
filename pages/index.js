import { parseCookies } from "nookies";
import Head from 'next/head';
import { pagesService } from "../services/pages.service";
import EmptyLayout from "../layouts/empty";
import { useEffect } from "react/cjs/react.development";
import { getApiClient } from "../services/axios";
import DefaultLayout from "../layouts/default";

export default function Home({ ...props }) {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <p>home logada</p>
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
  return {
    props: {
    }
  }
}

Home.layout = DefaultLayout;
