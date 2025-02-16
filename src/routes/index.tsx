import { FloatingMug } from "@/components/FloatingMug"
import { Header } from "@/components/Header"
import { InteractiveEffects } from "@/components/InteractiveEffects"
import { MessageWall } from "@/components/MessageWall"
import { MusicPlayer } from "@/components/MusicPlayer"
import { Quiz } from "@/components/Quiz"
import { Button } from "@/components/ui/button"
import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"


export const Route = createFileRoute('/')({
  component: Home,
})

export function Home() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    // Add confetti effect on initial load
    import("canvas-confetti").then((confetti) => {
      confetti.default({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    })
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 text-white overflow-x-hidden">
      <MusicPlayer isPlaying={isMusicPlaying} setIsPlaying={setIsMusicPlaying} />
      <div className="max-w-3xl mx-auto px-4 pt-24 pb-12 space-y-32">
        <AnimatePresence mode="wait">
          {currentSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-32"
            >
              <Header />
              <InteractiveEffects />
              <div className="flex justify-center gap-4">
                <Button
                  onClick={() => setCurrentSection("quiz")}
                  className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 text-lg px-8 py-6 h-auto"
                >
                  🎯 Take the Quiz!
                </Button>
                <Button
                  onClick={() => setCurrentSection("wishes")}
                  className="bg-green-400 hover:bg-green-500 text-purple-800 text-lg px-8 py-6 h-auto"
                >
                  💝 Leave a Wish
                </Button>
              </div>
            </motion.div>
          )}
          {currentSection === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <Quiz onComplete={() => setCurrentSection("wishes")} />
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setCurrentSection("home")}
                  className="bg-white/20 hover:bg-white/30 text-white text-lg"
                >
                  👈 Back to Home
                </Button>
              </div>
            </motion.div>
          )}
          {currentSection === "wishes" && (
            <motion.div
              key="wishes"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <MessageWall />
              <div className="mt-8 flex justify-center">
                <Button
                  onClick={() => setCurrentSection("home")}
                  className="bg-white/20 hover:bg-white/30 text-white text-lg"
                >
                  👈 Back to Home
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <FloatingMug />
    </main>
  )
}

