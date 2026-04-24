// QuidTrack landing — section components

const PlayBadge = ({ style }) => (
  <a className="playbadge" style={style} href="#" aria-label="Get QuidTrack on Google Play">
    <svg className="playtri" width="22" height="24" viewBox="0 0 22 24" fill="none">
      <path d="M1.5 1.5 L1.5 22.5 L20 12 Z" fill="currentColor" fillOpacity="0.9"/>
    </svg>
    <div className="txt">
      <span className="small">GET IT ON</span>
      <span className="big">Google Play</span>
    </div>
  </a>
);

const Nav = ({ mode, onToggleTheme }) => (
  <header className="nav-bar">
    <div className="wrap nav-inner">
      <div className="nav-brand">
        <img className="mark" src={window.__resources.appIcon} alt="QuidTrack"/>
        <div className="name">QuidTrack</div>
      </div>
      <nav className="nav-links">
        <a href="#why">Why</a>
        <a href="#pricing">Pricing</a>
        <a href="#features">Features</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="nav-right">
        <button className="theme-pill" onClick={onToggleTheme} aria-label="Toggle theme">
          <Icon name={mode === 'dark' ? 'sun' : 'moon'} size={16}/>
        </button>
        <a className="btn-pill" href="#pricing">Get it</a>
      </div>
    </div>
  </header>
);

const Hero = ({ headline }) => (
  <section className="hero">
    <div className="wrap">
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-eyebrow"><span className="dot"/> Free to download · Pro £4.99 launch</span>
          <h1 dangerouslySetInnerHTML={{__html: headline}}/>
          <p className="sub">Pay once, track every quid. Start free with 5 subscriptions, then unlock Pro forever when you need the whole lot.</p>
          <div className="hero-ctas">
            <PlayBadge/>
            <a className="btn-secondary" href="#ios">
              <Icon name="sparkle" size={16}/>
              iOS coming soon
            </a>
          </div>
          <div className="hero-meta">
            <div className="stat"><div className="n">Free</div><div className="l">Track 5 subscriptions</div></div>
            <div className="stat"><div className="n">£4.99</div><div className="l">Pro launch unlock</div></div>
            <div className="stat"><div className="n">0</div><div className="l">Bank logins required</div></div>
          </div>
        </div>
        <div className="phones-stage">
          <div className="phone-wrap p-left"><CalendarScreenLanding/></div>
          <div className="phone-wrap p-center"><HomeScreen/></div>
          <div className="phone-wrap p-right"><StatsScreenLanding/></div>
        </div>
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section id="why">
    <div className="wrap reveal">
      <div className="eyebrow">Why QuidTrack</div>
      <h2 className="section-title">Built for Britain.<br/>Not built to rent.</h2>
      <p className="section-lede">Most subscription trackers are American apps with pound signs bolted on, charging you £8 a month for the privilege. We did it the other way round.</p>
      <div className="cards-3">
        <div className="card-lg">
          <div className="icon-box"><Icon name="uk" size={22}/></div>
          <h3>UK-first catalogue</h3>
          <p>150+ UK services detected out of the box — Netflix, Sky, Octopus, BT, TV Licence, plus energy, broadband, and creditors you actually owe.</p>
          <div className="tag"><Icon name="check" size={14}/> Core tracking works offline</div>
        </div>
        <div className="card-lg">
          <div className="icon-box"><Icon name="lock" size={22}/></div>
          <h3>No Open Banking login</h3>
          <p>Add manually — no bank data required. If you upgrade to Pro, CSV and Emma imports are parsed on your phone. We never see your statements.</p>
          <div className="tag"><Icon name="shield" size={14}/> Manual entry is free</div>
        </div>
        <div className="card-lg">
          <div className="icon-box"><Icon name="wallet" size={22}/></div>
          <h3>Free first, Pro forever</h3>
          <p>Download free and track up to 5 subscriptions. Pro is £4.99 for the first 1,000, then £14.99 — one payment, no renewal.</p>
          <div className="tag"><Icon name="infinity" size={14}/> Pro includes future updates</div>
        </div>
      </div>
    </div>
  </section>
);

const PricingIrony = () => (
  <section id="pricing" className="pricing-drama">
    <div className="wrap reveal">
      <h2 className="huge">
        No subscriptions.<br/>
        <span className="x">Ever.</span>
      </h2>
      <p className="irony">Yes, we see the irony. Free to start, no subscription to unlock. <em>Pay once, track every quid.</em></p>
      <div className="plan-compare" aria-label="Free vs Pro comparison">
        <div className="plan-card free-plan">
          <div className="ribbon muted">FREE</div>
          <h3>Free</h3>
          <p className="plan-price">£0</p>
          <div className="lede">Start without paying, signing up, or handing over bank data.</div>
          <div className="divider"/>
          <div className="feats">
            <div><span className="ico"><Icon name="check" size={16}/></span>Track up to 5 subscriptions</div>
            <div><span className="ico"><Icon name="check" size={16}/></span>Manual entry</div>
            <div><span className="ico"><Icon name="check" size={16}/></span>UK catalogue + cancellation links</div>
            <div><span className="ico"><Icon name="check" size={16}/></span>local-only storage</div>
          </div>
        </div>
        <div className="plan-card pro-plan">
          <div className="ribbon"><Icon name="sparkle" size={11} stroke={2}/> PRO · FIRST 1,000</div>
          <h3>Pro (£4.99 launch)</h3>
          <div className="row2">
            <div className="price">£4.99</div>
            <div className="strike">£14.99 after first 1,000</div>
          </div>
          <div className="lede">One-time. Not a trial. Not a renewal. Unlock forever on your Android devices.</div>
          <div className="divider"/>
          <div className="feats">
            <div><span className="ico"><Icon name="check" size={16}/></span>Unlimited subscriptions</div>
            <div><span className="ico"><Icon name="check" size={16}/></span>CSV + Emma imports</div>
            <div><span className="ico"><Icon name="check" size={16}/></span>Home-screen widgets</div>
            <div><span className="ico"><Icon name="check" size={16}/></span>Cross-device sync</div>
            <div><span className="ico"><Icon name="check" size={16}/></span>All future updates</div>
          </div>
          <div style={{marginTop:24}}><PlayBadge style={{width:'100%'}}/></div>
        </div>
      </div>
    </div>
  </section>
);

const FEATURES = [
  { ic:'infinity',  t:'Free manual tracking', d:'Add manually — no bank data required. Free users can track up to 5 subscriptions locally.' },
  { ic:'sync',      t:'Google Drive sync',  d:'Pro sync is stored on your Google Drive, never on our servers. iCloud sync will arrive when iOS lands.' },
  { ic:'grid',      t:'Home-screen widgets',d:'Pro widgets show what you owe without unlocking the app.' },
  { ic:'calendar',  t:'Calendar view',      d:'See every charge on a month grid. Spot the weeks that quietly bleed you.' },
  { ic:'bell',      t:'Day-before reminders', d:'A push notification the night before, in case you\'d rather cancel than pay.' },
  { ic:'upload',    t:'CSV + Emma import',  d:'Pro imports are parsed on your phone. Nothing leaves your device unless you choose sync.' },
];

const FeaturesSection = () => (
  <section id="features">
    <div className="wrap reveal">
      <div className="eyebrow">Features</div>
      <h2 className="section-title">Everything you need.<br/>Nothing you don't.</h2>
      <p className="section-lede">The bits that matter, without the dashboard-of-dashboards nonsense.</p>
      <div className="features">
        {FEATURES.map(f => (
          <div key={f.t} className="feature">
            <div className="ico"><Icon name={f.ic} size={26}/></div>
            <h4>{f.t}</h4>
            <p>{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Migration = () => (
  <section>
    <div className="wrap reveal">
      <div className="migration">
        <div className="migration-grid">
          <div>
            <div className="eyebrow">Switching?</div>
            <h2>
              Paying Emma <span className="strike-big">£9.99/mo</span> to tell you<br/>
              you pay too much for things?<br/>
              <span className="hi">Manual is free. Pro imports once. £4.99.</span>
            </h2>
            <p className="lede">Start free with manual entry. Upgrade to Pro when you want CSV or Emma import, and keep the £115 a year. We won't judge — well, maybe a bit.</p>
            <PlayBadge/>
          </div>
          <div className="compare">
            <div className="cell them">
              <div className="n-sm">Emma / Snoop</div>
              <div className="p-big">£9.99<span style={{fontSize:14,color:'var(--fg-3)',fontWeight:500}}>/mo</span></div>
              <div className="p-cadence">Every month. Forever.</div>
              <div className="per-yr">£119.88 / year</div>
            </div>
            <div className="cell us">
              <div className="n-sm">QuidTrack</div>
              <div className="p-big">£4.99</div>
              <div className="p-cadence">Free to start. Pro once.</div>
              <div className="per-yr">£4.99 launch unlock</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const IOSSignup = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);

    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('iOS waitlist signup failed', error);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="ios" className="ios-signup">
      <div className="wrap reveal">
        <div className="signup-card">
          <div>
            <div className="eyebrow">iOS waitlist</div>
            <h2 className="section-title">On iPhone?<br/>We'll email when it's ready.</h2>
            <p className="section-lede">No newsletter nonsense. Just the App Store launch email and the odd important update.</p>
          </div>
          {submitted ? (
            <div className="signup-success" role="status">You're on the list — we'll email when iOS ships.</div>
          ) : (
            <form name="ios-waitlist" method="POST" action="/forms.html" data-netlify="true" netlify-honeypot="bot-field" className="signup-form" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="ios-waitlist" />
              <p className="hidden"><input name="bot-field" /></p>
              <input type="email" name="email" placeholder="you@example.com" required />
              <button type="submit" className="btn-pill" disabled={submitting}>{submitting ? 'Joining…' : 'Tell me when iOS lands'}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const FAQ_DATA = [
  { q: 'Is Pro really one-time?',
    a: '<strong>Really.</strong> QuidTrack is free to download. Pro is £4.99 for the first 1,000, £14.99 after, and it is not a subscription. Pay once, unlock Pro forever.' },
  { q: 'Do you see my bank data?',
    a: 'No. There\'s no Open Banking integration. Manual entry needs no bank data at all, and Pro imports are parsed locally on your phone. We\'re not a data business — we\'re a freemium app with a one-time Pro unlock.' },
  { q: 'Which UK banks work with CSV import?',
    a: 'Monzo, Starling, Revolut, HSBC, Barclays, Lloyds, NatWest, Santander, Nationwide, First Direct, TSB, Metro, Chase UK, and a few more. If your bank exports a statement, we\'ll handle it.' },
  { q: 'Does it actually cancel subscriptions for me?',
    a: 'No. We show you what you\'re paying, when it\'s due, and how to cancel it (deep link to the provider). You do the tapping. Nobody \'cancels subscriptions for you\' without you logging in somewhere — and we\'re not asking you to do that.' },
  { q: 'When is iOS coming?',
    a: 'Android first, iOS later this year. Build the thing properly on one platform, then port it. If you\'re on iPhone, sign up below and we\'ll email the day it\'s on the App Store.' },
  { q: 'Why should I trust a new app with this?',
    a: 'You probably shouldn\'t yet. Read the privacy policy (short — we wrote it ourselves, no legalese). If you\'re not convinced, the £4.99 is refundable via Google Play for 48 hours. And we\'re made by ALARA Studios — real people, UK-based.' },
];

const FAQ = () => {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq">
      <div className="wrap reveal">
        <div className="eyebrow">FAQ</div>
        <h2 className="section-title">Questions you'll probably ask.<br/>Answered without the marketing voice.</h2>
        <div className="faq-list">
          {FAQ_DATA.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span>
                <span className="plus"><Icon name="plus" size={22} stroke={2}/></span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner" dangerouslySetInnerHTML={{__html: f.a}}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <div className="wrap">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={window.__resources.appIcon} width="40" height="40" alt="QuidTrack" style={{borderRadius:10,display:'block'}}/>
          <div className="name">QuidTrack</div>
          <p>Track every quid. Cancel what you don't. Made in the UK by ALARA Studios.</p>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a>Changelog</a>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms</a>
          <a>Cookies</a>
        </div>
        <div className="footer-col">
          <h5>Get in touch</h5>
          <a href="mailto:hello@quidtrack.app">General: hello@quidtrack.app</a>
          <a href="mailto:support@quidtrack.app">Support: support@quidtrack.app</a>
          <a href="mailto:privacy@quidtrack.app">Privacy: privacy@quidtrack.app</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copy">© 2026 ALARA Studios. All rights reserved.</div>
        <div className="tag-alara">Made with <b>Inter</b>, cynicism, and far too much tea.</div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, Hero, WhySection, PricingIrony, FeaturesSection, Migration, IOSSignup, FAQ, Footer });
