import hero from './assets/hero_print.png';

const PrinterHero = () => {
    return (
        <section className='container flex'>
            <div>
                <p className='text black'>
                    Nuestro servicio de reparación de impresoras cubre todas las necesidades, desde problemas de atascos hasta fallos eléctricos y calibración. Realizamos diagnósticos rápidos y eficaces, reparaciones precisas y ajustes necesarios para asegurar que cada impresión sea de alta calidad. Trabajamos con todas las marcas y modelos, y nuestros técnicos están capacitados para resolver cualquier inconveniente.
                </p>
            </div>

            <div>
                <img src={hero} alt="Hero Image Evolusystem" />
            </div>
        </section>
    )
}

export {
    PrinterHero
}