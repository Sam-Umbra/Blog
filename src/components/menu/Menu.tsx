import './menu.css';

function Menu() {
    return (
        <div className="header">
            <p className="logo"><span>M</span>y<span>B</span>log</p>
            <nav>
                <ul>
                    <li><a href="/">Sobre Mim</a></li>
                    <li className="dropdown">
                        <a href="#">Categorias</a>
                        <ul className="submenu">
                            <li><a href="/Animes">Animes</a></li>
                            <li><a href="/Astronomia">Astronomia</a></li>
                            <li><a href="/Jogos">Jogos</a></li>
                            <li><a href="/Literatura">Literatura</a></li>
                            <li><a href="/Musica">Musica</a></li>
                        </ul>
                    </li>
                    <li><a href="/Contato">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;