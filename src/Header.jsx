import logo from './assets/logo.svg';

const Header = () => {
    return (
        <header className='header'>
            <div>
                <img src={logo} alt="Evolusystem Logo" />
            </div>
            <nav className='header-nav'>
                <ul>
                    <li className='soft_blue bold'>Computadores</li>
                    <li className='soft_blue bold'>Impresoras</li>
                    <li className='soft_blue bold'>Cámaras de Seguridad</li>
                </ul>
                <button className='header-nav_button'>Contáctanos</button>
            </nav>
        </header>
    )
}

export {
    Header
}