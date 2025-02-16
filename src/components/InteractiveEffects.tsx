import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import oldManPng from "@/assets/v7pumq0kpxl3u1biusis.png";

export function InteractiveEffects() {
	const [isRocking, setIsRocking] = useState(false);

	const triggerConfetti = () => {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
		});
	};

	return (
		<section className="flex flex-col items-center space-y-16">
			<h2 className="text-5xl md:text-6xl font-bold">
				Celebrate with Unc Kevin! 🎉
			</h2>
			<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
				<Button onClick={triggerConfetti} size="xl">
					✨ Throw Confetti!
				</Button>
				<Button
					onClick={() => setIsRocking(!isRocking)}
					size="xl"
					variant="secondary"
				>
					🪑 Rock the Chair!
				</Button>
			</div>
			<motion.div
				className="size-56"
				animate={{
					rotate: isRocking ? [0, 15, -15, 15, -15, 0] : 0,
					scale: isRocking ? [1, 1.1, 1] : 1,
				}}
				transition={{
					duration: 2,
					repeat: isRocking ? Number.POSITIVE_INFINITY : 0,
					repeatType: "reverse",
				}}
			>
				<img
					src={oldManPng}
					alt="Old man rocking chair"
					className="w-full h-full object-cover"
				/>
			</motion.div>
		</section>
	);
}
