"use client";
import { useState, useEffect } from "react";

function loadHighLevel(widgetId: string) {
  if (!widgetId) return;
  if (typeof document === "undefined") return;
  const existing = document.querySelector('script[src*="leadconnectorhq"]');
  if (existing) return;
  const s = document.createElement("script");
  s.src = "https://widgets.leadconnectorhq.com/loader.js";
  s.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
  s.setAttribute("data-widget-id", widgetId);
  document.body.appendChild(s);
}

export default function CookieBanner({ widgetId }: { widgetId: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "accepted") {
      loadHighLevel(widgetId);
      return;
    }
    if (consent === "declined") return;
    setShow(true);
  }, [widgetId]);

  if (!show) return null;

  // Compact zodat de banner de knoppen boven de vouw niet afdekt (gemeten 11-11 op dierenartsai, 12-11 op reparatieai: op een telefoon
  // 164 px hoog, 19% van het scherm, over "Vraag een live demo aan"; op desktop over "Start Nu").
  // Zelfde kaart, kleuren en tekst; Weigeren even goed leesbaar als Accepteren. De keuze en
  // het laden van de chat (cookie_consent) zijn ongewijzigd.
  return (
    <>
      <style>{`
        @keyframes ckspin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .ck-banner{position:fixed;bottom:0;left:0;right:0;z-index:99999;padding:8px;display:flex;justify-content:center;pointer-events:none}
        .ck-banner-inner{pointer-events:auto;max-width:760px;width:100%;background:#141419;border:1px solid rgba(255,255,255,0.08);border-radius:999px;padding:6px 6px 6px 14px;display:flex;align-items:center;gap:10px;box-shadow:0 -6px 30px rgba(0,0,0,0.35)}
        .ck-banner-inner img{width:28px;height:28px;animation:ckspin 3s linear infinite;flex-shrink:0}
        .ck-banner-text{flex:1;color:rgba(255,255,255,0.85);font-size:13px;line-height:1.4;margin:0}
        .ck-banner-buttons{display:flex;gap:6px;flex-shrink:0}
        .ck-banner-buttons button{padding:7px 14px;border-radius:100px;font-size:13px;cursor:pointer;line-height:1.2}
        .ck-decline{background:transparent;color:rgba(255,255,255,0.85);border:1px solid rgba(255,255,255,0.35)}
        .ck-accept{background:#C1FF72;color:#0a0a0f;border:1px solid #C1FF72;font-weight:700}
        @media(max-width:600px){
          .ck-banner{padding:6px}
          .ck-banner-inner{border-radius:16px;padding:8px 8px 8px 12px;gap:8px}
          .ck-banner-inner img{display:none}
          .ck-banner-text{font-size:12.5px;line-height:1.35}
          .ck-banner-buttons{flex-direction:column;gap:4px}
          .ck-banner-buttons button{padding:6px 12px;font-size:12.5px}
        }
        @media(prefers-reduced-motion:reduce){.ck-banner-inner img{animation:none!important}}
      `}</style>
      <div className="ck-banner" role="region" aria-label="Cookiekeuze">
        <div className="ck-banner-inner">
          <img src="/images/cookie.png" alt="" />
          <p className="ck-banner-text">
            We gebruiken cookies voor onze chatfunctie. Lees ons{" "}
            <a href="/privacy" style={{color:"#C1FF72",textDecoration:"underline"}}>privacybeleid</a>.
          </p>
          <div className="ck-banner-buttons">
            <button className="ck-decline" onClick={() => { localStorage.setItem("cookie_consent","declined"); setShow(false); }}>Weigeren</button>
            <button className="ck-accept" onClick={() => { localStorage.setItem("cookie_consent","accepted"); setShow(false); loadHighLevel(widgetId); }}>Accepteren</button>
          </div>
        </div>
      </div>
    </>
  );
}
