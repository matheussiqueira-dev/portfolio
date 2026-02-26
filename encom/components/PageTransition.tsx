'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import styles from './PageTransition.module.css'

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPath = useRef<string>(pathname)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setIsTransitioning(true)
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 600)

      prevPath.current = pathname

      return () => clearTimeout(timer)
    }
  }, [pathname])

  return (
    <>
      {isTransitioning && <div className={styles.overlay} aria-hidden="true" />}
      {children}
    </>
  )
}
