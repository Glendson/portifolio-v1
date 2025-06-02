import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex flex-1 gap-6 flex-col-reverse md:flex-row xl:flex-row items-center lg:flex-col-reverse md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src={"frontend/public/minha-foto.png"} alt="minha foto" fill />
			</div>
			<div className="flex flex-col gap-5 self-center py-6 items-center md:items-start xl:items-start lg:items-center">
				<div className="flex flex-col items-start md:items-start lg:items-center xl:items-start">
					<span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
						Glendson Garcete
					</span>
					<span>FullStack Developer</span>
				</div>
				<p className="text-sm text-center md:lext-left xl:text-left lg:text-center">
					Desenvolvedor FullStack apaixonado por tecnologia, com experiência em criação de
					aplicações web modernas e foco em soluções inovadoras. Sempre buscando aprender
					novas ferramentas e entregar projetos de alta qualidade.
				</p>
			</div>
		</div>
	)
}
