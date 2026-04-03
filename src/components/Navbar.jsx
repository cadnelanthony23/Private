import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>PRIVÉ</a>

      <div className={styles.links}>
        <a href="#how">Comment ça marche</a>
        <a href="#profiles">Explorer</a>
        <a href="#" className={styles.active}>Connexion</a>
        <button className={styles.btnNav}>Rejoindre</button>
      </div>
    </nav>
  )
}
