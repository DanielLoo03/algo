import BarraNav from './BarraNav.jsx';
import TarjetaContenido from './TarjetaContenido.jsx';
import fondo from './assets/fondoGaleria.jpg';
import { useState, useEffect } from "react";

function Galeria(){
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        const archivos = import.meta.glob('./assets/imgsGaleria/*.jpg', { eager: true });

        // Convertir a array ordenado por número
        const ordenadas = Object.entries(archivos)
        .map(([path, mod]) => {
            const nombre = path.match(/(\d+)\.jpg$/)?.[1]; // Extrae el número del nombre
            return { numero: parseInt(nombre), src: mod.default };
        })
        .sort((a, b) => a.numero - b.numero);

        setImagenes(ordenadas);
    }, []);

    return(
        <div className="min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center text-black" style={{ backgroundImage: `url(${fondo})` }}>
            <BarraNav />
            <TarjetaContenido>
                <div className="flex flex-wrap gap-4">
                    {imagenes.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={`imagen ${img.numero}`}
                            className="w-[100px] h-auto block"
                        />
                    ))}
                </div>
            </TarjetaContenido>
        </div>
    )
}

export default Galeria;