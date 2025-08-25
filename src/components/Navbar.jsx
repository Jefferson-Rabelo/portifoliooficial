import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold cursor-pointer">
                    Jefferson Dev
                </div>

                {/* Menu desktop */}
                <ul className=" text-xl hidden md:flex gap-8">
                    <li><a href="#home" className="hover:text-blue-400 transition">Início</a></li>
                    <li><a href="#sobre" className="hover:text-blue-400 transition">Sobre</a></li>
                    <li><a href="#projetos" className="hover:text-blue-400 transition">Projetos</a></li>
                    <li><a href="#contato" className="hover:text-blue-400 transition">Contato</a></li>
                </ul>

                {/* Botão menu mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menu mobile */}
            {menuOpen && (
                <ul className="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-4">
                    <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Início</a></li>
                    <li><a href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Sobre</a></li>
                    <li><a href="#projetos" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Projetos</a></li>
                    <li><a href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-blue-400 transition">Contato</a></li>
                </ul>
            )}
        </nav>
    );
}
