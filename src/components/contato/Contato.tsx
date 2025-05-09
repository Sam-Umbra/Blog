import Footer from "../body/footer/Footer.tsx";
import Menu from "../menu/Menu.tsx";
import './contato.css';

function Contato() {
    return(
        <>
            <header>
                <Menu />
            </header>
            <main>
            <div className="field-container">
            <h1>Me Contate</h1>
            <div className="field-content">
                <div className="field">
                    <p>Nome</p>
                    <input type="text" id="name"/>
                </div>
                <div className="field">
                    <p>Email</p>
                    <input type="text" id="mail" placeholder="mail@example.com"/>
                </div>
                <div className="field">
                    <p>Telefone</p>
                    <input type="text" id="phone" placeholder="+00 12345-6789"/>
                </div>
                <div className="message">
                <textarea name="message" id="msg" rows={30} placeholder="Ex. Olá me interessei pelo seu projeto..." className="message-textarea" />
                    <button>Envie sua Mensagem</button>
                </div>
            </div>
        </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Contato;