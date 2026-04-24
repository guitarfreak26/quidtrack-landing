// QuidTrack landing — kit primitives (inlined subset of the design system)
// Phone frame, Icon, Sparkline, BrandMark — copied and adapted from the design system.

const Icon = ({ name, size = 22, color, stroke = 1.5 }) => {
  const paths = {
    'house': <><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1v-9.5Z"/></>,
    'squares': <><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></>,
    'calendar': <><rect x="3.5" y="5.5" width="17" height="15" rx="2"/><path d="M3.5 10h17M8 3.5v4M16 3.5v4"/></>,
    'chart': <><path d="M4 19h16"/><path d="M4 15 9 10l4 3 7-8"/></>,
    'gear': <><circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></>,
    'plus': <><path d="M12 5v14M5 12h14"/></>,
    'menu': <><path d="M4 7h16M4 12h16M4 17h10"/></>,
    'caret': <><path d="m9 5 7 7-7 7"/></>,
    'check': <><path d="m4 12 5 5 11-12"/></>,
    'bell': <><path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2Z"/><path d="M10 20a2 2 0 0 0 4 0"/></>,
    'mail': <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></>,
    'sparkle': <><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></>,
    'bolt': <><path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z"/></>,
    'pound': <><path d="M8 20h10"/><path d="M14 4a4 4 0 0 0-4 4v3H7m0 0h6m-6 0v2a4 4 0 0 1-1.5 3H18"/></>,
    'wallet': <><path d="M4 7a2 2 0 0 1 2-2h11v4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14v-12"/><circle cx="16" cy="13" r="1.2" fill="currentColor"/></>,
    'sync': <><path d="M20 11A8 8 0 1 0 12 20"/><path d="M20 4v7h-7"/></>,
    'grid': <><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></>,
    'infinity': <><path d="M6 12a4 4 0 1 1 4 4c-3 0-5-8-8-8a4 4 0 1 0 0 8 4 4 0 0 0 4-4 4 4 0 0 1 4-4c3 0 5 8 8 8a4 4 0 1 0 0-8"/></>,
    'upload': <><path d="M12 15V3M6 9l6-6 6 6M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></>,
    'sun': <><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></>,
    'moon': <><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></>,
    'shield': <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></>,
    'uk': <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18"/></>,
    'lock': <><rect x="4.5" y="11" width="15" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || 'currentColor'} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || null}
    </svg>
  );
};

const StatusBar = () => (
  <div className="statusbar">
    <span>9:41</span>
    <div className="sb-icons">
      <svg viewBox="0 0 17 11" width="17" height="11" fill="currentColor"><path d="M1 8h2v2H1zM5 6h2v4H5zM9 3h2v7H9zM13 1h2v9h-2z"/></svg>
      <svg viewBox="0 0 16 11" width="16" height="11" fill="currentColor"><path d="M8 3a7 7 0 0 1 5 2l-1 1a5.5 5.5 0 0 0-8 0l-1-1a7 7 0 0 1 5-2zm0 3a4 4 0 0 1 2.8 1.2l-1 1a2.5 2.5 0 0 0-3.6 0l-1-1A4 4 0 0 1 8 6zm0 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>
      <svg viewBox="0 0 25 11" width="25" height="11" fill="currentColor"><rect x="0.5" y="0.5" width="21" height="10" rx="2.5" fill="none" stroke="currentColor" strokeOpacity="0.4"/><rect x="2" y="2" width="18" height="7" rx="1.2"/><rect x="22.5" y="3.5" width="1.5" height="4" rx="0.5" fillOpacity="0.4"/></svg>
    </div>
  </div>
);

const TabBar = ({ active = 'home' }) => (
  <div className="q-tabbar">
    {[
      ['home', 'Home', 'house'],
      ['categories', 'Categories', 'squares'],
      ['calendar', 'Calendar', 'calendar'],
      ['stats', 'Stats', 'chart'],
      ['settings', 'Settings', 'gear'],
    ].map(([id, lbl, ic]) => (
      <div key={id} className={`q-tab ${active === id ? 'active' : ''}`}>
        <Icon name={ic} size={22} />
        <div className="q-lbl">{lbl}</div>
      </div>
    ))}
  </div>
);

const PhoneFrame = ({ children }) => (
  <div className="q-phone">
    <div className="q-notch" />
    {children}
  </div>
);

const BRAND_STYLES = {
  netflix:  { bg:'#000',    color:'#E50914', font:"'Bebas Neue','Impact',sans-serif", weight:900, size:0.60, ls:'-1px', text:'N' },
  octopus:  { bg:'#100030', color:'#F7B500', font:'Inter,sans-serif',                 weight:800, size:0.30, ls:'-0.03em', text:'octo' },
  disney:   { bg:'#0A1A3D', color:'#FFFFFF', font:'Inter,sans-serif',                 weight:600, size:0.24, ls:'-0.02em', italic:true, text:'Disney+' },
  amazon:   { bg:'#00A8E1', color:'#FFFFFF', font:'Inter,sans-serif',                 weight:700, size:0.18, ls:'0.04em',  text:'prime', multi:'video' },
  nyt:      { bg:'#FFFFFF', color:'#000000', font:'Georgia,serif',                    weight:700, size:0.42, ls:'-0.02em', italic:true, text:'T' },
  bt:       { bg:'#5514B4', color:'#FFFFFF', font:'Inter,sans-serif',                 weight:700, size:0.38, ls:'-0.02em', text:'BT' },
  sky:      { bg:'#0072C9', color:'#FFFFFF', font:'Inter,sans-serif',                 weight:700, size:0.32, ls:'-0.01em', text:'sky' },
};

const BrandMark = ({ id, size = 40 }) => {
  if (id === 'spotify') {
    return (
      <div style={{width:size,height:size,borderRadius:size*0.25,overflow:'hidden',background:'#1DB954',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
        <svg viewBox="0 0 24 24" width={size*0.72} height={size*0.72}>
          <path d="M7 10c3-1 7-.8 10 1M7.5 13c2.5-.8 6-.6 8.5 1M8 15.5c2-.6 4.5-.4 6.5.8" stroke="#000" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
    );
  }
  const s = BRAND_STYLES[id];
  if (!s) {
    return <div style={{width:size,height:size,borderRadius:size*0.25,background:'rgba(255,255,255,0.06)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:size*0.42,flexShrink:0}}>?</div>;
  }
  return (
    <div style={{
      width:size, height:size, borderRadius:size*0.25, background:s.bg, color:s.color,
      display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
      fontFamily:s.font, fontWeight:s.weight, fontSize:size*s.size, letterSpacing:s.ls,
      fontStyle:s.italic?'italic':'normal', lineHeight:s.multi?1.05:1, textAlign:'center', overflow:'hidden'
    }}>
      {s.multi ? <span>{s.text}<br/>{s.multi}</span> : s.text}
    </div>
  );
};

const Sparkline = ({ color = 'var(--accent)' }) => (
  <svg viewBox="0 0 140 56" preserveAspectRatio="none" style={{width:140,height:56}}>
    <defs>
      <linearGradient id="sparkfill-qt" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor={color} stopOpacity="0.22"/>
        <stop offset="1" stopColor={color} stopOpacity="0"/>
      </linearGradient>
    </defs>
    <path d="M0 42 L16 38 L28 40 L44 30 L58 34 L74 22 L92 26 L108 14 L124 18 L140 6"
          fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M0 42 L16 38 L28 40 L44 30 L58 34 L74 22 L92 26 L108 14 L124 18 L140 6 L140 56 L0 56 Z"
          fill="url(#sparkfill-qt)"/>
  </svg>
);

Object.assign(window, { Icon, StatusBar, TabBar, PhoneFrame, BrandMark, Sparkline });
