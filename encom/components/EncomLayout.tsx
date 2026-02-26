import type { ReactNode } from 'react'

interface EncomLayoutProps {
  children: ReactNode
}

export function EncomLayout({ children }: EncomLayoutProps) {
  return <>{children}</>
}
