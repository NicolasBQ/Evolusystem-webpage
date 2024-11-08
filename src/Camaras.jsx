import { Header } from "./Header";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { CamaraHero } from "./CamaraHero";
import { Info } from "./Info";

const PRICE = [
    '- Instalación camára individual: 400k',
    '- Paquete instalación 4 cámaras: 1.4M',
    '- Paquete instalación 8 cámaras: 2.6M'
]

const TIME = [
    '- Instalación cámara individual: 2h -4h',
    '- Paquetes de 4 - 8 cámaras: 8h'
]

const BENEFITS = [
    '- Protección continua',
    '- Personalización de la cobertura',
    '- Monitoreo remoto desde dispositivos móviles',
    '- Equipos de alta calidad'
]

const Camaras = () => {
    return(
        <>
            <Header page='camara' />
            <main>
                <CamaraHero />
                <Info price={PRICE} time={TIME} benefits={BENEFITS}/>
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export {
    Camaras
}