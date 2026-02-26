'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">NODE NOT FOUND</p>
        <p className="not-found-description">
          The requested resource does not exist in the ENCOM network.
        </p>

        <Link href="/" className="not-found-button">
          RETURN TO NETWORK
        </Link>
      </div>
    </div>
  )
}
