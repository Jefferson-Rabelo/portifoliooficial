import portfolioImg from "../assets/projetos/portfolio.jpg";
import todoImg from "../assets/projetos/todo-app.png";
import laboratorio from "../assets/projetos/dentista.jpg";
const projetos = [
    {
        id: 1,
        titulo: "Site de Portfólio",
        descricao: "Meu próprio portfólio profissional desenvolvido com React e Tailwind CSS.",
        tecnologias: ["React", "Tailwind", "Vite"],
        imagem: portfolioImg,
        link: "https://seu-portfolio.vercel.app",
        github: "https://github.com/seu-usuario/portfolio",
    },
    {
        id: 2,
        titulo: "Academia",
        descricao: "Aplicação de lista de tarefas com React e LocalStorage.",
        tecnologias: ["React", "JavaScript", "CSS"],
        imagem: todoImg,
        link: "https://meu-todo.vercel.app",
        github: "https://github.com/seu-usuario/todo-app",
    },
    {
        id: 3,
        titulo: "Dentista",
        descricao: "Aplicação de lista de tarefas com React e LocalStorage.",
        tecnologias: ["React", "JavaScript", "CSS"],
        imagem: laboratorio,
        link: "https://meu-todo.vercel.app",
        github: "https://github.com/seu-usuario/todo-app",
    },
    // Adicione mais projetos aqui
];
import { motion } from "framer-motion";
export default function Projetos() {
    return (
        <section id="projetos" className="bg-gray-100 py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 text-[#2a124a]">Projetos</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projetos.map((projeto) => (
                        <motion.div
                            key={projeto.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Imagem do projeto */}
                            <img
                                src={projeto.imagem}
                                alt={projeto.titulo}
                                className="w-full h-40 object-cover"
                            />

                            {/* Conteúdo */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-blue-600 mb-2">{projeto.titulo}</h3>
                                <p className="text-gray-700 mb-4">{projeto.descricao}</p>

                                <div className="mb-4 flex flex-wrap gap-2">
                                    {projeto.tecnologias.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={projeto.link}
                                        target="_blank"
                                        className="text-blue-500 hover:underline font-medium"
                                    >
                                        Ver site
                                    </a>
                                    <a
                                        href={projeto.github}
                                        target="_blank"
                                        className="text-gray-600 hover:underline font-medium"
                                    >
                                        Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
