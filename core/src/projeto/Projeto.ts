import Tecnologia from "../tecnologia/Tecnologia"
import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"

export default interface Projeto {
	id: number
	nome: string
	tipo: Tipo
	nivel: Nivel
	imagens: string[]
	destaque: boolean
	descricao: string
	repositorio: string
	tecnologias: Tecnologia[]
}
