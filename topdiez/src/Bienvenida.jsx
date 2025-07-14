import BarraNav from './BarraNav.jsx'

function Bienvenida() {
  return (
    <div className="relative h-screen bg-white text-black overflow-hidden">
      {/* Fondo con gradiente azul desde abajo */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-100 to-white z-0 pointer-events-none" />

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