
const Navbar = () => {
    const cohorte = 50;
    const navbarJsx = (
        <nav>
            {/** se imprime el numero de cohorte  */}
            <h2>cohorte {}</h2>
            <img src={props.src} alt={props.alt} />
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
        </nav>);
        return navbarJsx;
}

export { Navbar };