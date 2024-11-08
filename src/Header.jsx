import logo from './assets/logo.svg';
import { Computers } from './Computers';

import {
    Link
} from 'react-router-dom';

const Header = ({page}) => {
    return (
            <header className='header'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt="Evolusystem Logo" />
                    </Link>
                </div>
                <nav className='header-nav'>
                    <ul>
                        <Link to='/computadores'>
                            <li className={`bold ${page === 'computer' ? 'blue' : 'soft_blue'}`}>
                                Computadores
                            </li>
                        </Link>
                        <Link to='/impresoras'>
                            <li className={`bold ${page === 'printer' ? 'blue' : 'soft_blue'}`}>
                                Impresoras
                            </li>
                        </Link>
                        <Link to='/camaras'>
                            <li className={`bold ${page === 'camara' ? 'blue' : 'soft_blue'}`}>
                                Cámaras de Seguridad
                            </li>
                        </Link>
                    </ul>
                    <a href="#contact">
                        <button className='header-nav_button'>Contáctanos</button>
                    </a>
                </nav>
            </header>
    )
}

export {
    Header
}