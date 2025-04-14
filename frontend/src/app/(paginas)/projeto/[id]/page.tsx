import Cabecalho from "@/components/shared/Cabecalho"

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	return (
		<div className="bg-black">
			<Cabecalho />
		</div>
	)
}
