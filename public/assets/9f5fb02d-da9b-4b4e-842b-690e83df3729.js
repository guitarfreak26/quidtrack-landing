// QuidTrack landing — three phone screens: Home, Calendar, Stats

const SUBS_LANDING = [
  { id:'netflix', name:'Netflix', due:'Tomorrow', amt:'£10.99' },
  { id:'octopus', name:'Octopus Energy', due:'Tomorrow', amt:'£67.00' },
  { id:'disney', name:'Disney+', due:'In 2 days', amt:'£7.99' },
  { id:'spotify', name:'Spotify', due:'In 3 days', amt:'£10.99' },
  { id:'amazon', name:'Amazon Prime', due:'In 5 days', amt:'£8.99' },
  { id:'nyt', name:'NYT Digital', due:'In 8 days', amt:'£4.00' },
];

const HomeScreen = () => (
  <PhoneFrame>
    <StatusBar/>
    <div className="q-screen">
      <div className="q-nav">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Icon name="menu" size={22}/>
          <div className="q-title">Subscriptions</div>
        </div>
        <div className="q-actions"><Icon name="plus" size={22}/></div>
      </div>
      <div style={{height:8}}/>
      <div style={{padding:'0 20px'}}>
        <div className="q-card q-summary">
          <div>
            <div className="q-lbl">Summary · next 30 days</div>
            <div className="q-num">£237.48</div>
            <div className="q-nxt">12 subscriptions · avg £19.79</div>
          </div>
          <Sparkline/>
        </div>
      </div>
      <div style={{height:20}}/>
      <div className="q-section-title q-px-20">Upcoming</div>
      <div style={{padding:'0 20px'}}>
        <div className="q-chipset" style={{padding:0, marginBottom:12}}>
          <button className="q-chip on">Next 2 days</button>
          <button className="q-chip">Next 7 days</button>
          <button className="q-chip">Next 30 days</button>
        </div>
      </div>
      <div className="q-list">
        {SUBS_LANDING.map(s => (
          <div key={s.id} className="q-row">
            <BrandMark id={s.id} size={40}/>
            <div className="q-main">
              <div className="q-rtitle">{s.name}</div>
              <div className="q-sub">{s.due}</div>
            </div>
            <div className="q-amt">{s.amt}</div>
            <div className="q-caret"><Icon name="caret" size={16}/></div>
          </div>
        ))}
      </div>
    </div>
    <TabBar active="home"/>
  </PhoneFrame>
);

const CalendarScreenLanding = () => {
  const days = Array.from({length: 35}, (_, i) => i - 2);
  const events = { 3:['#A78BFA'], 8:['#FFB547'], 12:['#FF6B6B'], 14:['#34D399'],
                   18:['#60A5FA'], 20:['#A78BFA','#FFB547'], 25:['#A78BFA'],
                   28:['#FF6B6B','#FFB547'], 29:['#A78BFA'] };
  return (
    <PhoneFrame>
      <StatusBar/>
      <div className="q-screen">
        <div className="q-nav">
          <div className="q-title">Calendar</div>
          <div className="q-actions"><Icon name="caret" size={22}/></div>
        </div>
        <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',padding:'0 20px 12px'}}>
          <div style={{fontSize:22,fontWeight:600,letterSpacing:'-.022em'}}>May 2026</div>
          <div style={{fontSize:13,color:'var(--fg-2)'}}>£237.48 total</div>
        </div>
        <div style={{padding:'0 20px',display:'grid',gridTemplateColumns:'repeat(7,1fr)',fontSize:11,color:'var(--fg-3)',marginBottom:8,textAlign:'center',fontWeight:600}}>
          {['M','T','W','T','F','S','S'].map((d,i)=><div key={i}>{d}</div>)}
        </div>
        <div style={{padding:'0 20px',display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:6}}>
          {days.map((d,i) => {
            const valid = d > 0 && d <= 31;
            const isToday = d === 28;
            return (
              <div key={i} style={{
                aspectRatio:'1', borderRadius:10,
                background: isToday ? 'var(--accent-soft)' : 'transparent',
                border: isToday ? '1px solid var(--accent-line)' : '1px solid transparent',
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                color: valid ? (isToday ? 'var(--accent)' : 'var(--fg)') : 'var(--fg-4)',
                fontSize:15, fontWeight: isToday ? 700 : 500
              }}>
                {valid ? d : ''}
                <div style={{display:'flex',gap:3,marginTop:3,height:6}}>
                  {valid && (events[d]||[]).map((c,j)=>(
                    <div key={j} style={{width:6,height:6,borderRadius:3,background:c}}/>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{height:24}}/>
        <div className="q-section-title q-px-20">28 May · Today</div>
        <div className="q-list">
          <div className="q-row">
            <BrandMark id="netflix" size={40}/>
            <div className="q-main"><div className="q-rtitle">Netflix</div><div className="q-sub">Due today</div></div>
            <div className="q-amt">£10.99</div>
          </div>
          <div className="q-row">
            <BrandMark id="octopus" size={40}/>
            <div className="q-main"><div className="q-rtitle">Octopus Energy</div><div className="q-sub">Due today</div></div>
            <div className="q-amt">£67.00</div>
          </div>
        </div>
      </div>
      <TabBar active="calendar"/>
    </PhoneFrame>
  );
};

const StatsScreenLanding = () => (
  <PhoneFrame>
    <StatusBar/>
    <div className="q-screen">
      <div className="q-nav"><div className="q-title">Stats</div></div>
      <div style={{height:8}}/>
      <div style={{padding:'0 20px'}}>
        <div className="q-card">
          <div style={{fontSize:13,color:'var(--fg-2)'}}>Annual spend</div>
          <div style={{fontFamily:'var(--font-display)',fontSize:34,fontWeight:700,letterSpacing:'-.035em',marginTop:4,color:'var(--accent)',fontVariantNumeric:'tabular-nums'}}>£2,849.76</div>
          <div style={{fontSize:12,color:'var(--fg-3)',marginTop:4}}>+£184 vs last year</div>
          <div style={{marginTop:16}}><Sparkline/></div>
          <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--fg-3)',marginTop:8}}>
            <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
          </div>
        </div>
      </div>
      <div style={{height:16}}/>
      <div style={{padding:'0 20px'}}>
        <div className="q-card" style={{display:'flex',alignItems:'center',justifyContent:'space-between',background:'var(--accent-soft)',borderColor:'var(--accent-line)'}}>
          <div>
            <div style={{fontSize:11,color:'var(--accent)',fontWeight:700,letterSpacing:'.04em'}}>BINNED THIS YEAR</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:28,fontWeight:700,letterSpacing:'-.03em',marginTop:2,fontVariantNumeric:'tabular-nums',color:'var(--fg)'}}>£428.76</div>
            <div style={{fontSize:12,color:'var(--fg-2)',marginTop:2}}>4 subscriptions cancelled</div>
          </div>
        </div>
      </div>
      <div style={{height:24}}/>
      <div className="q-section-title q-px-20">By category</div>
      <div style={{padding:'0 20px',display:'flex',flexDirection:'column',gap:12}}>
        {[
          ['Entertainment','#A78BFA',37.96, 65],
          ['Bills','#FF6B6B',108.00, 100],
          ['Utilities','#FFB547',67.00, 62],
          ['Lifestyle','#34D399',15.99, 28],
          ['Productivity','#60A5FA',7.99, 14],
        ].map(([n,c,a,w]) => (
          <div key={n} style={{display:'flex',flexDirection:'column',gap:6}}>
            <div style={{display:'flex',justifyContent:'space-between',fontSize:13,color:'var(--fg)'}}>
              <span style={{fontWeight:600}}>{n}</span>
              <span style={{fontVariantNumeric:'tabular-nums'}}>£{a.toFixed(2)}</span>
            </div>
            <div style={{height:6,background:'rgba(255,255,255,.06)',borderRadius:3,overflow:'hidden'}}>
              <div style={{width:`${w}%`,height:'100%',background:c,borderRadius:3}}/>
            </div>
          </div>
        ))}
      </div>
    </div>
    <TabBar active="stats"/>
  </PhoneFrame>
);

Object.assign(window, { HomeScreen, CalendarScreenLanding, StatsScreenLanding });
