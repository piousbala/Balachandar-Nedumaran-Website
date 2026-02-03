import React from "react";
import Image from "next/image";

/**
 * Executive + Colorful single-file personal website (Next.js App Router + Tailwind).
 * Save as: src/app/page.tsx
 * Put your PDFs + photo in: /public
 *   - /public/bala-profile.jpg
 *   - /public/Balachandar Nedumaran-Industry-Scientist-Resume.pdf
 *   - /public/Balachandar-Nedumaran-Academia-CV.pdf
 */

const profile = {
  name: "Balachandar (Bala) Nedumaran, Ph.D.",
  title: "Senior Scientist | Cell & Molecular Biology | Analytical & Molecular Assays",
  location: "Greater Denver Metro Area",
  email: "piousbala@gmail.com",
  phone: "(720) 620-7554",

  linkedinHref: "https://www.linkedin.com/in/balachandar-nedumaran-2191b124/",
  researchGateHref: "https://www.researchgate.net/profile/Balachandar-Nedumaran?ev=hdr_xprf",
  googleScholarHref: "https://scholar.google.com/citations?user=Hs2Ci7QAAAAJ&hl=en",
  publicationsHref: "https://pubmed.ncbi.nlm.nih.gov/?term=balachandar+nedumaran",

  // Must match filenames in /public exactly
  resumePdf: "/Balachandar Nedumaran-Industry-Scientist-Resume.pdf",
  cvPdf: "/Balachandar-Nedumaran-Academia-CV.pdf",

  // Your photo in /public
  photo: "/bala-profile.jpg",
};

type Experience = {
  company: string;
  title: string;
  dates: string;
  location?: string;
  bullets: string[];
  tags?: string[];
};

const highlights: { label: string; items: string[] }[] = [
  {
    label: "Core strengths",
    items: [
      "Analytical method development and execution (molecular, immunoassay, and cell/tissue-based assays)",
      "GxP/GMP readiness: SOPs, method transfers, qualification/verification/validation support",
      "Nucleic-acid analytics: ddPCR/qPCR, custom TaqMan arrays, mRNA-seq workflows",
      "Organoid and advanced cell culture experience (including 3D systems)",
    ],
  },
  {
    label: "Key platforms",
    items: [
      "ddPCR (Bio-Rad QX200)",
      "qPCR/RT-qPCR (TaqMan and SYBR)",
      "ELISA (single and multiplex)",
      "Nanostring nCounter",
      "Bioanalyzer / Fragment Analyzer",
      "Illumina NGS (e.g., NextSeq) and related library QC",
    ],
  },
];

const experience: Experience[] = [
  {
    company: "Colgate-Palmolive (Hill’s Pet Nutrition)",
    title: "Senior Scientist",
    dates: "Apr 2023 – Aug 2025",
    bullets: [
      "Developed and executed complex biological assays including ELISA, custom Nanostring panels, and mRNA sequencing to expand research capability.",
      "Cultured 3D organoids from necropsy tissues to generate translational insights into biological responses.",
      "Designed custom TaqMan Array Plates (40+ genes), enabling cross-functional collaboration and data sharing.",
      "Delivered actionable analytical readouts leveraging Bioanalyzer and Fragment Analyzer for nucleic-acid QC.",
    ],
    tags: ["ELISA", "Nanostring", "mRNA-seq", "3D organoids", "Bioanalyzer"],
  },
  {
    company: "Fate Therapeutics",
    title: "Molecular Assay Development Scientist (PCAD)",
    dates: "Apr 2022 – Mar 2023",
    location: "San Diego, CA",
    bullets: [
      "Developed and optimized identity and residual assays for cell therapy products aligned with GxP expectations.",
      "Designed and implemented ddPCR identity assays to improve method performance and reliability.",
      "Partnered with R&D, QC, and QA to transfer assays and support pilot testing activities for IND-facing programs.",
      "Authored SOPs and technical documentation; provided troubleshooting and data interpretation support.",
    ],
    tags: ["ddPCR", "SOPs", "Assay transfer", "IND support", "GxP"],
  },
  {
    company: "Catalent Pharma Solutions",
    title: "Sr. QC Scientist (QC Method Services)",
    dates: "Jun 2021 – Mar 2022",
    location: "Harmans, MD",
    bullets: [
      "Led QC method services for gene therapy programs with emphasis on ELISAs and ddPCR.",
      "Executed assays under GxP controls; supported qualification/verification/validation activities.",
      "Worked with Analytical Development and QA to streamline testing workflows and strengthen compliance posture.",
      "Supported structured investigations and documentation when required.",
    ],
    tags: ["cGMP", "ELISA", "ddPCR", "Quality systems"],
  },
  {
    company: "University of Colorado Anschutz Medical Campus",
    title: "Research Associate / Lab Manager",
    dates: "Jul 2019 – Jul 2021",
    location: "Denver, CO",
    bullets: [
      "Advanced stem cell biology research, including generation of insulin-producing 3D organoids from human embryonic stem cells.",
      "Applied translatomics approaches (ribosome profiling / ribo-tag IP deep sequencing) to identify translating RNAs and potential neoantigens.",
      "Managed day-to-day lab operations, compliance, and mentoring of junior researchers.",
    ],
    tags: ["Stem cells", "3D organoids", "Ribosome profiling", "Mentorship"],
  },
];

const skillGroups: { group: string; skills: string[] }[] = [
  {
    group: "Molecular & Genomic Assays",
    skills: [
      "ddPCR (identity, residual/purity assays)",
      "qPCR / RT-qPCR (TaqMan & SYBR)",
      "Custom TaqMan Array Plates / Cards",
      "RNA extraction (cells, tissues, complex matrices)",
      "NGS sample/library QC; mRNA-seq workflows",
      "Nanostring nCounter panel design/execution",
    ],
  },
  {
    group: "Immunoassays & Biochemistry",
    skills: ["ELISA (single & multiplex)", "Western blot", "Immunoprecipitation"],
  },
  {
    group: "Cell Biology",
    skills: [
      "Mammalian cell culture (cell lines, primary cells)",
      "3D organoid culture",
      "Viral vectors (AAV, lentivirus, adenovirus): prep, transduction, titration",
    ],
  },
  {
    group: "GxP / Quality Systems",
    skills: [
      "GMP/GxP execution mindset",
      "SOP writing and controlled documentation",
      "Assay transfer, qualification, verification, validation support",
      "Troubleshooting and structured investigations",
    ],
  },
];

function Pill({
  children,
  tone = "indigo",
}: {
  children: React.ReactNode;
  tone?: "indigo" | "fuchsia" | "amber" | "emerald";
}) {
  const toneMap: Record<string, string> = {
    indigo: "bg-indigo-500/15 text-indigo-50 ring-indigo-400/25",
    fuchsia: "bg-fuchsia-500/15 text-fuchsia-50 ring-fuchsia-400/25",
    amber: "bg-amber-500/15 text-amber-50 ring-amber-400/25",
    emerald: "bg-emerald-500/15 text-emerald-50 ring-emerald-400/25",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${toneMap[tone]} backdrop-blur`}
    >
      {children}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">{title}</h2>
        {subtitle ? <p className="mt-2 max-w-3xl text-slate-600">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="text-sm font-semibold text-slate-700 hover:text-slate-900">
      {label}
    </a>
  );
}

function GradientCard({
  children,
  glow = "indigo",
}: {
  children: React.ReactNode;
  glow?: "indigo" | "fuchsia" | "amber" | "emerald";
}) {
  const glowMap: Record<string, string> = {
    indigo: "from-indigo-600 via-sky-500 to-fuchsia-600",
    fuchsia: "from-fuchsia-600 via-violet-600 to-indigo-600",
    amber: "from-amber-500 via-orange-500 to-fuchsia-600",
    emerald: "from-emerald-500 via-teal-500 to-indigo-600",
  };

  return (
    <div className={`rounded-3xl bg-gradient-to-br ${glowMap[glow]} p-[1px] shadow-[0_20px_60px_-30px_rgba(2,6,23,0.45)]`}>
      <div className="rounded-3xl bg-white/90 p-7 shadow-sm backdrop-blur">{children}</div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(99,102,241,0.20),transparent_60%),radial-gradient(900px_circle_at_90%_10%,rgba(217,70,239,0.18),transparent_55%),radial-gradient(900px_circle_at_50%_110%,rgba(245,158,11,0.16),transparent_55%)] bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
    {/* Left: simple brand mark only (no long name/title) */}
    <a href="#top" className="flex items-center gap-3 shrink-0">
      <div
        className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-amber-500 shadow-sm"
        aria-hidden="true"
      />
      <div className="hidden sm:block">
        <div className="text-sm font-extrabold leading-tight text-slate-900">Bala</div>
        <div className="text-xs font-medium leading-tight text-slate-600">Senior Scientist</div>
      </div>
    </a>

    {/* Middle: scrollable tabs */}
    <nav className="flex-1 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none]">
      <div className="flex items-center gap-4 pr-2 [&::-webkit-scrollbar]:hidden">
        <NavLink href="#about" label="About" />
        <NavLink href="#experience" label="Experience" />
        <NavLink href="#education" label="Education" />
        <NavLink href="#expertise" label="Expertise" />
        <NavLink href="#leadership" label="Leadership" />
        <NavLink href="#awards" label="Awards" />
        <NavLink href="#profiles" label="Profiles" />
        <NavLink href="#activities" label="Activities" />
        <NavLink href="#contact" label="Contact" />
      </div>
    </nav>

    {/* Right: actions */}
    <div className="flex items-center gap-2 shrink-0">
      <a
        href={profile.resumePdf}
        download
        className="hidden sm:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 px-4 py-2 text-sm font-extrabold text-white shadow-sm hover:opacity-95"
      >
        Resume
      </a>
      <a
        href={profile.cvPdf}
        download
        className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm hover:bg-slate-50"
      >
        CV
      </a>
      <a
        href={profile.linkedinHref}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-extrabold text-slate-800 shadow-sm hover:bg-slate-50"
      >
        LinkedIn
      </a>
    </div>
  </div>
</header>
      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8 text-white shadow-[0_30px_80px_-40px_rgba(2,6,23,0.8)]">
          <div className="flex flex-wrap items-center gap-2">
  <Pill tone="indigo">Cell & Molecular Biology</Pill>
  <Pill tone="fuchsia">Virology · Gene & Cell Therapy Support</Pill>
  <Pill tone="amber">Cell- & Molecular-Based Assays</Pill>
  <Pill tone="emerald">ddPCR · qPCR · ELISA · Sequencing</Pill>
  <Pill tone="indigo">Organoids · Translational Biology</Pill>
  <Pill tone="fuchsia">GxP / GMP-Ready Analytics</Pill>
</div>
          {/* Photo + Name block */}
          <div className="mt-7 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-4 ring-white/15 shadow-sm">
              <Image
                src={profile.photo}
                alt="Balachandar Nedumaran profile photo"
                fill
               className="object-cover object-top"
                priority
              />
            </div>

            <div>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{profile.name}</h1>
              <p className="mt-2 text-base font-semibold text-white/85">{profile.title}</p>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/80">
            Senior Scientist with deep experience spanning analytical method development, ddPCR/qPCR, ELISA, custom gene-expression platforms
            (Nanostring), and NGS-oriented workflows. Known for reproducibility, crisp documentation, and cross-functional delivery.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={profile.resumePdf}
              download
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-extrabold text-slate-950 shadow-sm hover:bg-white/90"
            >
              Download Resume
            </a>
            <a
              href={profile.cvPdf}
              download
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm ring-1 ring-white/20 hover:bg-white/15"
            >
              Download CV
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm ring-1 ring-white/20 hover:bg-white/15"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm ring-1 ring-white/20 hover:bg-white/15"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <GradientCard glow="indigo">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold text-slate-900">{highlights[0].label}</div>
              <Chip>Execution</Chip>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {highlights[0].items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </GradientCard>

          <GradientCard glow="amber">
            <div className="flex items-center justify-between">
              <div className="text-sm font-extrabold text-slate-900">{highlights[1].label}</div>
              <Chip>Platforms</Chip>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {highlights[1].items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </GradientCard>
        </div>

        {/* About */}
        <div className="mt-14">
          <Section
            id="about"
            title="About"
            subtitle="I build and operationalize analytical methods that generate high-confidence biological insight — with emphasis on reproducibility, documentation, and cross-functional execution."
          >
            <GradientCard glow="fuchsia">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <p className="text-sm leading-7 text-slate-700">
                    My background spans industry and academic research, including GxP-aligned molecular assay development and QC support.
                    I have extensive hands-on experience in ddPCR/qPCR, immunoassays, advanced cell culture and 3D organoid systems,
                    and gene-expression platforms including Nanostring and NGS-oriented workflows.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-700">
                    I enjoy translating complex assay outputs into clear, decision-ready narratives, and partnering closely with R&D,
                    QC, and QA stakeholders to ensure methods are robust, transferable, and fit for purpose.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["ddPCR", "qPCR", "ELISA", "Nanostring", "mRNA-seq", "Organoids", "Bioanalyzer"].map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-sm">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-white/70">Contact</div>
                  <div className="mt-3 space-y-2 text-sm font-semibold">
                    <div>{profile.location}</div>
                    <div>
                      <a className="hover:underline" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-2">
                    <a
                      href={profile.resumePdf}
                      download
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 px-4 py-2 text-sm font-extrabold text-white hover:opacity-95"
                    >
                      Download Resume
                    </a>
                    <a
                      href={profile.cvPdf}
                      download
                      className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-extrabold text-white ring-1 ring-white/20 hover:bg-white/15"
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </GradientCard>
          </Section>
        </div>

        {/* Experience */}
        <div className="mt-14">
          <Section
            id="experience"
            title="Experience"
            subtitle="Selected roles emphasizing analytical method development, GxP execution, translational assay platforms, and cross-functional delivery."
          >
            <div className="space-y-6">
              {experience.map((role, idx) => (
                <GradientCard key={`${role.company}-${role.title}-${role.dates}`} glow={idx % 2 === 0 ? "indigo" : "emerald"}>
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="text-lg font-extrabold text-slate-900">{role.title}</div>
                      <div className="text-sm font-semibold text-slate-700">{role.company}</div>
                      {role.location ? <div className="text-sm text-slate-500">{role.location}</div> : null}
                    </div>
                    <div className="text-sm font-bold text-slate-600">{role.dates}</div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {role.tags?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {role.tags.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                  ) : null}
                </GradientCard>
              ))}
            </div>
          </Section>
        </div>
{/* Education */}
<div className="mt-14">
  <Section
    id="education"
    title="Education"
    subtitle="Academic training spanning molecular endocrinology, human genetics, and biotechnology."
  >
    <div className="space-y-6">

      <GradientCard glow="indigo">
        <div className="text-lg font-extrabold text-slate-900">Chonnam National University (South Korea)</div>
        <div className="text-sm font-semibold text-slate-700">Ph.D. in Molecular Endocrinology | 2005 – 2009</div>
        <div className="mt-2 text-sm text-slate-600">
          GPA: <span className="font-semibold">4.13 / 4.5</span> (South Korean system) · US-equivalent ~3.67 / 4.0
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          <li>Regulation of gene expression by orphan nuclear receptors in metabolism, diabetes, and obesity.</li>
          <li>Pathways studied: gluconeogenesis, lipogenesis, adipogenesis.</li>
          <li>Luciferase reporter assays; extensive molecular cloning (native, point mutants, serial deletions).</li>
          <li>Protein–protein interaction assays: GST pull-down, MBP pull-down, yeast two-hybrid, Co-IP.</li>
          <li>Novel interactor discovery using yeast two-hybrid screening with human cDNA libraries.</li>
        </ul>
      </GradientCard>

      <GradientCard glow="emerald">
        <div className="text-lg font-extrabold text-slate-900">Bharathiar University (India)</div>
        <div className="text-sm font-semibold text-slate-700">M.Phil. in Human Genetics | 2000 – 2002</div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          <li>Cytogenetic analysis of patients with Rheumatoid Arthritis.</li>
          <li>Chromosomal analysis and case-study–based research.</li>
        </ul>
      </GradientCard>

      <GradientCard glow="amber">
        <div className="text-lg font-extrabold text-slate-900">Bharathidasan University (India)</div>
        <div className="text-sm font-semibold text-slate-700">M.Sc. in Biotechnology | 1998 – 2000</div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          <li>Focus areas: Genetics, Cell Biology, Microbiology.</li>
          <li>Cytogenetic analysis using human blood samples.</li>
        </ul>
      </GradientCard>

      <GradientCard glow="fuchsia">
        <div className="text-lg font-extrabold text-slate-900">Bharathiar University (India)</div>
        <div className="text-sm font-semibold text-slate-700">B.Sc. in Genetics, Botany, Chemistry & Zoology | 1995 – 1998</div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          <li>National Cadet Corps (NCC): Senior Under Officer, C-Certificate (A-grade).</li>
          <li>Athletic achievements in javelin throw and team sports including cricket and volleyball.</li>
        </ul>
      </GradientCard>

    </div>
  </Section>
</div>
        {/* Technical Expertise (Premium Cards) */}
<div className="mt-14">
  <Section
    id="expertise"
    title="Technical Expertise"
    subtitle="Integrated expertise spanning molecular and cell biology, in vitro and in vivo
  modeling, virology, gene and cell therapy–supporting assays, nuclear receptor
  signaling, and translational assay development applied to metabolic, renal,
  hepatic, pancreatic, cardiovascular, urologic, and nutrition-linked disease
  biology."
  >
    {/* 1–7: Technical */}
    <div className="grid gap-6 md:grid-cols-2">
      <GradientCard glow="amber">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">1) Molecular & Genomic Assays</div>
          <Chip>Industry priority</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "ddPCR (identity, purity, residual assays; AAV/LV)",
            "qPCR / RT-qPCR (TaqMan & SYBR)",
            "Custom TaqMan Array Plates & Cards",
            "RNA extraction (cells, tissues, clinical samples)",
            "RNA-seq / mRNA-seq (Illumina NextSeq; PacBio exposure)",
            "Nanostring nCounter (design & execution)",
            "SNP assays; DNA methylation studies",
            "ChIP (in vivo), EMSA, promoter studies",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="fuchsia">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">2) Protein, Immunoassay & Proteomics</div>
          <Chip>Translational</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "ELISA (singleplex, multiplex, sandwich)",
            "Western blotting",
            "Co-immunoprecipitation (in vivo & in vitro)",
            "GST / MBP pull-down assays",
            "Tandem Affinity Purification (TAP)",
            "Sample prep for LC-MS/MS",
            "LC-MS/MS data interpretation",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="emerald">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">3) Cell Biology & Advanced Culture Systems</div>
          <Chip>Differentiator</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "Mammalian cell culture (≥20 cell types across 15+ years)",
            "Primary hepatocytes (rat, mouse, human)",
            "Human/pig aortic valve interstitial cells",
            "Viral transduction (AAV, lentivirus, adenovirus)",
            "Stable cell line generation",
            "Live-cell imaging & confocal microscopy",
            "FACS / flow cytometry",
            "3D organoid systems: liver organoids; pancreatic beta-like clusters (ESC/iPSC-derived); bioreactor-based 3D cultures",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="indigo">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">4) In Vivo & Animal Models</div>
          <Chip>High value</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "KO / KI mouse generation & breeding strategies",
            "Genotyping",
            "Glucose, insulin, pyruvate tolerance tests",
            "Mouse imaging & histology",
            "Neurogenic bladder disease models",
            "IACUC protocol experience",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="amber">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">5) Cell- & Tissue-Based Functional Assays</div>
          <Chip>Functional</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "Reporter gene assays (luciferase)",
            "Proliferation & cytotoxicity assays",
            "Calcium & collagen staining",
            "Fibrosis-related assays",
            "Co-culture systems (immune–epithelial)",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="emerald">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">6) GxP, Quality & Industrial Systems</div>
          <Chip>Compliance</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "cGMP / cGLP / cGDP environments",
            "SOP authoring & controlled documentation",
            "Assay transfer, qualification, verification, validation support",
            "Deviation investigations (DCARs, CAPAs)",
            "Cross-site assay execution",
            "Tools: MasterControl, TrackWise, ComplianceWire, DocuSign, Smartsheet, Benchling ELN, Quartzy",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="fuchsia">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">7) Data Analysis, Software & Basic Coding</div>
          <Chip>Modern workflow</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "GraphPad Prism; JMP",
            "ImageJ / ImageLab",
            "Basic coding & automation: TypeScript/React/Next.js (personal project website)",
            "GenAI-assisted development (ChatGPT) for rapid learning and implementation",
            "Version control & deployment: GitHub + Vercel (CI/CD-style workflow)",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>
    </div>
  </Section>
</div>

{/* Leadership */}
<div className="mt-14">
  <Section
    id="leadership"
    title="Leadership, Mentoring & Teaching"
    subtitle="Scientific leadership through mentoring, instruction, collaborative guidance, and recruiting."
  >
    <div className="grid gap-6 md:grid-cols-2">
      <GradientCard glow="indigo">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">Teaching & Tutoring</div>
          <Chip>Volunteer & Academic</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "Orientation classes for graduate students (2015–2018)",
            "Tutor: “Experiments in Molecular Biology,” UCD AMC (2015)",
            "Tutor: Core I “Foundations in Biomedical Sciences,” UCD AMC (2016)",
            "Guest lecture: Transcription & Gene Regulation (BioE 3050), UCD AMC",
            "Genetics and Cell Biology courses for M.S. students in India (2000–2003)",
            "Instructor role offered: BIOL 4125/5125 Molecular Biology Lab (Spring 2017, UCD Downtown; declined)",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="emerald">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">Mentoring, Instructing & Recruiting</div>
          <Chip>Team impact</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "Trained multiple lab fellows and junior researchers from Ph.D. through industry roles",
            "Formal undergraduate mentoring program (University of Colorado Denver)",
            "Technical guidance to grad students, postdocs, and research residents",
            "Scientific editing of manuscripts/abstracts; support for PI grant writing and peer-review activities (~140 reviews as assistant)",
            "Led recruitment for professional research assistants and summer interns",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>
    </div>
  </Section>
</div>

{/* Awards & Certifications */}
<div className="mt-14">
  <Section
    id="awards"
    title="Awards, Certifications & Honors"
    subtitle="Academic recognition and professional development."
  >
    <div className="grid gap-6 md:grid-cols-2">
      <GradientCard glow="amber">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">Awards & Honors</div>
          <Chip>Recognition</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "National Research Laboratory Scholarship: Full scholarship including tuition and boarding",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>

      <GradientCard glow="fuchsia">
        <div className="flex items-center justify-between">
          <div className="text-sm font-extrabold text-slate-900">Certifications</div>
          <Chip>Professional growth</Chip>
        </div>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
          {[
            "Project Management Course: Certificate course offered by UCD–AMC",
            "Speaking & Presenting Course: Certificate course offered by UCD–AMC",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" aria-hidden="true" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </GradientCard>
    </div>
  </Section>
</div>
        {/* Scholarship */}
        <div className="mt-14">
          <Section
  id="public-profiles"
  title="Public Profiles"
  subtitle="Find my research and professional profiles across major platforms."
>
            <GradientCard glow="emerald">
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.googleScholarHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-slate-900"
                >
                  Google Scholar
                </a>
                <a
                  href={profile.researchGateHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-800 hover:bg-slate-50"
                >
                  ResearchGate
                </a>
                <a
                  href={profile.publicationsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-800 hover:bg-slate-50"
                >
                  PubMed
                </a>
                <a
                  href={profile.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-800 hover:bg-slate-50"
                >
                  LinkedIn
                </a>
              </div>
            </GradientCard>
          </Section>
        </div>
{/* Activities & Interests */}
<div className="mt-14">
  <Section
    id="activities"
    title="Activities & Interests"
    subtitle="Outside of work, I stay active and engaged through competitive sports, outdoor activities, and cooking."
  >
    <GradientCard glow="amber">
      <ul className="space-y-3 text-sm leading-6 text-slate-700">
        <li>
          <span className="font-semibold">Table Tennis:</span> Early Intermediate (USATT 1200+); multi-medalist at the Kansas State Games
          (2 Gold, 1 Bronze; 2024–2025).
        </li>
        <li>
          <span className="font-semibold">Pickleball:</span> Advanced Amateur (DUPR 4.0).
        </li>
        <li>
          <span className="font-semibold">Volleyball:</span> Competitive (Rating A); regular competitor in USAV-sanctioned leagues and
          tournaments.
        </li>
        <li>
          <span className="font-semibold">Javelin Throw:</span> Gold Medalist, 2024 Kansas State Games.
        </li>
        <li>
          <span className="font-semibold">Skiing:</span> Intermediate; proficient on green terrain with strong control.
        </li>
        <li>
  <span className="font-semibold">Outdoor Activities:</span> Avid hiker with family, friends, and independently.
</li>
<li>
  <span className="font-semibold">Culinary Interests:</span> Enthusiast of technical cooking and baking.
</li>
      </ul>
    </GradientCard>
  </Section>
</div>
        {/* Contact */}
        <div className="mt-14">
          <Section
            id="contact"
            title="Contact"
            subtitle="For roles, collaborations, consulting discussions, or speaking engagements."
          >
            <GradientCard glow="indigo">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <p className="text-sm leading-7 text-slate-700">
                    The fastest way to reach me is by email. I respond with availability and next steps promptly.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent("Website inquiry")}`}
                      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-amber-500 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm hover:opacity-95"
                    >
                      Email Me
                    </a>
                    <a
                      href={profile.linkedinHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-extrabold text-slate-800 shadow-sm hover:bg-slate-50"
                    >
                      Message on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-950 p-5 text-white shadow-sm">
                  <div className="text-xs font-extrabold uppercase tracking-wide text-white/70">Direct</div>
                  <div className="mt-3 space-y-2 text-sm font-semibold">
                    <div>
                      <span className="text-white/70">Email:</span>{" "}
                      <a className="hover:underline" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-white/70">Location:</span> {profile.location}
                    </div>
                  </div>
                </div>
              </div>
            </GradientCard>
          </Section>
        </div>

        <footer className="mt-16 border-t border-slate-200 py-8 text-sm text-slate-600">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-semibold">© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
            <div className="flex gap-4">
              <a className="font-semibold hover:text-slate-900" href="#about">About</a>
              <a className="font-semibold hover:text-slate-900" href="#experience">Experience</a>
              <a className="font-semibold hover:text-slate-900" href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


