const ContactForm = () => {
    return (
        <form className="contact-form">
            <div className="flex-col">
                <label htmlFor="name" className="big_text black">Nombre</label>
                <input type="text" className="input"/>
            </div>

            <div className="flex-col mt-2">
                <label htmlFor="email" className="big_text black">Correo electrónico</label>
                <input type="email" className="input"/>
            </div>

            <div className="flex-col mt-2">
                <label htmlFor="name" className="big_text black">Mensaje</label>
                <textarea className="input"/>
            </div>

            <button className="contact-btn">Enviar</button>
        </form>
    )
}

export {
    ContactForm
}