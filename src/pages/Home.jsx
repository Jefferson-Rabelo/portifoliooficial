export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6"
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
                <span className="text-blue-400">Jefferson Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-center max-w-2xl mb-6">
                Desenvolvedor Front-end e criador de soluções web modernas e responsivas.
            </p>

            <a
                href="#projetos"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300"
            >
                Ver Projetos
            </a>
        </section>
    );
}