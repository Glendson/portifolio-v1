import { Tecnologia } from "@core"
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal({ tecnologias }: PrincipalProps) {
	return (
		<div className="flex flex-col bg-[url('/principal.jpg')] h-[500px] bg-cover bg-center justify-center items-center text-white">
			<Cabecalho />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center gap-1">
					<h1 className="flex gap-3 items-center">
						<span className="w-2  h-2 rounded-full bg-red-500"></span>
						<span className="text-3xl sm:text-5xl font-bold text-center">
							Glendson Garcete
						</span>
						<span className="w-2  h-2 rounded-full bg-red-500"></span>
					</h1>
					<h2 className="text-zinc-500 text-center">Desenvolvedor FullStack</h2>
				</div>
				<Tecnologias lista={tecnologias} />
			</div>
		</div>
	)
}
