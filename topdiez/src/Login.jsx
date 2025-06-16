import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [clave, setClave] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("eyeyey q andas haciendo");
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (clave === '316') {
        navigate('/top'); // Redirige si coincide
      } else {
        setError(true);
        setTimeout(() => setError(false), 500); // Quita el efecto después de 0.5s
      }
    }
  };

  return (
    <>
      <h1 className="text-5xl text-center font-mono font-bold mt-50">
        Ingresa la clave: 
      </h1>
      <input
        type="password"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`border rounded mt-10 px-3 py-2 w-120 block mx-auto transition duration-500 ${
          error ? 'bg-red-500 animate-shake' : ''
        }`}
      />
    </>
  )
}

export default Login;