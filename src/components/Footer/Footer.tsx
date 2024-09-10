import './Footer.css'
import {GrLocation} from "react-icons/gr";
import {FaWhatsapp} from "react-icons/fa";
import {RiPhoneLine} from "react-icons/ri";
import {MdOutlineEmail} from "react-icons/md";
import logo_autodealer from "/logo-autodealer.png"

const Footer = () => {
    return (
        <footer>
            <div className="localizacao-div-inicio">
                <div className="mapa-div-localizacao-inicio">
                    <h1>Localização</h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.216966768941!2d-46.65214432540876!3d-23.488693358925126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7bd0f21d2c5%3A0x488957fd09cf19d8!2sAv.%20Eng.%20Caetano%20%C3%81lvares%2C%203942%20-%20Lim%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002413-000!5e0!3m2!1spt-BR!2sbr!4v1725989871161!5m2!1spt-BR!2sbr"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="map-localizacao-inicio"
                    />
                </div>
                <div className="informacoes-localizacao-container-div-inicio">
                    <div className="informacoes-localizacao-div-inicio">
                        <h1>Car Center Osasco Eireli</h1>
                        <div className="informacao-localizacao-card-inicio">
                            <GrLocation className="icon-informacao-localizacao-card-inicio"/>
                            <h2>Av. Engenheiro Caetano Álvares
                                Nº 3942 - CEP: 02413-000
                                São Paulo - SP </h2>
                        </div>
                        <div className="informacao-localizacao-card-inicio">
                            <FaWhatsapp className="icon-informacao-localizacao-card-inicio"/>
                            <h2>(11) 94731-6797 </h2>
                        </div>
                        <div className="informacao-localizacao-card-inicio">
                            <RiPhoneLine className="icon-informacao-localizacao-card-inicio"/>
                            <h2>(11) 4883-2223</h2>
                        </div>
                        <div className="informacao-localizacao-card-inicio">
                            <MdOutlineEmail className="icon-informacao-localizacao-card-inicio"/>
                            <h2>contato@auttotag.com.br</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="direitos-autorais-footer">
                <h3>Powered by</h3>
                <img src={logo_autodealer} alt=""/>
            </div>
        </footer>
    )
}

export default Footer
