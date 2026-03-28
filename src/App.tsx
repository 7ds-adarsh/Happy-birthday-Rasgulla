'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FloatingHearts } from './components/FloatingHearts'
import { FloatingBalloons } from './components/FloatingBalloons'
import { PageContent } from './components/PageContent'
import { Button } from './components/ui/button'
import { Volume2, VolumeX, Calendar } from 'lucide-react'
import { Girl3D } from './components/Girl3D'

export default function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const totalPages = 6

  // Check if pages should be unlocked (September 30th at 12:00 AM / midnight)
  useEffect(() => {
    const checkUnlockStatus = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      
      // September 30th at 12:00 AM (midnight) - month is 0-indexed so 8 = September
      const unlockDate = new Date(currentYear, 8, 30, 0, 0, 0, 0) // September 30th, 12:00:00.000 AM
      
      // For testing purposes, you can uncomment the line below to unlock all pages
      // setIsUnlocked(true)
      
      // Check if current time is on or after September 30th at 12:00 AM
      if (now >= unlockDate) {
        setIsUnlocked(true)
      } else {
        setIsUnlocked(false)
      }
    }

    checkUnlockStatus()
    // Check every minute to catch the exact unlock moment
    const interval = setInterval(checkUnlockStatus, 60000)
    return () => clearInterval(interval)
  }, [])

  const nextPage = () => {
    if (currentPage < totalPages) {
      if (currentPage === 1 || isUnlocked) {
        setCurrentPage(currentPage + 1)
      }
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (pageNum: number) => {
    if (pageNum === 1 || isUnlocked) {
      setCurrentPage(pageNum)
    }
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isMusicPlaying) {
      audio.pause()
      setIsMusicPlaying(false)
      return
    }

    audio
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => setIsMusicPlaying(false))
  }

  const isPageUnlocked = (pageNum: number) => {
    return pageNum === 1 || isUnlocked
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <audio ref={audioRef} src="/music/say.webm" loop preload="auto" />
      {/* Dreamy Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100" />
      
      {/* Animated Background Elements */}
      <FloatingHearts />
      <FloatingBalloons />
      <Girl3D />

      {/* Animated Gradient Overlay */}
      <motion.div
        className="fixed inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
        }}
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
            'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)',
            'radial-gradient(circle at 20% 20%, rgba(236, 72, 153, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with Music Toggle and Unlock Status */}
        <motion.header
          className="p-4 flex justify-between items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm text-purple-600">
              {isUnlocked ? 'All pages unlocked! 🎉' : 'Pages unlock Sep 30th at 12:00 AM'}
            </span>
          </div>
          
          <Button
            onClick={toggleMusic}
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-pink-200 text-pink-700 hover:bg-pink-100/50 glow-pink"
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className="w-4 h-4 mr-2" />
                Music On
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 mr-2" />
                Music Off
              </>
            )}
          </Button>
        </motion.header>

        {/* Page Content */}
        <AnimatePresence mode="wait">
          <PageContent 
            key={currentPage} 
            pageNumber={currentPage} 
            isUnlocked={isUnlocked}
          />
        </AnimatePresence>

        {/* Navigation */}
        <motion.footer
          className="p-8 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={prevPage}
            disabled={currentPage === 1}
            variant="outline"
            className="bg-white/20 backdrop-blur-sm border-purple-200 text-purple-700 hover:bg-purple-100/50 disabled:opacity-50 glow-purple"
          >
            ← Previous
          </Button>

          {/* Page Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNum = i + 1
              const unlocked = isPageUnlocked(pageNum)
              return (
                <motion.button
                  key={pageNum}
                  onClick={() => goToPage(pageNum)}
                  disabled={!unlocked}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentPage === pageNum
                      ? 'bg-pink-600 scale-125 glow-pink'
                      : unlocked
                      ? 'bg-purple-400 hover:bg-purple-500 glow-purple'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                  whileHover={unlocked ? { scale: 1.2 } : {}}
                  whileTap={unlocked ? { scale: 0.9 } : {}}
                />
              )
            })}
          </div>

          <Button
            onClick={nextPage}
            disabled={currentPage === totalPages || (currentPage > 1 && !isUnlocked)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white disabled:opacity-50 glow-pink"
          >
            {currentPage === totalPages ? (
              <>
                The End 💖
              </>
            ) : (
              <>
                Next →
              </>
            )}
          </Button>
        </motion.footer>
      </div>

      {/* Magical Sparkle Effects */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300 text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </div>
  )
}