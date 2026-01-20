import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'

export default function VideoCard({ title, url, thumbnail }) {
  const [isLoaded, setIsLoaded] = useState(false)

  // Extract video ID from URL (YouTube or Vimeo)
  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.includes('youtu.be') 
        ? url.split('/').pop()
        : new URL(url).searchParams.get('v')
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (url.includes('vimeo.com')) {
      const videoId = url.split('/').pop()
      return `https://player.vimeo.com/video/${videoId}`
    }
    return url
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-neutral-900"
    >
      {!isLoaded && (
        <div 
          className="relative aspect-video cursor-pointer"
          onClick={() => setIsLoaded(true)}
        >
          <img 
            src={thumbnail || `https://img.youtube.com/vi/${getEmbedUrl(url).split('/').pop()}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
            <div className="rounded-full bg-white/20 backdrop-blur p-4 group-hover:scale-110 transition-transform">
              <Play className="size-8 text-white" fill="white" />
            </div>
          </div>
        </div>
      )}
      
      {isLoaded && (
        <div className="aspect-video">
          <iframe
            src={getEmbedUrl(url)}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      
      <div className="p-4">
        <h3 className="font-medium text-white">{title}</h3>
      </div>
    </motion.div>
  )
}
