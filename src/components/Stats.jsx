import styles from './Stats.module.css'

const STATS = [
  { value: '1 200+', label: 'Membres vérifiés' },
  { value: '98 %',   label: 'Taux de satisfaction' },
  { value: '34',     label: 'Appartements partenaires' },
]

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.grid}>
        {STATS.map((s, i) => (
          <div key={s.label} className={`${styles.item} fade-up delay-${i}`}>
            <p className={styles.value}>{s.value}</p>
            <p className={styles.label}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
