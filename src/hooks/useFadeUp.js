import { useEffect } from 'react'

/**
 * Attache un IntersectionObserver sur tous les éléments `.fade-up`
 * présents dans le DOM au moment du montage, et les marque `.visible`
 * dès qu'ils entrent dans le viewport.
 *
 * À appeler une seule fois dans App.jsx.
 */
export function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
