import Head from 'next/head';
import { getApiClient } from "../../services/axios";
import EmptyLayout from "../../layouts/empty";

export default function Page({ ...props }) {

  return (
    <>
      <Head>
        <title>{props.page.title}</title>
      </Head>
      <h1 className="text-xl font-bold">{props.page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.page.content }}></div>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx);

  const { slug } = ctx.query;
  let page = {};

  await apiClient.get(`/pages/${slug}`).then(res => {
    page = res.data;
  }).catch(err => {});
  return {
    props: {
      page
    }
  }
}

Page.layout = EmptyLayout;
