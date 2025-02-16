import { FloatingMug } from "@/components/FloatingMug";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<main className="min-h-screen bg-gradient-to-b from-purple-500 via-purple-400 to-pink-500 text-white overflow-x-hidden">
				<MusicPlayer />
				<Outlet />
			</main>
			<FloatingMug />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
