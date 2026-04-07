import { useEffect, useRef } from 'react'
import cursorIcon from '../assets/cursor.svg'

const CURSOR_SIZE = 47
const CURSOR_OFFSET = CURSOR_SIZE / 2
const TRAIL_EASING = 0.16

export function CursorFollower() {
  const cursorRef = useRef<HTMLImageElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const targetRef = useRef({ x: -1000, y: -1000 })
  const currentRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const render = () => {
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * TRAIL_EASING
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * TRAIL_EASING

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`
      }

      frameRef.current = window.requestAnimationFrame(render)
    }

    const onMove = (event: MouseEvent) => {
      targetRef.current = {
        x: event.clientX - CURSOR_OFFSET,
        y: event.clientY - CURSOR_OFFSET,
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frameRef.current = window.requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <img
      ref={cursorRef}
      src={cursorIcon}
      alt=""
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[47px] w-[47px] will-change-transform"
    />
  )
}
