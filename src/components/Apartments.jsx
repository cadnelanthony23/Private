import styles from './Apartments.module.css'

const APTS = [
  {
    name: 'Suite Panoramique',
    zone: 'Cotonou · Haie Vive',
    specs: [{ val: '2–3', lbl: 'pers. max' }, { val: '1', lbl: 'chambre' }, { val: 'Climatisé', lbl: '' }],
    price: '20 000',
  },
  {
    name: 'Penthouse Discret',
    zone: 'Porto-Novo · Centre',
    specs: [{ val: '2–5', lbl: 'pers. max' }, { val: '2', lbl: 'chambres' }, { val: 'Vue ville', lbl: '' }],
    price: '35 000',
  },
  {
    name: 'Studio Luxe Calavi',
    zone: 'Calavi · Résidentiel',
    specs: [{ val: '2', lbl: 'pers. max' }, { val: 'Studio', lbl: '' }, { val: 'Jacuzzi', lbl: '' }],
    price: '28 000',
  },
]

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

export default function Apartments() {
  return (
    <section id="apartments" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className="section-tag fade-up">Lieux partenaires</p>
            <h2 className="section-title fade-up delay-1">
              Des espaces <em>sélectionnés</em>
            </h2>
          </div>
          <a href="#" className={`${styles.proposeLink} fade-up`}>
            Proposer un lieu →
          </a>
        </header>

        <div className={styles.grid}>
          {APTS.map((apt, i) => (
            <div key={apt.name} className={`${styles.card} fade-up delay-${i}`}>
              <div className={styles.imgBox}>
                <div className={styles.imgInner} />
                <div className={styles.icon}><HomeIcon /></div>
              </div>
              <div className={styles.body}>
                <p className={styles.aptName}>{apt.name}</p>
                <p className={styles.aptZone}>{apt.zone}</p>
                <div className={styles.specs}>
                  {apt.specs.map((s) => (
                    <span key={s.val + s.lbl} className={styles.spec}>
                      <strong>{s.val}</strong>{s.lbl ? ` ${s.lbl}` : ''}
                    </span>
                  ))}
                </div>
                <p className={styles.aptPrice}>
                  {apt.price} <small>FCFA / nuit</small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
