'use client'

import { useEffect, useRef } from 'react'
import s from './MetricCard.module.scss'

const MetricsCard = ({ card }) => {
  const numberRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = numberRef.current
          if (!el) return
          const end = card.number   // целевое число
          let start = null

          function step(ts) {
            if (!start) start = ts
            const progress = Math.min((ts - start) / 1000, 1) // 1 секунда анимации
            el.textContent = Math.floor(end * progress).toLocaleString()
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          io.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )

    if (numberRef.current) io.observe(numberRef.current)
    return () => io.disconnect()
  }, [card.number])

  return (
    <div className={s.metricsCard}>
      <div className={s.top}>
        <span ref={numberRef} className={s.number}>
          0{/* стартовое значение */}
          {card.plus ? '+' : ''}
        </span>
        <span className={s.entity}>{card.entity}</span>
      </div>
      <div className={s.bottomText}>{card.bottomText}</div>
    </div>
  )
}

export default MetricsCard
