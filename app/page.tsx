"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

/**
 * Portfolio — Aituar Abdiluly · Fullstack vývojář (Vue / React / NestJS)
 * Estetika: "systémová specifikace" — mono popisky, vlasová mřížka, projekty jako záznamy.
 */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;450;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

.pf{
  --paper:#F1F1EE; --paper2:#FAFAF9; --ink:#15171C; --muted:#6A6D74;
  --line:#DEDDD7; --accent:#2B4FE0; --chip:#E7E6E0;
  background:var(--paper); color:var(--ink);
  font-family:'Inter',system-ui,sans-serif;
  -webkit-font-smoothing:antialiased; line-height:1.5; min-height:100vh;
}
.pf *{box-sizing:border-box;}
.pf-wrap{max-width:980px; margin:0 auto; padding:0 28px;}
.disp{font-family:'Space Grotesk',sans-serif;}
.eyebrow{font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--muted);}
.accent-dot{color:var(--accent);}
.pf-section{padding:54px 0; border-top:1px solid var(--line);}
.sec-head{display:flex; align-items:baseline; gap:14px; margin-bottom:30px;}
.sec-idx{font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--accent); letter-spacing:.1em;}
.sec-title{font-family:'Space Grotesk',sans-serif; font-weight:600; font-size:15px; letter-spacing:.02em; text-transform:uppercase;}
.hero{padding:72px 0 58px;}
.hero h1{font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:clamp(40px,7vw,76px); line-height:.98; letter-spacing:-.02em; margin:18px 0 0;}
.hero .role{font-family:'Space Grotesk',sans-serif; font-weight:500; font-size:clamp(18px,2.4vw,23px); color:var(--ink); margin-top:14px; letter-spacing:-.01em;}
.hero .thesis{font-size:clamp(16px,2vw,18px); color:var(--muted); max-width:560px; margin-top:18px;}
.meta-row{display:flex; flex-wrap:wrap; gap:8px 22px; margin-top:30px; font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--muted);}
.meta-row .k{color:var(--ink);}
.avail{display:inline-flex; align-items:center; gap:7px;}
.pulse{width:7px;height:7px;border-radius:50%;background:#2faa55;box-shadow:0 0 0 0 rgba(47,170,85,.5);animation:pulse 2.4s infinite;}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(47,170,85,.5)}70%{box-shadow:0 0 0 7px rgba(47,170,85,0)}100%{box-shadow:0 0 0 0 rgba(47,170,85,0)}}
.cta-row{display:flex; flex-wrap:wrap; gap:12px; margin-top:30px;}
.btn-primary{background:var(--accent)!important; color:#fff!important; border-radius:2px!important; font-family:'JetBrains Mono',monospace; letter-spacing:.02em;}
.btn-ghost{background:transparent!important; color:var(--ink)!important; border:1px solid var(--line)!important; border-radius:2px!important; font-family:'JetBrains Mono',monospace;}
.skill-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:1px; background:var(--line); border:1px solid var(--line);}
.skill-cell{background:var(--paper); padding:18px 18px 20px;}
.skill-cell .lab{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--accent); margin-bottom:10px;}
.skill-cell .items{font-size:14.5px; color:var(--ink); line-height:1.7;}
.rec{display:grid; grid-template-columns:128px 1fr; gap:24px; padding:26px 0; border-top:1px solid var(--line);}
.rec:first-child{border-top:none;}
.rec .year{font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--muted); padding-top:3px;}
.rec .domain{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.08em; text-transform:uppercase; color:var(--accent); display:block; margin-top:6px;}
.rec h3{font-family:'Space Grotesk',sans-serif; font-weight:600; font-size:21px; letter-spacing:-.01em; margin:0;}
.rec .sub{color:var(--muted); font-size:14.5px; margin:6px 0 12px;}
.rec .stack{display:flex; flex-wrap:wrap; gap:6px;}
.chip{font-family:'JetBrains Mono',monospace; font-size:11.5px; color:var(--ink); background:var(--chip); border-radius:2px; padding:3px 8px;}
.tl-item{display:grid; grid-template-columns:170px 1fr; gap:24px; padding:16px 0;}
.tl-item .when{font-family:'JetBrains Mono',monospace; font-size:12.5px; color:var(--muted); padding-top:2px;}
.tl-item .role-t{font-family:'Space Grotesk',sans-serif; font-weight:600; font-size:16px;}
.tl-item .co{color:var(--muted); font-size:14px;}
.contact{padding:56px 0 70px; border-top:1px solid var(--line);}
.contact h2{font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:clamp(26px,4vw,40px); letter-spacing:-.02em; margin:8px 0 26px;}
.links{display:flex; flex-direction:column; gap:2px;}
.lnk{display:flex; align-items:center; justify-content:space-between; gap:16px; padding:16px 4px; border-top:1px solid var(--line); text-decoration:none; color:var(--ink); transition:padding-left .18s ease, color .18s ease;}
.lnk:last-child{border-bottom:1px solid var(--line);}
.lnk:hover{padding-left:12px; color:var(--accent);}
.lnk .left{display:flex; align-items:center; gap:14px;}
.lnk .lab{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.12em; text-transform:uppercase; color:var(--muted); width:88px;}
.lnk .val{font-size:16px;}
.lnk .arrow{opacity:.4; transition:opacity .18s ease, transform .18s ease;}
.lnk:hover .arrow{opacity:1; transform:translate(2px,-2px);}
.foot{padding:22px 0 40px; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:var(--muted); display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;}
.reveal{opacity:0; transform:translateY(10px); animation:rise .7s ease forwards;}
@keyframes rise{to{opacity:1; transform:none;}}
@media (max-width:560px){ .rec,.tl-item{grid-template-columns:1fr; gap:6px;} .rec .year,.tl-item .when{padding-top:0;} .lnk .lab{width:72px;} }
@media (prefers-reduced-motion:reduce){ .reveal{animation:none; opacity:1; transform:none;} .pulse{animation:none;} }
`;

const projects = [
  { year: "2024 — nyní", domain: "B2B marketplace", title: "AgDeals",
    sub: "Platforma pro zemědělské obchodování — odpovědnost za klíčové funkce napříč stackem, důraz na konzistenci dat a výkon.",
    stack: ["Vue 2/3", "Meteor", "MongoDB"] },
  { year: "2025", domain: "Fintech / Leasing", title: "Systém správy leasingu",
    sub: "Full-stack nástroj na míru. Asynchronní upload obrázků na S3, čistý návrh API, CI/CD od nuly.",
    stack: ["React", "NestJS", "PostgreSQL", "AWS S3", "Docker"] },
  { year: "2024", domain: "Interní systémy", title: "Systém správy prádelny",
    sub: "Interní provozní aplikace — modulární UI, zdokumentované REST API, jednotkové testy backendu.",
    stack: ["Vue 3", "Pinia", "Node", "Express", "PostgreSQL", "Swagger"] },
  { year: "2022 — 2024", domain: "Logistika / Telematika", title: "Systém správy vozového parku",
    sub: "Vedl jsem migraci Vue 2 → Vue 3 a refaktor Vuex → Pinia; zkrátil časy načítání pomocí code splittingu.",
    stack: ["Vue 2/3", "Pinia", "Vite", "C# backend"] },
  { year: "2021", domain: "Mobilní / Nábor", title: "Personální platforma (Norsko)",
    sub: "Redesign iOS a Android aplikace, E2E testy a knihovna znovupoužitelných komponent.",
    stack: ["React Native", "Cypress", "Storybook", "Next.js"] },
];

const timeline = [
  { when: "ZÁŘ 2024 —", role: "Fullstack vývojář", co: "Agdata · Chytré zemědělství" },
  { when: "ÚNO — LIS 2025", role: "Fullstack vývojář", co: "ALD Mobility Expert · Leasing" },
  { when: "LED — ZÁŘ 2024", role: "Fullstack vývojář", co: "Kijibato Solutions" },
  { when: "LED 2022 — KVĚ 2024", role: "Vue vývojář", co: "GPS Dozor · Telematika" },
  { when: "ÚNO — PRO 2021", role: "React / RN vývojář", co: "Webscope (remote)" },
];

const skills = [
  { lab: "Frontend", items: "Vue 2/3 · React · React Native · Next.js · Pinia · Shadcn" },
  { lab: "Backend", items: "NestJS · Node.js · Express · Meteor" },
  { lab: "Infra", items: "Docker · GitHub Actions · Azure DevOps · AWS S3" },
  { lab: "Data", items: "PostgreSQL · MongoDB" },
  { lab: "AI postupy", items: "Claude Code · Spec-driven vývoj · Orchestrace úloh" },
];

export default function Page() {
  return (
    <div className="pf">
      <style>{css}</style>
      <div className="pf-wrap">
        <header className="hero reveal">
          <span className="eyebrow">// Fullstack vývojář <span className="accent-dot">●</span> Praha, CZ</span>
          <h1 className="disp">Aituar<br/>Abdiluly</h1>
          <div className="role">Fullstack vývojář — Vue / React / NestJS</div>
          <p className="thesis">
            Stavím interní systémy, na kterých firmy reálně běží — webové aplikace na míru,
            dashboardy a B2B platformy, od frontendu po backend.
          </p>
          <div className="meta-row">
            <span className="avail"><span className="pulse" /> <span className="k">K dispozici</span> na freelance i dlouhodobě</span>
            <span><span className="k">Lokace</span> Praha / Remote</span>
            <span><span className="k">Jazyky</span> EN plynule · CZ středně pokročilá</span>
          </div>
          <div className="cta-row">
            <Button asChild className="btn-primary"><a href="mailto:aituufs@gmail.com">Poptat projekt</a></Button>
            <Button asChild className="btn-ghost"><a href="https://www.linkedin.com/in/aituar-abdiluly-b19425234" target="_blank" rel="noreferrer">LinkedIn ↗</a></Button>
          </div>
        </header>

        <section className="pf-section">
          <div className="sec-head"><span className="sec-idx">01</span><span className="sec-title">Stack</span></div>
          <div className="skill-grid">
            {skills.map((s) => (
              <div className="skill-cell" key={s.lab}>
                <div className="lab">{s.lab}</div>
                <div className="items">{s.items}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-section">
          <div className="sec-head"><span className="sec-idx">02</span><span className="sec-title">Vybrané projekty</span></div>
          <div>
            {projects.map((p) => (
              <article className="rec" key={p.title}>
                <div className="year">{p.year}<span className="domain">{p.domain}</span></div>
                <div>
                  <h3 className="disp">{p.title}</h3>
                  <p className="sub">{p.sub}</p>
                  <div className="stack">{p.stack.map((t) => (<span className="chip" key={t}>{t}</span>))}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pf-section">
          <div className="sec-head"><span className="sec-idx">03</span><span className="sec-title">Zkušenosti</span></div>
          <div>
            {timeline.map((t, i) => (
              <div className="tl-item" key={i}>
                <div className="when">{t.when}</div>
                <div><div className="role-t">{t.role}</div><div className="co">{t.co}</div></div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact">
          <span className="eyebrow">// Kontakt</span>
          <h2 className="disp">Potřebujete postavit systém?</h2>
          <div className="links">
            <a className="lnk" href="mailto:aituufs@gmail.com">
              <span className="left"><span className="lab">Email</span><span className="val">aituufs@gmail.com</span></span>
              <Mail size={17} className="arrow" />
            </a>
            <a className="lnk" href="tel:+420773878761">
              <span className="left"><span className="lab">Telefon</span><span className="val">+420 773 878 761</span></span>
              <Phone size={17} className="arrow" />
            </a>
            <a className="lnk" href="https://www.linkedin.com/in/aituar-abdiluly-b19425234" target="_blank" rel="noreferrer">
              <span className="left"><span className="lab">LinkedIn</span><span className="val">aituar-abdiluly</span></span>
              <ArrowUpRight size={17} className="arrow" />
            </a>
          </div>
        </section>

        <Separator style={{ background: "var(--line)" }} />
        <footer className="foot">
          <span>© {new Date().getFullYear()} Aituar Abdiluly</span>
          <span>Praha · Česko — Fullstack</span>
        </footer>
      </div>
    </div>
  );
}
