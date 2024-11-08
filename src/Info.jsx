const Info = ({ price, time, benefits }) => {
    return(
        <section className="container info">
            <div className="text-center info-border">
                <h3 className="blue title">PRECIO</h3>
                <ul>
                    {price.map(info => (
                        <li>{info}</li>
                    ))}
                </ul>
            </div>

            <div className="text-center info-border">
                <h3 className="blue title">TIEMPO DE ENTREGA</h3>
                <ul>
                    {time.map(info => (
                        <li>{info}</li>
                    ))}
                </ul>
            </div>

            <div className="text-center">
                <h3 className="blue title">BENEFICIOS</h3>
                <ul>
                    {benefits.map(info => (
                        <li>{info}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export {
    Info
}