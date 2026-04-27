"use client"

import { useRef, useState, useEffect, ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ animationDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
