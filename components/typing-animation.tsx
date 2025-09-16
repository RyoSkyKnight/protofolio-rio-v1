"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypingAnimation({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        const fullText = texts[currentTextIndex].trim() // Trim whitespace

        if (isDeleting) {
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          } else {
            setCurrentText(fullText.substring(0, currentText.length - 1))
          }
        } else {
          if (currentText === fullText) {
            setIsPaused(true)
          } else {
            setCurrentText(fullText.substring(0, currentText.length + 1))
          }
        }
      },
      isPaused ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={`${className} inline-flex items-baseline`}>
      <span className="inline-block whitespace-nowrap">{currentText}</span>
      <span className="animate-pulse text-purple-400 ml-1 inline-block">|</span>
    </span>
  )
}