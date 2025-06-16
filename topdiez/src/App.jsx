import { Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'
import Top from './Top.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/top" element={<Top />} />
    </Routes>
  );
}

export default App;