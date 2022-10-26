import Head from 'next/head';
import { getApiClient } from "../../services/axios";
import DefaultLayout from '../../layouts/default';
import Link from 'next/link';
import dateDiff from '../../helpers/dateDiff';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../../stores/authContext';
import withAuth from "../../hof/withAuth";

const Me = ({ ...props }) => {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Head>
        <title>{user && user.username}</title>
      </Head>
      {/* <h1 className="text-xl font-bold">{}</h1> */}
      <div className="flex flex-col space-y-1">
        <Image fill="true" className="rounded-lg" width={1080} height={500} src="https://picsum.photos/1080/500" />
        <h4 className="font-bold text-gray-900 text-lg leading-5">{}</h4>
        <div className="flex items-center space-x-2">
          <Link href="/">
            <a className="text-blue-400 text-sm">{}</a>
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-xs text-gray-600">{dateDiff()}</span>
        </div>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html:  }}></div> */}
    </>
  )
}

export const getServerSideProps = withAuth(async (ctx) => {
  // const apiClient = getApiClient(ctx);

  // let posts = {};

  // await apiClient.get(`/posts`).then(res => {
  //     posts = res.data;
  // }).catch(err => { });
  // return {
  //     props: {
  //         posts
  //     }
  // }
  return {
    props: {

    }
  }
});

Me.layout = DefaultLayout;

export default Me;
