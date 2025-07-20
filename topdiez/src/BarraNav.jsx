import { Link } from 'react-router-dom';

function BarraNav(){
    return(
        <>
            {/* Barra de navegación fija */}
            <nav className="w-full bg-gradient-to-r from-[#fce8c3] to-[#fdf6e3] text-black py-4 px-8 fixed top-0 left-0 shadow-md z-20 flex justify-between items-center">
                <Link to="/bienvenida" className="text-2xl font-semibold hover:underline">Mi Blog</Link>
                <ul className="flex space-x-6 text-lg">
                    <li><Link to="/top" className="hover:underline">Top 10</Link></li>
                    <li><Link to="/acerca" className="hover:underline">Algo</Link></li>
                    <li><Link to="/contacto" className="hover:underline">Algo</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default BarraNav;