import BarraNav from './BarraNav.jsx';
import TarjetaContenido from './TarjetaContenido.jsx';
import fondo from './assets/fondoListas.png';

function Listas(){
    return(
        <div className="min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center text-black" style={{ backgroundImage: `url(${fondo})` }}>

            <BarraNav />

            <TarjetaContenido>
                <h1 className="text-3xl text-center font-bold mb-10">Películas</h1>
                <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
                    <li>Wall-E</li>
                    <li>Coraline (dormida)</li>
                    <li>El Grinch</li>
                    <li>El Viaje de Chihiro</li>
                    <li>Bob Esponja: La Película</li>
                    <li>Hotel Transylvannia 2 (dormida)</li>
                    <li>Donde Están Las Rubias?</li>
                    <li>Como Entrenar A Tu Dragon</li>
                    <li>Minecraft: La Película</li>
                    <li>Five Night's At Freddy's: La Película (a medias)</li>
                    <li>Gato Con Sombrero</li>
                    <li>La Princesa y el Sapo</li>
                    <li>365 Días</li>
                    <li>Primera Peli de la Trilogia Cursi</li>
                    <li>Peli Wey Ataque Al Corazon Cursi</li>
                    <li>Violet & Finch</li>
                    <li>Nightmare Before Christmas pero es la de la morra</li>
                    <li>Scooby Doo 1</li>
                    <li>Scooby Doo 2</li>
                    <li>Ted</li>
                    <li>Monster House</li>
                    <li>Shrek</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h1 className="text-3xl text-center font-bold mb-10 mt-15">Series</h1>
                <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
                    <li>You</li>
                    <li>The Umbrella Academy</li>
                    <li>Documental Pulpos</li>
                    <li>Documental Avión Perdido</li>
                    <li>Serie Brincolina</li>
                    <li>Serie Niño Incel</li>
                    <li>Ginny y Georgia (algo asi se llamaba)</li>
                </ul>
            </TarjetaContenido>

        </div>
    );
}

export default Listas;