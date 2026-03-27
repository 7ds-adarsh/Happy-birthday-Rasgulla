'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface Balloon {
  id: number
  x: number
  y: number
  color: string
  size: number
  delay: number
  duration: number
}

export function FloatingBalloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([])

  useEffect(() => {
    const colors = ['🎈', '🎂', '🎉', '🎊', '🎁', '✨', '🌟', '💫']
    const newBalloons: Balloon[] = []
    
    for (let i = 0; i < 12; i++) {
      newBalloons.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 20 + Math.random() * 25,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 8,
      })
    }
    
    setBalloons(newBalloons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute opacity-80"
          style={{
            left: `${balloon.x}%`,
            top: `${balloon.y}%`,
            fontSize: `${balloon.size}px`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="glow-pink"
            animate={{
              filter: [
                'hue-rotate(0deg)',
                'hue-rotate(60deg)',
                'hue-rotate(120deg)',
                'hue-rotate(180deg)',
                'hue-rotate(240deg)',
                'hue-rotate(300deg)',
                'hue-rotate(360deg)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {balloon.color}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}