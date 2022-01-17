import DefaultLayout from "../../layouts/default";
import Head from 'next/head';
import withAuth from "../../hof/withAuth";
import { parseCookies } from "nookies";
import { authService } from "../../services/auth.service";
import { getApiClient } from "../../services/axios";

export default function PortalIndex({ ...props }) {

  return (
    <>
      <Head>
        <title>PortalIndex</title>
      </Head>
      <h1>Portal Index</h1>
      <button onClick={() => {
          console.log(props);
      }}>teste</button>
    </>
  )
}

export const getServerSideProps = withAuth(async (ctx) => {
    return {
        props: {}
    }
});

// export const getServerSideProps = async (ctx) => {
//   // const apiClient = getApiClient(ctx);
//   const { ['pb.token']: token } = parseCookies(ctx);
//   if(!token || isTokenExpired(token)) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {
//     }
//   }
// }

PortalIndex.layout = DefaultLayout;
