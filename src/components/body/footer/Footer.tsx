import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
import { faGithub, faTwitch } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return(
        <div className="footer">
            <div className="direitos">
            <p>&#169; 2025 Sam-Umbra. Todos os direitos reservados.</p>
            </div>
            <div className="social-media">
                <a href="https://github.com/Sam-Umbra" target="_blank" rel="author"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
                <a href="https://twitch.tv/sam_umbra" target="_blank" rel="author"><FontAwesomeIcon icon={faTwitch} className='icon' /></a>
            </div>
        </div>
    );
};
