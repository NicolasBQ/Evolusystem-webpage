import { Header } from "./Header";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { ComputerHero } from "./ComputerHero";
import { Info } from "./Info";

const PRICE = [
    '- Básico: $200k por equipo',
    '- Avanzado: $320k por equipo'
]

const TIME = [
    '- Básico: 24h',
    '- Avanzado: 48h- 72h'
]

const BENEFITS = [
    '- Aumento velocidad y rendimiento',
    '- Reducción de fallos',
    '- Minimización de perdida de datos',
    '- Servicio profesional y garantizado'
]

const Computers = () => {
    return(
        <>
            <Header page="computer"/>
            <main>
                <h1 className="h1 blue text-center mt-2">Mantenimiento de Computadores</h1>
                <ComputerHero />
                <Info price={PRICE} time={TIME} benefits={BENEFITS}/>
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export {
    Computers
}