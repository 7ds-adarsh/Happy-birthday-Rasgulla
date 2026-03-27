'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function HeartAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main 3D Heart */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: mousePosition.y * 10,
          rotateY: mousePosition.x * 10,
          scale: [1, 1.1, 1],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateX: { duration: 0.1 },
          rotateY: { duration: 0.1 },
        }}
      >
        <motion.div
          className="text-pink-500 text-8xl md:text-9xl glow-pink"
          animate={{
            filter: [
              'hue-rotate(0deg) brightness(1)',
              'hue-rotate(30deg) brightness(1.2)',
              'hue-rotate(0deg) brightness(1)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          💖
        </motion.div>
      </motion.div>

      {/* Orbiting Hearts */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45) * (Math.PI / 180)
        const radius = 200
        return (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 text-pink-400 text-2xl"
            style={{
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: 360,
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              x: { duration: 0 },
              y: { duration: 0 },
            }}
          >
            <motion.span
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                delay: i * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💝
            </motion.span>
          </motion.div>
        )
      })}

      {/* Floating Heart Particles */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute text-pink-300 text-sm opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, -10, 0],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  )
}