import { Header } from "@/components/Header";
import { InteractiveEffects } from "@/components/InteractiveEffects";
import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

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
				className="space-y-16 sm:space-y-24"
			>
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
	);
}
