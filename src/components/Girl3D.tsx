'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function Girl3D() {
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
    <div className="relative">
      {/* Main 3D Girl Figure */}
      <motion.div
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: mousePosition.y * 2,
          rotateY: mousePosition.x * 2,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
      >
        <motion.div
          className="relative z-10"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Head and Face */}
          <motion.div
            className="w-32 h-40 mx-auto mb-2 relative"
            style={{
              transform: 'translateZ(25px)',
            }}
            animate={{
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Hair Back Layer */}
            <motion.div
              className="absolute -top-8 -left-8 w-48 h-36"
              style={{
                background: 'linear-gradient(135deg, #8B4513 0%, #D2B48C 30%, #DEB887 70%, #F4A460 100%)',
                borderRadius: '50% 50% 40% 40%',
                transform: 'translateZ(-10px)',
                boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.1)',
              }}
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Face */}
            <motion.div
              className="w-28 h-36 mx-auto relative"
              style={{
                background: 'linear-gradient(135deg, #FDBCB4 0%, #F8BBD9 50%, #FDBCB4 100%)',
                borderRadius: '50% 50% 45% 45%',
                transform: 'translateZ(20px)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.3)',
              }}
            >
              {/* Forehead highlights */}
              <div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
                  borderRadius: '50%',
                }}
              />

              {/* Eyebrows */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <motion.div
                  className="w-4 h-1"
                  style={{
                    background: 'linear-gradient(45deg, #8B4513 0%, #A0522D 100%)',
                    borderRadius: '2px',
                    transform: 'rotate(-10deg)',
                  }}
                  animate={{
                    scaleX: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="w-4 h-1"
                  style={{
                    background: 'linear-gradient(45deg, #8B4513 0%, #A0522D 100%)',
                    borderRadius: '2px',
                    transform: 'rotate(10deg)',
                  }}
                  animate={{
                    scaleX: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              {/* Eyes */}
              <motion.div
                className="absolute top-12 left-1/2 transform -translate-x-1/2 flex space-x-4"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Left Eye */}
                <div className="relative">
                  <div 
                    className="w-5 h-3 bg-white rounded-full shadow-inner"
                    style={{
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                    }}
                  />
                  <motion.div 
                    className="absolute top-0.5 left-1 w-3 h-2 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #8B4513 0%, #654321 100%)',
                    }}
                    animate={{
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute top-0.5 left-2 w-1 h-1 bg-white rounded-full opacity-60" />
                  {/* Eyelashes */}
                  <div className="absolute -top-1 left-0 w-6 h-1 border-t-2 border-black opacity-40 rounded-full" />
                </div>

                {/* Right Eye */}
                <div className="relative">
                  <div 
                    className="w-5 h-3 bg-white rounded-full shadow-inner"
                    style={{
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                    }}
                  />
                  <motion.div 
                    className="absolute top-0.5 left-1 w-3 h-2 rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #8B4513 0%, #654321 100%)',
                    }}
                    animate={{
                      scale: [1, 0.9, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <div className="absolute top-0.5 left-2 w-1 h-1 bg-white rounded-full opacity-60" />
                  {/* Eyelashes */}
                  <div className="absolute -top-1 left-0 w-6 h-1 border-t-2 border-black opacity-40 rounded-full" />
                </div>
              </motion.div>

              {/* Nose */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div 
                  className="w-2 h-3 opacity-20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)',
                    borderRadius: '0 50% 50% 50%',
                  }}
                />
              </div>
              
              {/* Lips */}
              <motion.div
                className="absolute top-20 left-1/2 transform -translate-x-1/2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div 
                  className="w-6 h-2 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #FFB6C1 0%, #FF69B4 50%, #FFB6C1 100%)',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
                <div 
                  className="w-4 h-1 rounded-full mx-auto -mt-1 opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, #FF1493 0%, #DC143C 100%)',
                  }}
                />
              </motion.div>

              {/* Cheek blush */}
              <div className="absolute top-14 left-2 w-3 h-2 bg-pink-300 rounded-full opacity-30 blur-sm" />
              <div className="absolute top-14 right-2 w-3 h-2 bg-pink-300 rounded-full opacity-30 blur-sm" />
            </motion.div>

            {/* Hair Front Layers */}
            <motion.div
              className="absolute -top-6 -left-6 w-40 h-32"
              style={{
                background: 'linear-gradient(135deg, #CD853F 0%, #D2B48C 50%, #DEB887 100%)',
                borderRadius: '60% 40% 30% 70%',
                transform: 'translateZ(15px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
              animate={{
                rotate: [0, 2, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Hair Strands */}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${20 + i * 8}px`,
                  left: `${-4 + i * 6}px`,
                  width: '3px',
                  height: `${20 + i * 4}px`,
                  background: 'linear-gradient(180deg, #8B4513 0%, #D2B48C 100%)',
                  borderRadius: '50%',
                  transform: `translateZ(${10 + i}px) rotate(${-15 + i * 5}deg)`,
                }}
                animate={{
                  rotate: [-15 + i * 5, -10 + i * 5, -15 + i * 5],
                  scaleY: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Neck */}
          <motion.div
            className="w-8 h-6 mx-auto"
            style={{
              background: 'linear-gradient(135deg, #FDBCB4 0%, #F8BBD9 100%)',
              borderRadius: '40%',
              transform: 'translateZ(15px)',
            }}
            animate={{
              scaleY: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Elegant Dress */}
          <motion.div
            className="w-40 h-48 mx-auto relative mt-2"
            style={{
              background: 'linear-gradient(135deg, #E1BEE7 0%, #F3E5F5 30%, #E8EAF6 70%, #C8E6C9 100%)',
              borderRadius: '25px 25px 70px 70px',
              transform: 'translateZ(12px)',
              boxShadow: '0 8px 24px rgba(0,0,0,0.15), inset 0 4px 8px rgba(255,255,255,0.2)',
            }}
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Dress Neckline */}
            <div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
                borderRadius: '50% 50% 0 0',
              }}
            />

            {/* Dress Pattern - Floral */}
            <div className="absolute inset-6 flex flex-wrap justify-center gap-3">
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.8, 1.1, 0.8],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: i % 3 === 0 ? '#FFB6C1' : i % 3 === 1 ? '#DDA0DD' : '#98FB98',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                    }}
                  />
                  {/* Petal effects */}
                  <div className="absolute -top-1 -left-1 w-5 h-5 opacity-30">
                    <div className="w-1 h-3 bg-pink-400 rounded-full absolute top-0 left-2 transform -rotate-45" />
                    <div className="w-1 h-3 bg-pink-400 rounded-full absolute top-0 left-2 transform rotate-45" />
                    <div className="w-3 h-1 bg-pink-400 rounded-full absolute top-2 left-1 transform rotate-45" />
                    <div className="w-3 h-1 bg-pink-400 rounded-full absolute top-2 left-1 transform -rotate-45" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Arms */}
            <motion.div
              className="absolute -left-8 top-6 w-6 h-20 rounded-full"
              style={{ 
                background: 'linear-gradient(180deg, #FDBCB4 0%, #F8BBD9 100%)',
                transform: 'rotate(-25deg) translateZ(8px)',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
              }}
              animate={{
                rotate: [-30, -20, -30],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Hand */}
              <div 
                className="absolute -bottom-2 -left-1 w-4 h-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FDBCB4 0%, #F8BBD9 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
            </motion.div>

            <motion.div
              className="absolute -right-8 top-6 w-6 h-20 rounded-full"
              style={{ 
                background: 'linear-gradient(180deg, #FDBCB4 0%, #F8BBD9 100%)',
                transform: 'rotate(25deg) translateZ(8px)',
                boxShadow: '-2px 2px 8px rgba(0,0,0,0.1)',
              }}
              animate={{
                rotate: [30, 20, 30],
              }}
              transition={{
                duration: 5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Hand */}
              <div 
                className="absolute -bottom-2 -right-1 w-4 h-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #FDBCB4 0%, #F8BBD9 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              />
            </motion.div>

            {/* Dress Belt */}
            <div 
              className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-3"
              style={{
                background: 'linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                borderRadius: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.5)',
              }}
            />
          </motion.div>

          {/* Legs */}
          <div className="flex justify-center space-x-6 mt-1">
            <motion.div
              className="w-5 h-16 rounded-full"
              style={{ 
                background: 'linear-gradient(180deg, #FDBCB4 0%, #F8BBD9 100%)',
                transform: 'translateZ(8px)',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
              }}
              animate={{
                scaleY: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Shoe */}
              <div 
                className="absolute -bottom-1 -left-1 w-7 h-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}
              />
            </motion.div>

            <motion.div
              className="w-5 h-16 rounded-full"
              style={{ 
                background: 'linear-gradient(180deg, #FDBCB4 0%, #F8BBD9 100%)',
                transform: 'translateZ(8px)',
                boxShadow: '2px 2px 8px rgba(0,0,0,0.1)',
              }}
              animate={{
                scaleY: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                delay: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Shoe */}
              <div 
                className="absolute -bottom-1 -left-1 w-7 h-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating magical accessories */}
      <motion.div
        className="absolute -top-12 -right-12 text-3xl"
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        🎀
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -left-12 text-2xl"
        animate={{
          scale: [0.8, 1.3, 0.8],
          rotate: [0, 25, -25, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🌸
      </motion.div>

      <motion.div
        className="absolute top-1/3 -right-16 text-xl"
        animate={{
          x: [0, 15, -15, 0],
          opacity: [0.6, 1, 0.6],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute top-1/4 -left-14 text-lg"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 1, 0.4],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💫
      </motion.div>

      {/* Magical aura around the girl */}
      <motion.div
        className="absolute inset-0 -m-8 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(139,92,246,0.2) 50%, rgba(6,182,212,0.1) 100%)',
          filter: 'blur(20px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}