import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Contato() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_kj6jfvc",   // substitua pelo seu Service ID
                "template_qqpnf0f",  // substitua pelo seu Template ID
                form.current,
                "GHyS2fI-agCPDpA68"    // substitua pela sua Public Key
            )
            .then(
                (result) => {
                    alert("Mensagem enviada com sucesso! 🚀");
                    console.log(result.text);
                },
                (error) => {
                    alert("Ocorreu um erro. Tente novamente!");
                    console.log(error.text);
                }
            );

        e.target.reset(); // limpa o formulário
    };
    return (
        <section
            id="contato"
            className="bg-gray-900 text-white py-20 px-6 flex flex-col items-center"
        >
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
                    Entre em Contato
                </h2>
                <p className="text-center text-gray-300 mb-12">
                    Tem interesse em trabalhar comigo ou quer conversar sobre um projeto?
                    Me envie uma mensagem!
                </p>
                {/* Formulario */}
                <form ref={form} onSubmit={sendEmail} className="space-y-6 max-w-xl mx-auto">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Seu nome"
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                    />
                    <input
                        type="email"
                        name="from_email"
                        placeholder="Seu email"
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                    />
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Sua mensagem"
                        required
                        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 py-3 px-6 rounded-lg font-semibold transition"
                    >
                        Enviar
                    </button>
                </form>

                {/* Links diretos */}
                <div className="flex justify-center gap-6 mt-10 text-3xl">
                    <a
                        href="https://github.com/seu-usuario"
                        target="_blank"
                        className="text-orange-500 hover:text-orange-600"

                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/seu-usuario"
                        target="_blank"
                        className="text-blue-600 hover:text-blue-700"

                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://wa.me/5599999999999"
                        target="_blank"
                        className="text-green-500 hover:text-green-600"

                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="text-pink-500 hover:text-pink-600"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </section>
    );
}