import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"

export function Footer() {
    return (
            <footer className="w-full h-16 bg-gray-200 flex justify-between items-center px-20">
                <span>&copy; Casa das Fechaduras - 2023</span>
                <div>
                    <small className="flex gap-2">Desenvolvido por
                        <Link href="https://www.linkedin.com/in/pedro-henrique-de-mattos-barbosa-b14084205/" target="_blank" className="flex items-center gap-1">
                            <FaExternalLinkAlt />
                            Pedro Barbosa
                        </Link>
                    </small>
                </div>
            </footer>
    )
}