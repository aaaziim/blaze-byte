import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div className="h-20">
                <Header></Header>
            </div>
            <div className="min-h-[calc(100vh-120px)]">
                <Outlet></Outlet>
            </div>
            <div className="h-10">
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;