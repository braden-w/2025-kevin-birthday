import { motion } from "framer-motion";

export function Header() {
	return (
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
	);
}
