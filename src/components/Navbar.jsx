import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate();


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
        <a href="/login" className={styles.active}>Connexion</a>
        <button className={styles.btnNav} onClick={() => navigate('/register')} >Rejoindre</button>
      </div>
    </nav>
  )
}
