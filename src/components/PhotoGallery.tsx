import abdielCapitalHat from "@/assets/slideshow/abdiel-capital-hat.webp";
import chinRestingOnFood from "@/assets/slideshow/chin-resting-on-food.webp";
import closedEyesInRoom from "@/assets/slideshow/closed-eyes-in-room.webp";
import gettingFood from "@/assets/slideshow/getting-food.webp";
import grabbingNapkin from "@/assets/slideshow/grabbing-napkin.webp";
import hitBySnow from "@/assets/slideshow/hit-by-snow.webp";
import playingPool from "@/assets/slideshow/playing-pool.webp";
import pointingAtFood from "@/assets/slideshow/pointing-at-food.webp";
import { Card } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const photos = [
	{ src: abdielCapitalHat, alt: "Abdiel with a capital hat" },
	{ src: chinRestingOnFood, alt: "Chin resting on food" },
	{ src: closedEyesInRoom, alt: "Closed eyes in a room" },
	{ src: gettingFood, alt: "Getting food" },
	{ src: grabbingNapkin, alt: "Grabbing a napkin" },
	{ src: hitBySnow, alt: "Hit by snow" },
	{ src: playingPool, alt: "Playing pool" },
	{ src: pointingAtFood, alt: "Pointing at food" },
];

export function PhotoGallery() {
	return (
		<Carousel
			opts={{
				align: "center",
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent className="-ml-2 md:-ml-4">
				{photos.map((photo, index) => (
					<CarouselItem
						key={index}
						className="flex items-center justify-center"
					>
						<img
							src={photo.src}
							alt={photo.alt}
							className="h-96 object-contain rounded-lg"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
