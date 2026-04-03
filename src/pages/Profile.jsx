import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/profile.css';

const IconVerified = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14.4 7.2L20 8.2L16 12.1L17 17.8L12 15L7 17.8L8 12.1L4 8.2L9.6 7.2L12 2Z" fill="#C9A84C" stroke="#C9A84C" strokeWidth="1" strokeLinejoin="round" />
        <polyline points="8.5,12 11,14.5 15.5,10" stroke="#0A0A08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const IconLocation = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const IconStar = ({ filled }) => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill={filled ? '#C9A84C' : 'none'} stroke="#C9A84C" strokeWidth="1.5">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
);
const IconHeart = ({ active }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? '#C9A84C' : 'none'} stroke={active ? '#C9A84C' : 'currentColor'} strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
);
const IconShare = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
);
const IconMessage = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
);
const IconCamera = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
    </svg>
);
const IconEdit = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
);
const IconLock = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="11" width="14" height="10" rx="1" /><path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
);
const IconGallery = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21,15 16,10 5,21" />
    </svg>
);
const IconClose = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);
const IconChevron = ({ dir = 'right' }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        {dir === 'right'
            ? <polyline points="9,18 15,12 9,6" />
            : <polyline points="15,18 9,12 15,6" />
        }
    </svg>
);

const MOCK_PHOTOS = [
    { id: 1, free: true, src: null, label: 'Photo 1' },
    { id: 2, free: true, src: null, label: 'Photo 2' },
    { id: 3, free: false, src: null, label: 'Exclusive' },
    { id: 4, free: false, src: null, label: 'Exclusive' },
    { id: 5, free: false, src: null, label: 'Exclusive' },
    { id: 6, free: false, src: null, label: 'Exclusive' },
];

const SERVICES = [
    { id: 1, label: 'Dîner privé', price: '25 000', duration: '2h', available: true },
    { id: 2, label: 'Soirée exclusive', price: '50 000', duration: '4h', available: true },
    { id: 3, label: 'Événement 3 pers.', price: '80 000', duration: '3h', available: false },
];

const REVIEWS = [
    { id: 1, pseudo: 'K***', rating: 5, text: 'Expérience mémorable, discrétion parfaite.', date: 'Il y a 3j' },
    { id: 2, pseudo: 'M***', rating: 5, text: 'Très agréable, exactement comme décrit.', date: 'Il y a 1 sem.' },
    { id: 3, pseudo: 'R***', rating: 4, text: 'Belle rencontre, je recommande.', date: 'Il y a 2 sem.' },
];

const TABS = ['Aperçu', 'Services', 'Avis'];

export default function Profile() {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [tab, setTab] = useState(0);
    const [lightbox, setLightbox] = useState(null);
    const [lightboxIdx, setLightboxIdx] = useState(0);
    const [bookingId, setBookingId] = useState(null);
    const [booked, setBooked] = useState(false);

    const openLightbox = (photo, idx) => {
        if (!photo.free) return;
        setLightbox(photo);
        setLightboxIdx(idx);
    };
    const prevPhoto = () => {
        const freePh = MOCK_PHOTOS.filter(p => p.free);
        setLightboxIdx(i => (i - 1 + freePh.length) % freePh.length);
        setLightbox(freePh[(lightboxIdx - 1 + freePh.length) % freePh.length]);
    };
    const nextPhoto = () => {
        const freePh = MOCK_PHOTOS.filter(p => p.free);
        setLightboxIdx(i => (i + 1) % freePh.length);
        setLightbox(freePh[(lightboxIdx + 1) % freePh.length]);
    };

    const handleBook = (svc) => {
        setBookingId(svc.id);
        setTimeout(() => { setBookingId(null); setBooked(true); }, 1500);
        setTimeout(() => setBooked(false), 4000);
    };

    const isOwner = true;

    return (
        <div className="pf-page">

            {/* ══ LIGHTBOX ══════════════════════════════════════════ */}
            {lightbox && (
                <div className="pf-lightbox" onClick={() => setLightbox(null)}>
                    <button className="pf-lb-close" onClick={() => setLightbox(null)}><IconClose /></button>
                    <button className="pf-lb-nav pf-lb-prev" onClick={e => { e.stopPropagation(); prevPhoto(); }}><IconChevron dir="left" /></button>
                    <div className="pf-lb-img" onClick={e => e.stopPropagation()}>
                        <div className="pf-lb-placeholder">
                            <IconGallery />
                            <span>{lightbox.label}</span>
                        </div>
                    </div>
                    <button className="pf-lb-nav pf-lb-next" onClick={e => { e.stopPropagation(); nextPhoto(); }}><IconChevron dir="right" /></button>
                </div>
            )}

            {/* ══ BOOKING TOAST ══════════════════════════════════════ */}
            {booked && (
                <div className="pf-toast">
                    ✓ Demande envoyée — vous serez contacté(e) sous 24h
                </div>
            )}

            {/* ══ HERO BANNER ════════════════════════════════════════ */}
            <div className="pf-banner">
                <div className="pf-banner-bg" />
                <div className="pf-banner-overlay" />
                {isOwner && (
                    <button className="pf-banner-edit">
                        <IconCamera /> Modifier la bannière
                    </button>
                )}
            </div>

            {/* ══ MAIN CONTENT ═══════════════════════════════════════ */}
            <div className="pf-container">

                {/* ── LEFT COL ─────────────────────────────────── */}
                <aside className="pf-sidebar">

                    {/* Avatar */}
                    <div className="pf-avatar-wrap">
                        <div className="pf-avatar">
                            <div className="pf-avatar-inner">
                                <span className="pf-avatar-initials">A</span>
                            </div>
                            {isOwner && (
                                <button className="pf-avatar-edit"><IconCamera /></button>
                            )}
                        </div>
                        <div className="pf-online-dot" title="En ligne" />
                    </div>

                    {/* Identity */}
                    <div className="pf-identity">
                        <div className="pf-name-row">
                            <h1 className="pf-name">Amina</h1>
                            <IconVerified />
                        </div>
                        <p className="pf-pseudo">@amina_gold</p>
                        <div className="pf-location">
                            <IconLocation />
                            <span>Cotonou, Bénin</span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="pf-stats">
                        <div className="pf-stat">
                            <span className="pf-stat-val">4.9</span>
                            <span className="pf-stat-lbl">Note</span>
                        </div>
                        <div className="pf-stat-sep" />
                        <div className="pf-stat">
                            <span className="pf-stat-val">48</span>
                            <span className="pf-stat-lbl">Avis</span>
                        </div>
                        <div className="pf-stat-sep" />
                        <div className="pf-stat">
                            <span className="pf-stat-val">124</span>
                            <span className="pf-stat-lbl">Vues</span>
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="pf-stars">
                        {[1, 2, 3, 4, 5].map(i => <IconStar key={i} filled={i <= 5} />)}
                        <span className="pf-stars-count">48 avis</span>
                    </div>

                    {/* Actions */}
                    {isOwner ? (
                        <div className="pf-actions-col">
                            <button className="pf-btn-gold">
                                <IconEdit /> Modifier le profil
                            </button>
                            <button className="pf-btn-ghost" onClick={() => navigate('/register')}>
                                Voir en tant que visiteur
                            </button>
                        </div>
                    ) : (
                        <div className="pf-actions-col">
                            <button className="pf-btn-gold">
                                <IconMessage /> Contacter
                            </button>
                            <div className="pf-actions-row">
                                <button
                                    className={`pf-icon-btn ${liked ? 'active' : ''}`}
                                    onClick={() => setLiked(v => !v)}
                                    title="Ajouter aux favoris"
                                >
                                    <IconHeart active={liked} />
                                </button>
                                <button className="pf-icon-btn" title="Partager">
                                    <IconShare />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Tags */}
                    <div className="pf-tags">
                        <span className="pf-tag">Discrète</span>
                        <span className="pf-tag">Raffinée</span>
                        <span className="pf-tag">Vérifiée</span>
                        <span className="pf-tag gold">Premium</span>
                    </div>

                    {/* Languages */}
                    <div className="pf-meta-block">
                        <p className="pf-meta-title">Langues</p>
                        <p className="pf-meta-val">Français · Fon · Yoruba</p>
                    </div>
                    <div className="pf-meta-block">
                        <p className="pf-meta-title">Disponibilité</p>
                        <p className="pf-meta-val">Lun – Sam · 18h – 23h</p>
                    </div>
                    <div className="pf-meta-block">
                        <p className="pf-meta-title">Membre depuis</p>
                        <p className="pf-meta-val">Janvier 2025</p>
                    </div>
                </aside>

                {/* ── RIGHT COL ────────────────────────────────── */}
                <main className="pf-main">

                    {/* Tabs */}
                    <div className="pf-tabs">
                        {TABS.map((t, i) => (
                            <button
                                key={t}
                                className={`pf-tab ${tab === i ? 'active' : ''}`}
                                onClick={() => setTab(i)}
                            >
                                {t}
                            </button>
                        ))}
                        <div
                            className="pf-tab-indicator"
                            style={{ left: `calc(${tab} * (100% / ${TABS.length}))`, width: `calc(100% / ${TABS.length})` }}
                        />
                    </div>

                    {/* ── TAB 0 — Aperçu ─────────────────────────── */}
                    {tab === 0 && (
                        <div className="pf-tab-content">

                            {/* Bio */}
                            <div className="pf-section">
                                <h2 className="pf-section-title">À propos</h2>
                                <p className="pf-bio">
                                    Femme raffinée et discrète, j'offre des moments d'exception dans un cadre élégant.
                                    Passionnée de gastronomie, de culture et de belles rencontres, je saurai créer
                                    une atmosphère unique pour chaque événement.
                                    <br /><br />
                                    Disponible pour des soirées privées, dîners et événements exclusifs à Cotonou
                                    et ses environs. Chaque rencontre est unique — parlons-en.
                                </p>
                            </div>

                            {/* Photo gallery */}
                            <div className="pf-section">
                                <div className="pf-section-header">
                                    <h2 className="pf-section-title">Galerie</h2>
                                    {isOwner && (
                                        <button className="pf-section-action">
                                            <IconCamera /> Ajouter
                                        </button>
                                    )}
                                </div>
                                <div className="pf-gallery">
                                    {MOCK_PHOTOS.map((photo, idx) => (
                                        <div
                                            key={photo.id}
                                            className={`pf-photo ${photo.free ? 'free' : 'locked'}`}
                                            onClick={() => openLightbox(photo, idx)}
                                        >
                                            <div className="pf-photo-placeholder">
                                                {photo.free
                                                    ? <IconGallery />
                                                    : <IconLock />
                                                }
                                            </div>
                                            {!photo.free && (
                                                <div className="pf-photo-locked-overlay">
                                                    <IconLock />
                                                    <span>Débloquer</span>
                                                </div>
                                            )}
                                            {photo.free && <div className="pf-photo-hover">Voir</div>}
                                        </div>
                                    ))}
                                </div>
                                <p className="pf-gallery-hint">
                                    {MOCK_PHOTOS.filter(p => !p.free).length} photos exclusives · Réservez pour accéder
                                </p>
                            </div>

                        </div>
                    )}

                    {/* ── TAB 1 — Services ───────────────────────── */}
                    {tab === 1 && (
                        <div className="pf-tab-content">
                            <div className="pf-section">
                                <h2 className="pf-section-title">Événements & Tarifs</h2>
                                <p className="pf-section-sub">Tous les tarifs sont en FCFA. Paiement sécurisé avant confirmation.</p>
                                <div className="pf-services">
                                    {SERVICES.map(svc => (
                                        <div key={svc.id} className={`pf-service-card ${!svc.available ? 'unavailable' : ''}`}>
                                            <div className="pf-service-info">
                                                <div className="pf-service-top">
                                                    <span className="pf-service-label">{svc.label}</span>
                                                    {!svc.available && <span className="pf-service-badge">Complet</span>}
                                                </div>
                                                <div className="pf-service-details">
                                                    <span className="pf-service-duration">{svc.duration}</span>
                                                    <span className="pf-service-sep">·</span>
                                                    <span className="pf-service-price">{svc.price} <small>FCFA</small></span>
                                                </div>
                                            </div>
                                            {svc.available && (
                                                <button
                                                    className="pf-service-btn"
                                                    onClick={() => handleBook(svc)}
                                                    disabled={bookingId === svc.id}
                                                >
                                                    {bookingId === svc.id
                                                        ? <span className="pf-mini-spinner" />
                                                        : 'Réserver'}
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="pf-service-note">
                                    <IconLock />
                                    <span>La localisation exacte est communiquée après confirmation du paiement</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── TAB 2 — Avis ───────────────────────────── */}
                    {tab === 2 && (
                        <div className="pf-tab-content">
                            <div className="pf-section">
                                <div className="pf-reviews-header">
                                    <div>
                                        <h2 className="pf-section-title">Avis clients</h2>
                                        <div className="pf-rating-row">
                                            <span className="pf-rating-big">4.9</span>
                                            <div>
                                                <div className="pf-stars">{[1, 2, 3, 4, 5].map(i => <IconStar key={i} filled />)}</div>
                                                <span className="pf-rating-count">48 évaluations</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pf-reviews">
                                    {REVIEWS.map(r => (
                                        <div key={r.id} className="pf-review-card">
                                            <div className="pf-review-top">
                                                <div className="pf-review-avatar">{r.pseudo[0]}</div>
                                                <div className="pf-review-meta">
                                                    <span className="pf-review-pseudo">{r.pseudo}</span>
                                                    <div className="pf-review-stars">
                                                        {[1, 2, 3, 4, 5].map(i => <IconStar key={i} filled={i <= r.rating} />)}
                                                    </div>
                                                </div>
                                                <span className="pf-review-date">{r.date}</span>
                                            </div>
                                            <p className="pf-review-text">{r.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                </main>
            </div>
        </div>
    );
}