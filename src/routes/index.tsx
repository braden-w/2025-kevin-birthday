import { FloatingMug } from "@/components/FloatingMug";
import { Header } from "@/components/Header";
import { InteractiveEffects } from "@/components/InteractiveEffects";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
	component: Home,
});

export function Home() {
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);

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
		<main className="min-h-screen bg-gradient-to-b from-purple-500 via-purple-400 to-pink-500 text-white overflow-x-hidden">
			<MusicPlayer
				isPlaying={isMusicPlaying}
				setIsPlaying={setIsMusicPlaying}
			/>
			<div className="max-w-4xl mx-auto px-6 pt-16 pb-24 space-y-16 sm:space-y-24">
				<AnimatePresence mode="wait">
					<motion.div
						key="home"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="space-y-16 sm:space-y-24"
					>
						<Header />
						<InteractiveEffects />
						<div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
							<Button
								variant="secondary"
								className="text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
								asChild
							>
								<Link to="/quiz">🎯 Take the Quiz!</Link>
							</Button>
							<Button
								variant="secondary"
								className="text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
								asChild
							>
								<Link to="/wishes">💝 Leave a Wish</Link>
							</Button>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
			<FloatingMug />
		</main>
	);
}
