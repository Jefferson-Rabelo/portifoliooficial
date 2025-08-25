import { motion } from "framer-motion";
import perfil from "../assets/perfil.png";

export default function Sobre() {
    return (
        <section
            id="Sobre"
            className="bg-[#f4f2ee] text-gray-800 border-b-4 border-gray-500 py-28 px-6 flex flex-col items-center justify-center"
        >
            <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
                {/* Imagem do perfil */}
                <motion.img
                    src={perfil}
                    alt="foto de jefferson"
                    className="w-48 h-48 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duaration: 1 }}
                    viewport={{ once: true }} //anima apenas uma vez
                />

                {/* Texto de apresentação */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <h2 className="text-3xl font-bold mb-4 text-blue-500">Sobre mim</h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Olá! Me chamo <strong>Jefferson</strong>, tenho 27 anos e sou estudante de Análise e Desenvolvimento de Sistemas. Sou apaixonado por tecnologia e criação de soluções que realmente ajudam as pessoas.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Tenho experiência com <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> e <strong>Node.js</strong>. Estou sempre buscando melhorar minhas habilidades técnicas com projetos reais.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Meu objetivo é atuar como desenvolvedor web, seja para empresas ou projetos próprios. Gosto de resolver problemas, aprender coisas novas e construir aplicações úteis e bem feitas.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
