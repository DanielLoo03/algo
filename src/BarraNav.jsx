import { Link } from 'react-router-dom';

function BarraNav(){
    return(
        <>
            <nav className="w-full bg-gradient-to-r from-[#fce8c3] to-[#fdf6e3] text-black py-4 px-8 fixed top-0 left-0 shadow-md z-20 flex justify-between items-center">
                
                <Link to="/bienvenida" className="flex items-center space-x-2 hover:underline">
                    <img src='/algo/logo.png' alt="(dormida)" className="w-8 h-auto" />
                    <span className="text-2xl font-semibold">Mi Blog</span>
                </Link>

                <ul className="flex space-x-6 text-lg">
                    <li><Link to="/top" className="hover:underline">Top 10</Link></li>
                    <li><Link to="/listas" className="hover:underline">Listas</Link></li>
                    <li><Link to="/galeria" className="hover:underline">Galería</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default BarraNav;