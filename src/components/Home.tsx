import Menu from "./Menu.tsx";

function Home() {
    return (
        <>
            <header>
                <h1>Home</h1>
                <Menu />
            </header>

            <main>
                <section>
                    <h1>Conteudo da Pagina Home</h1>
                </section>
            </main>

            <footer>
                <h2>Contato Pessoal</h2>
                <p>Fone, Whatsaap, etc</p>
            </footer>
        </>
    )
}

export default Home;