import { motion } from "framer-motion";

export function FloatingOldMan() {
	return (
		<motion.div
			className="fixed bottom-8 right-8 z-40 text-7xl"
			animate={{
				y: [0, -15, 0],
				rotate: [0, 10, -10, 0],
			}}
			transition={{
				duration: 4,
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "reverse",
			}}
		>
			👴
		</motion.div>
	);
}
