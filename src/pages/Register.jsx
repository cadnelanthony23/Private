import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/auth.css';

const CITIES = [
    'Cotonou', 'Porto-Novo', 'Parakou', 'Abomey-Calavi', 'Djougou',
    'Bohicon', 'Kandi', 'Lokossa', 'Ouidah', 'Natitingou',
    'Abomey', 'Malanville', 'Nikki', 'Savalou', 'Bembèrèkè',
    'Tchaourou', 'Pobè', 'Ketou', 'Sakété', 'Zagnanado',
    'Dassa-Zoumè', 'Savè', 'Bantè', 'Dogbo', 'Aplahoué',
    'Comè', 'Grand-Popo', 'Bopa', 'Athiémé', 'Glazoué',
    'Adjohoun', 'Avrankou', 'Akpro-Missérété', 'Sèmè-Kpodji',
    'Dangbo', 'Bonou', 'Adja-Ouèrè', 'Ifangni', 'Covè',
    'Ouinhi', 'Zogbodomey', 'Agbangnizoun', 'Djidja',
    'Bassila', 'Copargo', 'Kouandé', 'Péhunco', 'Tanguiéta',
    'Matéri', 'Boukoumbé', 'Kérou', 'Banikoara', 'Gogounou',
    'Ségbana', 'Sinendé', "N'Dali", 'Pèrèrè', 'Kalale',
];

const IconLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="12,2 22,20 2,20" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
);
const IconUser = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
);
const IconAt = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="4" />
        <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
    </svg>
);
const IconPhone = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
);
const IconMail = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="5" width="18" height="14" rx="1" /><polyline points="3,5 12,13 21,5" />
    </svg>
);
const IconLock = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="5" y="11" width="14" height="10" rx="1" /><path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
);
const IconPin = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
);
const IconEye = ({ open }) => open ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);
const IconCheck = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" /><polyline points="7,12 10.5,15.5 17,9" />
    </svg>
);
const IconFemale = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="8" r="5" />
        <line x1="12" y1="13" x2="12" y2="21" />
        <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
);
const IconMale = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="10" cy="14" r="5" />
        <line x1="19" y1="5" x2="14.2" y2="9.8" />
        <polyline points="15,5 19,5 19,9" />
    </svg>
);

function getStrength(pwd) {
    if (!pwd) return 0;
    let s = 0;
    if (pwd.length >= 8) s++;
    if (/[A-Z]/.test(pwd)) s++;
    if (/[0-9]/.test(pwd)) s++;
    if (/[^A-Za-z0-9]/.test(pwd)) s++;
    return s;
}
const strengthLabels = ['', 'Faible', 'Moyen', 'Fort', 'Excellent'];
const strengthColors = ['', 'active-1', 'active-2', 'active-3', 'active-4'];

export default function Register() {
    const navigate = useNavigate();

    const [gender, setGender] = useState(null);
    const [done, setDone] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showPwd, setShowPwd] = useState(false);
    const [errors, setErrors] = useState({});

    const [form, setForm] = useState({
        firstName: '', pseudo: '', phone: '',
        city: '', email: '', password: '',
    });

    const set = (key) => (evt) => {
        setForm(f => ({ ...f, [key]: evt.target.value }));
        if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
    };

    const validate = () => {
        const e = {};
        if (!form.firstName.trim()) e.firstName = 'Prénom requis';
        if (!form.pseudo.trim()) e.pseudo = 'Pseudo requis';
        if (!form.phone.trim()) e.phone = 'Téléphone requis';
        if (!form.city) e.city = 'Ville requise';
        if (!form.email) e.email = 'E-mail requis';
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Format invalide';
        if (!form.password) e.password = 'Mot de passe requis';
        else if (form.password.length < 8) e.password = 'Minimum 8 caractères';
        return e;
    };

    const submit = async (evt) => {
        evt.preventDefault();
        const e = validate();
        if (Object.keys(e).length) { setErrors(e); return; }
        setLoading(true);
        await new Promise(r => setTimeout(r, 1600));
        setLoading(false);
        setDone(true);
    };

    const strength = getStrength(form.password);

    if (done) return (
        <div className="auth-page" style={{ gridTemplateColumns: '1fr' }}>
            <div className="auth-panel">
                <div className="auth-deco-corner auth-deco-corner-tl" />
                <div className="auth-deco-corner auth-deco-corner-br" />
                <div className="auth-card" style={{ textAlign: 'center', maxWidth: 380 }}>
                    <div style={{ color: 'var(--gold)', marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
                        <IconCheck />
                    </div>
                    <p className="auth-eyebrow" style={{ justifyContent: 'center', marginBottom: 12 }}>Bienvenue</p>
                    <h2 className="auth-title" style={{ marginBottom: 14 }}>
                        Profil créé avec<br /><em>succès</em>
                    </h2>
                    <p className="auth-subtitle" style={{ marginBottom: 32 }}>
                        Votre espace est prêt,{' '}
                        <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>{form.firstName}</strong>.
                        {gender === 'female'
                            ? ' Vous pouvez maintenant ajouter vos photos et services.'
                            : ' Vous pouvez maintenant découvrir les profils.'}
                    </p>
                    <button className="auth-btn auth-btn-primary" onClick={() => navigate('/login')}>
                        <span className="auth-btn-label">Accéder à mon espace</span>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="auth-page">

            <div className="auth-visual">
                <div className="auth-orb auth-orb-1" />
                <div className="auth-orb auth-orb-2" />
                <div className="auth-visual-img" style={{ backgroundPosition: 'center 30%' }} />
                <div className="auth-visual-overlay" />
                <div className="auth-visual-content">
                    <p className="auth-visual-tag"><span />Rejoindre</p>
                    <h1 className="auth-visual-title">
                        Une expérience<br />
                        <em>unique</em><br />
                        vous attend
                    </h1>
                    <p className="auth-visual-sub">
                        Créez votre profil en quelques instants et accédez à un univers d'expériences exclusives.
                    </p>
                </div>
            </div>

            <div className="auth-panel">
                <div className="auth-deco-corner auth-deco-corner-tl" />
                <div className="auth-deco-corner auth-deco-corner-br" />

                <div className="auth-card">

                    <a href="/" className="auth-logo">
                        <IconLogo /> Maison&nbsp;<em style={{ fontStyle: 'italic' }}>d'Or</em>
                    </a>

                    <div className="auth-heading">
                        <p className="auth-eyebrow">Inscription</p>
                        <h2 className="auth-title">
                            {!gender
                                ? <>Je suis…</>
                                : gender === 'female'
                                    ? <>Créer mon<br /><em>profil</em></>
                                    : <>Mon<br /><em>compte</em></>
                            }
                        </h2>
                        {!gender && (
                            <p className="auth-subtitle">Choisissez votre profil pour personnaliser votre expérience.</p>
                        )}
                    </div>

                    {!gender ? (
                        <div className="reg-gender-step">
                            <button
                                className="reg-gender-card"
                                onClick={() => setGender('female')}
                            >
                                <div className="reg-gender-icon female">
                                    <IconFemale />
                                </div>
                                <div className="reg-gender-info">
                                    <span className="reg-gender-label">Femme</span>
                                    <span className="reg-gender-sub">Proposer mes services</span>
                                </div>
                                <div className="reg-gender-arrow">→</div>
                            </button>

                            <button
                                className="reg-gender-card"
                                onClick={() => setGender('male')}
                            >
                                <div className="reg-gender-icon male">
                                    <IconMale />
                                </div>
                                <div className="reg-gender-info">
                                    <span className="reg-gender-label">Homme</span>
                                    <span className="reg-gender-sub">Découvrir les profils</span>
                                </div>
                                <div className="reg-gender-arrow">→</div>
                            </button>

                            <div className="auth-switch">
                                Déjà membre ?<a href="/login">Se connecter</a>
                            </div>
                        </div>
                    ) : (
                        <form className="auth-form" onSubmit={submit} noValidate>

                            <div className="auth-row">
                                <div className="auth-field">
                                    <label className="auth-label">Prénom</label>
                                    <div className="auth-input-wrap">
                                        <input
                                            className={`auth-input ${errors.firstName ? 'error' : ''}`}
                                            type="text"
                                            placeholder="Marie"
                                            value={form.firstName}
                                            onChange={set('firstName')}
                                            autoFocus
                                        />
                                        <span className="auth-input-icon"><IconUser /></span>
                                    </div>
                                    {errors.firstName && <span className="auth-field-error">{errors.firstName}</span>}
                                </div>

                                <div className="auth-field">
                                    <label className="auth-label">Pseudo</label>
                                    <div className="auth-input-wrap">
                                        <input
                                            className={`auth-input ${errors.pseudo ? 'error' : ''}`}
                                            type="text"
                                            placeholder="@mon_pseudo"
                                            value={form.pseudo}
                                            onChange={set('pseudo')}
                                        />
                                        <span className="auth-input-icon"><IconAt /></span>
                                    </div>
                                    {errors.pseudo && <span className="auth-field-error">{errors.pseudo}</span>}
                                </div>
                            </div>

                            <div className="auth-row">
                                <div className="auth-field">
                                    <label className="auth-label">Téléphone</label>
                                    <div className="auth-input-wrap">
                                        <input
                                            className={`auth-input ${errors.phone ? 'error' : ''}`}
                                            type="tel"
                                            placeholder="+33 6 00 00 00 00"
                                            value={form.phone}
                                            onChange={set('phone')}
                                        />
                                        <span className="auth-input-icon"><IconPhone /></span>
                                    </div>
                                    {errors.phone && <span className="auth-field-error">{errors.phone}</span>}
                                </div>

                                <div className="auth-field">
                                    <label className="auth-label">Ville</label>
                                    <div className="auth-input-wrap">
                                        <select
                                            className={`auth-input auth-select ${errors.city ? 'error' : ''}`}
                                            value={form.city}
                                            onChange={set('city')}
                                        >
                                            <option value="">Sélectionnez</option>
                                            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                        <span className="auth-input-icon" style={{ pointerEvents: 'none' }}><IconPin /></span>
                                    </div>
                                    {errors.city && <span className="auth-field-error">{errors.city}</span>}
                                </div>
                            </div>

                            <div className="auth-field">
                                <label className="auth-label">E-mail</label>
                                <div className="auth-input-wrap">
                                    <input
                                        className={`auth-input ${errors.email ? 'error' : ''}`}
                                        type="email"
                                        placeholder="votre@email.com"
                                        value={form.email}
                                        onChange={set('email')}
                                    />
                                    <span className="auth-input-icon"><IconMail /></span>
                                </div>
                                {errors.email && <span className="auth-field-error">{errors.email}</span>}
                            </div>

                            <div className="auth-field">
                                <label className="auth-label">Mot de passe</label>
                                <div className="auth-input-wrap">
                                    <input
                                        className={`auth-input ${errors.password ? 'error' : ''}`}
                                        type={showPwd ? 'text' : 'password'}
                                        placeholder="••••••••"
                                        value={form.password}
                                        onChange={set('password')}
                                    />
                                    <button className="auth-eye" type="button" onClick={() => setShowPwd(v => !v)}>
                                        <IconEye open={showPwd} />
                                    </button>
                                </div>
                                {errors.password && <span className="auth-field-error">{errors.password}</span>}
                                {form.password && (
                                    <div className="auth-strength">
                                        <div className="auth-strength-bar">
                                            {[1, 2, 3, 4].map(i => (
                                                <div
                                                    key={i}
                                                    className={`auth-strength-seg ${strength >= i ? strengthColors[strength] : ''}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="auth-strength-label">{strengthLabels[strength]}</span>
                                    </div>
                                )}
                            </div>

                            <button
                                className="auth-btn auth-btn-primary"
                                type="submit"
                                disabled={loading}
                                style={{ marginTop: 4 }}
                            >
                                <span className="auth-btn-label">
                                    {loading
                                        ? <><div className="auth-spinner" /> Création…</>
                                        : 'Créer mon profil'}
                                </span>
                            </button>

                            {gender === 'female' && (
                                <p className="reg-hint">
                                    Après inscription, vous pourrez ajouter vos photos et services
                                </p>
                            )}

                            <div className="reg-footer-row">
                                <span className="reg-trust">🔒 Données protégées · Discrétion garantie</span>
                            </div>

                            <div className="auth-switch" style={{ marginTop: 16 }}>
                                Déjà membre ?<a href="/login">Se connecter</a>
                            </div>

                            <button
                                type="button"
                                className="reg-back-gender"
                                onClick={() => { setGender(null); setErrors({}); }}
                            >
                                ← Changer de profil
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}