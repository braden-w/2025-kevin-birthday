import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function MusicPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [player, setPlayer] = useState<YTPlayer | null>(null);
	const [isPlayerReady, setIsPlayerReady] = useState(false);

	useEffect(() => {
		// Load YouTube API script
		const tag = document.createElement("script");
		tag.src = "https://www.youtube.com/iframe_api";
		const firstScriptTag = document.getElementsByTagName("script")[0];
		firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

		// Initialize player when API is ready
		window.onYouTubeIframeAPIReady = () => {
			const newPlayer = new window.YT.Player("yt-player", {
				height: "0",
				width: "0",
				videoId: "AcQjM7gV6mI",
				events: {
					onReady: (event) => {
						const ytPlayer = event.target;
						setPlayer(ytPlayer);
						setIsPlayerReady(true);
					},
				},
			});
		};

		return () => {
			if (player) {
				player.pauseVideo();
			}
		};
	}, [player]);

	// Handle autoplay attempt after first user interaction
	useEffect(() => {
		const handleFirstInteraction = () => {
			if (isPlayerReady && player && !isPlaying) {
				player.playVideo();
				setIsPlaying(true);
				// Remove listeners after first interaction
				document.removeEventListener("click", handleFirstInteraction);
				document.removeEventListener("touchstart", handleFirstInteraction);
			}
		};

		document.addEventListener("click", handleFirstInteraction);
		document.addEventListener("touchstart", handleFirstInteraction);

		return () => {
			document.removeEventListener("click", handleFirstInteraction);
			document.removeEventListener("touchstart", handleFirstInteraction);
		};
	}, [isPlayerReady, player, isPlaying]);

	const togglePlay = () => {
		if (!player) return;

		if (isPlaying) {
			player.pauseVideo();
		} else {
			player.playVideo();
		}
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="fixed bottom-4 left-4 z-50">
			<Button
				onClick={togglePlay}
				aria-label={isPlaying ? "Pause music" : "Play music"}
			>
				{isPlaying ? "🔇" : "🎵"}
			</Button>
			<div id="yt-player" className="hidden" />
		</div>
	);
}
