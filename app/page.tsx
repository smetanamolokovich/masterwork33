'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Mail, ArrowUpRight } from 'lucide-react'
import './portfolio.css'

const services = [
  {
    lab: 'Automatizace procesů',
    d: 'Scraping, zpracování formulářů, autoreply, sběr a hlídání dat z více zdrojů — místo hodin ruční práce běží proces sám.',
  },
  {
    lab: 'AI asistenti a boti',
    d: 'Zpracování dokumentů, chytré workflow a napojení na OpenAI / Claude API na míru vašemu provozu.',
  },
  {
    lab: 'Propojení systémů',
    d: 'Integrace přes API — e-shop, CRM, sklad, účetnictví. Systémy, které spolu konečně mluví.',
  },
  {
    lab: 'Aplikace a interní nástroje',
    d: 'Web i mobil, od MVP po produkci — dashboardy, rezervační a skladové systémy, B2B platformy.',
  },
]

const projects = [
  {
    domain: 'Solární energie · Poptávkový web',
    title: 'Svitera',
    url: 'https://svitera.vercel.app',
    img: '/portfolio/svitera.webp',
    sub: 'Landing page pro firmu instalující fotovoltaiku — kalkulace úspory, reference a poptávkový formulář s odpovědí do 24 hodin.',
    role: 'Návrh, vývoj a nasazení — Next.js, Vercel.',
  },
  {
    domain: 'Kadeřnictví & barbershop · Rezervace',
    title: 'Hříva',
    url: 'https://hriva-salon.vercel.app',
    img: '/portfolio/hriva.webp',
    sub: 'Web kadeřnického studia v centru Prahy s online rezervací termínu, přehledem služeb, týmu a členskými plány.',
    role: 'Kompletní web na míru — design, vývoj, rezervační modul, Vercel.',
  },
  {
    domain: 'Pražírna kávy · E-shop',
    title: 'Zrnko',
    url: 'https://zrnko-eshop.vercel.app',
    img: '/portfolio/zrnko.webp',
    sub: 'E-shop s výběrovou kávou — filtrování podle pražení a ceny, košík, měsíční předplatné a doprava zdarma nad 800 Kč.',
    role: 'E-shop s filtrem a fungujícím košíkem — Next.js, Vercel.',
  },
  {
    domain: 'Restaurace · Rezervace stolu',
    title: 'Bistro Kořen',
    url: 'https://koren-bistro.vercel.app',
    img: '/portfolio/koren.webp',
    sub: 'Web bistra se sezónním menu, galerií a online rezervací stolu podle data, času a počtu hostů.',
    role: 'Web restaurace s online menu a rezervačním formulářem.',
  },
  {
    domain: 'Logistika · Přepravní společnost',
    title: 'Cargon',
    url: 'https://cargon-logistics.vercel.app',
    img: '/portfolio/cargon.webp',
    sub: 'Web přepravní firmy s kalkulací ceny přepravy, sledováním zásilky v reálném čase a přehledem služeb (paletová, kusová i chlazená doprava).',
    role: 'Landing s animacemi a demo poptávkovým formulářem.',
  },
]

const process = [
  {
    n: '01',
    t: 'Konzultace',
    d: 'Řeknete, co vás zdržuje nebo co potřebujete propojit. Konkrétní odpověď, ne „ozveme se“.',
  },
  {
    n: '02',
    t: 'Návrh & odhad',
    d: 'Řešení, pevná cena a termín do 48 hodin. Bez překvapení v průběhu.',
  },
  {
    n: '03',
    t: 'Vývoj',
    d: 'Průběžné ukázky, staging od prvního dne, jeden komunikační kanál.',
  },
  {
    n: '04',
    t: 'Předání & podpora',
    d: 'Nasazení, předání a následná podpora po dohodě.',
  },
]

const pricing = [
  {
    plan: 'Automatizace',
    amount: 'od 5 000 Kč',
    unit: 'menší skript / úkol',
    desc: 'Scraping, autoreply, jednorázová automatizace nebo integrace.',
    feat: false,
  },
  {
    plan: 'Aplikace na míru',
    amount: 'od 25 000 Kč',
    unit: 'fixní cena',
    desc: 'Web, interní systém nebo aplikace s pevným rozsahem a termínem.',
    feat: true,
  },
  {
    plan: 'Hodinově',
    amount: 'od 1 000 Kč',
    unit: '/ hodina',
    desc: 'Dlouhodobá spolupráce, rozvoj a údržba existujícího projektu.',
    feat: false,
  },
]

export default function Page() {
  return (
    <div className="pf">
      <div className="pf-wrap">
        <header className="hero reveal">
          <span className="eyebrow">
            // Automatizace &amp; aplikace na míru{' '}
            <span className="accent-dot">●</span> Praha, CZ
          </span>
          <h1 className="disp">Aituar Abdiluly</h1>
          <div className="role">
            Vývojář — automatizace, integrace a aplikace na míru
          </div>
          <p className="thesis">
            Automatizuji opakovanou ruční práci a propojuji systémy, které spolu
            neumí mluvit. Místo hodin kopírování dat dostanete proces, který
            běží sám.
          </p>
          <div className="meta-row">
            <span className="avail">
              <span className="pulse" /> <span className="k">K dispozici</span>{' '}
              jednorázově i dlouhodobě
            </span>
            <span>
              <span className="k">Lokace</span> Praha / Remote
            </span>
            <span>
              <span className="k">Praxe</span> 5 let na produkčních projektech
            </span>
          </div>
          <div className="cta-row">
            <Button asChild className="btn-primary">
              <a href="mailto:aituufs@gmail.com">Poptat projekt</a>
            </Button>
            <Button asChild className="btn-ghost">
              <a
                href="https://www.linkedin.com/in/aituar-abdiluly-b19425234"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </Button>
            <Button asChild className="btn-ghost">
              <a href="tel:+420773878761">Zavolat</a>
            </Button>
          </div>
        </header>

        <section className="pf-section">
          <div className="sec-head">
            <span className="sec-idx">01</span>
            <span className="sec-title">Co řeším</span>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <div className="svc-cell" key={s.lab}>
                <div className="lab">{s.lab}</div>
                <div className="d">{s.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pf-section">
          <div className="sec-head">
            <span className="sec-idx">02</span>
            <span className="sec-title">Vybrané projekty</span>
          </div>
          <div className="proj-grid">
            {projects.map((p) => (
              <a
                className="proj-card"
                href={p.url}
                target="_blank"
                rel="noreferrer"
                key={p.title}
              >
                <div className="proj-thumb">
                  <img
                    src={p.img}
                    alt={`${p.title} — náhled webu`}
                    loading="lazy"
                  />
                </div>
                <div className="proj-body">
                  <span className="proj-domain">{p.domain}</span>
                  <h3 className="disp">
                    {p.title} <span className="proj-arrow">↗</span>
                  </h3>
                  <p className="sub">{p.sub}</p>
                  <p className="proj-role">{p.role}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="pf-section">
          <div className="sec-head">
            <span className="sec-idx">03</span>
            <span className="sec-title">Jak to probíhá</span>
          </div>
          <div className="proc">
            {process.map((s) => (
              <div className="proc-step" key={s.n}>
                <div className="n">{s.n}</div>
                <div className="t">{s.t}</div>
                <div className="d">{s.d}</div>
              </div>
            ))}
          </div>
          <div className="price-grid">
            {pricing.map((p) => (
              <div
                className={p.feat ? 'price-card feat' : 'price-card'}
                key={p.plan}
              >
                <span className="plan">{p.plan}</span>
                <span className="amount">{p.amount}</span>
                <span className="unit">{p.unit}</span>
                <span className="desc">{p.desc}</span>
              </div>
            ))}
          </div>
          <p className="price-note">
            // Ceny jsou orientační — finální cena vždy podle konkrétního
            zadání.
          </p>
        </section>

        <section className="contact">
          <span className="eyebrow">// Kontakt</span>
          <h2 className="disp">Máte proces, který vás zdržuje?</h2>
          <div className="links">
            <a className="lnk" href="mailto:aituufs@gmail.com">
              <span className="left">
                <span className="lab">Email</span>
                <span className="val">aituufs@gmail.com</span>
              </span>
              <Mail size={17} className="arrow" />
            </a>
            <a
              className="lnk"
              href="https://www.linkedin.com/in/aituar-abdiluly-b19425234"
              target="_blank"
              rel="noreferrer"
            >
              <span className="left">
                <span className="lab">LinkedIn</span>
                <span className="val">aituar-abdiluly</span>
              </span>
              <ArrowUpRight size={17} className="arrow" />
            </a>
          </div>
        </section>

        <Separator style={{ background: 'var(--line)' }} />
        <footer className="foot">
          <span>© {new Date().getFullYear()} Aituar Abdiluly</span>
          <span>Praha · Česko</span>
        </footer>
      </div>
    </div>
  )
}
