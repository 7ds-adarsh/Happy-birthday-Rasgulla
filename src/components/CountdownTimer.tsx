'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isTargetReached, setIsTargetReached] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()

      // Target date: September 19th at 12:00 AM (midnight)
      let targetDate = new Date(currentYear, 2, 30, 0, 0, 0, 0) // March 30th at 12:00 AM (midnight)

      // If the target date has passed this year, set it for next year
      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 8, 19, 0, 0, 0)
      }

      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
        setIsTargetReached(false)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        setIsTargetReached(true)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isTargetReached) {
    return (
      <motion.div
        className="text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <h2 className="text-3xl text-pink-600 mb-4 italic font-bold">🎉 IT'S YOUR BIRTHDAY! 🎉</h2>
        <p className="text-pink-500 italic font-bold">Hope you have the most amazing day!</p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <h3 className="text-xl text-pink-600 mb-6 italic font-bold">Countdown to Sep 19th at 12:00 AM</h3>
      <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-pink-200 glow-pink"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-2xl text-pink-700 mb-1 italic font-bold"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.value.toString().padStart(2, '0')}
            </motion.div>
            <div className="text-sm text-pink-600 italic font-bold">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}