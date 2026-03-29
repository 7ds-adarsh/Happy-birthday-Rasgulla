'use client'

import { motion } from 'motion/react'
import { HeartAnimation } from './HeartAnimation'
import { CountdownTimer } from './CountdownTimer'
import { Fireworks } from './Fireworks'
import { Lock } from 'lucide-react'

interface PageContentProps {
  pageNumber: number
  isUnlocked: boolean
}

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
}

export function PageContent({ pageNumber, isUnlocked }: PageContentProps) {
  if (!isUnlocked && pageNumber > 1) {
    return (
      <motion.div
        className="flex-1 flex items-center justify-center px-4 py-12"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.6 }}
      >
        <div className="text-center space-y-6">
          <motion.div
            className="glow-purple"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Lock className="w-16 h-16 mx-auto text-purple-500" />
          </motion.div>
          <h2 className="text-3xl text-purple-600 text-glow-purple italic font-bold">
            This page unlocks on March 30th at 12:00 AM
          </h2>
          <p className="text-xl text-purple-500 max-w-md mx-auto italic font-bold">
            Something magical is waiting for you, Rasgulla! 💫
          </p>
        </div>
      </motion.div>
    )
  }

  const renderPageContent = () => {
    switch (pageNumber) {
      case 1:
        return (
          <motion.div
            className="text-center space-y-8 relative z-30"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            {/* Content above heart */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
            >
              <h1 className="text-4xl md:text-6xl text-pink-600 text-glow-pink mb-6 italic font-bold">
                Happy Birthday Poorva
              </h1>
            </motion.div>

            {/* Heart Animation */}
            <HeartAnimation />

            {/* Content below heart */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.p
                className="text-xl md:text-2xl text-purple-600 max-w-2xl mx-auto leading-relaxed text-glow-purple italic font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                My Day is more beautiful with you in it everyday! 🌟
              </motion.p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 200, damping: 20 }}
            >
              <CountdownTimer />
            </motion.div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            className="text-center space-y-8"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex justify-center space-x-4 text-6xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {['🎉', '💖', '🌟', '🎁'].map((emoji, index) => (
                <motion.span
                  key={index}
                  className="glow-pink"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
            <h2 className="text-3xl md:text-5xl text-pink-600 text-glow-pink mb-8 italic font-bold">
              First of all, I am Sorry <span className="text-pink-600 text-glow-pink">Madam Ji</span>
            </h2>
            <motion.p
              className="text-lg md:text-xl text-purple-600 max-w-4xl mx-auto leading-relaxed text-glow-purple italic font-bold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <em><strong>"I did not want to ghost you, i just didn't know my absence would hurt someone so much. i am really grateful that i have someone who cares about me. but i promise i would never do such a thing again. you're special to me and so i made a website for you. i thought you would like it so. again i am sorry <span className="text-pink-600 text-glow-pink">Madam Ji</span></strong></em>
            </motion.p>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            className="text-center space-y-8"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex justify-center space-x-4 text-6xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {['✨', '🌸', '🦋', '💫'].map((emoji, index) => (
                <motion.span
                  key={index}
                  className="glow-gold"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 4,
                    delay: index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
            <h2 className="text-3xl md:text-5xl text-yellow-600 text-glow-gold mb-8 italic font-bold">
              Endless Happiness & Memories
            </h2>
            <motion.p
              className="text-lg md:text-xl text-pink-600 max-w-4xl mx-auto leading-relaxed text-glow-pink italic font-bold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <em><strong>"Today is your day and i want you to be happy and to be honest i wanna see you happy if i can. and yeah you asked me for that gift on your birthday. i remember but maybe i wont be able to buy that now but if you can wait a bit i will bring that to you soon i promise."</strong></em>
            </motion.p>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            className="text-center space-y-8"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex justify-center space-x-4 text-6xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {['💖', '🌹', '💕', '💝'].map((emoji, index) => (
                <motion.span
                  key={index}
                  className="glow-pink"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 15, -15, 0],
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    delay: index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
            <h2 className="text-3xl md:text-5xl text-pink-600 text-glow-pink mb-8 italic font-bold">
              A Little Note for You
            </h2>
            <motion.p
              className="text-lg md:text-xl text-purple-600 max-w-4xl mx-auto leading-relaxed text-glow-purple italic font-bold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <em><strong>"Tum meri life mein kab itni important ban gayi, mujhe khud pata hi nahi chala. Bas itna pata hai ki mujhe tumse baat karna sach mein achha lagta hai. Main chahta hoon ki tumhara birthday shanti, khushiyon aur un sab cheezon se bhara ho jo tumhe special feel karaye."</strong></em>
            </motion.p>
          </motion.div>
        )

      case 5:
        return (
          <motion.div
            className="text-center space-y-8"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex justify-center space-x-4 text-6xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {['🤲', '🌟', '🌈', '💎'].map((emoji, index) => (
                <motion.span
                  key={index}
                  className="glow-blue"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.7, 1, 0.7],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    delay: index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>
            <h2 className="text-3xl md:text-5xl text-blue-600 text-glow-blue mb-8 italic font-bold">
              You are Truly Special to Me
            </h2>
            <motion.p
              className="text-lg md:text-xl text-yellow-600 max-w-4xl mx-auto leading-relaxed text-glow-gold italic font-bold"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.3 }}
            >
              <em><strong>"You are the first women to sympathize with me. You are the first person to understand me. You are the first person to make me feel special. I Thank you for everything <span className="text-pink-600 text-glow-pink">MADAM JI</span>."</strong></em>
            </motion.p>
          </motion.div>
        )

      case 6:
        return (
          <motion.div
            className="text-center space-y-8 relative"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <Fireworks />
            <motion.div
              className="relative z-30"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
            >
              <motion.div
                className="flex justify-center space-x-4 text-6xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {['🎆', '💫', '🌟', '💖'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    className="glow-pink"
                    animate={{
                      y: [0, -25, 0],
                      rotate: [0, 20, -20, 0],
                      scale: [0.9, 1.3, 0.9],
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl text-pink-600 text-glow-pink mb-6 md:mb-8 italic font-bold px-2">
                Madam Ji&apos;s Specials!
              </h2>

              {(() => {
                const specialsLayout = [
                  { top: '3%', left: '10%', rotate: '-8deg' },
                  { top: '20%', left: '45%', rotate: '12deg' },
                  { top: '55%', left: '25%', rotate: '7deg' },
                  { top: '38%', left: '70%', rotate: '-10deg' },
                ] as const

                const renderSpecialsInner = () => (
                  <motion.div
                    className="text-center text-xs sm:text-sm md:text-base text-gray-100 font-bold italic p-2 leading-snug"
                    animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    photo khud laga lena
                  </motion.div>
                )

                return (
                  <>
                    {/* Mobile / small screens: readable grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg mx-auto mb-8 px-1 sm:px-2 md:hidden">
                      {specialsLayout.map((_, index) => (
                        <div
                          key={`special-mobile-${index}`}
                          className={`flex min-h-[108px] sm:min-h-[120px] items-center justify-center rounded-xl border border-gray-700 bg-gray-900/85 p-2 shadow-2xl backdrop-blur-md ${
                            index % 2 === 0 ? '-rotate-1' : 'rotate-1'
                          }`}
                        >
                          {renderSpecialsInner()}
                        </div>
                      ))}
                    </div>

                    {/* md+: scattered collage */}
                    <div className="relative mx-auto mb-8 hidden h-[22rem] w-full max-w-5xl md:block lg:h-96">
                      {specialsLayout.map((card, index) => (
                        <div
                          key={`special-desktop-${index}`}
                          className="absolute flex h-[120px] w-[200px] items-center justify-center rounded-xl border border-gray-700 bg-gray-900/85 p-2 shadow-2xl backdrop-blur-md lg:h-[140px] lg:w-[240px]"
                          style={{
                            top: card.top,
                            left: card.left,
                            transform: `rotate(${card.rotate})`,
                          }}
                        >
                          {renderSpecialsInner()}
                        </div>
                      ))}
                    </div>
                  </>
                )
              })()}

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-lg md:text-xl text-purple-600 max-w-4xl mx-auto leading-relaxed text-glow-purple italic font-bold">
                  <em><strong>"Happy birthday to the perfect person I know. With you, I feel loved and carefree. You mean the world to me. Happy birthday sweetheart!"</strong></em>
                </p>

                <motion.div
                  className="mt-8 pt-6 border-t border-pink-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-xl md:text-2xl text-pink-600 max-w-4xl mx-auto leading-relaxed text-glow-pink italic font-bold">
                    <em><strong>"With love, from someone who wishes only your happiness — forever. 💫"</strong></em>
                  </p>
                  <p className="text-lg md:text-xl text-purple-600 max-w-4xl mx-auto leading-relaxed text-glow-purple italic font-bold">
                    <em><strong>"Careful! i might eat this Rasgulla 😉"</strong></em>
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className="text-6xl mt-8"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                💝
              </motion.div>
            </motion.div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <motion.div
      className="flex-1 flex items-center justify-center px-4 py-12"
      key={pageNumber}
    >
      {renderPageContent()}
    </motion.div>
  )
}
