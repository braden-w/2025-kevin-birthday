import { FloatingMug } from "@/components/FloatingMug";
import { Header } from "@/components/Header";
import { InteractiveEffects } from "@/components/InteractiveEffects";
import { MessageWall } from "@/components/MessageWall";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
	component: Home,
});

export function Home() {
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);
	const [currentSection, setCurrentSection] = useState("home");

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
					{currentSection === "home" && (
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
									onClick={() => setCurrentSection("quiz")}
									variant="secondary"
									className="text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
								>
									🎯 Take the Quiz!
								</Button>
								<Button
									onClick={() => setCurrentSection("wishes")}
									variant="primary"
									className="text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-all"
								>
									💝 Leave a Wish
								</Button>
							</div>
						</motion.div>
					)}
					{currentSection === "quiz" && (
						<motion.div
							key="quiz"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							className="space-y-8"
						>
							<Quiz onComplete={() => setCurrentSection("wishes")} />
							<div className="mt-12 flex justify-center">
								<Button
									onClick={() => setCurrentSection("home")}
									variant="secondary"
									className="text-lg py-4 px-6 shadow-md hover:shadow-lg transition-all"
								>
									👈 Back to Home
								</Button>
							</div>
						</motion.div>
					)}
					{currentSection === "wishes" && (
						<motion.div
							key="wishes"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							className="space-y-8"
						>
							<MessageWall />
							<div className="mt-12 flex justify-center">
								<Button
									onClick={() => setCurrentSection("home")}
									variant="secondary"
									className="text-lg py-4 px-6 shadow-md hover:shadow-lg transition-all"
								>
									👈 Back to Home
								</Button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<FloatingMug />
		</main>
	);
}
