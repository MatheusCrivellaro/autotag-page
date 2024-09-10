import {FaWhatsapp} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import './Sobre.css';
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const Sobre = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="sobre-nos">
            <ButtonSuspense />
            <h1>Sobre nós</h1>
            <p>
                Loja especializada na comercialização de automóveis de todas as marcas e modelos com o melhor estoque de toda zona norte da cidade de São Paulo, com destaque na comercialização de veículos 0 km
            </p>
            <div className="container-images-sobre-nos">
            </div>
            <h1 className="text-center">Atendimento</h1>
            <div className="informations-sobre-nos">
                <div className="informations-sobre-nos-logo">
                    <div className="informations-sobre-nos-logo-container">
                        <img src="/logo.png" alt=""
                            className="img-atendimento-sobre-nos" />
                        <h2>
                            Vendemos e compramos carros seminovos com transparência, segurança e o conforto que você merece.
                        </h2>
                    </div>
                </div>
                <div className="div-content-atendimento">
                    <h2>
                        Entre em contato pelo Whatsapp da Car Center Osasco Eireli
                    </h2>
                    <button className="wpp-button-atendimento">
                        <a href="https://api.whatsapp.com/send/?phone=5511934524004&text&type=phone_number&app_absent=0"><FaWhatsapp className="icon-wpp-button-atendimento" />(11) 93452-4004</a>
                    </button>
                    <h2>
                        Ou ligue agora para:
                    </h2>
                    <h3 className="phone-atendimento">
                        <FaPhone className="icon-phone-atendimento" />
                        <span>(11) 94731-6797</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Sobre
