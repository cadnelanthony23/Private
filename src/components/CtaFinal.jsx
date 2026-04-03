import styles from './CtaFinal.module.css'

export default function CtaFinal() {
  return (
    <section id="cta" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.border} />

      <div className={styles.content}>
        <p className="section-tag fade-up" style={{ justifyContent: 'center' }}>
          Rejoindre PRIVÉ
        </p>

        <h2 className={`${styles.title} fade-up delay-1`}>
          Votre prochaine<br />expérience vous <em>attend</em>
        </h2>

        <p className={`${styles.sub} fade-up delay-2`}>
          Inscription gratuite. Profil vérifié en moins de 24h.<br />
          Disponible à Cotonou, Calavi et Porto‑Novo.
        </p>

        <div className={`${styles.actions} fade-up delay-3`}>
          <button className="btn-primary" style={{ padding: '16px 48px', fontSize: '14px' }}>
            Créer mon compte →
          </button>
          <button className="btn-secondary" style={{ padding: '16px 32px' }}>
            En savoir plus
          </button>
        </div>

        <p className={`${styles.note} fade-up delay-4`}>
          Paiement par MTN MoMo · Moov Money · Carte bancaire
        </p>
      </div>
    </section>
  )
}
