import { Link } from 'react-router-dom';
import BarraNav from './BarraNav.jsx';
import TarjetaContenido from './TarjetaContenido.jsx';

function Top() {
  return (
    <div className="relative min-h-screen bg-white text-black">
      {/* Fondo degradado que cubre todo el contenedor padre */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-100 to-white z-0 pointer-events-none" />

      <BarraNav />

      {/* Agregamos padding-top para que el contenido no quede bajo la barra fija */}
      <main className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <TarjetaContenido>
          <h1 className="text-3xl text-center font-bold mb-8">Top 10 momentos</h1>
          <ol className="list-decimal list-inside text-gray-800 text-lg space-y-2">
            <li>Primer lugar: El gato programador</li>
            <li>Segundo lugar: La IA que no duerme</li>
            <li>Tercer lugar: El teclado mecánico legendario</li>
            <li>Cuarto lugar: El IDE oscuro</li>
            <li>Quinto lugar: El bug inmortal</li>
            <li>Sexto lugar: El compilador sabio</li>
            <li>Séptimo lugar: El script de los mil usos</li>
            <li>Octavo lugar: La función flecha veloz</li>
            <li>Noveno lugar: La promesa incumplida</li>
            <li>Décimo lugar: El for infinito</li>
          </ol>
        </TarjetaContenido>
      </main>
    </div>
  );
}

export default Top;