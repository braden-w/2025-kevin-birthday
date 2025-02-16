import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/quiz")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<motion.div
			key="quiz"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			className="space-y-8"
		>
			<Quiz onComplete={() => setCurrentSection("wishes")} />
			<div className="mt-12 flex justify-center">
				<Button variant="secondary" asChild>
					<Link to="/">👈 Back to Home</Link>
				</Button>
			</div>
		</motion.div>
	);
}
