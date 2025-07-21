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
            <li>Nuestra primera ida al cine y a la plaza, cuando fuimos con tus amigos cosplayers a ver la peli del Maincra sentados hasta el fondo con nuestras palomitas y ganotas de besarnos, y nuestra ida al Imaginate para ponerte una buena en el hockey 7-3 y 7-2 💅, me hiciste sentir muy querido cuando te despediste de mi con tu cabeza recostada y me dijiste que te había dado gusto verme, aunque son cosas pequeñas que a lo mejor ya no recuerdas, a mi se me quedan como bonitos recuerdos que tuvimos juntos </li>
            <li>La exposición de mate discretas donde expusimos el Camino Euleriano y el Camino Hamiltoneano, estuve cagado de nervios como siempre pero saber que teníamos que pasar los dos por lo mismo me hizo sentirme menos solo, y nos fue muy bn al final veees</li>
            <li>Cuando me acompañaste en las computadoras al lado de biblioteca haciendo mi programa de Conecta 4, tu estabas jugando Maincra con tu mouse bn concha y yo estresándome pq el programa no detectada todas las combinaciones para ganar, me acuerdo que cuando se nos hizo hora no me quería ir, podíamos estar hablando de cualquier pendejada y el tiempo se iba como si nada, eras (y eres) la única persona con la que me sentía cómodo</li>
            <li>El último día del semestre antepasado cuando nos quedamos hasta oscurecer en el pastito, a lo mejor tu no te acuerdas pero te quedaste conmigo todo el día hasta las 7 de la tarde, estuvimos del lado del puente acostados y ya estaba haciendo frío, al final nos despedimos con un abrazo y nos fuimos cada quien por su camino, me acuerdo que fue la vez que ya no sabíamos si ibamos a coincidir en los siguientes semestres, y estuvimos toda la noche mandándonos mensajes de que nos extrañábamos 😭</li>
            <li>Cuando jugamos maincra y te ponía cosas mientras estabas volteada, me cagué de risa mil veces viendo tus reacciones, te lo juro que parecía loquito del centro, espero que <Link to="/rip" className="font-semibold hover:underline" style={{ fontFamily: '"Dancing Script", cursive' }}>meper dones</Link> por eso y por la muerte de yasabesq... </li>
            <li>Te conté una vez, pero un día de clases en mates discretas te sentaste atrás de mi para picarme la espalda toda la clase, y en una de las veces que me voltee, te me quedaste viendo lo que se sintió como una eternidad y fue el día q dije <span className="text-red-600 font-bold">jolimadafakinchetmelavoyacomerabesos</span> <span className="text-xs">(no sabe besar)</span></li>
            <li>No me pude decidir por uno pero todos nuestros Ravesitos, cuento hasta las películas cursis que ponías y las veces que te dormiste, aunque neta top 5: Bob Esponja, Donde Están Las Rubias, Violet & Finch, Shrek y The Umbrella Academy (te tienes que acordar cual es mi escena favorita pq te lo voy a preguntar toda la vida)</li>
            <li>Nuestra segunda ida al cine ahora solos, estuvimos como cinco horas juntos pero se sintieron como cinco minutos, pido prdon por haberme puesto a sudar como cerdo y chingarme la mitad de tus gomitas, para la otra si como bn ok</li>
            <li>El día que estaba buscando un salón en el tercer piso, que resulta que no existía pero ahí en los pasillos andaba una perdida buscando el mismo número que yo, volteo para abajo y me doy cuenta que en realidad la clase era en el segundo piso, le aviso a la perdida pero como no me entiende hago que me siga y de ahí me toca vivir los años más felices de mi vida gracias a una casualidad que nunca me hubiera imaginado</li>
          </ol>
        </TarjetaContenido>
      </main>
    </div>
  );
}

export default Top;