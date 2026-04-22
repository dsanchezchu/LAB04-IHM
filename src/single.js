import Importadas from  './data/portada';
 
const Single = () => {
    console.log(Importadas);
    const currentRoute = window.location.pathname;
    const portada = Importadas.find((item) => item.slug === currentRoute.replace('/detalle/', ''));
    return(
        <>
            <h1 >{portada.name}</h1>
            <br></br>
            <img src={portada.url} alt={portada.name} />
            <p className='text-black text-center'>{portada.descripcion} </p>
        </>
    )

}

export default Single;