import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

export function MessageWall() {
	return (
		<div className="max-w-3xl mx-auto px-4">
			<Card className="relative bg-white/95 backdrop-blur border-none shadow-xl overflow-hidden">
				<div className="absolute top-4 right-4 text-purple-200/20">
					<QuoteIcon className="h-24 w-24 rotate-180" />
				</div>
				<CardHeader className="pt-8 pb-2">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold shadow-md">
							B
						</div>
						<div className="space-y-1">
							<h3 className="font-semibold text-lg text-purple-800">Baden</h3>
							<p className="text-sm text-purple-600/70">
								With love & gratitude
							</p>
						</div>
					</div>
				</CardHeader>
				<CardContent className="pt-4 pb-8">
					<blockquote className="relative text-purple-800 text-lg leading-relaxed space-y-4">
						<p>
							Kev, it's been an absolute honor to witness your journey to
							unc-hood. We've been through so many experiences together, through
							thick and thin, and it's crazy to think about how much we've grown
							and changed since we first met 3 years ago.
						</p>
						<p>
							Your wisdom has always pushed us to dream bigger and think deeper,
							to forge a path ahead with purpose and an appreciation for the
							liberal arts. You've brought countless smiles to our faces and new
							thoughts to our minds.
						</p>
						<p>
							Thank you for being the incredible unc we cherish, and for
							inspiring us with your unique blend of heart and brilliance. We're
							incredibly grateful to have you in our lives, and we hope you have
							a wonderful 24th birthday! 🎉
						</p>
					</blockquote>
				</CardContent>
			</Card>
		</div>
	);
}
