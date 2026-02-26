'use client'

import { useEffect } from 'react'
import { Locale, getDictionary } from '@/encom/locales'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function EncomError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service here
    console.error('ENCOM Error:', error)
  }, [error])

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">SYSTEM ERROR</h1>
        <p className="error-code">ERR_{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
        <p className="error-message">{error.message || 'An unexpected error occurred'}</p>

        <button
          onClick={() => reset()}
          className="error-button"
        >
          REINITIALIZE SYSTEM
        </button>
      </div>
    </div>
  )
}
