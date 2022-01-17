import withAuth from "../../../hof/withAuth";
import DefaultLayout from "../../../layouts/default";

const Config = () => {
    return(
        <div>config</div>
    );
}

export const getServerSideProps = withAuth(async (ctx) => {
    return {
        props: {}
    }
})

Config.layout = DefaultLayout;

export default Config;