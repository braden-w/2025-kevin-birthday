import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import abdielCapitalHat from "@/assets/slideshow/abdiel-capital-hat.webp";
import chinRestingOnFood from "@/assets/slideshow/chin-resting-on-food.webp";
import closedEyesInRoom from "@/assets/slideshow/closed-eyes-in-room.webp";
import gettingFood from "@/assets/slideshow/getting-food.webp";
import grabbingNapkin from "@/assets/slideshow/grabbing-napkin.webp";
import hitBySnow from "@/assets/slideshow/hit-by-snow.webp";
import playingPool from "@/assets/slideshow/playing-pool.webp";
import pointingAtFood from "@/assets/slideshow/pointing-at-food.webp";

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
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextPhoto = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
	};

	const prevPhoto = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + photos.length) % photos.length,
		);
	};

	return (
		<div className="relative max-w-2xl mx-auto">
			<AnimatePresence mode="wait">
				<motion.img
					key={currentIndex}
					src={photos[currentIndex].src}
					alt={photos[currentIndex].alt}
					className="w-full h-96 object-cover rounded-lg shadow-lg"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				/>
			</AnimatePresence>
			<Button
				onClick={prevPhoto}
				className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2"
				size="icon"
			>
				<ChevronLeft size={24} />
			</Button>
			<Button
				onClick={nextPhoto}
				className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2"
				size="icon"
			>
				<ChevronRight size={24} />
			</Button>
		</div>
	);
}
