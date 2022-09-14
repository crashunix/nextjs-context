import withAuth from "../hof/withAuth";
import { getApiClient } from "../services/axios";

import { FiSearch } from "react-icons/fi";
import DefaultLayout from "../layouts/default";
import HomeSection from "../components/home-section";
import PostCard from "../components/post-card";
import Link from "next/link";

const Home = ({ ...props }) => {
    return <>
        
            <a className="flex flex-col space-y-10">
                <div className="flex p-3 rounded-md bg-gray-100 items-center space-x-2">
                    <FiSearch className="text-xl" />
                </div>
                <div className="flex flex-col space-y-10">
                    <HomeSection title="Latest news">
                        <div className="max-w-full overflow-x-auto pb-3">
                            <div className="flex space-x-3">
                                {props.posts.map((x, i) => (
                                    <PostCard key={i} title={x.title} category={x.category.name} createdAt={x.createdAt} slug={x.slug} />
                                ))}
                            </div>
                        </div>
                    </HomeSection>
                </div>
            </a>
    </>
}

export const getServerSideProps = withAuth(async (ctx) => {
    const apiClient = getApiClient(ctx);

    let posts = {};

    await apiClient.get(`/posts`).then(res => {
        posts = res.data;
    }).catch(err => { });
    return {
        props: {
            posts
        }
    }
});

Home.layout = DefaultLayout;

export default Home;
