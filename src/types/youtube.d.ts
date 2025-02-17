interface YTPlayer {
	playVideo(): void;
	pauseVideo(): void;
	getPlayerState(): number;
}

interface YTEvent {
	target: YTPlayer;
}

interface YT {
	Player: {
		new (
			elementId: string,
			config: {
				height: string | number;
				width: string | number;
				videoId: string;
				events?: {
					onReady?: (event: YTEvent) => void;
					onStateChange?: (event: YTEvent) => void;
				};
			},
		): YTPlayer;
	};
	PlayerState: {
		PLAYING: number;
		PAUSED: number;
	};
}

interface Window {
	YT: YT;
	onYouTubeIframeAPIReady: () => void;
}
