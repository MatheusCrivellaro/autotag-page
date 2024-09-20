import { useEffect, useRef } from "react";

type props = {
    codeTrustMary: string
}

const TrustmaryWidget = ({ codeTrustMary }:props) => {
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://widget.trustmary.com/" + codeTrustMary;
        script.async = true;

        if (widgetRef.current) {
            widgetRef.current.appendChild(script); // Coloca o script no div específico
        }

        return () => {
            if (widgetRef.current) {
                widgetRef.current.removeChild(script); // Remove o script ao desmontar o componente
            }
        };
    }, [codeTrustMary]);

    return (
        <div ref={widgetRef}></div>
    );
};

export default TrustmaryWidget;
