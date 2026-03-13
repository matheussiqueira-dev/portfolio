/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

/**
 * PageTransition Component
 * Provides animated page transition effects when route changes
 * Uses pathname change detection to trigger overlay animation
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevPathname = useRef<string>(pathname)

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined

    if (prevPathname.current !== pathname) {
      // Trigger transition animation when pathname changes
      setIsTransitioning(true)

      timeout = setTimeout(() => {
        setIsTransitioning(false)
      }, 600)

      prevPathname.current = pathname
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [pathname])

  return (
    <>
      {isTransitioning && <div className="page-overlay" aria-hidden="true" />}
      {children}
    </>
  )
}
