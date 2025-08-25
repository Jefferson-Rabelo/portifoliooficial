import { motion } from "framer-motion";
export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-[#2A124A] text-white px-6"
        >
            <motion.h1
                className=" text-[#cb05e7] text-4xl md:text-6xl font-bold mb-4 text-center "
                initial={{ opacity: 0, y: -50 }} //começa invisivel e mais acima
                animate={{ opacity: 1, y: 0 }} // aparece suavemente
                transition={{ duration: 1 }}
            >
                Olá eu sou <span className="=text-blue-400">Jefferson</span>
            </motion.h1>

            <motion.p
                className="text-xl md:text2xl text-center ,ax-w2xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Desenvolvedor Front-end e criador de soluções web modernas e responsivas.
            </motion.p>

            <motion.a
                href="#projetos"
                className="
                  bg-gradient-to-r from-[#7B2FF7] to-[#F107A3]
                  text-white font-bold
                  py-3 px-6   
                  rounded-full
                  transition-transform duration-200 ease-in-out   
                  hover:scale-105 hover:shadow-lg 
                "
                whileHover={{ scale: 1.1 }} // crese quando passa o mouse
                whileTap={{ scale: 0.95 }} // encolhe quando clica
            >
                Ver Projetos
            </motion.a>

        </section>
    );
}