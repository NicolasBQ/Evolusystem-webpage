import hero from './assets/hero_camaras.png';

const CamaraHero = () => {
    return (
        <section className='container flex'>
            <div>
                <p className='text black'>
                    Nuestra instalación de cámaras de seguridad ofrece la tranquilidad de tener una videovigilancia completa y profesional. Nos encargamos de todo el proceso, desde la planificación estratégica de los puntos de instalación hasta la configuración de cada cámara y su monitoreo. Adaptamos cada instalación a tus necesidades, proporcionando una solución de seguridad robusta para proteger tus espacios.
                </p>
            </div>

            <div>
                <img src={hero} alt="Hero Image Evolusystem" />
            </div>
        </section>
    )
}

export {
    CamaraHero
}