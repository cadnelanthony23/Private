import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const itemsRef = useRef([])
  const navigate = useNavigate();

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      if (!el) return
      setTimeout(() => el.classList.add('visible'), 200 + i * 150)
    })
  }, [])

  const ref = (i) => (el) => { itemsRef.current[i] = el }

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} />
      <div className={styles.city} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={`${styles.location} fade-up`} ref={ref(0)}>
          <span />
          BJ · BÉNIN &nbsp;·&nbsp; COTONOU &nbsp;·&nbsp; CALAVI &nbsp;·&nbsp; PORTO‑NOVO
          <span />
        </p>

        <h1 className={`${styles.h1} fade-up`} ref={ref(1)}>
          Rencontres <em>Privées.</em>
          <span>Discrètes.</span>
        </h1>

        <p className={`${styles.sub} fade-up`} ref={ref(2)}>
          La première plateforme d'expériences sociales exclusives au Bénin.
          <br />
          Profils vérifiés, paiement MoMo, discrétion absolue.
        </p>

        <div className={`${styles.actions} fade-up`} ref={ref(3)}>
          <button className="btn-primary" onClick={() => navigate('/register')}>
            Rejoindre maintenant →
          </button>
          <button className="btn-secondary">Explorer les profils</button>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
