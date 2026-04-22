import React from 'react';
import styles from "../styles.css";
const Footer = () => {
    return (
        <footer className="position-relative w-100 text-white py-4 color-terciario">
            <div className="container">
                <nav className="row">
                    {/* Logo */}
                    <a href="#" className="col-12 col-md-3 text-reset text-uppercase d-flex align-items-center justify-content-center">
                    <i data-feather="server"></i>     
                    </a>
                    {/* Menu */}
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Productos</li>
                        <li><a href="https://www.asus.com/latin/displays-desktops/monitors/all-series/" className="text-reset">Monitores</a></li>
                        <li><a href="https://www.asus.com/latin/motherboards-components/motherboards/all-series/" className="text-reset">Tarjetas Graficas</a></li>
                        <li><a href="https://www.amd.com/es/products/processors/desktops/ryzen.html" className="text-reset">Procesadores</a></li>
                    </ul>
                    {/* Redes sociales */}
                    <ul className="col-12 col-md-3 list-unstyled">
                        <li className="font-weight-bold text-uppercase">Redes Sociales</li>
                        <li className="d-flex justify-content-between">
                            {/* IG */}
                            <i data-feather="instagram"></i>                   
                            {/* FB */}
                            <i data-feather="facebook"></i>   
                            {/* TL */}
                            <i data-feather="send"></i>   
                        </li>
                    </ul>
                </nav>
                <div className="row">
                    <div className="col-md-12 text-center">
                        @2024 Creado por: Diego Sanchez Chuquimango
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;