import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"

export interface CarrosselImagensProps {
	imagens: string[]
}

export default function CarrosselImagens({ imagens }: CarrosselImagensProps) {
	return (
		<Carousel
			className="w-7/10 md:w-11/12 xl:w-full"
			opts={{
				loop: true,
			}}
		>
			<CarouselContent>
				{imagens.map((imagem, index) => (
					<CarouselItem key={index} className="relative h-96 w-full">
						<Image src={imagem} alt="" fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
