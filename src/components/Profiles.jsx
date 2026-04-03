import styles from './Profiles.module.css'

const PROFILES = [
  { name: 'Aïcha K.',  detail: 'Cotonou · 26 ans', badge: 'Vérifié',  locked: true,  featured: false },
  { name: 'Fatou M.',  detail: 'Porto-Novo · 24 ans', badge: 'Premium', locked: false, featured: true  },
  { name: 'Néné S.',   detail: 'Calavi · 28 ans',  badge: 'Vérifié',  locked: true,  featured: false },
  { name: 'Yawa B.',   detail: 'Cotonou · 23 ans', badge: 'Nouveau',  locked: true,  featured: false },
]

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
  )
}

function SilhouetteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

export default function Profiles() {
  return (
    <section id="profiles" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className="section-tag fade-up">Profils</p>
            <h2 className="section-title fade-up delay-1">
              Découvrir les <em>membres</em>
            </h2>
          </div>
          <button className="btn-secondary fade-up">Voir tous les profils</button>
        </header>

        <div className={styles.grid}>
          {PROFILES.map((p, i) => (
            <div
              key={p.name}
              className={`${styles.card} ${p.featured ? styles.featured : ''} fade-up delay-${i}`}
            >
              {/* Fond flouté / silhouette */}
              <div className={styles.blur}>
                {!p.featured && (
                  <div className={styles.silhouette}>
                    <SilhouetteIcon />
                  </div>
                )}
              </div>

              <div className={styles.overlay} />

              {/* Badge haut-gauche */}
              <span className={`${styles.badge} ${p.featured ? styles.badgePremium : ''}`}>
                {p.badge}
              </span>

              {/* Cadenas haut-droite */}
              {p.locked && (
                <div className={styles.lock}>
                  <LockIcon />
                </div>
              )}

              {/* Infos bas */}
              <div className={`${styles.info} ${!p.locked ? styles.infoVisible : ''}`}>
                <p className={styles.cardName}>{p.name}</p>
                <p className={styles.cardDetail}>{p.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Rejoignez PRIVÉ pour accéder à tous les profils et photos premium</p>
          <button className="btn-primary">Créer mon compte gratuit</button>
        </div>
      </div>
    </section>
  )
}
