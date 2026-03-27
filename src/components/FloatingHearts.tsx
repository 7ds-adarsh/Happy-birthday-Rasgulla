'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface Heart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = []
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 15 + Math.random() * 10,
          size: 20 + Math.random() * 30,
        })
      }
      setHearts(newHearts)
    }

    generateHearts()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400 opacity-30"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: '100vh', rotate: 0 }}
          animate={{ 
            y: '-100vh', 
            rotate: 360,
            x: [0, 50, -50, 0]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  )
}