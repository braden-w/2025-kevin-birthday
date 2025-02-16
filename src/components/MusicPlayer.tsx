import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function MusicPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null)

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-white/90 backdrop-blur text-purple-800 rounded-full w-12 h-12 p-0"
      >
        {isPlaying ? "🔇" : "🎵"}
      </Button>
      <audio ref={audioRef} loop>
        <source src="/birthday-song.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

