import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"

export interface ItemProjetoProps {
	projeto: Projeto
}

export default function ItemProjeto({ projeto }: ItemProjetoProps) {
	return (
		<Link href={`/projeto/${projeto.id}`}>
			<div className="min-w-64 min-h-64 relative overflow-hidden rounded-r-2xl border border-zinc-800">
				<Image src={projeto.imagens[0]} alt={projeto.nome} fill objectFit="object-cover" />
			</div>
		</Link>
	)
}
