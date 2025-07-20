import { useRef, useState, useEffect } from 'react';
import BarraNav from './BarraNav.jsx';
import pericazo from './assets/pericazo.png';
import qepd from './assets/qepd.gif';
import lapida from './assets/lapida.gif';
import superstar from './assets/superstar.gif';
import gatobanana from './assets/gatobanana.jpg';
import tonaya from './assets/tonaya.gif';
import luto from './assets/luto.jpg';
import poutriste from './assets/poutriste.gif';
import rosa from './assets/rosa.gif';
import velas from './assets/velas.gif';
import rolonon from './assets/Juan Gabriel - Amor Eterno.mp3';

function Rip() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay bloqueado
      });
    }
  }, [started]);

  const handleStart = () => {
    setStarted(true);
  };

  if (!started) {
    return (
      <div
        className="flex items-center justify-center min-h-screen bg-black text-white cursor-pointer"
        onClick={handleStart}
      >
        <h2 className="text-3xl font-semibold underline">Clic aqui</h2>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex p-4">

      <audio ref={audioRef} src={rolonon} loop />

      {/* Imagen de velas en esquina inferior izquierda */}
      <img
        src={velas}
        alt="velas"
        className="absolute bottom-0 left-0 m-4 w-64 h-auto"
      />

      {/* Texto a la izquierda */}
      <div className="flex flex-col justify-center max-w-[960px] mr-8">
        <h1 className="text-[36px] font-light text-left">
          Descansa en paz, Pajarraco Ultra Pro Max 360
        </h1>
      </div>

      {/* Imágenes a la derecha */}
      <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 gap-0 place-items-center">
        <img src={qepd} alt="qepd" className="w-36 h-auto block" />
        <img src={superstar} alt="superstar" className="w-36 h-auto block" />
        <img src={luto} alt="luto" className="w-36 h-auto block" />
        <img src={poutriste} alt="pou triste" className="w-36 h-auto block" />
        <img src={pericazo} alt="pericazo" className="w-48 h-auto block" />
        <img src={gatobanana} alt="gato banana" className="w-36 h-auto block" />
        <img src={tonaya} alt="tonaya" className="w-40 h-auto block" />
        <img src={lapida} alt="lapida" className="w-36 h-auto block" />
        <img src={rosa} alt="rosa" className="w-36 h-auto block" />
      </div>
    </div>
  );
}

export default Rip;