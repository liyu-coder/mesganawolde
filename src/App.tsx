import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileCheck2,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  PenLine,
  Phone,
  Search,
  ServerCog,
  ShieldCheck,
  Sun,
  TestTube2,
  Workflow,
  X,
} from "lucide-react"

type IconType = typeof Database

const navItems = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Work", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
]

const expertise = [
  {
    icon: Database,
    index: "01",
    title: "Core Banking & Database Administration",
    description:
      "Keeping complex financial systems stable, observable, and ready for business.",
    items: [
      "Core banking administration",
      "Microsoft SQL Server & SQL",
      "Stored procedures & analysis",
      "Production issue investigation",
      "Transaction troubleshooting",
      "Data protection & recovery support",
    ],
  },
  {
    icon: Search,
    index: "02",
    title: "Business & Product Analysis",
    description:
      "Translating operational needs into clear, actionable technical direction.",
    items: [
      "Requirements gathering",
      "Business process analysis",
      "Functional specifications",
      "Stakeholder communication",
      "Requirements-to-solution mapping",
      "Enhancement prioritization",
    ],
  },
  {
    icon: TestTube2,
    index: "03",
    title: "Quality Assurance & Validation",
    description:
      "Building confidence in every release through rigorous, risk-aware validation.",
    items: [
      "Manual & functional testing",
      "Regression testing",
      "User Acceptance Testing",
      "API testing with Apidog",
      "Defect reporting & verification",
      "End-to-end release validation",
    ],
  },
  {
    icon: Workflow,
    index: "04",
    title: "Project Consultancy & Transformation",
    description:
      "Aligning people, process, and technology for dependable implementation.",
    items: [
      "Implementation coordination",
      "Digital banking initiatives",
      "Business & technical alignment",
      "Vendor coordination",
      "Implementation testing",
      "Production validation",
    ],
  },
]

const skillGroups = [
  {
    name: "Database & SQL",
    icon: Database,
    skills: [
      ["Microsoft SQL Server", "Advanced"],
      ["SQL", "Advanced"],
      ["Stored Procedures", "Proficient"],
    ],
  },
  {
    name: "Quality Assurance",
    icon: ShieldCheck,
    skills: [
      ["Manual Testing", "Expert"],
      ["Regression Testing", "Expert"],
      ["UAT", "Expert"],
      ["Functional Testing", "Expert"],
    ],
  },
  {
    name: "Backend & APIs",
    icon: Code2,
    skills: [
      ["REST API Testing", "Advanced"],
      ["Apidog", "Advanced"],
      ["API Integration Testing", "Advanced"],
    ],
  },
  {
    name: "Data Analytics",
    icon: BarChart3,
    skills: [
      ["Python", "Proficient"],
      ["Pandas", "Proficient"],
      ["Scikit-learn", "Proficient"],
      ["Data Analysis", "Advanced"],
    ],
  },
  {
    name: "Business Intelligence",
    icon: Layers3,
    skills: [
      ["Power BI", "Proficient"],
      ["SQL Reporting", "Proficient"],
      ["Dashboard Development", "Proficient"],
    ],
  },
  {
    name: "Systems & Infrastructure",
    icon: ServerCog,
    skills: [
      ["Core Banking Administration", "Expert"],
      ["IIS", "Proficient"],
      ["Network Administration", "Advanced"],
      ["TCP/IP", "Advanced"],
      ["Windows", "Advanced"],
    ],
  },
]

const projects = [
  {
    number: "01",
    title: "Sidama Bank Core Banking System Implementation",
    category: "Core Banking · System Administration · Database",
    description:
      "Experience supporting core banking implementation, database operations, production issue investigation, and system validation.",
    theme: "core",
    role: "Core systems and database administration support",
    areas: [
      "Microsoft SQL Server",
      "Transaction analysis",
      "Production validation",
      "Issue investigation",
    ],
    context:
      "A high-stakes banking platform environment where system reliability, transaction integrity, and coordinated validation are essential.",
    approach:
      "Supported investigation through structured log and data analysis, coordinated findings with relevant teams, and validated behavior without exposing proprietary implementation details.",
  },
  {
    number: "02",
    title: "Sidama Bank Mobile Application Implementation",
    category: "Digital Banking · QA · Implementation",
    description:
      "Experience contributing to mobile banking implementation and quality validation, supporting reliable digital banking functionality.",
    theme: "mobile",
    role: "Quality validation and implementation support",
    areas: [
      "Functional testing",
      "UAT support",
      "Mobile workflows",
      "Defect verification",
    ],
    context:
      "A customer-facing digital channel requiring reliable, understandable account and transaction experiences across core user journeys.",
    approach:
      "Validated end-to-end journeys against requirements, documented defects clearly, and re-tested fixes with attention to data accuracy and user impact.",
  },
  {
    number: "03",
    title: "Sidama Bank Internet Banking Implementation",
    category: "Internet Banking · System Integration · QA",
    description:
      "Experience supporting internet banking implementation, testing, functionality validation, and coordination across technical and business teams.",
    theme: "web",
    role: "System validation and cross-team coordination",
    areas: [
      "Integration testing",
      "Functional validation",
      "Requirements traceability",
      "Stakeholder coordination",
    ],
    context:
      "An integrated web banking channel connecting customers, business rules, transaction services, and underlying banking systems.",
    approach:
      "Mapped requirements to test scenarios, examined integrated behavior, communicated findings across teams, and supported release readiness decisions.",
  },
  {
    number: "04",
    title: "Cafeteria Point-of-Sale System",
    category: "POS · Application Support · System Validation",
    description:
      "A project showcasing point-of-sale functionality, transaction workflows, and application support.",
    theme: "pos",
    role: "Application support and system validation",
    areas: [
      "Transaction workflows",
      "Application support",
      "Functional testing",
      "Issue resolution",
    ],
    context:
      "A fast-moving point-of-sale environment requiring clear product selection, accurate totals, and dependable transaction handling.",
    approach:
      "Reviewed core workflows from item selection through checkout, tested expected and edge states, and used findings to support reliable operation.",
  },
]

const roles = [
  {
    role: "Principal Core System & Database Administrator",
    company: "Sidama Bank S.C. · Addis Ababa, Ethiopia",
    date: "Current",
    points: [
      "Administer core banking systems and support reliable transaction processing.",
      "Optimize SQL performance and investigate complex production issues.",
      "Support data protection, regulatory compliance, and disaster recovery procedures.",
      "Coordinate enhancements with business and technical teams.",
    ],
    stack:
      "Microsoft SQL Server · SQL · Core Banking Systems · Database Administration",
  },
  {
    role: "Senior QA Officer",
    company: "Sidama Bank S.C.",
    date: "Nov 2025 — Mar 2026",
    points: [
      "Led end-to-end QA testing for digital banking systems.",
      "Developed testing strategies and documentation.",
      "Identified defects and validated fixes against requirements.",
      "Maintained QA records and supported compliance checks.",
    ],
    stack:
      "Manual Testing · API Testing · Apidog · Jira · Functional Testing · UAT",
  },
  {
    role: "Senior Application System Administrator",
    company: "Sidama Bank S.C.",
    date: "May 2025 — Nov 2025",
    points: [
      "Coordinated requirements for new application functionality.",
      "Investigated application issues and integration problems.",
      "Collaborated with developers, technical teams, and vendors.",
      "Validated application enhancements.",
    ],
    stack:
      "Core Banking Systems · Application Support · Business Requirements · SQL · System Testing",
  },
  {
    role: "Junior Application System Administrator",
    company: "Sidama Bank S.C.",
    date: "Nov 2023 — May 2025",
    points: [
      "Installed, configured, and maintained business applications.",
      "Investigated application issues and system errors.",
      "Managed application access and supported security controls.",
      "Assisted with application maintenance and validation.",
    ],
    stack:
      "Core Banking Systems · Business Analysis · Requirements Documentation",
  },
  {
    role: "Junior Network Administrator",
    company: "Sidama Bank S.C.",
    date: "Sep 2022 — Oct 2023",
    points: [
      "Monitored network connectivity and availability.",
      "Troubleshot infrastructure incidents.",
      "Maintained network configurations and supported security practices.",
    ],
    stack:
      "Network Administration · TCP/IP · Network Troubleshooting · Windows",
  },
  {
    role: "Junior IT Support Technician",
    company: "Prokal Technology Solutions",
    date: "Feb 2021 — Apr 2022",
    points: [
      "Diagnosed hardware, software, and network issues.",
      "Installed and configured computers and software.",
      "Provided first-line support and restored normal IT services.",
    ],
    stack: "IT Support · Windows · Hardware Troubleshooting · Basic Networking",
  },
]

const process = [
  [
    "01",
    "Understand",
    "Understand the business context, users, requirements, and operational challenges.",
    Search,
  ],
  [
    "02",
    "Analyze",
    "Investigate existing systems, data, workflows, risks, and potential solutions.",
    BarChart3,
  ],
  [
    "03",
    "Validate",
    "Test functionality, verify data, document defects, and confirm requirements.",
    FileCheck2,
  ],
  [
    "04",
    "Deliver",
    "Coordinate implementation, communicate clearly, and support reliable deployment.",
    CircleCheck,
  ],
] as [string, string, string, IconType][]

function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  download,
}: {
  children: React.ReactNode
  href?: string
  variant?: "primary" | "secondary" | "text"
  onClick?: () => void
  type?: "button" | "submit"
  download?: boolean
}) {
  const className = `btn btn-${variant}`
  if (href)
    return (
      <a className={className} href={href} download={download}>
        {children}
      </a>
    )
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

function ProjectVisual({ theme }: { theme: string }) {
  if (theme === "mobile")
    return (
      <div className="project-art mobile-art" aria-hidden="true">
        <div className="phone">
          <div className="phone-top" />
          <small>Good morning</small>
          <strong>ETB 84,260.00</strong>
          <span>Available balance</span>
          <div className="mini-actions">
            <i />
            <i />
            <i />
          </div>
          <div className="transactions">
            <b>Recent activity</b>
            <p>
              Transfer <em>− 2,450</em>
            </p>
            <p>
              Deposit <em>+ 8,200</em>
            </p>
          </div>
        </div>
        <div className="orbit-card">
          <CircleCheck size={18} /> Validated
        </div>
      </div>
    )
  if (theme === "pos")
    return (
      <div className="project-art pos-art" aria-hidden="true">
        <div className="pos-menu">
          <span>POS / New order</span>
          <div className="product-grid">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className="receipt">
          <small>Order #0284</small>
          <p>3 items</p>
          <strong>ETB 485.00</strong>
          <b>Checkout</b>
        </div>
      </div>
    )
  return (
    <div className={`project-art dashboard-art ${theme}`} aria-hidden="true">
      <div className="dash-sidebar">
        <Building2 size={20} />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="dash-main">
        <small>
          {theme === "core" ? "Core operations" : "Internet banking"}
        </small>
        <div className="dash-stats">
          <i />
          <i />
          <i />
        </div>
        <div className="chart">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="table-lines">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="status-pill">
        <span /> Systems operational
      </div>
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [skillTab, setSkillTab] = useState(0)
  const [openExpertise, setOpenExpertise] = useState<number | null>(null)
  const [project, setProject] = useState<typeof projects[number] | null>(null)
  const [formMessage, setFormMessage] = useState("")
  const [scrolled, setScrolled] = useState(0)
  const metricRef = useRef<HTMLDivElement>(null)
  const [metricsVisible, setMetricsVisible] = useState(false)
  const [heroMotionKey, setHeroMotionKey] = useState(0)

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light"
  }, [dark])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
      )
      const sections = [
        "home",
        "about",
        "expertise",
        "projects",
        "experience",
        "contact",
      ]
      const current = sections.findLast((id) => {
        const el = document.getElementById(id)
        return el ? el.getBoundingClientRect().top < 180 : false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("visible"),
        ),
      { threshold: 0.12 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((el) => revealObserver.observe(el))
    const metricObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setMetricsVisible(true),
      { threshold: 0.4 },
    )
    if (metricRef.current) metricObserver.observe(metricRef.current)
    return () => {
      revealObserver.disconnect()
      metricObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setProject(null)
    window.addEventListener("keydown", close)
    document.body.classList.toggle("modal-open", Boolean(project))
    return () => window.removeEventListener("keydown", close)
  }, [project])

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(String(data.get("subject")))
    const body = encodeURIComponent(
      `From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`,
    )
    setFormMessage(
      "Your email app is opening with your message. No form data is stored on this site.",
    )
    window.location.href = `mailto:mesganawolde17@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrolled / 100})` }}
      />
      <header className="nav-shell">
        <a className="brand" href="#home" aria-label="Mesgana Wolde, home">
          <span>MW</span>
          <strong>Mesgana Wolde</strong>
        </a>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={() => setDark(!dark)}
            aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button href="#contact" variant="secondary">
            Let’s talk <ArrowUpRight size={16} />
          </Button>
          <button
            className="icon-btn menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-copy reveal visible">
              <span className="eyebrow">
                Fintech <i /> Banking technology <i /> Digital transformation
              </span>
              <div className="pen-intro" key={heroMotionKey}>
                <h1>
                  <span>Hi, I’m Mesgana Wolde.</span>
                </h1>
                <h2>
                  <span>
                    Bridging banking technology, <em>business analysis</em> &
                    quality engineering.
                  </span>
                </h2>
                <PenLine className="writing-pen" size={22} aria-hidden="true" />
              </div>
              <button
                className="replay-writing"
                onClick={() => setHeroMotionKey((value) => value + 1)}
                aria-label="Replay introduction writing animation"
              >
                <PenLine size={14} />
                Replay intro
              </button>
              <p className="hero-lead">
                I help banking organizations deliver reliable digital solutions
                through core banking administration, database expertise, quality
                assurance, business analysis, and technology project
                consultancy.
              </p>
              <div className="role-list">
                {[
                  "Senior Banking Technology Specialist",
                  "Business Analyst",
                  "Manual QA Engineer",
                  "Database Administrator",
                  "Project Consultant",
                ].map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </div>
              <div className="location">
                <MapPin size={17} /> Addis Ababa, Ethiopia <i /> Open to Remote
                Worldwide
              </div>
              <div className="hero-actions">
                <Button href="#projects">
                  Explore my work <ArrowDown size={17} />
                </Button>
                <Button href="/Mesgana-Wolde-Resume.pdf" variant="secondary" download>
                  <Download size={17} /> Download CV
                </Button>
                <Button href="#contact" variant="text">
                  Let’s discuss a project <ArrowRight size={17} />
                </Button>
              </div>
              <div className="availability">
                <span />
                <strong>Open to conversations</strong>
                <small>about future opportunities</small>
              </div>
            </div>
            <div className="hero-visual reveal visible">
              <div className="portrait-glow" />
              <div className="portrait-frame">
                <img
                  src="/mesgana-wolde-portrait.png"
                  alt="Professional portrait of Mesgana Wolde"
                />
                <div className="portrait-status">
                  <span />
                  Professional profile
                </div>
                <div className="portrait-caption">
                  <div>
                    <span>Mesgana Wolde</span>
                    <small>Banking Technology Specialist</small>
                  </div>
                  <strong>Technology that earns trust.</strong>
                </div>
              </div>
              <div className="portrait-capabilities" aria-label="Core capabilities">
                <span>
                  <Database size={16} />
                  Core systems
                </span>
                <span>
                  <FileCheck2 size={16} />
                  Quality validation
                </span>
                <span>
                  <BarChart3 size={16} />
                  Data analysis
                </span>
              </div>
            </div>
          </div>
          <a href="#impact" className="scroll-cue">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section
          className="impact"
          id="impact"
          ref={metricRef}
          aria-label="Professional impact"
        >
          <div className="impact-intro">
            <span>Professional impact</span>
            <p>
              Grounded in real banking technology implementation experience.
            </p>
          </div>
          {[
            ["5+", "Years of professional experience", BriefcaseBusiness],
            ["2", "Organizations", Building2],
            ["3", "Major banking technology implementations", Layers3],
          ].map(([value, label, Icon], index) => (
            <div className="metric" key={String(label)}>
              <Icon size={20} />
              <strong className={metricsVisible ? "counted" : ""}>
                {metricsVisible ? value as string : "0"}
              </strong>
              <span>{label as string}</span>
              <small>0{index + 1}</small>
            </div>
          ))}
        </section>

        <section className="section about" id="about">
          <SectionHeading
            eyebrow="About me · Professional journey"
            title="Turning complex systems into practical solutions."
          />
          <div className="about-grid">
            <div className="about-story reveal">
              <p className="lead">
                I began my professional journey in IT support and gradually
                progressed through network administration, application system
                administration, quality assurance, and core banking and database
                administration.
              </p>
              <p>
                At Sidama Bank, I developed hands-on experience supporting
                banking systems, investigating production issues, analyzing SQL
                data, validating digital banking solutions, and coordinating
                system enhancements with business stakeholders, developers, and
                external vendors.
              </p>
              <p>
                Today, my work extends across core banking technology, business
                analysis, quality assurance, data analytics, and project
                consultancy. I focus on translating business needs into clear
                technical requirements and ensuring that solutions are tested,
                reliable, secure, and aligned with operational objectives.
              </p>
              <blockquote>
                “My strength lies at the intersection of{" "}
                <span>banking technology, business requirements,</span> and{" "}
                <span>quality engineering.</span>”
              </blockquote>
            </div>
            <aside className="journey-card reveal">
              <div className="journey-header">
                <span>Career evolution</span>
                <Network size={21} />
              </div>
              {[
                "IT Support",
                "Network Administration",
                "Application Administration",
                "Quality Assurance",
                "Core Systems & Database",
                "Business & Project Consultancy",
              ].map((item, index) => (
                <div className="journey-step" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                  {index < 5 && <i />}
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="section expertise" id="expertise">
          <SectionHeading
            eyebrow="Expertise · What I bring"
            title="Technical depth. Business clarity. Dependable delivery."
            intro="Four complementary disciplines—applied as one connected approach to banking technology."
          />
          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon
              const isOpen = openExpertise === index
              return (
                <article
                  className={`expertise-card reveal ${
                    isOpen ? "expanded" : ""
                  }`}
                  key={item.title}
                >
                  <div className="card-number">{item.index}</div>
                  <div className="card-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="expertise-details">
                    {item.items.map((point) => (
                      <span key={point}>
                        <Check size={14} />
                        {point}
                      </span>
                    ))}
                  </div>
                  <button
                    className="card-action"
                    onClick={() => setOpenExpertise(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    Explore expertise <ChevronDown size={16} />
                  </button>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section skills">
          <SectionHeading
            eyebrow="Technical skills · Capability map"
            title="The tools behind reliable outcomes."
            intro="Proficiency labels reflect practical capability categories—not invented percentages or certifications."
          />
          <div className="skill-explorer reveal">
            <div
              className="skill-tabs"
              role="tablist"
              aria-label="Skill categories"
            >
              {skillGroups.map((group, index) => {
                const Icon = group.icon
                return (
                  <button
                    key={group.name}
                    className={skillTab === index ? "active" : ""}
                    onClick={() => setSkillTab(index)}
                    role="tab"
                    aria-selected={skillTab === index}
                  >
                    <Icon size={17} />
                    {group.name}
                  </button>
                )
              })}
            </div>
            <div className="skill-panel" role="tabpanel">
              <div className="skill-panel-head">
                <div>
                  <span>Selected discipline</span>
                  <h3>{skillGroups[skillTab].name}</h3>
                </div>
                <span className="verified">
                  <BadgeCheck size={17} /> Profile-supplied proficiency
                </span>
              </div>
              <div className="skill-list">
                {skillGroups[skillTab].skills.map(([skill, level]) => (
                  <div className="skill-row" key={skill}>
                    <strong>{skill}</strong>
                    <span className={`level ${level.toLowerCase()}`}>
                      {level}
                    </span>
                    <div className="level-track">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                ))}
              </div>
              <div className="level-key">
                <span>
                  <i className="proficient" /> Proficient
                </span>
                <span>
                  <i className="advanced" /> Advanced
                </span>
                <span>
                  <i className="expert" /> Expert
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <SectionHeading
            eyebrow="Selected work · Implementation experience"
            title="Systems designed for trust. Validated for reality."
            intro="Professional implementation experiences presented without proprietary screenshots, confidential information, or unsupported ownership claims."
          />
          <div className="project-list">
            {projects.map((item, index) => (
              <article className="project-card reveal" key={item.title}>
                <div className="project-content">
                  <span className="project-number">Project {item.number}</span>
                  <div className="project-category">{item.category}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button
                    className="project-link"
                    onClick={() => setProject(item)}
                  >
                    Explore case study <ArrowUpRight size={17} />
                  </button>
                </div>
                <div className="project-visual-wrap">
                  <ProjectVisual theme={item.theme} />
                  <span className="fictional">
                    Concept visual · Fictional data
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience" id="experience">
          <SectionHeading
            eyebrow="Experience · Career timeline"
            title="Progress built through responsibility."
            intro="A journey from hands-on support to core systems leadership, quality engineering, and consulting-oriented delivery."
          />
          <div className="timeline">
            {roles.map((item, index) => (
              <article className="timeline-item reveal" key={item.role}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-card">
                  <div className="timeline-title">
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                    <BriefcaseBusiness size={20} />
                  </div>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <Check size={14} />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="stack">
                    <span>Technical stack</span>
                    <p>{item.stack}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="education reveal">
            <div>
              <span className="eyebrow">Education & certifications</span>
              <h3>Details to be added when verified.</h3>
              <p>
                This section is intentionally reserved until degree and
                certification information is supplied.
              </p>
            </div>
            <FileCheck2 size={34} />
          </div>
        </section>

        <section className="section approach">
          <SectionHeading
            eyebrow="My working approach"
            title="Structured thinking. Reliable execution."
            intro="A clear, consulting-oriented process for moving from ambiguity to dependable outcomes."
          />
          <div className="process-grid">
            {process.map(([number, title, text, Icon]) => (
              <article className="process-card reveal" key={title}>
                <span>{number}</span>
                <div className="process-icon">
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-shell">
            <div className="contact-copy reveal">
              <span className="eyebrow">Let’s build reliable solutions</span>
              <h2>Have a banking technology challenge?</h2>
              <p>
                Let’s discuss how I can contribute to your next banking
                technology, digital transformation, quality assurance, or
                business analysis initiative.
              </p>
              <div className="contact-list">
                <a href="mailto:mesganawolde17@gmail.com">
                  <Mail size={19} />
                  <span>
                    <small>Email</small>mesganawolde17@gmail.com
                  </span>
                </a>
                <a href="tel:+251924445976">
                  <Phone size={19} />
                  <span>
                    <small>Phone</small>+251-924445976
                  </span>
                </a>
                <div>
                  <MapPin size={19} />
                  <span>
                    <small>Location</small>Addis Ababa, Ethiopia
                  </span>
                </div>
                <div>
                  <Network size={19} />
                  <span>
                    <small>Availability</small>Open to remote opportunities
                    worldwide
                  </span>
                </div>
              </div>
              <div className="contact-actions">
                <Button href="mailto:mesganawolde17@gmail.com">
                  Send me an email <Mail size={17} />
                </Button>
                <button
                  className="btn btn-secondary disabled"
                  disabled
                  title="LinkedIn profile not yet supplied"
                >
                  LinkedIn link pending
                </button>
              </div>
            </div>
            <form className="contact-form reveal" onSubmit={submitForm}>
              <div className="form-head">
                <span>Start a conversation</span>
                <small>Usually takes under 2 minutes</small>
              </div>
              <label>
                Name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                />
              </label>
              <label>
                Subject
                <input name="subject" required placeholder="How can I help?" />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me briefly about your project or opportunity…"
                />
              </label>
              <Button type="submit">
                Continue in email app <ArrowUpRight size={17} />
              </Button>
              <small className="form-note">
                This form uses your email app; no information is stored or
                submitted to a server.
              </small>
              {formMessage && (
                <div className="form-success" role="status">
                  <CircleCheck size={17} />
                  {formMessage}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span>MW</span>
            <strong>Mesgana Wolde</strong>
          </a>
          <p>Banking Technology · Business Analysis · Quality Engineering</p>
        </div>
        <div className="footer-links">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
          <a href="mailto:mesganawolde17@gmail.com">Email</a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Mesgana Wolde. Designed for clarity and
            trust.
          </span>
          <a href="#home">
            Back to top <ArrowDown size={15} />
          </a>
        </div>
      </footer>

      {project && (
        <div
          className="modal-backdrop"
          onMouseDown={(e) => e.target === e.currentTarget && setProject(null)}
        >
          <div
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-title"
          >
            <button
              className="modal-close"
              onClick={() => setProject(null)}
              aria-label="Close case study"
            >
              <X size={20} />
            </button>
            <div className="modal-visual">
              <ProjectVisual theme={project.theme} />
            </div>
            <div className="modal-content">
              <span className="eyebrow">
                Implementation experience · Project {project.number}
              </span>
              <h2 id="case-title">{project.title}</h2>
              <p className="modal-lead">{project.description}</p>
              <div className="case-grid">
                <div>
                  <span>Business context</span>
                  <p>{project.context}</p>
                </div>
                <div>
                  <span>My role</span>
                  <p>{project.role}</p>
                </div>
                <div>
                  <span>Testing & resolution approach</span>
                  <p>{project.approach}</p>
                </div>
                <div>
                  <span>Key technical areas</span>
                  <div className="modal-tags">
                    {project.areas.map((area) => (
                      <i key={area}>{area}</i>
                    ))}
                  </div>
                </div>
              </div>
              <div className="case-note">
                <ShieldCheck size={20} />
                <p>
                  <strong>Confidentiality by design.</strong> This case study
                  describes professional experience at a high level. No
                  sensitive banking data, proprietary screenshots, or
                  client-restricted implementation details are shown.
                </p>
              </div>
              <div className="lessons">
                <span>Lessons carried forward</span>
                <p>
                  Reliable delivery depends on traceable requirements,
                  disciplined validation, clear communication, and respect for
                  operational risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App

