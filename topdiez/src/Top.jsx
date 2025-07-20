import BarraNav from './BarraNav.jsx';
import TarjetaContenido from './TarjetaContenido.jsx';
import { Link } from 'react-router-dom';
import fondo from './assets/fondoTop.png';

function Top() {
  return (
    <div className="min-h-screen bg-no-repeat bg-center bg-cover flex items-center justify-center text-black" style={{ cursor: "url('/girasol.cur'), auto", backgroundImage: `url(${fondo})` }}>

      <BarraNav />

      {/* Agregamos padding-top para que el contenido no quede bajo la barra fija */}
      <main className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <TarjetaContenido>
          <h1 className="text-3xl text-center font-bold mb-10">Top 10 momentos juntos</h1>
          <ol className="list-decimal list-inside text-gray-800 text-lg space-y-2">
            <li>El día de tu fiesta de cumpleaños, cuando llegué todo miado en frente de tu familia y me recibiste con un azulito sin alcohol, sentado como estatua jugando al Uno sin saber que decir y sintiendo las miradas de la otra mesa. No supe ni meter una fakin pelota al vaso en el beer pong pero estuviste al lado de mi todo el tiempo recostando tu cabeza en mi hombro, a veces me siento medio culpable pq es cierto que no pelaste mucho a los demás por andar conmigo, pero egoístamente amé cada segundo que te tuve al lado</li>
            <li>Nuestra primera ida al cine y a la plaza,  </li>
            <li>La exposición de mate discretas...</li>
            <li>Cuando me acompañaste en las computadoras al lado de biblioteca haciendo mi programa de Conecta 4...</li>
            <li>El último día del semestre antepasado cuando nos quedamos hasta oscurecer en el pastito...</li>
            <li>Cuando jugamos maincra y te ponía cosas mientras estabas volteada, me cagué de risa mil veces viendo tus reacciones, te lo juro que parecía loquito del centro, espero que <Link to="/rip" className="font-semibold hover:underline" style={{ fontFamily: '"Dancing Script", cursive' }}>meper dones</Link> por eso y por la muerte de yasabesq... </li>
            <li>Te conté una vez, pero un día de clases en mates discretas te sentaste atrás de mi para picarme la espalda toda la clase, y en una de las veces que me voltee, te me quedaste viendo lo que se sintió como una eternidad y fue el día q dije <span className="text-red-600 font-bold">jolimadafakinchetmelavoyacomerabesos</span> <span className="text-xs">(no sabe besar)</span></li>
            <li>Octavo lugar</li>
            <li>Nuestra segunda ida al cine ahora solos, estuvimos como cinco horas juntos pero se sintieron como cinco minutos </li>
            <li>El día que estaba buscando un salón en el tercer piso...</li>
          </ol>
        </TarjetaContenido>
      </main>
    </div>
  );
}

export default Top;