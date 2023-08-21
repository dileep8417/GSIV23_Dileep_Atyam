import Layout from "../components/Layout";
import MovieDetails from "../components/MovieDetails";
import withOfflineEnabled from "../hoc/withOfflineEnabled";

const Details = () => {
    return (
        <Layout>
            <MovieDetails />
        </Layout>
    );
}

export default withOfflineEnabled(Details);