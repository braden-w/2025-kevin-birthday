import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
import { Pause } from "lucide-react";
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
		<div className="fixed top-4 right-4 z-50">
			<button
				onClick={togglePlay}
				className="bg-white text-purple-600 p-2 rounded-full shadow-lg"
				type="button"
			>
				{isPlaying ? <Pause size={24} /> : <Music size={24} />}
			</button>

			<div id="yt-player" className="hidden" />
		</div>
	);
}
