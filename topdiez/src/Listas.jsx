import BarraNav from './BarraNav.jsx';
import TarjetaContenido from './TarjetaContenido.jsx';
import fondo from './assets/fondoListas.png';
import zzz from './assets/zzz.gif';

function Listas(){
    return(
        <div className="min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center text-black" style={{ backgroundImage: `url(${fondo})` }}>

            <BarraNav />

            <TarjetaContenido>
                <h1 className="text-3xl text-center font-bold mb-10">Películas</h1>
                <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
                    <li>Wall-E</li>
                    <li>Coraline<img src={zzz} alt="(dormida)" className="w-15 h-auto block" /></li>
                    <li>El Grinch</li>
                    <li>El Viaje de Chihiro</li>
                    <li>Bob Esponja: La Película</li>
                    <li>Hotel Transylvania 2 <img src={zzz} alt="(dormida)" className="w-15 h-auto block" /></li>
                    <li>¿Y Dónde Están Las Rubias?</li>
                    <li>Cómo Entrenar A Tu Dragón</li>
                    <li>Una Película De Minecraft</li>
                    <li>Five Night's At Freddy's: La Película (a medias)</li>
                    <li>El Gato Del Sombrero Mágico</li>
                    <li>La Princesa y el Sapo</li>
                    <li>365 Días</li>
                    <li>A Todos Los Chicos De Los Que Me Enamoré</li>
                    <li>Dos Corazones</li>
                    <li>Violet & Finch</li>
                    <li>El Extraño Mundo De Jack</li>
                    <li>Scooby-Doo 1</li>
                    <li>Scooby-Doo 2</li>
                    <li>Ted</li>
                    <li>Monster House</li>
                    <li>Shrek</li>
                </ul>
                <h1 className="text-3xl text-center font-bold mb-10 mt-15">Series</h1>
                <ul className="list-disc list-inside text-gray-800 text-lg space-y-2">
                    <li>You</li>
                    <li>The Umbrella Academy</li>
                    <li>Secretos De Los Pulpos</li>
                    <li>MH370: El Avión Que Desapareció</li>
                    <li>Accidente</li>
                    <li>Adolescencia</li>
                    <li>Ginny y Georgia</li>
                </ul>
            </TarjetaContenido>

        </div>
    );
}

export default Listas;