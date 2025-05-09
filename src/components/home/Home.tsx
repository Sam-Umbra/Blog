import Footer from "../body/footer/Footer.tsx";
import Menu from "../menu/Menu.tsx";
import './home.css';

function Home() {
    return (
        <>
        <header>
            <Menu />
        </header>

        <main>
            <div className="container" id="sobre">
                <div className="conteudo">
                    <h1 className="titulo">Sobre Mim</h1>
                    <p>Oi! Me chamo Samuel Rodrigues, sou um apaixonado por tecnologia e ciências. Atualmente, sou desenvolvedor de sistemas e estudante do SENAI e SESI, cursando o 3º ano do Ensino Médio em São José dos Campos, São Paulo. Sempre fui fascinado por tudo que envolve o universo da programação, e estou constantemente buscando aprender novas habilidades e me aprofundar no mundo da tecnologia.</p>
                    <p>Além disso, tenho um grande interesse pela astronomia e sou um aspirante a astrônomo. O mistério do cosmos e a possibilidade de entender o funcionamento do universo sempre me encantaram, e busco aprender cada vez mais sobre essa área fascinante.</p>
                    <p>Estou sempre em busca de novos desafios e oportunidades para crescer, tanto na área da programação quanto no estudo do espaço. Se você também compartilha dessas paixões ou se tem interesse em conversar sobre tecnologia e astronomia, fique à vontade para entrar em contato!</p>
                </div>
                <div className="cont-img">
                    <img src="https://cdn.pixabay.com/animation/2022/11/16/14/56/14-56-49-778_512.gif" alt="GIF de galáxia"></img>
                </div>
            </div>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Home;