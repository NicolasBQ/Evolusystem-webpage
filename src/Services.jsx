import computers from './assets/service_computers.png';
import printers from './assets/service_printers.png';
import camaras from './assets/service_camaras.png';

const Services = () => {
    return (
        <section className='container'>
            <article className='flex'>
                <div>
                    <img src={computers} alt="Mantenimiento de computadores" />
                </div>
                <div>
                    <h2 className='blue title'>Mantenimiento de Computadores</h2>
                    <p className='black'>
                        Mantén tus equipos al máximo rendimiento con nuestro servicio de mantenimiento. Solucionamos problemas, optimizamos sistemas y garantizamos que tus computadores funcionen de forma rápida y segura en todo momento.
                    </p>
                    <p className='more'>Conocer Más</p>
                </div>
            </article>

            <article className='reverse-flex mt-2'>
                <div>
                    <img src={printers} alt="Mantenimiento de computadores" />
                </div>
                <div>
                    <h2 className='blue title'>Reparación de Impresoras</h2>
                    <p className='black'>
                        Nos encargamos de reparar y mantener tus impresoras para que no pierdas productividad. Diagnósticos rápidos y soluciones precisas para que cada impresión sea impecable y sin interrupciones.
                    </p>
                    <p className='more'>Conocer Más</p>
                </div>
            </article>

            <article className='flex mt-2'>
                <div>
                    <img src={camaras} alt="Mantenimiento de computadores" />
                </div>
                <div>
                    <h2 className='blue title'>Instalación de Camáras de Seguridad</h2>
                    <p className='black'>
                        Asegura tus espacios con sistemas de videovigilancia confiables. Realizamos la instalación completa y ajustamos la configuración para maximizar la seguridad de tus áreas clave, siempre con la mejor tecnología.
                    </p>
                    <p className='more'>Conocer Más</p>
                </div>
            </article>
        </section>
    )
}

export {
    Services
}