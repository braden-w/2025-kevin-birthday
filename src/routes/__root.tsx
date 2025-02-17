import { FloatingOldMan } from "@/components/FloatingOldMan";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<main className="pt-24 pb-24 min-h-screen bg-gradient-to-b from-purple-500 via-purple-400 to-pink-500 text-white">
				<MusicPlayer />
				<Outlet />
			</main>
			<FloatingOldMan />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
