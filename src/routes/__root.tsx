import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { MusicPlayer } from "@/components/MusicPlayer";

const emojis = ["👴", "👴", "👴", "👴", "👵", "🧓", "🎅"];

type EmojiProps = {
	emoji: string;
	x: number;
	y: number;
};

function BouncingEmoji({ emoji, x, y }: EmojiProps) {
	const randomDuration = Math.random() * 2 + 1; // Between 1 and 3 seconds
	return (
		<motion.div
			className="absolute text-4xl"
			initial={{ x, y }}
			animate={{
				y: [y, y - 20, y],
			}}
			transition={{
				y: {
					duration: randomDuration,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				},
			}}
		>
			{emoji}
		</motion.div>
	);
}

function BouncingEmojisBackground() {
	const [emojiPositions, setEmojiPositions] = useState<EmojiProps[]>([]);

	useEffect(() => {
		const generateEmojiPositions = () => {
			const positions: EmojiProps[] = [];
			for (let i = 0; i < 20; i++) {
				positions.push({
					emoji: emojis[Math.floor(Math.random() * emojis.length)],
					x: Math.random() * window.innerWidth,
					y: Math.random() * window.innerHeight,
				});
			}
			setEmojiPositions(positions);
		};

		generateEmojiPositions();
		window.addEventListener("resize", generateEmojiPositions);
		return () => window.removeEventListener("resize", generateEmojiPositions);
	}, []);

	return (
		<div className="fixed inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden pointer-events-none">
			{emojiPositions.map((props) => (
				<BouncingEmoji
					key={`${props.emoji}-${props.x}-${props.y}`}
					{...props}
				/>
			))}
		</div>
	);
}

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div className="relative">
			<BouncingEmojisBackground />
			<main className="pt-24 pb-24 min-h-screen relative z-10 text-white">
				<div className="flex items-center justify-center mb-8">
					<h1 className="text-4xl font-bold text-center">
						Bouncing Old Man Emojis
					</h1>
				</div>
				<MusicPlayer />
				<Outlet />
			</main>
		</div>
	);
}
