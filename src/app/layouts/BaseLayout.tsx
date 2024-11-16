import {Header} from "../../widgets/header";
import {Outlet} from "react-router-dom";
import {Footer} from "../../widgets/footer";

const BaseLayout = () => {
    return (
        <div className='app'>
            <Header />
            <div className='content'>
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BaseLayout;