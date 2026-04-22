import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Portada from './data/portada';
import styles from './styles.css';

const Main = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    const goToPrevSlide = () => {
        let index = activeIndex;
        let slidesLength = Portada.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        setActiveIndex(index);
    }

    const goToNextSlide = () => {
        let index = activeIndex;
        let slidesLength = Portada.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        setActiveIndex(index);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            goToNextSlide();
        }, 2500); // Cambia a la siguiente imagen cada 1 segundos

        // Limpia el temporizador cuando el componente se desmonta
        return () => clearInterval(timer);
    }, [activeIndex]);

    return (
        <main>
            <h2 className='text-light'>COTIZA TU PC YA!!!</h2>
            <p className='text-light'>En esta sección podrás cotizar tu PC, seleccionando los componentes que desees.</p>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {Portada.map((slide, index) => (
                        <div className={index === activeIndex ? "carousel-item active" : "carousel-item"} key={index}>
                            <img src={slide.url} className="d-block w-100" alt={slide.slug} onClick={() => handleClick(slide.slug)} style={{width: '656px', height: '656px'}} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" onClick={goToPrevSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={goToNextSlide}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    );
}

export default Main;