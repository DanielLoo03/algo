import BarraNav from './BarraNav.jsx'
import fondo from './assets/fondoBienvenida.jpg';

function Bienvenida() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat text-black overflow-hidden" style={{ backgroundImage: `url(${fondo})` }}>

      <BarraNav />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-24 text-center">
        <h1 className="text-6xl font-bold mb-5">Ola</h1>
        <p className="text-xl mb-6">Has ingresado al sistema de la fokin maquina de la programación</p>

        {/* GIF */}
        <img
          src="https://media.tenor.com/sbfBfp3FeY8AAAAi/oia-uia.gif"
          alt="aqui debe haber un gato que hace fiuuum fium"
          className="w-50 h-auto mt-10"
        />
      </div>
    </div>
  );
}

export default Bienvenida;