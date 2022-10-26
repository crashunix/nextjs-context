import Head from 'next/head';
import { getApiClient } from "../../services/axios";
import DefaultLayout from '../../layouts/default';
import Link from 'next/link';
import dateDiff from '../../helpers/dateDiff';
import Image from 'next/image';

const Post = ({ ...props }) => {

  return (
    <>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      {/* <h1 className="text-xl font-bold">{props.post.title}</h1> */}
      <div className="flex flex-col space-y-1">
        <Image fill="true" className="rounded-lg" width={1080} height={500} src="https://picsum.photos/1080/500" />
        <h4 className="font-bold text-gray-900 text-lg leading-5">{props.post.title}</h4>
        <div className="flex items-center space-x-2">
          <Link href="/">
            <a className="text-blue-400 text-sm">{props.post.category.name}</a>
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-xs text-gray-600">{dateDiff(props.post.createdAt)}</span>
        </div>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: props.post.content }}></div> */}
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx);

  const { slug } = ctx.query;
  let post = {};

  await apiClient.get(`/posts/${slug}`).then(res => {
    post = res.data;
  }).catch(err => { });
  return {
    props: {
      post
    }
  }
}

Post.layout = DefaultLayout;

export default Post;
