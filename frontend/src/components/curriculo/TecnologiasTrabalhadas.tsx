import { Tecnologia } from "@core"

export interface TecnologiasTrabalhadasProps {
	tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadasProps) {
	return props.tecnologias ? (
		<div className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border-zinc-800 rounded-2xl ">
			<div className="flex justify-center flex-wrap gap-x-3">
				{props.tecnologias.map((tecnologia) => (
					<div key={tecnologia.id} className="flex flex-col items-center m-4">
						<span className="text-red-500 font-bold">#</span>
						<span>{tecnologia.nome}</span>
					</div>
				))}
			</div>
		</div>
	) : (
		<div className="text-center text-gray-500">Nenhuma tecnologia encontrada</div>
	)
}
