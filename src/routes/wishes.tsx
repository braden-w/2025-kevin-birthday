import { MessageWall } from "@/components/MessageWall";
import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/wishes")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
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
					variant="secondary"
					className="text-lg py-4 px-6 shadow-md hover:shadow-lg transition-all"
					asChild
				>
					<Link to="/">👈 Back to Home</Link>
				</Button>
			</div>
		</motion.div>
	);
}
