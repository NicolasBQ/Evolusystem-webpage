import hero from './assets/hero.png';

const Hero = () => {
    return (
        <section className='container flex'>
            <div>
                <h1 className='h1'><span className='blue'>Evolusystem</span>, mantenimiento y seguridad tecnológica</h1>
                <a href="#contact">
                    <button className='contact-btn'>Contáctanos</button>
                </a>
            </div>

            <div>
                <img src={hero} alt="Hero Image Evolusystem" />
            </div>
        </section>
    )
}

export {
    Hero
}