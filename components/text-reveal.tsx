'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export default function TextReveal({ 
  children, 
  className = '', 
  delay = 0,
  stagger = false 
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  if (stagger && typeof children === 'string') {
    const words = children.split(' ')
    return (
      <div ref={ref} className={className}>
        {words.map((word, idx) => (
          <span
            key={idx}
            className={`inline-block mr-[0.25em] ${isVisible ? 'text-reveal' : 'opacity-0'}`}
            style={{
              animationDelay: isVisible ? `${delay + idx * 60}ms` : '0ms',
            }}
          >
            {word}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={`${isVisible ? 'text-reveal' : 'opacity-0'} ${className}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
