import { Header } from "./Header";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
import { PrinterHero } from "./PrinterHero";
import { Info } from "./Info";

const PRICE = [
    '- Básico: $160k por impresora',
    '- Avanzado: $280k - $480k por impresora'
]

const TIME = [
   ' - Básico: 1 día hábil',
    '- Avanzado: 2 a 4 días hábiles'
]

const BENEFITS = [
    '- Alta calidad en cada impresión',
    '- Reducción de costos a largo plazo ',
    '- Servicio personalizado para cada impresora',
    '- Asesoramiento del mantenimiento continuo'
]

const Printers = () => {
    return(
        <>
            <Header page='printer' />
            <main>
                <h1 className="h1 blue text-center mt-2">Mantenimiento de Impresoras</h1>
                <PrinterHero />
                <Info price={PRICE} time={TIME} benefits={BENEFITS}/>
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export {
    Printers
}