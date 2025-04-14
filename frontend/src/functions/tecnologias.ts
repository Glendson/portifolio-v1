import { Tecnologia } from "@core"
import { httpGet } from "./api"

export async function obterTecnologias() {
	const tecnologias: Tecnologia[] = await httpGet("/tecnologias")
	if (!tecnologias) {
		throw new Error("Não foi possível obter as tecnologias")
	}
	return {
		todas: tecnologias,
		get destaques() {
			return tecnologias.filter((tecnologia) => tecnologia.destaque)
		},
	}
}
