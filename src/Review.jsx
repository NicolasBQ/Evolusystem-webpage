import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },

};

const Review = () => {
    return (
        <section className="container">
            <Carousel responsive={responsive} infinite  autoPlaySpeed={3000} >
                <article className="review">
                    <p className="big_text bold black">
                        "Evolusystem ha sido un aliado clave para nuestro negocio. Su servicio de mantenimiento de computadores ha mejorado el rendimiento de nuestros equipos, y su atención al cliente es excelente. ¡Totalmente recomendados!"
                    </p>
                    <p className="big_text bold black">Carlos</p>
                    <p className="text">Gerente de TechWorks S.A.S</p>
                </article>

                <article className="review">
                    <p className="big_text bold">
                        "La instalación de nuestras cámaras de seguridad fue rápida y profesional. Ahora, tenemos tranquilidad total en nuestras instalaciones. Un servicio de calidad, sin duda."
                    </p>
                    <p className="text bold black">Ana Lucía</p>
                    <p className="text">Dueña de restaurante la Esquina</p>
                </article>

                <article className="review">
                    <p className="big_text bold black">
                        "Repararon nuestra impresora en tiempo récord. El servicio fue efectivo y su personal muy atento. Estamos muy satisfechos"
                    </p>
                    <p className="text bold black">Juliana</p>
                    <p className="text">Coordinadora Administrativa de SoftPrint Ltda</p>
                </article>
            </Carousel>
        </section>
    )
}

export {
    Review
}