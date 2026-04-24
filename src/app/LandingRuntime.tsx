"use client";

import { useEffect } from "react";

const appScript = "// \u2500\u2500\u2500 Headline variants (keyed by cheek dial 0\u201310) \u2500\u2500\u2500\n    function buildHeadline(cheek) {\n      if (cheek <= 2) return 'Track every quid.<br/>Cancel what you don\\'t.';\n      if (cheek <= 5) return 'Track every quid. <span class=\"accent\">Cancel what you don\\'t.</span>';\n      if (cheek <= 8) return 'Track every quid.<br/><span class=\"accent\">Cancel the rest.</span>';\n      return 'Track every <span class=\"accent\">bloody quid.</span><br/>Bin what you don\\'t use.';\n    }\n\n    const App = () => {\n      const [t, setT] = React.useState(window.TWEAK_DEFAULTS);\n\n      // Apply theme + accent on <html>\n      React.useEffect(() => {\n        document.documentElement.setAttribute('data-mode', t.mode);\n        document.documentElement.setAttribute('data-accent', t.accent);\n      }, [t.mode, t.accent]);\n\n      // Reveal-on-scroll \u2014 opt in by adding .reveal-anim on specific elements\n      React.useEffect(() => {\n        const els = document.querySelectorAll('.reveal-anim');\n        if (!els.length) return;\n        const io = new IntersectionObserver((entries) => {\n          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });\n        }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });\n        els.forEach(el => io.observe(el));\n        return () => io.disconnect();\n      }, []);\n\n      const toggleTheme = () => setT({ mode: t.mode === 'dark' ? 'light' : 'dark' });\n      const headline = buildHeadline(t.cheek);\n\n      return (\n        <>\n          <Nav mode={t.mode} onToggleTheme={toggleTheme}/>\n          <Hero headline={headline}/>\n          <WhySection/>\n          <PricingIrony/>\n          <FeaturesSection/>\n          <Migration/>\n          <IOSSignup/>\n          <FAQ/>\n          <Footer/>\n        </>\n      );\n    };\n\n    // Wait for all Babel scripts to finish before mounting\n    const mount = () => {\n      if (!window.Nav || !window.IOSSignup) { setTimeout(mount, 30); return; }\n      ReactDOM.createRoot(document.getElementById('root')).render(<App/>);\n    };\n    mount();";

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export default function LandingRuntime() {
  useEffect(() => {
    let cancelled = false;

    async function boot() {
      const w = window as unknown as {
        __resources: Record<string, string>;
        TWEAK_DEFAULTS: Record<string, unknown>;
        Babel: { transform: (source: string, options: Record<string, unknown>) => { code: string } };
      };

      w.__resources = { appIcon: "/assets/a2b5841c-07db-456e-b491-75cfcc80793d.svg" };
      w.TWEAK_DEFAULTS = { accent: "purple", mode: "dark", cheek: 6, heroStyle: "split" };

      await loadScript("/assets/0a4c55a4-f22f-47b4-b06d-3bb8a52d1553.js");
      await loadScript("/assets/6dde609e-7aea-445f-b8c9-75a39dead02b.js");
      await loadScript("/assets/f6ad39df-06fb-4b7c-9229-3eb52b4a5f18.js");
      if (cancelled) return;

      const sources = await Promise.all([
        "/assets/14ba4479-4a62-4ac3-8ea4-175c73aebbdc.js",
        "/assets/9f5fb02d-da9b-4b4e-842b-690e83df3729.js",
        "/assets/6ff52c36-9765-4a37-86d7-0dcdfbca5d1f.js",
      ].map((src) => fetch(src).then((res) => res.text())));

      if (cancelled) return;
      const transformed = w.Babel.transform(`${sources.join("\n\n")}\n\n${appScript}`, {
        presets: ["react"],
      }).code;
      // Claude Design export ships browser-scoped React components; run the compiled bundle in page scope.
      const runner = document.createElement("script");
      runner.textContent = transformed;
      document.body.appendChild(runner);
    }

    boot().catch((error) => {
      console.error("Failed to boot QuidTrack landing", error);
      const root = document.getElementById("root");
      if (root) root.innerHTML = '<main class="legal-page"><h1>QuidTrack</h1><p>Something failed while loading the landing page. Please refresh.</p></main>';
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return <div id="root" />;
}
