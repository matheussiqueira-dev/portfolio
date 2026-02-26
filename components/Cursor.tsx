"use client"

import { useEffect, useRef } from "react"

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let posX = 0
    let posY = 0

    const speed = 0.15 // suavidade do efeito de seguimento

    const animate = () => {
      posX += (mouseX - posX) * speed
      posY += (mouseY - posY) * speed
      cursor.style.left = `${posX}px`
      cursor.style.top = `${posY}px`
      requestAnimationFrame(animate)
    }

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const clickDown = () => cursor.classList.add("click")
    const clickUp = () => cursor.classList.remove("click")

    // Detectar hoverables e adicionar classe "active"
    const hoverables = document.querySelectorAll(
      "a, button, input, textarea, select, [role='button']"
    )

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("active")
      })
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active")
      })
    })

    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", clickDown)
    window.addEventListener("mouseup", clickUp)

    animate()

    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", clickDown)
      window.removeEventListener("mouseup", clickUp)
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => {})
        el.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return <div ref={cursorRef} className="tron-cursor" aria-hidden="true" />
}
