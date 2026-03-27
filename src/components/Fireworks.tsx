'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface Firework {
  id: number
  x: number
  y: number
  color: string
  delay: number
}

export function Fireworks() {
  const [fireworks, setFireworks] = useState<Firework[]>([])

  useEffect(() => {
    const colors = ['#ec4899', '#8b5cf6', '#06b6d4', '#f59e0b', '#10b981', '#ef4444']
    const newFireworks: Firework[] = []
    
    for (let i = 0; i < 20; i++) {
      newFireworks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
      })
    }
    
    setFireworks(newFireworks)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {fireworks.map((firework) => (
        <motion.div
          key={firework.id}
          className="absolute"
          style={{
            left: `${firework.x}%`,
            top: `${firework.y}%`,
          }}
        >
          {/* Central burst */}
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: firework.color }}
            animate={{
              scale: [0, 3, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: firework.delay,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
          
          {/* Radiating particles */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = (i * 30) * (Math.PI / 180)
            const distance = 60
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ backgroundColor: firework.color }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: firework.delay + 0.2,
                  repeat: Infinity,
                  repeatDelay: 3.3,
                }}
              />
            )
          })}
        </motion.div>
      ))}
      
      {/* Sparkles */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-yellow-300 text-xs"
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
            duration: 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  )
}