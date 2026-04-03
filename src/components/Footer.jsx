import styles from './Footer.module.css'

const LINKS = [
  { label: 'Comment ça marche', href: '#how'        },
  { label: 'Profils',           href: '#profiles'   },
  { label: 'Événements',        href: '#events'     },
  { label: 'Lieux partenaires', href: '#apartments' },
  { label: 'CGU & Confidentialité', href: '#'       },
  { label: 'Contact',           href: '#'           },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>PRIVÉ</p>

      <nav className={styles.links}>
        {LINKS.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </nav>

      <p className={styles.legal}>© 2025 PRIVÉ · Bénin · Tous droits réservés</p>
    </footer>
  )
}
