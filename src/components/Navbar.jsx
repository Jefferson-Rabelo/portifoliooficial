export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Jefferson Dev</h1>
            <ul className="flex gap-4">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="contato">Contato</a></li>
            </ul>

        </nav>
    );
}