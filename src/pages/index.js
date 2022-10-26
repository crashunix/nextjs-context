import withAuth from "../hof/withAuth";
import { getApiClient } from "../services/axios";

import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import DefaultLayout from "../layouts/default";
import HomeSection from "../components/home-section";
import PostCard from "../components/post-card";
import Link from "next/link";

const Home = ({ ...props }) => {
    return <>
        
            <div className="flex flex-col space-y-10">
                <div className="flex items-center space-x-4">
                    <div className="relative flex items-center flex-1">
                        <input type="text" className="bg-none outline-none border-none text-sm bg-white h-12 px-3 pr-9 w-full rounded-lg"/>
                        <FiSearch className="text-xl absolute right-3" />
                    </div>
                    <button onClick={() => {console.log('filter');}} className="h-12 w-12 bg-white flex items-center justify-center rounded-lg">
                        <HiOutlineAdjustments />
                    </button>
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
            </div>
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
