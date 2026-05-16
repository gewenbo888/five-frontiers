import type { CSSProperties } from "react";

type Frontier = {
  num: string;
  slug: string;
  accent: string;
  domainEn: string;
  domainZh: string;
  themeEn: string;
  themeZh: string;
  techEn: string[];
  techZh: string[];
  goalEn: string;
  goalZh: string;
};

const FRONTIERS: Frontier[] = [
  {
    num: "01",
    slug: "energy",
    accent: "#e6b04a",
    domainEn: "Energy",
    domainZh: "能量",
    themeEn: "Sustainable Energy",
    themeZh: "可持续能源",
    techEn: [
      "Photovoltaics",
      "Lithium Batteries",
      "Hydrogen Fuel Cells",
      "Heat Pumps",
      "Electric Vehicles",
      "Controlled Fusion",
      "Dyson Sphere",
    ],
    techZh: ["光伏", "锂电池", "氢燃料电池", "热泵", "电动车", "可控核聚变", "戴森球"],
    goalEn: "Sustain civilization across planetary and cosmic scales.",
    goalZh: "实现全球和宇宙的可持续发展。",
  },
  {
    num: "02",
    slug: "information",
    accent: "#6ec5d9",
    domainEn: "Information",
    domainZh: "信息",
    themeEn: "Artificial Intelligence",
    themeZh: "人工智能",
    techEn: [
      "Chips",
      "Digital Currency",
      "Generative AI",
      "Virtual Reality",
      "Autonomous Driving",
      "Robotics",
      "Quantum Computing",
    ],
    techZh: ["芯片", "数字货币", "生成式 AI", "虚拟现实", "无人驾驶", "机器人", "量子计算"],
    goalEn: "Elevate human intelligence across every dimension.",
    goalZh: "实现人类智慧的全面提升。",
  },
  {
    num: "03",
    slug: "spacetime",
    accent: "#b48ad9",
    domainEn: "Spacetime",
    domainZh: "时空",
    themeEn: "Spacetime Exploration",
    themeZh: "时空探索",
    techEn: [
      "Electromagnetic Launch",
      "Reusable Rockets",
      "Warp Drive",
      "Space Colonization",
      "Time Travel",
      "Dimensional Travel",
    ],
    techZh: ["电磁弹射", "可回收火箭", "曲率引擎", "太空移民", "时间旅行", "维度穿梭"],
    goalEn: "Build an interstellar civilization.",
    goalZh: "建立一个跨星系文明。",
  },
  {
    num: "04",
    slug: "matter",
    accent: "#d18570",
    domainEn: "Matter",
    domainZh: "物质",
    themeEn: "Matter Engineering",
    themeZh: "物质改造",
    techEn: ["Nanotechnology", "3D Printing", "Superconductors", "Graphene", "Quantum Dots"],
    techZh: ["纳米技术", "3D 打印", "超导体", "石墨烯", "量子点"],
    goalEn: "Explore and understand the multiverse.",
    goalZh: "探索和理解多元宇宙。",
  },
  {
    num: "05",
    slug: "biology",
    accent: "#7ad3a4",
    domainEn: "Biology",
    domainZh: "生物",
    themeEn: "Biological Engineering",
    themeZh: "生物改造",
    techEn: [
      "Gene Editing",
      "Brain–Computer Interface",
      "Synthetic Biology",
      "Longevity",
    ],
    techZh: ["基因改造", "脑机接口", "合成生物", "长生不老"],
    goalEn: "Lift quality of life and the progress of society.",
    goalZh: "推动人类生活品质和社会进步。",
  },
];

export default function Page() {
  return (
    <main className="bg-bg text-ink">
      <TopNav />
      <Hero />
      <TableBlock />
      <div className="border-t border-line">
        {FRONTIERS.map((f, i) => (
          <FrontierSection key={f.slug} f={f} last={i === FRONTIERS.length - 1} />
        ))}
      </div>
      <Footer />
    </main>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-bg/80 border-b border-line">
      <div className="max-w-wide mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            Psyverse / Atlas
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-5">
          {FRONTIERS.map((f) => (
            <a
              key={f.slug}
              href={`#${f.slug}`}
              className="mono text-[11px] tracking-[0.18em] uppercase text-ink-dim hover:text-ink transition-colors"
              style={{ "--c": f.accent } as CSSProperties}
            >
              <span className="text-ink-faint mr-1.5">{f.num}</span>
              {f.domainEn}
            </a>
          ))}
        </nav>
        <a
          href="https://psyverse.fun"
          className="mono text-[10px] tracking-[0.22em] uppercase text-ink-dim hover:text-ink"
        >
          psyverse.fun ↗
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-blueprint border-b border-line">
      <div className="max-w-wide mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="mono text-[11px] tracking-[0.28em] uppercase text-ink-faint mb-8">
          A bilingual atlas · 中英双语图志
        </div>
        <h1 className="display text-[44px] sm:text-[64px] md:text-[92px] leading-[0.95] tracking-tight">
          Five Frontiers
          <span className="block cjk text-[28px] sm:text-[40px] md:text-[56px] mt-4 text-ink-dim font-light">
            五大前沿
          </span>
        </h1>
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl">
          <p className="text-[16px] md:text-[18px] leading-[1.6] text-ink-dim">
            Civilizational progress is not one curve. It is five — each with its own
            characteristic technology, its own bottleneck, its own end-state.
            <br />
            <br />
            <span className="text-ink">
              Energy. Information. Spacetime. Matter. Biology.
            </span>{" "}
            The frontiers we are pushing, and the destination each one points to.
          </p>
          <p className="cjk text-[16px] md:text-[18px] leading-[1.85] text-ink-dim">
            文明的进步不是一条曲线，而是五条。每一条都有自己的代表技术、自己的瓶颈、自己的终极目标。
            <br />
            <br />
            <span className="text-ink">能量。信息。时空。物质。生物。</span>{" "}
            人类正在推进的五大前沿，以及它们各自指向的远方。
          </p>
        </div>
      </div>
    </section>
  );
}

function TableBlock() {
  return (
    <section className="border-b border-line">
      <div className="max-w-wide mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <div className="mono text-[11px] tracking-[0.28em] uppercase text-ink-faint">
              Table / 表
            </div>
            <h2 className="display text-2xl md:text-3xl mt-2">
              The five frontiers, at a glance
            </h2>
            <p className="cjk text-ink-dim mt-1 text-sm">五大前沿，一览表</p>
          </div>
          <div className="hidden md:block mono text-[11px] text-ink-faint">
            n = 5
          </div>
        </div>

        <div className="overflow-x-auto -mx-6 md:mx-0">
          <table className="min-w-full md:min-w-0 w-full md:w-full border-separate border-spacing-0">
            <thead>
              <tr className="text-left">
                <Th className="w-[12%] md:w-[10%]">Domain<br /><span className="cjk text-ink-faint">领域</span></Th>
                <Th className="w-[18%]">Theme<br /><span className="cjk text-ink-faint">主题</span></Th>
                <Th className="w-[48%]">Technologies<br /><span className="cjk text-ink-faint">代表技术</span></Th>
                <Th className="w-[24%]">Goal<br /><span className="cjk text-ink-faint">目标</span></Th>
              </tr>
            </thead>
            <tbody>
              {FRONTIERS.map((f) => (
                <tr key={f.slug} className="align-top">
                  <Td>
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block w-1.5 h-7 rounded-sm"
                        style={{ background: f.accent }}
                      />
                      <div>
                        <div className="display text-lg md:text-xl" style={{ color: f.accent }}>
                          {f.domainEn}
                        </div>
                        <div className="cjk text-ink-dim text-base mt-0.5">{f.domainZh}</div>
                      </div>
                    </div>
                  </Td>
                  <Td>
                    <div className="text-ink">{f.themeEn}</div>
                    <div className="cjk text-ink-dim text-sm mt-1">{f.themeZh}</div>
                  </Td>
                  <Td>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {f.techEn.map((t) => (
                        <Chip key={t}>{t}</Chip>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {f.techZh.map((t) => (
                        <Chip key={t} cjk>
                          {t}
                        </Chip>
                      ))}
                    </div>
                  </Td>
                  <Td>
                    <div className="text-ink leading-snug">{f.goalEn}</div>
                    <div className="cjk text-ink-dim text-sm leading-snug mt-1.5">
                      {f.goalZh}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th
      className={`mono text-[10px] tracking-[0.18em] uppercase text-ink-faint font-normal px-4 md:px-5 pb-4 border-b border-line align-bottom ${className}`}
    >
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-4 md:px-5 py-6 border-b border-line">{children}</td>
  );
}

function Chip({ children, cjk = false }: { children: React.ReactNode; cjk?: boolean }) {
  return (
    <span
      className={`${cjk ? "cjk" : "mono"} text-[11px] ${cjk ? "" : "tracking-wide"} px-2 py-1 rounded border border-line text-ink-dim hover:text-ink hover:border-line-bright transition-colors`}
    >
      {children}
    </span>
  );
}

function FrontierSection({ f, last }: { f: Frontier; last: boolean }) {
  return (
    <section
      id={f.slug}
      className={`relative ${last ? "" : "border-b border-line"}`}
      style={{ "--accent": f.accent } as CSSProperties}
    >
      <div className="max-w-wide mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-y-10 md:gap-x-12">
        {/* Number column */}
        <div className="md:col-span-2">
          <div
            className="display text-6xl md:text-7xl leading-none"
            style={{ color: f.accent }}
          >
            {f.num}
          </div>
          <div className="mt-3 mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            Frontier
          </div>
        </div>

        {/* Title + theme + goal */}
        <div className="md:col-span-6">
          <h2 className="display text-4xl md:text-6xl tracking-tight" style={{ color: f.accent }}>
            {f.domainEn}
          </h2>
          <div className="cjk text-2xl md:text-3xl text-ink mt-2">{f.domainZh}</div>

          <div className="mt-8 mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            Theme · 主题
          </div>
          <div className="mt-2 display text-xl md:text-2xl text-ink">{f.themeEn}</div>
          <div className="cjk text-base md:text-lg text-ink-dim mt-1">{f.themeZh}</div>

          <div className="mt-10 border-l-2 pl-5 py-1" style={{ borderColor: f.accent }}>
            <p className="display italic text-lg md:text-xl text-ink leading-snug">
              “{f.goalEn}”
            </p>
            <p className="cjk text-base md:text-lg text-ink-dim leading-snug mt-2">
              「{f.goalZh}」
            </p>
          </div>
        </div>

        {/* Tech */}
        <div className="md:col-span-4">
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            Technologies · 代表技术
          </div>
          <ul className="mt-4 space-y-3">
            {f.techEn.map((t, i) => (
              <li
                key={t}
                className="flex items-baseline gap-3 border-b border-line pb-3"
              >
                <span
                  className="mono text-[10px] text-ink-faint w-6 shrink-0"
                  style={{ color: f.accent, opacity: 0.7 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="text-ink">{t}</div>
                  <div className="cjk text-ink-dim text-sm">{f.techZh[i]}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-bg2/40">
      <div className="max-w-wide mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-3 gap-10">
        <div>
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            Five Frontiers · 五大前沿
          </div>
          <p className="mt-4 text-ink-dim leading-relaxed text-sm">
            A small bilingual atlas. One artifact in the{" "}
            <a href="https://psyverse.fun" className="text-ink underline decoration-line-bright underline-offset-4 hover:decoration-ink">
              Psyverse
            </a>{" "}
            portfolio by{" "}
            <a href="https://psyverse.fun" className="text-ink underline decoration-line-bright underline-offset-4 hover:decoration-ink">
              Gewenbo
            </a>
            .
          </p>
        </div>
        <div>
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            Read across · 横向阅读
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {FRONTIERS.map((f) => (
              <li key={f.slug}>
                <a
                  href={`#${f.slug}`}
                  className="text-ink-dim hover:text-ink transition-colors"
                >
                  <span className="mono text-[10px] mr-2 text-ink-faint">{f.num}</span>
                  {f.domainEn} <span className="cjk text-ink-faint">· {f.domainZh}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            Atlas · 图志
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="text-ink-dim hover:text-ink" href="https://psyverse.fun/atlas.html">
                psyverse.fun/atlas
              </a>
            </li>
            <li>
              <a className="text-ink-dim hover:text-ink" href="https://psyverse.fun">
                psyverse.fun
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="max-w-wide mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            © Gewenbo
          </div>
          <div className="mono text-[10px] tracking-[0.22em] uppercase text-ink-faint">
            v1 · 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
