import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/auth.css';

/* ── SVG Icons ─────────────────────────────────────────── */
const IconLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polygon points="12,2 22,20 2,20" />
        <line x1="12" y1="8" x2="12" y2="14" />
        <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
);
const IconMail = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <polyline points="3,5 12,13 21,5" />
    </svg>
);
const IconLock = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="5" y="11" width="14" height="10" rx="1" />
        <path d="M8 11V7a4 4 0 018 0v4" />
    </svg>
);
const IconEye = ({ open }) => open ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
);
const IconGoogle = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);
const IconApple = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

/* ══════════════════════════════════════════════════════════
   LOGIN PAGE
   ══════════════════════════════════════════════════════════ */
export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [showPwd, setShowPwd] = useState(false);
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [shake, setShake] = useState(false);
    const navigate = useNavigate?.() ?? null;

    const validate = () => {
        const e = {};
        if (!form.email) e.email = 'Adresse e-mail requise';
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Format invalide';
        if (!form.password) e.password = 'Mot de passe requis';
        return e;
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const e = validate();
        if (Object.keys(e).length) {
            setErrors(e);
            setShake(true);
            setTimeout(() => setShake(false), 600);
            return;
        }
        setErrors({});
        setLoading(true);
        await new Promise(r => setTimeout(r, 1600)); // simulate request
        setLoading(false);
        // navigate?.('/dashboard');
    };

    const set = (key) => (evt) => {
        setForm(f => ({ ...f, [key]: evt.target.value }));
        if (errors[key]) setErrors(e => ({ ...e, [key]: '' }));
    };

    return (
        <div className="auth-page">

            {/* ── Left visual ─────────────────────────────────── */}
            <div className="auth-visual">
                <div className="auth-orb auth-orb-1" />
                <div className="auth-orb auth-orb-2" />
                <div className="auth-visual-img" />
                <div className="auth-visual-overlay" />
                <div className="auth-visual-content">
                    <p className="auth-visual-tag">
                        <span /> Accès Membre
                    </p>
                    <h1 className="auth-visual-title">
                        Une expérience<br />
                        <em>d'exception</em><br />
                        vous attend
                    </h1>
                    <p className="auth-visual-sub">
                        Connectez-vous à votre espace privilégié et accédez à un univers
                        de services sur mesure.
                    </p>
                </div>
            </div>

            {/* ── Right panel ─────────────────────────────────── */}
            <div className="auth-panel">
                <div className="auth-deco-corner auth-deco-corner-tl" />
                <div className="auth-deco-corner auth-deco-corner-br" />

                <div className="auth-card" style={shake ? { animation: 'shake 0.5s ease both' } : {}}>

                    {/* Logo */}
                    <a href="/" className="auth-logo">
                        <IconLogo /> Maison&nbsp;<em style={{ fontStyle: 'italic', color: 'inherit' }}>d'Or</em>
                    </a>

                    {/* Heading */}
                    <div className="auth-heading">
                        <p className="auth-eyebrow">Connexion</p>
                        <h2 className="auth-title">
                            Bon retour,<br /><em>cher membre</em>
                        </h2>
                        <p className="auth-subtitle">
                            Votre espace exclusif vous attend.
                        </p>
                    </div>

                    {/* Social */}
                    <div className="auth-socials" style={{ marginBottom: 20 }}>
                        <button className="auth-social-btn" type="button">
                            <IconGoogle /> Google
                        </button>
                        <button className="auth-social-btn" type="button">
                            <IconApple /> Apple
                        </button>
                    </div>

                    <div className="auth-divider" style={{ marginBottom: 20 }}>ou</div>

                    {/* Form */}
                    <form className="auth-form" onSubmit={handleSubmit} noValidate>

                        {/* Email */}
                        <div className="auth-field">
                            <label className="auth-label">Adresse e-mail</label>
                            <div className="auth-input-wrap">
                                <input
                                    className={`auth-input ${errors.email ? 'error' : ''}`}
                                    type="email"
                                    placeholder="votre@email.com"
                                    value={form.email}
                                    onChange={set('email')}
                                    autoComplete="email"
                                />
                                <span className="auth-input-icon"><IconMail /></span>
                            </div>
                            {errors.email && <span className="auth-field-error">{errors.email}</span>}
                        </div>

                        {/* Password */}
                        <div className="auth-field">
                            <label className="auth-label">Mot de passe</label>
                            <div className="auth-input-wrap">
                                <input
                                    className={`auth-input ${errors.password ? 'error' : ''}`}
                                    type={showPwd ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={form.password}
                                    onChange={set('password')}
                                    autoComplete="current-password"
                                />
                                <button
                                    className="auth-eye"
                                    type="button"
                                    onClick={() => setShowPwd(v => !v)}
                                    aria-label="Afficher le mot de passe"
                                >
                                    <IconEye open={showPwd} />
                                </button>
                            </div>
                            {errors.password && <span className="auth-field-error">{errors.password}</span>}
                        </div>

                        {/* Extras */}
                        <div className="auth-extras">
                            <label className="auth-check-wrap">
                                <input
                                    className="auth-check"
                                    type="checkbox"
                                    checked={remember}
                                    onChange={e => setRemember(e.target.checked)}
                                />
                                <span className="auth-check-label">Se souvenir de moi</span>
                            </label>
                            <a className="auth-link" href="/forgot-password">Mot de passe oublié ?</a>
                        </div>

                        {/* Submit */}
                        <button
                            className="auth-btn auth-btn-primary"
                            type="submit"
                            disabled={loading}
                            style={{ marginTop: 8 }}
                        >
                            <span className="auth-btn-label">
                                {loading
                                    ? <><div className="auth-spinner" /> Connexion…</>
                                    : 'Se connecter'}
                            </span>
                        </button>
                    </form>

                    {/* Switch */}
                    <div className="auth-switch">
                        Pas encore membre ?
                        <a href="/register">Créer un compte</a>
                    </div>
                </div>

                {/* Shake keyframe injected inline for now */}
                <style>{`
          @keyframes shake {
            0%,100%{transform:translateX(0)}
            20%{transform:translateX(-8px)}
            40%{transform:translateX(8px)}
            60%{transform:translateX(-5px)}
            80%{transform:translateX(5px)}
          }
        `}</style>
            </div>
        </div>
    );
}