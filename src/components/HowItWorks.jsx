import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'Créez votre profil',
    body: 'Inscription rapide, vérification d'identité obligatoire. Ajoutez photos libres et contenus premium à débloquer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Créez ou rejoignez un événement',
    body: 'Soirée privée pour 2, 3 ou 5 personnes. Lieu partenaire pré-sélectionné, règles affichées, durée définie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 2v4M16 2v4M3 10h18" />
        <circle cx="8" cy="15" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Payez & débloquez',
    body: 'Paiement sécurisé par MTN MoMo. La localisation exacte et les détails complets sont révélés après confirmation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="section-tag fade-up">Comment ça marche</p>
          <h2 className="section-title fade-up delay-1">
            Une expérience <em>en trois étapes</em>
          </h2>
          <p className="section-sub fade-up delay-2">
            Du profil à la rencontre, chaque étape est pensée pour votre
            sécurité et votre discrétion.
          </p>
        </header>

        <div className={styles.grid}>
          {STEPS.map((s, i) => (
            <article key={s.num} className={`${styles.step} fade-up delay-${i}`}>
              <span className={styles.num}>{s.num}</span>
              <div className={styles.iconBox}>{s.icon}</div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepBody}>{s.body}</p>
              <div className={styles.arrow} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
