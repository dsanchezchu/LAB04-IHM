import { StrictMode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";


const Basic = () => {
    return (
        <>
             <StrictMode>
                <Header />
                <div className="container-fluid d-flex justify-content-center color-secundario">
                    <div className="row py-5">
                        <Outlet></Outlet>
                    </div>
                </div>
                <Footer />
            </StrictMode>
        </>
    );
}

export default Basic;