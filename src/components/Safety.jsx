import styles from './Safety.module.css'

const ITEMS = [
  {
    num: "01",
    title: "Vérification d'identité",
    body: "Chaque membre vérifie sa pièce d'identité. Aucun profil anonyme. Aucune exception.",
  },
  {
    num: "02",
    title: "Lieux partenaires certifiés",
    body: "Tous les appartements sont visités et approuvés par notre équipe. Contrats, assurance et caution inclus.",
  },
  {
    num: "03",
    title: "Bouton d'urgence intégré",
    body: "Un bouton SOS dans l'application alerte notre équipe de support disponible 24h/7j pendant chaque événement.",
  },
  {
    num: "04",
    title: "Paiement avant — Localisation après",
    body: "L'adresse exacte n'est révélée qu'après confirmation du paiement. Votre vie privée est protégée à chaque étape.",
  },
  {
    num: "05",
    title: "Charte de conduite stricte",
    body: "PRIVÉ est une plateforme d'expériences sociales. Tout manquement entraîne un bannissement permanent.",
  },
]

const REVENUE = [
  { label: "Créateur·trice de l'événement", pct: "60 %", strong: true },
  { label: "Plateforme PRIVÉ",              pct: "20 %", strong: false },
  { label: "Appartement partenaire",        pct: "20 %", strong: false },
]

export default function Safety() {
  return (
    <section id="safety" className={styles.section}>
      <div className={styles.inner}>

        {/* Colonne gauche */}
        <div>
          <p className="section-tag fade-up">Sécurité & Confiance</p>
          <h2 className="section-title fade-up delay-1">
            Votre sécurité,<br />notre <em>priorité absolue</em>
          </h2>
          <p className="section-sub fade-up delay-2">
            PRIVÉ est conçu avec des règles strictes. Chaque membre est
            responsable de ses actions. Chaque lieu est sécurisé.
          </p>

          {/* Répartition des revenus */}
          <div className={`${styles.revenueBox} fade-up delay-3`}>
            <p className={styles.revenueTitle}>Répartition des revenus</p>
            {REVENUE.map((r) => (
              <div key={r.label} className={styles.revenueRow}>
                <span className={`${styles.revenueDot} ${r.strong ? styles.dotStrong : ''}`} />
                <span className={`${styles.revenueLabel} ${r.strong ? styles.labelStrong : ''}`}>
                  {r.label}
                </span>
                <span className={`${styles.revenuePct} ${r.strong ? styles.pctStrong : ''}`}>
                  {r.pct}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite */}
        <ul className={`${styles.list} fade-up delay-1`}>
          {ITEMS.map((item, i) => (
            <li key={item.num} className={`${styles.item} ${i === ITEMS.length - 1 ? styles.itemLast : ''}`}>
              <span className={styles.itemNum}>{item.num}</span>
              <div>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemBody}>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
