import BarraNav from './BarraNav.jsx';
import TarjetaContenido from './TarjetaContenido.jsx';
import fondo from './assets/fondoGaleria.jpg';

function Galeria(){
    return(
        <div className="min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center text-black" style={{ backgroundImage: `url(${fondo})` }}>
            <BarraNav />
            <TarjetaContenido>
                
            </TarjetaContenido>
        </div>
    )
}

export default Galeria;