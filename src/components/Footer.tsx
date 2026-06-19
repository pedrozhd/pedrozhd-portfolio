import { UilLinkedinAlt, UilGithub, UilEnvelope } from "@iconscout/react-unicons";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-left">
                        © {new Date().getFullYear()} Pedro França. Feito com 💜 e
                        muitos dados.
                    </div>
                    <div className="footer-socials">
                        <a
                            href="https://linkedin.com/in/pedrozhd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="LinkedIn"
                        >
                            <UilLinkedinAlt size={18} color="currentColor" />
                        </a>
                        <a
                            href="https://github.com/pedrozhd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label="GitHub"
                        >
                            <UilGithub size={18} color="currentColor" />
                        </a>
                        <a
                            href="mailto:pedrohenriquefc06@gmail.com"
                            className="footer-social-link"
                            aria-label="Email"
                        >
                            <UilEnvelope size={18} color="currentColor" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
