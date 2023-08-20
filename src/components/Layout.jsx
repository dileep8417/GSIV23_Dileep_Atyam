import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div className="page-content">
                {children}
            </div>
        </main>
    );
}

export default Layout;