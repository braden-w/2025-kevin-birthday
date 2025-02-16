import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const photos = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Kevin's childhood" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Kevin's graduation" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Kevin being an 'unc'" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Kevin's recent adventure" },
]

export function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length)
  }

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Unc Kevin's Life in Pictures <ImageIcon className="inline-block ml-2" />
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={photos[currentIndex].src}
            alt={photos[currentIndex].alt}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <Button
          onClick={prevPhoto}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2"
          size="icon"
        >
          <ChevronLeft size={24} />
        </Button>
        <Button
          onClick={nextPhoto}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-purple-600 rounded-full p-2"
          size="icon"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
    </section>
  )
}

