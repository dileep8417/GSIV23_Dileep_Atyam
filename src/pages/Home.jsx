import Layout from "../components/Layout";
import MoviesList from "../components/MoviesList";
import withOfflineEnabled from "../hoc/withOfflineEnabled";

const Home = () => {
    return (
        <Layout>
            <MoviesList />
        </Layout>
    );
}

export default withOfflineEnabled(Home);