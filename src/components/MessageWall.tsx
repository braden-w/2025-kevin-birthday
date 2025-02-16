import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function MessageWall() {
	const [messages, setMessages] = useState([]);
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.trim() && message.trim()) {
			setMessages([
				...messages,
				{ name: name.trim(), message: message.trim() },
			]);
			setName("");
			setMessage("");
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="bg-white/90 backdrop-blur text-purple-800 p-8 rounded-lg shadow-lg space-y-4"
			>
				<div className="space-y-2">
					<label htmlFor="name" className="text-lg font-medium">
						Your Name
					</label>
					<Input
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="text-purple-800"
						placeholder="Enter your name..."
						required
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="message" className="text-lg font-medium">
						Your Message
					</label>
					<Textarea
						id="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className="text-purple-800"
						placeholder="Write your birthday wish..."
						required
						rows={4}
					/>
				</div>
				<Button
					type="submit"
					className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-800 text-lg py-6 h-auto"
				>
					✉️ Post Wish
				</Button>
			</form>
			<div className="space-y-4">
				<AnimatePresence>
					{messages.map((msg, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="bg-white/90 backdrop-blur text-purple-800 p-6 rounded-lg shadow-lg"
						>
							<p className="font-semibold mb-2">{msg.name}</p>
							<p>{msg.message}</p>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</>
	);
}
