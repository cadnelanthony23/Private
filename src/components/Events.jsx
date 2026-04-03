import styles from './Events.module.css'

const EVENTS = [
  {
    type: 'Soirée privée · Dîner',
    title: 'Soirée Dégustation Privée',
    city: 'Cotonou',
    blurZone: 'Haie Vive',
    price: '25 000',
    spots: { filled: 2, total: 3 },
  },
  {
    type: 'Expérience · Duo',
    title: 'Nuit Exclusive à Deux',
    city: 'Porto-Novo',
    blurZone: 'Djègan',
    price: '40 000',
    spots: { filled: 1, total: 2 },
    featured: true,
  },
  {
    type: 'Soirée · Groupe',
    title: 'Soirée Networking & Rencontres',
    city: 'Calavi',
    blurZone: 'Agla',
    price: '15 000',
    spots: { filled: 3, total: 5 },
  },
]

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function SpotDots({ filled, total }) {
  return (
    <span className={styles.dots}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`${styles.dot} ${i < filled ? styles.dotFilled : ''}`}
        />
      ))}
    </span>
  )
}

function EventCard({ ev }) {
  return (
    <div className={`${styles.card} ${ev.featured ? styles.cardFeatured : ''}`}>
      <div className={styles.cardMeta}>
        <span className={styles.cardType}>{ev.type}</span>
        <span className={styles.cardSpots}>
          <SpotDots filled={ev.spots.filled} total={ev.spots.total} />
          {ev.spots.filled}/{ev.spots.total} places
        </span>
      </div>
      <p className={styles.cardTitle}>{ev.title}</p>
      <p className={styles.cardLocation}>
        <PinIcon />
        {ev.city}
        <span className={styles.blurPill}>{ev.blurZone}</span>
      </p>
      <p className={styles.cardPrice}>
        {ev.price} <small>FCFA</small>
      </p>
    </div>
  )
}

export default function Events() {
  return (
    <section id="events" className={styles.section}>
      <div className={styles.inner}>
        {/* Texte gauche */}
        <div className={styles.text}>
          <p className="section-tag fade-up">Événements</p>
          <h2 className="section-title fade-up delay-1">
            Des soirées <em>privées</em>,<br />organisées pour vous
          </h2>
          <p className="section-sub fade-up delay-2">
            Chaque événement est encadré : lieu partenaire vérifié, nombre
            de participants limité, localisation révélée après paiement uniquement.
          </p>

          <div className={`${styles.metrics} fade-up delay-3`}>
            {[
              { val: '2 – 5', lbl: 'Participants max' },
              { val: '100 %', lbl: 'Lieux vérifiés' },
              { val: 'MoMo',  lbl: 'Paiement sécurisé' },
            ].map((m) => (
              <div key={m.lbl}>
                <p className={styles.metricVal}>{m.val}</p>
                <p className={styles.metricLbl}>{m.lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cartes droite */}
        <div className={`${styles.cards} fade-up delay-1`}>
          {EVENTS.map((ev) => (
            <EventCard key={ev.title} ev={ev} />
          ))}
        </div>
      </div>
    </section>
  )
}
