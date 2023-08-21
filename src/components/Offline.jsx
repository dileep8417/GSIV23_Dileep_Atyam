import Layout from "./Layout";
import "../styles/Offline.css";

const Offline = () => {
    return (
        <Layout>
            <div className="offline">
                <img src="/offline.png" alt="" />
                <p>It seems your disconnected</p>
                <a href="/" className="retry">Retry</a>
            </div>
        </Layout>
    );
}

export default Offline;