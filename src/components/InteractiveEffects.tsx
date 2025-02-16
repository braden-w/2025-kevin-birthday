"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

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
		<section className="text-center space-y-16">
			<h2 className="text-5xl md:text-6xl font-bold">
				Celebrate with Unc Kevin! 🎉
			</h2>
			<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
				<Button
					onClick={triggerConfetti}
					className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 text-lg px-8 py-6 h-auto w-48"
				>
					✨ Throw Confetti!
				</Button>
				<Button
					onClick={() => setIsRocking(!isRocking)}
					className="bg-green-400 hover:bg-green-500 text-purple-800 text-lg px-8 py-6 h-auto w-48"
				>
					🪑 Rock the Chair!
				</Button>
			</div>
			<motion.div
				className="text-9xl"
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
				🪑
			</motion.div>
		</section>
	);
}
