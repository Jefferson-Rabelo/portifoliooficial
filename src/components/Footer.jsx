export default function Footer() {
    return (
        <footer className="bg-[#2a124a] text-gray-400 text-center py-6 ">
            <p>© {new Date().getFullYear()} Jefferson Dev. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com ❤️ por Jefferson.</p>
        </footer>
    );
}