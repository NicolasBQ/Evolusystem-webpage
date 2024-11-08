import hero from './assets/hero_computers.png'

const ComputerHero = () => {
    return (
        <section className='container flex'>
            <div>
                <p className='text black'>
                    Nuestro servicio de mantenimiento de computadores asegura que tus equipos funcionen siempre de manera óptima y segura. Realizamos limpieza de hardware, actualización de software, eliminación de virus y optimización del sistema. Ya sea para prevenir fallas o mejorar el rendimiento, ofrecemos soluciones ajustadas a tus necesidades para alargar la vida útil de tus equipos y evitar interrupciones en tu flujo de trabajo.
                </p>
            </div>

            <div>
                <img src={hero} alt="Hero Image Evolusystem" />
            </div>
        </section>
    )

}

export {
    ComputerHero
}