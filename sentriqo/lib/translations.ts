export type Locale = "en" | "zh";

const translations = {
  en: {
    // ── Navbar ───────────────────────────────────────────────
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      requestQuote: "Request Quote",
    },

    // ── Hero ─────────────────────────────────────────────────
    hero: {
      badge: "Trusted Security Partner",
      heading1: "Securing What",
      heading2: "Matters Most",
      body: "Professional armed & unarmed security services, CCTV surveillance, VIP protection, and event security — designed to keep your people, assets, and premises safe around the clock.",
      stat1Value: "30+",
      stat1Label: "Sites Protected",
      stat2Value: "10+",
      stat2Label: "Years Experience",
      stat3Value: "24/7",
      stat3Label: "Response Time",
      ctaQuote: "Get a Free Quote",
      ctaServices: "Our Services",
      cardTitle: "Active Protection",
      cardSubtitle: "All systems operational",
      cardCallLabel: "Call Us Now",
      services: [
        "Armed Security Guards",
        "CCTV Surveillance",
        "VIP & Executive Protection",
        "Event Security",
        "K9 / Dog Patrol Units",
      ],
    },

    // ── Trust strip ──────────────────────────────────────────
    trust: [
      { value: "30+", label: "Protected Sites" },
      { value: "10+", label: "Years of Service" },
      { value: "100+", label: "Trained Guards" },
      { value: "24/7", label: "Rapid Response" },
      { value: "100%", label: "Licensed & Insured" },
    ],

    // ── Services ─────────────────────────────────────────────
    services: {
      sectionBadge: "What We Offer",
      sectionTitle: "Comprehensive Security Solutions",
      sectionBody:
        "From on-site armed officers to advanced surveillance technology, we deliver end-to-end protection tailored to your specific needs.",
      learnMore: "Learn more",
      viewAll: "View All Services",
      items: [
        {
          title: "Armed Security Guards",
          description:
            "Highly trained, licensed armed officers deployed to protect your premises, staff, and assets with authority and professionalism.",
        },
        {
          title: "CCTV Surveillance",
          description:
            "State-of-the-art camera systems with remote monitoring, analytics, and 24/7 recording for complete situational awareness.",
        },
        {
          title: "VIP & Executive Protection",
          description:
            "Discreet, professional close-protection officers for high-profile individuals, executives, and visiting dignitaries.",
        },
        {
          title: "Event Security",
          description:
            "Crowd management, access control, and on-site security teams for concerts, corporate events, exhibitions, and more.",
        },
        {
          title: "K9 / Dog Patrol Units",
          description:
            "Professionally trained patrol dogs and handlers for perimeter security, drug detection, and rapid threat response.",
        },
        {
          title: "Mobile & Patrol Services",
          description:
            "Regular patrol routes, rapid response to alarms, and mobile security presence to deter criminal activity across multiple sites.",
        },
      ],
    },

    // ── Why us (home) ─────────────────────────────────────────
    why: {
      badge: "Why Choose Us",
      title: "Peace of Mind, Backed by Expertise",
      body: "We combine experienced personnel with advanced technology to deliver security solutions that are proactive, not reactive.",
      cardHeading: "Committed to Your Safety",
      cardBody:
        "For over 10 years Sentriqo has been the trusted security partner for corporates, hospitality groups, retail chains, and private estates across the region.",
      items: [
        {
          title: "Fully Licensed & Accredited",
          body: "All officers hold PSIRA-registered licences and undergo rigorous background checks before deployment.",
        },
        {
          title: "Rapid Incident Response",
          body: "Our operations centre monitors your site in real time and dispatches response units within minutes.",
        },
        {
          title: "Tailored Security Plans",
          body: "We conduct a free on-site risk assessment and design a security strategy matched to your unique requirements.",
        },
        {
          title: "Transparent Reporting",
          body: "Access detailed shift reports, incident logs, and real-time dashboards through our client portal.",
        },
      ],
    },

    // ── Testimonials ──────────────────────────────────────────
    testimonials: {
      title: "Trusted by Leading Organisations",
      subtitle: "Hear from the clients who rely on Sentriqo every day.",
      items: [
        {
          quote:
            "Sentriqo transformed our site security. Response times are outstanding and the team is highly professional.",
          name: "Sarah Mokoena",
          role: "Operations Director, Retail Group",
        },
        {
          quote:
            "Our VIP guests feel completely safe under Sentriqo's protection. Discreet, efficient, and always prepared.",
          name: "James Ndlovu",
          role: "Events Manager, Grand Hotel",
        },
        {
          quote:
            "After switching to Sentriqo, incidents on our estate dropped by 90%. Their K9 units are exceptional.",
          name: "Pieter van der Berg",
          role: "Estate Manager, Silverwood Estate",
        },
      ],
    },

    // ── CTA ───────────────────────────────────────────────────
    cta: {
      badge: "Available 24 / 7",
      title: "Ready to Secure Your Premises?",
      body: "Contact our team today for a free security assessment and customised quote. We respond within 2 hours.",
      btnQuote: "Request a Free Quote",
      btnCall: "Call Us Now",
    },

    // ── Contact ───────────────────────────────────────────────
    contact: {
      badge: "Get In Touch",
      title: "Let's Discuss Your Security Needs",
      body: "Our security consultants are ready to design a solution tailored specifically for you. Fill out the form and we'll respond within 2 hours.",
      phoneLabel: "Phone Numbers",
      emailLabel: "Email Us",
      addressLabel: "Head Office",
      formTitle: "Request a Free Security Assessment",
      fields: {
        name: "Full Name",
        namePlaceholder: "John Smith",
        email: "Email Address",
        emailPlaceholder: "john@company.com",
        phone: "Phone Number",
        phonePlaceholder: "+263 00 000 0000",
        company: "Company / Organisation",
        companyPlaceholder: "Acme Corp",
        service: "Service Required",
        serviceDefault: "Select a service…",
        message: "Message",
        messagePlaceholder: "Describe your security requirements…",
        submit: "Send Request",
      },
      serviceOptions: [
        "Armed Security Guards",
        "CCTV Surveillance",
        "VIP & Executive Protection",
        "Event Security",
        "K9 / Dog Patrol",
        "Mobile Patrol",
        "Other",
      ],
    },

    // ── Contact page ──────────────────────────────────────────
    contactPage: {
      badge: "Reach Out",
      heading: "Contact Sentriqo Security",
      subheading:
        "We're available 24/7. Call our emergency line, send a message, or request a free security assessment below.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Quick answers to common questions about our services and operations.",
      faqs: [
        {
          q: "How quickly can you deploy officers to a new site?",
          a: "In most cases we can have officers on-site within 24–48 hours, pending a brief site risk assessment.",
        },
        {
          q: "Are all your officers PSIRA registered?",
          a: "Yes. Every officer holds a valid PSIRA registration and undergoes background checks, firearm competency testing (where applicable), and regular retraining.",
        },
        {
          q: "Do you offer contracts for small businesses?",
          a: "Absolutely. We offer flexible contract terms starting from 3 months for businesses of all sizes.",
        },
        {
          q: "Can I monitor my CCTV system remotely?",
          a: "Yes. Our smart surveillance packages include a client portal granting you live feeds and recorded footage from any device, anywhere.",
        },
      ],
    },

    // ── About page ────────────────────────────────────────────
    about: {
      badge: "Our Story",
      heading: "About Sentriqo Security",
      subheading:
        "Over 10 years of protecting people, assets, and communities — driven by an unwavering commitment to safety and excellence.",
      missionBadge: "Our Mission",
      missionTitle: "Protecting What Matters Through Professional Excellence",
      missionBody1:
        "Founded in 2009, Sentriqo Security was built on a single conviction: that every person, business, and community deserves reliable, professional protection. What began as a small team of dedicated officers has grown into a full-service security firm with operations across multiple provinces.",
      missionBody2:
        "We invest heavily in training, technology, and people — because we believe that great security comes from great people equipped with the right tools and knowledge to act decisively when it counts most.",
      stats: [
        { value: "10+", label: "Years in Operation" },
        { value: "30+", label: "Protected Sites" },
        { value: "100+", label: "Trained Guards" },
        { value: "ISO 9001", label: "Certified Quality" },
      ],
      valuesBadge: "What Drives Us",
      valuesTitle: "Our Core Values",
      values: [
        {
          icon: "🛡️",
          title: "Integrity",
          body: "We hold ourselves to the highest ethical standards in every interaction with our clients, partners, and communities.",
        },
        {
          icon: "⚡",
          title: "Vigilance",
          body: "Our teams never relax. Continuous training and operational reviews keep us sharp and adaptive to evolving threats.",
        },
        {
          icon: "🤝",
          title: "Partnership",
          body: "We don't just guard premises — we build lasting relationships as a genuine extension of your organisation.",
        },
        {
          icon: "🏆",
          title: "Excellence",
          body: "ISO 9001-certified quality management underpins every service we deliver, from deployment to reporting.",
        },
      ],
      journeyTitle: "Our Journey",
      journeySub: "Key milestones in Sentriqo's growth from a small team to a regional leader.",
      milestones: [
        { year: "2009", event: "Sentriqo Security founded in Harare with a team of 12 officers." },
        { year: "2012", event: "Expanded operations across Zimbabwe and beyond." },
        { year: "2015", event: "Launched dedicated VIP & Executive Protection division." },
        { year: "2018", event: "Introduced K9 patrol units and AI-assisted CCTV monitoring." },
        { year: "2021", event: "Achieved ISO 9001 quality management certification." },
        { year: "2024", event: "30+ active sites protected with over 100 deployed guards." },
      ],
      teamBadge: "Leadership",
      teamTitle: "Meet Our Team",
      team: [
        {
          name: "Themba Dube",
          role: "Chief Executive Officer",
          bio: "Former SAPS senior officer with 20 years of tactical and strategic security leadership.",
          initials: "TD",
        },
        {
          name: "Linda Khumalo",
          role: "Operations Director",
          bio: "Specialist in large-scale site security and crisis management across 300+ deployments.",
          initials: "LK",
        },
        {
          name: "Ruan Steyn",
          role: "Technology & CCTV Director",
          bio: "Certified systems integrator with expertise in AI-driven surveillance and smart monitoring.",
          initials: "RS",
        },
        {
          name: "Nomsa Sithole",
          role: "Client Relations Manager",
          bio: "Dedicated to ensuring every client receives personalised, responsive security support.",
          initials: "NS",
        },
      ],
    },

    // ── Services page ─────────────────────────────────────────
    servicesPage: {
      badge: "What We Do",
      heading: "Our Security Services",
      subheading:
        "A complete portfolio of security solutions — from on-site personnel to advanced surveillance technology — all delivered by vetted professionals.",
      details: [
        {
          id: "armed",
          title: "Armed Security Guards",
          description:
            "Our armed guards are PSIRA-registered, highly trained, and deployed to protect high-risk environments including banks, data centres, retail outlets, and industrial sites.",
          features: [
            "PSIRA Grade A–C licensed",
            "Firearm competency certified",
            "Uniform & plain-clothes options",
            "Static or mobile deployments",
            "Regular performance audits",
          ],
        },
        {
          id: "cctv",
          title: "CCTV Surveillance",
          description:
            "We design, install, and monitor advanced CCTV systems with HD and 4K cameras, AI-based anomaly detection, and cloud offsite backup.",
          features: [
            "HD & 4K camera systems",
            "AI motion & anomaly detection",
            "24/7 live remote monitoring",
            "Cloud & offsite backup",
            "Maintenance SLA included",
          ],
        },
        {
          id: "vip",
          title: "VIP & Executive Protection",
          description:
            "Protect your executives, dignitaries, and high-net-worth individuals with our discreet close-protection officers.",
          features: [
            "Advance reconnaissance",
            "Threat & risk assessments",
            "Secure transport coordination",
            "International deployment capable",
            "Discretion guaranteed",
          ],
        },
        {
          id: "events",
          title: "Event Security",
          description:
            "From stadium concerts to intimate corporate functions, our event security teams manage crowd control, access screening, and emergency response.",
          features: [
            "Crowd management specialists",
            "Access control & ID screening",
            "Emergency evacuation plans",
            "Dedicated operations command",
            "Post-event debrief reports",
          ],
        },
        {
          id: "k9",
          title: "K9 / Dog Patrol Units",
          description:
            "Our certified handlers and trained patrol dogs provide an extra deterrent layer for large perimeters, warehouses, ports, and residential estates.",
          features: [
            "SAPS-affiliated training programmes",
            "Narcotics & explosives detection",
            "Perimeter patrol routes",
            "Night patrol capability",
            "Rapid response deployment",
          ],
        },
        {
          id: "patrol",
          title: "Mobile & Patrol Services",
          description:
            "Our mobile patrol vehicles cover multiple client sites on regular scheduled and randomised routes, responding immediately to alarm activations.",
          features: [
            "Scheduled & random patrols",
            "Alarm response within 10 minutes",
            "Real-time GPS tracking",
            "Physical security checks",
            "Detailed patrol reports",
          ],
        },
      ],
    },

    // ── Footer ────────────────────────────────────────────────
    footer: {
      tagline:
        "Professional security services protecting businesses, individuals, and communities since 2009.",
      callLabel: "Call Us",
      address: "150 Upper East Road, Mt Pleasant, Harare",
      columns: {
        Company: [
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/about#team" },
          { label: "Careers", href: "/about#careers" },
        ],
        Services: [
          { label: "Armed Guards", href: "/services#armed" },
          { label: "CCTV Surveillance", href: "/services#cctv" },
          { label: "VIP Protection", href: "/services#vip" },
          { label: "Event Security", href: "/services#events" },
          { label: "K9 Patrol", href: "/services#k9" },
        ],
        Contact: [
          { label: "Request a Quote", href: "/contact" },
          { label: "Operations Centre", href: "/contact#ops" },
        ],
      },
      copyright: "Sentriqo Security. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      developedBy: "Developed by",
    },
  },

  // ════════════════════════════════════════════════════════════
  //  CHINESE (SIMPLIFIED)
  // ════════════════════════════════════════════════════════════
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      about: "关于我们",
      contact: "联系我们",
      requestQuote: "获取报价",
    },

    hero: {
      badge: "值得信赖的安全合作伙伴",
      heading1: "保护您",
      heading2: "最重要的一切",
      body: "专业武装及非武装安保服务、闭路电视监控、贵宾保护和活动安保——全天候守护您的人员、资产与场所安全。",
      stat1Value: "30+",
      stat1Label: "受保护场所",
      stat2Value: "10+",
      stat2Label: "年丰富经验",
      stat3Value: "24/7",
      stat3Label: "快速响应",
      ctaQuote: "获取免费报价",
      ctaServices: "我们的服务",
      cardTitle: "主动防护",
      cardSubtitle: "所有系统运行正常",
      cardCallLabel: "立即致电",
      services: [
        "武装安保人员",
        "闭路电视监控",
        "贵宾及高管保护",
        "活动安保",
        "警犬巡逻队",
      ],
    },

    trust: [
      { value: "30+", label: "受保护场所" },
      { value: "10+", label: "服务年限" },
      { value: "100+", label: "训练有素的警卫" },
      { value: "24/7", label: "快速响应" },
      { value: "100%", label: "持证合规" },
    ],

    services: {
      sectionBadge: "我们的服务",
      sectionTitle: "全面安保解决方案",
      sectionBody:
        "从现场武装人员到先进监控技术，我们提供量身定制的端到端防护服务。",
      learnMore: "了解更多",
      viewAll: "查看全部服务",
      items: [
        {
          title: "武装安保人员",
          description:
            "训练有素、持证上岗的武装警卫，专业保护您的场所、员工和资产。",
        },
        {
          title: "闭路电视监控",
          description:
            "配备远程监控、数据分析及24/7全天候录像功能的先进摄像系统，实现全方位态势感知。",
        },
        {
          title: "贵宾及高管保护",
          description:
            "为高知名度人士、企业高管和来访政要提供专业、低调的贴身保护服务。",
        },
        {
          title: "活动安保",
          description:
            "为音乐会、企业活动、展览等提供人群管理、出入控制及现场安保团队服务。",
        },
        {
          title: "警犬巡逻队",
          description:
            "专业训练的巡逻犬及驯犬师，为大型场所周界安保、毒品侦测及快速威胁响应提供支持。",
        },
        {
          title: "移动巡逻服务",
          description:
            "定期及随机巡逻路线、快速响应警报，通过移动安保存在震慑多个场所的犯罪活动。",
        },
      ],
    },

    why: {
      badge: "为何选择我们",
      title: "专业保障，安心无忧",
      body: "我们将经验丰富的人员与先进技术相结合，提供主动而非被动的安保解决方案。",
      cardHeading: "致力于您的安全",
      cardBody:
        "15年来，Sentriqo一直是企业、酒店集团、零售连锁及私人庄园值得信赖的安保合作伙伴。",
      items: [
        {
          title: "全面持证认证",
          body: "所有警卫均持有PSIRA注册执照，上岗前须通过严格的背景调查。",
        },
        {
          title: "快速事件响应",
          body: "我们的运营中心实时监控您的场所，并在数分钟内派遣响应小组。",
        },
        {
          title: "定制安保方案",
          body: "我们提供免费现场风险评估，并根据您的具体需求制定安保策略。",
        },
        {
          title: "透明化报告",
          body: "通过客户门户获取详细的班次报告、事件日志和实时数据看板。",
        },
      ],
    },

    testimonials: {
      title: "深受知名机构信赖",
      subtitle: "听听每天依赖Sentriqo的客户怎么说。",
      items: [
        {
          quote: "Sentriqo彻底改变了我们的场所安保。响应速度出色，团队极具专业素养。",
          name: "萨拉·莫科纳",
          role: "运营总监，零售集团",
        },
        {
          quote: "在Sentriqo的保护下，我们的贵宾宾客感到完全安全。低调高效，时刻准备就绪。",
          name: "詹姆斯·恩德洛夫",
          role: "活动经理，格兰德酒店",
        },
        {
          quote: "切换到Sentriqo后，庄园内的事故减少了90%。他们的警犬部队非常出色。",
          name: "彼得·范德伯格",
          role: "庄园经理，西尔伍德庄园",
        },
      ],
    },

    cta: {
      badge: "24小时全天候服务",
      title: "准备好保护您的场所了吗？",
      body: "立即联系我们的团队，获取免费安全评估和定制报价。我们将在2小时内回复。",
      btnQuote: "申请免费报价",
      btnCall: "立即致电",
    },

    contact: {
      badge: "联系我们",
      title: "与我们探讨您的安保需求",
      body: "我们的安保顾问随时准备为您量身打造解决方案。填写表格，我们将在2小时内回复。",
      phoneLabel: "联系电话",
      emailLabel: "发送邮件",
      addressLabel: "总部地址",
      formTitle: "申请免费安全评估",
      fields: {
        name: "姓名",
        namePlaceholder: "张三",
        email: "电子邮箱",
        emailPlaceholder: "zhangsan@company.com",
        phone: "电话号码",
        phonePlaceholder: "+263 00 000 0000",
        company: "公司/组织",
        companyPlaceholder: "某某公司",
        service: "所需服务",
        serviceDefault: "请选择服务…",
        message: "留言",
        messagePlaceholder: "请描述您的安保需求……",
        submit: "提交申请",
      },
      serviceOptions: [
        "武装安保人员",
        "闭路电视监控",
        "贵宾及高管保护",
        "活动安保",
        "警犬巡逻",
        "移动巡逻",
        "其他",
      ],
    },

    contactPage: {
      badge: "联系我们",
      heading: "联系Sentriqo安保",
      subheading:
        "我们24/7全天候服务。请拨打紧急热线、发送消息或在下方申请免费安全评估。",
      faqTitle: "常见问题解答",
      faqSub: "关于我们服务和运营的常见问题快速解答。",
      faqs: [
        {
          q: "能多快将警卫部署到新场所？",
          a: "在大多数情况下，经过简短的现场风险评估后，我们可以在24至48小时内安排警卫到位。",
        },
        {
          q: "所有警卫都已注册PSIRA吗？",
          a: "是的。每位警卫均持有有效的PSIRA注册证，并通过背景调查、枪械能力测试（适用时）及定期再培训。",
        },
        {
          q: "你们为小型企业提供合同服务吗？",
          a: "当然。我们为各类规模的企业提供起始期限为3个月的灵活合同。",
        },
        {
          q: "我可以远程监控闭路电视系统吗？",
          a: "可以。我们的智能监控套餐包含客户门户，可在任何设备、任何地点获取实时画面和录像。",
        },
      ],
    },

    about: {
      badge: "我们的故事",
      heading: "关于Sentriqo安保",
      subheading:
        "10年来守护人员、资产与社区安全——以坚定不移的安全与卓越承诺驱动前行。",
      missionBadge: "我们的使命",
      missionTitle: "以专业卓越守护重要事物",
      missionBody1:
        "Sentriqo安保成立于2009年，秉持一个信念：每个人、每个企业和每个社区都应获得可靠、专业的保护。从最初12名专注的警卫，成长为在多个省份运营的全方位安保公司。",
      missionBody2:
        "我们在培训、技术和人才上大力投入——因为我们相信，优秀的安保源于配备正确工具和知识、在关键时刻果断行动的优秀人才。",
      stats: [
        { value: "10+", label: "运营年限" },
        { value: "30+", label: "受保护场所" },
        { value: "100+", label: "训练有素的警卫" },
        { value: "ISO 9001", label: "质量认证" },
      ],
      valuesBadge: "驱动我们的力量",
      valuesTitle: "我们的核心价值观",
      values: [
        { icon: "🛡️", title: "诚信", body: "在与客户、合作伙伴及社区的每次互动中，我们坚守最高道德标准。" },
        { icon: "⚡", title: "警觉", body: "我们的团队从不松懈。持续培训和运营评审让我们时刻保持敏锐，适应不断演变的威胁。" },
        { icon: "🤝", title: "伙伴关系", body: "我们不只是守卫场所——我们作为您组织真正的延伸，建立持久的合作关系。" },
        { icon: "🏆", title: "卓越", body: "ISO 9001认证的质量管理支撑着我们提供的每一项服务，从部署到报告。" },
      ],
      journeyTitle: "我们的历程",
      journeySub: "Sentriqo从小团队成长为地区领导者的重要里程碑。",
      milestones: [
        { year: "2009", event: "Sentriqo安保在哈拉雷以12名警卫的团队创立。" },
        { year: "2012", event: "业务扩展至津巴布韦全境及周边地区。" },
        { year: "2015", event: "推出专属贵宾及高管保护部门。" },
        { year: "2018", event: "引入警犬巡逻队及AI辅助闭路电视监控。" },
        { year: "2021", event: "获得ISO 9001质量管理认证。" },
        { year: "2024", event: "30多个活跃受保护场所，超过100名在岗警卫。" },
      ],
      teamBadge: "领导团队",
      teamTitle: "认识我们的团队",
      team: [
        { name: "滕巴·杜贝", role: "首席执行官", bio: "前SAPS高级警官，拥有20年战术和战略安保领导经验。", initials: "TD" },
        { name: "琳达·库马洛", role: "运营总监", bio: "专注于大型场所安保和危机管理，经历300多次部署。", initials: "LK" },
        { name: "鲁安·斯坦", role: "技术与闭路电视总监", bio: "认证系统集成商，专注于AI驱动的监控和智能监测。", initials: "RS" },
        { name: "诺姆萨·西托尔", role: "客户关系经理", bio: "致力于确保每位客户获得个性化、快速响应的安保支持。", initials: "NS" },
      ],
    },

    servicesPage: {
      badge: "我们的业务",
      heading: "我们的安保服务",
      subheading:
        "从现场人员到先进监控技术，全套安保解决方案，均由经过审核的专业人员提供。",
      details: [
        {
          id: "armed",
          title: "武装安保人员",
          description: "我们的武装警卫均已注册PSIRA，训练有素，部署于银行、数据中心、零售网点和工业场所等高风险环境。",
          features: ["PSIRA A–C级持证", "枪械能力认证", "制服及便衣选项", "固定或移动部署", "定期绩效审核"],
        },
        {
          id: "cctv",
          title: "闭路电视监控",
          description: "我们设计、安装和监控配备高清4K摄像头、AI异常检测和云端异地备份的先进闭路电视系统。",
          features: ["高清及4K摄像系统", "AI运动及异常检测", "24/7实时远程监控", "云端及异地备份", "含维护SLA"],
        },
        {
          id: "vip",
          title: "贵宾及高管保护",
          description: "为您的高管、政要和高净值人士提供低调的贴身保护警卫，涵盖国内外任务。",
          features: ["提前侦察", "威胁与风险评估", "安全交通协调", "可国际部署", "保密承诺"],
        },
        {
          id: "events",
          title: "活动安保",
          description: "从大型体育场音乐会到小规模企业活动，我们的团队提供人群管控、出入筛查和紧急响应协调。",
          features: ["人群管理专家", "出入控制及身份核验", "紧急疏散预案", "专属运营指挥部", "活动后总结报告"],
        },
        {
          id: "k9",
          title: "警犬巡逻队",
          description: "我们认证的驯犬师和训练有素的巡逻犬为大型周界、仓库、港口和住宅庄园提供额外威慑层。",
          features: ["SAPS相关培训项目", "毒品及爆炸物探测", "周界巡逻路线", "夜间巡逻能力", "快速响应部署"],
        },
        {
          id: "patrol",
          title: "移动巡逻服务",
          description: "我们的移动巡逻车按定期和随机路线覆盖多个客户场所，立即响应警报激活。",
          features: ["定期及随机巡逻", "10分钟内响应警报", "实时GPS追踪", "实地安全检查", "详细巡逻报告"],
        },
      ],
    },

    footer: {
      tagline: "自2009年起，为企业、个人和社区提供专业安保服务。",
      callLabel: "联系电话",
      address: "哈拉雷Mt Pleasant区Upper East路150号",
      columns: {
        公司: [
          { label: "关于我们", href: "/about" },
          { label: "我们的团队", href: "/about#team" },
          { label: "招聘机会", href: "/about#careers" },
        ],
        服务: [
          { label: "武装警卫", href: "/services#armed" },
          { label: "闭路电视监控", href: "/services#cctv" },
          { label: "贵宾保护", href: "/services#vip" },
          { label: "活动安保", href: "/services#events" },
          { label: "警犬巡逻", href: "/services#k9" },
        ],
        联系: [
          { label: "申请报价", href: "/contact" },
          { label: "运营中心", href: "/contact#ops" },
        ],
      },
      copyright: "Sentriqo安保。保留所有权利。",
      privacy: "隐私政策",
      terms: "服务条款",
      developedBy: "开发者",
    },
  },
} as const;

export type Translations = typeof translations.en;
export default translations;
