import { Projeto, Tipo } from "@core"
import { httpGet } from "./api"

export async function obterProjetos() {
	const projetos: Projeto[] = await httpGet("/projetos")

	return {
		todos: projetos,
		get mobile() {
			return this.todos.filter((projeto) => projeto.tipo === Tipo.MOBILE)
		},
		get web() {
			return this.todos.filter((projeto) => projeto.tipo === Tipo.WEB)
		},
		get jogos() {
			return this.todos.filter((projeto) => projeto.tipo === Tipo.JOGO)
		},
		get destaques() {
			return this.todos.filter((projeto) => projeto.destaque)
		},
	}
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
	return await httpGet(`/projetos/${id}`)
}
