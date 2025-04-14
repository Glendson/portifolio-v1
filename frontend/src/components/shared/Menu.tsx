"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const route = usePathname()

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={route === "/"}>
				Inicio
			</MenuItem>
			<MenuItem href="/projeto/1" selecionado={route === "/projeto"}>
				Projetos
			</MenuItem>
			<MenuItem href="/" selecionado={false} novaAba={true}>
				Contato
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
	href: string
	children: React.ReactNode
	selecionado: boolean
	novaAba?: boolean
}) {
	return (
		<Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
			<span
				className={`flex items-center gap-2 text-sm border-red-600 ${
					props.selecionado ? "border-b-4 text-white" : "text-zinc-300"
				} hover:text-white transition-colors duration-300 ease-in-out`}
			>
				{props.children}
			</span>
		</Link>
	)
}
