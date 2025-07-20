import { Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import Bienvenida from './Bienvenida.jsx'
import Top from './Top.jsx'
import Rip from './Rip.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/bienvenida" element={<Bienvenida />} />
      <Route path="/top" element={<Top />} />
      <Route path="/rip" element={<Rip />} />
    </Routes>
  );
}

export default App;