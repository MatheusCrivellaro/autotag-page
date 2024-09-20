import './Inicio.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useGetStock} from "../../hooks/useGetStock.tsx";
import {Vehicle} from "../../interfaces/Vehicle.ts";
import useCollects from "../../hooks/useCollects.tsx";
import CarouselCategorias from "../../components/CarouselCategorias/CarouselCategorias.tsx";
import CardVeiculoEstoque from "../../components/CardVeiculoEstoque/CardVeiculoEstoque.tsx";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner.tsx";
import ButtonSuspense from "../../components/ButtonSuspense/ButtonSuspense.tsx";
import {useEffect, useState} from "react";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading.tsx";
import TrustMaryWidget from "../../components/TrustMaryWidget/TrustMaryWidget.tsx";

const Inicio = () => {

    const { data, isLoading } = useGetStock();
    const { marcas  } = useCollects(data)
    const [destaques, setDestaques] = useState<Vehicle[]>()
    const [widthAtual, setWidthAtual] = useState(window.innerWidth);

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const handleSelectedMarca = (selectedMarca: string) => {
        navigate('/veiculos', { state: { marcaSelecionada: selectedMarca } });
    };

    useEffect(() => {
        setDestaques(data?.slice(0, 4))
        window.addEventListener('resize', () => setWidthAtual(window.innerWidth));
        window.scrollTo(0, 0);
    }, [data, pathname]);

    return (
        isLoading ?
            <div className="inicio-spinner">
                <SpinnerLoading />
            </div>
            :
            <div className="inicio">
                <ButtonSuspense/>
                <CarouselBanner/>
                <div className="div-carousel-categorias">
                    <CarouselCategorias marcas={marcas} handleSelectedMarca={handleSelectedMarca} categoriasPerView={widthAtual > 992 ? 9 : 3} isLoading={isLoading}/>
                </div>

                <div className="veiculos-destaque-div-inicio" id="veiculos-destaque">
                    <h1>Veículos em destaque</h1>
                    <div className="veiculos-destaque-cards-div-inicio">
                        {destaques?.map((i: Vehicle, index) =>
                            <CardVeiculoEstoque veiculo={i} key={"carro" + index}/>
                        )}
                    </div>
                    <div className="button-veiculos-destaque-div-inicio">
                        <Link to="/veiculos/#veiculos" className="button-veiculos-destaque-inicio">Ver estoque</Link>
                    </div>
                </div>
                <div className="avaliacoes-div-inicio">
                    <h1>Depoimentos dos nossos clientes</h1>
                    <TrustMaryWidget codeTrustMary="gg86lqWP5"/>
                </div>
            </div>
    )
}

export default Inicio
