import styles from './Pricing.module.css'

const PLANS = [
  {
    tag: 'Gratuit',
    price: '0',
    currency: '',
    period: 'pour toujours',
    features: [
      { label: 'Profil de base',          active: true  },
      { label: 'Voir les profils publics', active: true  },
      { label: '1 événement / mois',       active: true  },
      { label: 'Photos premium',           active: false },
      { label: 'Localisation exacte',      active: false },
      { label: 'Messagerie directe',       active: false },
    ],
    cta: 'Commencer',
  },
  {
    tag: 'Premium',
    price: '4 900',
    currency: '₣',
    period: 'par mois',
    featured: true,
    features: [
      { label: 'Tout du plan Gratuit',        active: true },
      { label: 'Photos premium illimitées',   active: true },
      { label: 'Événements illimités',        active: true },
      { label: 'Localisation exacte',         active: true },
      { label: 'Messagerie directe',          active: true },
      { label: 'Badge Vérifié Gold',          active: false },
    ],
    cta: 'Rejoindre Premium',
  },
  {
    tag: 'VIP',
    price: '9 900',
    currency: '₣',
    period: 'par mois',
    features: [
      { label: 'Tout du plan Premium',                    active: true },
      { label: 'Badge Vérifié Gold',                      active: true },
      { label: 'Accès prioritaire aux événements',        active: true },
      { label: 'Profil mis en avant',                     active: true },
      { label: 'Support dédié 24/7',                      active: true },
      { label: 'Accès pré-lancement nouvelles villes',    active: true },
    ],
    cta: 'Devenir VIP',
  },
]

function PlanCard({ plan }) {
  return (
    <div className={`${styles.plan} ${plan.featured ? styles.featured : ''}`}>
      {plan.featured && <span className={styles.featuredBadge}>Recommandé</span>}

      <p className={styles.planTag}>{plan.tag}</p>
      <p className={styles.planPrice}>
        <span className={styles.planCurrency}>{plan.currency}</span>
        {plan.price}
      </p>
      <p className={styles.planPeriod}>{plan.period}</p>

      <ul className={styles.features}>
        {plan.features.map((f) => (
          <li key={f.label} className={f.active ? styles.featureActive : ''}>
            {f.label}
          </li>
        ))}
      </ul>

      <button className={`${styles.planBtn} ${plan.featured ? styles.planBtnFeatured : ''}`}>
        {plan.cta}
      </button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="section-tag fade-up" style={{ justifyContent: 'center' }}>
            Abonnements
          </p>
          <h2 className="section-title fade-up delay-1">
            Choisissez votre <em>accès</em>
          </h2>
          <p className={`${styles.headerSub} fade-up delay-2`}>
            Commencez gratuitement. Passez premium pour débloquer l'expérience complète.
          </p>
        </header>

        <div className={`${styles.grid} fade-up delay-1`}>
          {PLANS.map((p) => (
            <PlanCard key={p.tag} plan={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
