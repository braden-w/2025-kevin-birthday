export function FloatingOldMan({ delay = 0 }: { delay?: number }) {
	return (
		<>
			<div
				style={{ animationDelay: `${delay}s` }}
				className="oldman absolute text-7xl"
			>
				👴
			</div>
			<style>{`
				.oldman {
					animation: bounce 5s ease-in-out infinite;
				}
				@keyframes bounce {
					0% { transform: translate(0, 0); }
					50% { transform: translate(80vw, 80vh); }
					100% { transform: translate(0, 0); }
				}
			`}</style>
		</>
	);
}
