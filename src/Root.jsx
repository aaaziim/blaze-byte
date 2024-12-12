import { Outlet } from "react-router-dom";
import Home from "./pages/Home/Home"
import Header from "./components/Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;