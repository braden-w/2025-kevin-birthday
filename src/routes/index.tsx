import { InteractiveEffects } from "@/components/InteractiveEffects";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/components/Quiz";
import { MessageWall } from "@/components/MessageWall";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { PhotoGallery } from "@/components/PhotoGallery";

export const Route = createFileRoute("/")({
	component: Home,
});

export function Home() {
	useEffect(() => {
		// Add confetti effect on initial load
		import("canvas-confetti").then((confetti) => {
			confetti.default({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 },
			});
		});
	}, []);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key="home"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{/* Header Section */}
				<motion.header
					className="text-center space-y-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<motion.h1
						className="text-7xl md:text-8xl font-bold"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Happy 24th <span className="block mt-4">Birthday, Kevin! 🎂</span>
					</motion.h1>
					<motion.p
						className="text-3xl md:text-4xl italic"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						To the greatest unc that I know ❤️
					</motion.p>
				</motion.header>

				{/* Interactive Effects Section */}
				<section className="py-12">
					<InteractiveEffects />
				</section>

				{/* Life in Pictures Section */}
				<section className="py-12">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
						Unc Kevin's Life in Pictures 📸
					</h2>
					<PhotoGallery />
				</section>

				{/* Quiz Section */}
				<section className="py-12 max-w-3xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
						How well do you know Unc Kevin? 🤔
					</h2>
					<Quiz
						onComplete={() => {
							// Scroll to wishes section or handle completion
							document
								.getElementById("wishes-section")
								?.scrollIntoView({ behavior: "smooth" });
						}}
					/>
				</section>

				{/* Wishes Section */}
				<section id="wishes-section" className="py-12">
					<h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
						Leave a Birthday Wish for Unc Kevin! 💝
					</h2>
					<MessageWall />
				</section>
			</motion.div>
		</AnimatePresence>
	);
}
