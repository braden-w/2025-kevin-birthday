import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const questions = [
	{
		question: "What's Kevin's favorite 'unc' activity?",
		options: [
			"Telling dad jokes 😂",
			"Falling asleep in a rocking chair 💤",
			"Giving life advice 🧠",
			"All of the above ✅",
		],
		correctAnswers: [0, 1, 2, 3],
	},
	{
		question: "How old was Kevin when he first became an 'unc'?",
		options: ["18 🎂", "21 🍻", "23 🎓", "He was born an 'unc' 👶"],
		correctAnswers: [3],
	},
	{
		question: "What's Kevin's go-to 'unc' catchphrase?",
		options: [
			"Back in my day... 👴",
			"Kids these days... 🙄",
			"When I was your age... 🗓️",
			"Who touched the thermostat? 🌡️",
		],
		correctAnswers: [0, 1, 2],
	},
];

export function Quiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);

	const handleAnswer = (selectedAnswer: number) => {
		if (questions[currentQuestion].correctAnswers.includes(selectedAnswer)) {
			setScore(score + 1);
		}

		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResult(true);
		}
	};

	return (
		<>
			{!showResult ? (
				<div className="bg-white/90 backdrop-blur text-purple-800 p-8 rounded-lg shadow-lg space-y-6">
					<h3 className="text-2xl font-semibold">
						{questions[currentQuestion].question}
					</h3>
					<div className="space-y-4">
						{questions[currentQuestion].options.map((option, index) => (
							<motion.div
								key={option}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									onClick={() => handleAnswer(index)}
									className="w-full text-left py-4 px-6 h-auto bg-purple-100 hover:bg-purple-200 text-purple-800 text-lg"
									variant="ghost"
								>
									{option}
								</Button>
							</motion.div>
						))}
					</div>
				</div>
			) : (
				<motion.div
					className="bg-white/90 backdrop-blur text-purple-800 p-8 rounded-lg shadow-lg text-center space-y-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
				>
					<h3 className="text-3xl font-bold">Quiz Complete! 🎯</h3>
					<p className="text-2xl">
						Your score: {score} out of {questions.length}
					</p>
					<p className="text-xl">
						{score === questions.length
							? "Wow! You really know Unc Kevin! 🎉"
							: "Looks like you could use some more quality time with Unc Kevin! 😊"}
					</p>
				</motion.div>
			)}
		</>
	);
}
