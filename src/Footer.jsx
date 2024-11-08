import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';

const Footer = () => {
    return (
        <footer className="container footer">
            <div className='footer-grid'>
                <p className="text white">
                    Expertos en mantenimiento de computadores, impresoras e instalación de cámaras de seguridad. Soluciones confiables y personalizadas para que tus equipos funcionen al máximo. ¡Contáctanos y optimiza tu negocio!
                </p>

                <div className='footer-pages text-center'>
                    <p className="text bold white">Páginas</p>
                    <ul className='mt-1'>
                        <li className='text white'>Computadores</li>
                        <li className='text white'>Impresoras</li>
                        <li className='text white'>Cámaras</li>
                    </ul>
                </div>

                <div className='text-center'>
                    <p className="text bold white">Redes</p>
                    <div className='mt-2 footer-social'>
                        <div>
                            <img src={instagram} alt="" />
                        </div>

                        <div>
                            <img src={facebook} alt="" />
                        </div>

                        <div>
                            <img src={linkedin} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-2 white'/>

            <div className='flex mt-2'>
                <p className='text white bold'>© 2024 Todos los derechos reservados.</p>
                <p className='text white bold'>Términos y condiciones</p>
            </div>
        </footer>
    )
}

export {
    Footer
}