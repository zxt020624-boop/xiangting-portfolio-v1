const projects = [
  {
    slug: "soft-bieki-house",
    title: "Soft Bieki House",
    category: "Brand Website / Storytelling",
    detailTitle: "Soft Bieki House - Brand Website Project",
    description:
      "A handmade brand website project focused on storytelling, product presentation, and a soft editorial visual world.",
    tags: ["Brand Website", "Storytelling", "Handmade Product"],
    accent: "sage",
    overview:
      "A self-initiated website project for a handmade product brand, focused on brand storytelling, product presentation, and a soft lifestyle-oriented visual direction.",
    context:
      "Soft Bieki House began as a handmade product concept and later developed into a website project intended to present the brand in a more complete, story-driven, and emotionally engaging format.",
    role: [
      "Planned website structure and content flow",
      "Wrote homepage and brand story messaging",
      "Developed product presentation direction",
      "Built the website with AI-assisted tools",
    ],
    work: [
      "Organized homepage structure and key messaging",
      "Developed the tone and storytelling direction of the brand",
      "Planned product showcase sections and brand story content",
      "Considered how to present handmade products in a more lifestyle-oriented and emotionally engaging way",
    ],
    outcome: [
      "Built a website prototype for a handmade product brand",
      "Created a more complete and visually intentional digital presentation for the brand",
      "Translated a small handmade product concept into a customer-facing brand experience",
    ],
    learned: [
      "How website structure, storytelling, and visual presentation shape the identity of a small brand",
      "How to use digital presentation to make handmade products feel more complete and emotionally resonant",
    ],
    visuals: [
      "Replace with homepage screenshot",
      "Replace with product section screenshot",
      "Replace with brand story page screenshot",
    ],
  },
  {
    slug: "social-media-operation",
    title: "Social Media Operation",
    category: "Social Media / Content Operation",
    detailTitle: "Social Media Operation",
    tags: ["Douyin", "Xiaohongshu", "Content Operation"],
    accent: "blue",
    description:
      "A portfolio case covering Douyin account operation, livestream hosting, short-video editing, and Xiaohongshu content practice across internship and personal projects.",
    overview:
      "A portfolio case covering Douyin account operation, livestream hosting, short-video editing, and Xiaohongshu content practice across internship and personal projects.",
    context:
      "Platform-facing content work across MCN Douyin account support, livestream hosting, short news editing, and Xiaohongshu account operation.",
  },
  {
    slug: "creative-content",
    title: "Creative Content",
    category: "Creative Content",
    detailTitle: "Creative Content",
    description:
      "A collection of self-initiated videos, visual experiments, and written content exploring storytelling, mood, and online communication.",
    archiveDescription:
      "A collection of self-initiated content across Xiaohongshu, Douyin, and editorial writing, focused on visual storytelling and lifestyle communication.",
    tags: ["Content Creation", "Short-form Video", "Writing"],
    archiveTags: ["Xiaohongshu", "Short-form Video", "Writing"],
    archiveImage: "assets/images/creative-content-cover.png",
    archiveImageAlt:
      "Creative Content portfolio preview showing a Xiaohongshu fashion and lifestyle vlog account.",
    accent: "rose",
    overview:
      "A small collection of self-initiated videos and written pieces across food, lifestyle, pets, and travel.",
    context:
      "Self-initiated content work exploring tone, visual rhythm, writing structure, and everyday lifestyle storytelling.",
  },
  {
    slug: "other-works",
    title: "Other Works & Experiences",
    category: "Other Works & Experiences",
    detailTitle: "Other Works & Experiences",
    description:
      "Additional projects and earlier experience, including university work, social commerce exploration, and supporting case materials.",
    tags: ["Archive", "University Work", "Other Experience"],
    accent: "wheat",
    overview:
      "A selection of additional work and practice-based experiences that shaped how I communicate, respond on-site, and think about content beyond the screen.",
    context:
      "Reporting practice, small social-commerce ideas, and customer-facing work gathered into one curated portfolio section.",
  },
];

const rootPath = window.location.pathname.includes("/projects/") ? "../" : "";

function assetPath(path) {
  if (!path || /^(https?:|mailto:|tel:|#)/.test(path)) return path;
  if (path.startsWith(rootPath) || path.startsWith("./") || path.startsWith("../")) return path;
  return `${rootPath}${path.replace(/^\/+/, "")}`;
}

function projectUrl(project) {
  return `${rootPath}projects/${project.slug}.html`;
}

function tagMarkup(tags) {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function listMarkup(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function projectCoverMarkup(project, context = "default") {
  if (context === "archive" && project.archiveImage) {
    return `
      <img
        class="cover-screenshot archive-cover-image"
        src="${assetPath(project.archiveImage)}"
        alt="${project.archiveImageAlt || project.title}"
      />
    `;
  }

  const covers = {
    "soft-bieki-house": `
      <img
        class="cover-screenshot"
        src="${assetPath("assets/images/soft-bieki/shop-cards.jpg")}"
        alt=""
      />
    `,
    "social-media-operation": `
      <img
        class="cover-screenshot operation-cover-image"
        src="${assetPath("assets/images/social-media-operation-cover.jpg")}"
        alt="Social media operation portfolio covering Douyin, short-form video production, and Xiaohongshu content."
      />
    `,
    "creative-content": `
      <img
        class="cover-screenshot"
        src="${assetPath("assets/images/creative-content-cover.png")}"
        alt=""
      />
    `,
    "other-works": `
      <img
        class="cover-screenshot"
        src="${assetPath("assets/images/other-works-cover.png")}"
        alt=""
      />
    `,
  };

  return covers[project.slug] || `<span>${project.title}</span>`;
}

function renderHeader() {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;

  const navItems = [
    ["Home", `${rootPath}index.html`],
    ["About", `${rootPath}about.html`],
    ["Projects", `${rootPath}projects.html`],
    ["Contact", `${rootPath}contact.html`],
  ];

  const path = window.location.pathname;
  const isHome = path.endsWith("/index.html") || path.endsWith("/");
  const isAbout = path.endsWith("/about.html");
  const displayName = isHome || isAbout ? "Xiangting Zheng" : "Zheng Xiangting";
  mount.innerHTML = `
    <header class="site-header">
      <a class="brand-mark" href="${rootPath}index.html" aria-label="${displayName} home">
        <span>${displayName}</span>
      </a>
      <nav class="main-nav" aria-label="Main navigation">
        ${navItems
          .map(([label, href]) => {
            const isActive =
              (label === "Home" && path.endsWith("/index.html")) ||
              (label === "Home" && path.endsWith("/")) ||
              (label !== "Home" && path.includes(href.replace(rootPath, "").replace(".html", "")));
            return `<a class="${isActive ? "active" : ""}" href="${href}">${label}</a>`;
          })
          .join("")}
      </nav>
    </header>
  `;
}

function renderFooter() {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  const path = window.location.pathname;
  const isHome = path.endsWith("/index.html") || path.endsWith("/");
  const isAbout = path.endsWith("/about.html");
  const displayName = isHome || isAbout ? "Xiangting Zheng" : "Zheng Xiangting";
  mount.innerHTML = `
    <footer class="site-footer">
      <p>${displayName}</p>
      <p>Social media, content, and brand storytelling portfolio.</p>
    </footer>
  `;
}

function createProjectCard(project, variant = "standard") {
  const isFeatured = variant === "featured";
  return `
    <article class="project-card ${variant}" data-accent="${project.accent}">
      <a href="${projectUrl(project)}" aria-label="View ${project.title}">
        <div class="project-media ${isFeatured ? "project-cover" : ""} ${
          isFeatured && (project.slug === "soft-bieki-house" || project.slug === "creative-content" || project.slug === "other-works") ? "image-cover" : ""
        } ${
          isFeatured && project.slug === "other-works" ? "other-works-cover" : ""
        }" aria-hidden="true">
          ${isFeatured ? projectCoverMarkup(project) : `<span>${project.title}</span>`}
        </div>
        <div class="project-card-body">
          <div class="card-kicker">${project.category || project.tags[0]}</div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-row">${tagMarkup(project.tags)}</div>
          <span class="text-link">View project</span>
        </div>
      </a>
    </article>
  `;
}

function createProjectArchiveRow(project) {
  const archiveDescription = project.archiveDescription || project.description;
  const archiveTags = project.archiveTags || project.tags;
  const hasArchiveImage = Boolean(project.archiveImage);

  return `
    <article class="project-archive-row" data-project-id="${project.slug}" data-accent="${project.accent}">
      <a class="project-archive-preview" href="${projectUrl(project)}" aria-label="View ${project.title}">
        <div class="project-media project-cover ${
          project.slug === "soft-bieki-house" || hasArchiveImage ? "image-cover" : ""
        } ${
          hasArchiveImage ? "archive-image-media" : ""
        }" aria-hidden="true">
          ${projectCoverMarkup(project, "archive")}
        </div>
      </a>
      <div class="project-archive-copy">
        <p class="card-kicker">${project.category || project.tags[0]}</p>
        <h2>${project.title}</h2>
        <p>${archiveDescription}</p>
        <div class="tag-row">${tagMarkup(archiveTags)}</div>
        <a class="button" href="${projectUrl(project)}">View project</a>
      </div>
    </article>
  `;
}

const homeProjectDetails = {
  "soft-bieki-house": {
    category: "BRAND WEBSITE / STORYTELLING",
    summary:
      "A handmade brand website combining product presentation, character interaction, and visual storytelling.",
    image: "assets/images/soft-bieki/shop-cards.jpg",
    alt: "Soft Bieki House handmade brand website preview",
  },
  "social-media-operation": {
    category: "SOCIAL MEDIA / CONTENT OPERATION",
    summary:
      "Douyin account operation, livestream hosting, short-video editing, and Xiaohongshu content practice.",
    image: "assets/images/social-media-operation-cover.jpg",
    alt: "Social media operation project preview",
  },
  "creative-content": {
    category: "CREATIVE CONTENT",
    summary:
      "Self-initiated short-form videos, lifestyle content, and editorial writing.",
    image: "assets/images/creative-content-cover.png",
    alt: "Creative Content project preview",
  },
  "other-works": {
    category: "ARCHIVE / INDEPENDENT WORK",
    summary:
      "University projects, journalism practice, and an independent social-commerce case.",
    image: "assets/images/other-works-cover.png",
    alt: "Other Works and Experiences project preview",
  },
};

function createHomeProjectCard(project) {
  const details = homeProjectDetails[project.slug] || {
    category: project.category || project.tags[0],
    summary: project.description,
    image: "",
    alt: project.title,
  };

  return `
    <article class="home-project-card">
      <a href="${projectUrl(project)}" aria-label="Know more about ${project.title}">
        <div class="home-project-media">
          ${
            details.image
              ? `<img src="${assetPath(details.image)}" alt="${details.alt}" />`
              : `<span>${project.title}</span>`
          }
          <div class="home-project-overlay">
            <p class="home-project-summary">${details.summary}</p>
            <span class="home-project-link">Know more ↗</span>
          </div>
        </div>
        <div class="home-project-caption">
          <span class="home-project-category">${details.category}</span>
          <h3>${project.title}</h3>
          <p class="home-project-touch-summary">${details.summary}</p>
          <span class="home-project-touch-link">Know more ↗</span>
        </div>
      </a>
    </article>
  `;
}

function renderFeaturedProjects() {
  const mount = document.querySelector("[data-featured-projects]");
  if (!mount) return;

  mount.innerHTML = projects.map((project) => createHomeProjectCard(project)).join("");
}

function renderProjectArchive() {
  const mount = document.querySelector("[data-project-archive]");
  if (!mount) return;

  mount.innerHTML = projects.map((project) => createProjectArchiveRow(project)).join("");
}

function initExperienceTimeline() {
  const scene = document.querySelector("[data-about-scroll-scene]");
  const sticky = scene?.querySelector(".about-scroll-sticky");
  const windows = Array.from(scene?.querySelectorAll("[data-profile-window]") || []);
  const titleStage = scene?.querySelector("[data-experience-title-stage]");
  const timeline = scene?.querySelector("[data-experience-timeline]");
  const sourceList = scene?.querySelector("[data-experience-source-list]");
  const items = Array.from(sourceList?.querySelectorAll("[data-experience-item]") || []);
  const timelineDisplay = scene?.querySelector("[data-timeline-display]");
  const timelineDate = scene?.querySelector("[data-timeline-date]");
  const timelineContent = scene?.querySelector("[data-timeline-content]");
  const progressLine = scene?.querySelector("[data-experience-progress]");
  const indicatorMount = scene?.querySelector("[data-experience-indicators]");
  if (!scene || !sticky || !titleStage || !timeline || !timelineDisplay || !timelineDate || !timelineContent || items.length === 0) return;
  if (scene.dataset.experienceInitialized === "true") return;
  scene.dataset.experienceInitialized = "true";

  [scene, sticky, ...windows, titleStage, timeline, timelineDisplay, sourceList, ...items].filter(Boolean).forEach((item) => {
    item.classList.remove("editorial-reveal", "is-visible");
    item.style.removeProperty("--editorial-delay");
  });

  scene.style.setProperty("--experience-count", items.length);

  const experiences = items.map((item) => {
    const date = item.querySelector(".experience-date")?.textContent.trim() || "";
    const copy = item.querySelector(".experience-copy");
    const title = copy?.querySelector("p:first-child")?.textContent.trim() || "";
    const role = copy?.querySelector("h3")?.textContent.trim() || "";
    const descriptions = Array.from(copy?.querySelectorAll("p:not(:first-child)") || [])
      .map((paragraph) => paragraph.textContent.trim())
      .filter(Boolean);

    return { date, title, role, descriptions };
  });

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const compactQuery = window.matchMedia("(max-width: 900px)");
  const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
  const smooth = (value) => {
    const next = clamp(value);
    return next * next * (3 - 2 * next);
  };
  const mix = (from, to, progress) => from + (to - from) * progress;

  const indicators = indicatorMount
    ? experiences.map((_, index) => {
        const indicator = document.createElement("span");
        indicator.style.setProperty("--indicator-position", `${experiences.length === 1 ? 0 : (index / (experiences.length - 1)) * 100}%`);
        indicatorMount.appendChild(indicator);
        return indicator;
      })
    : [];

  let renderedIndex = -1;
  let activeAnimation = 0;
  let activeTimeout = 0;

  const setEntryTransform = (opacity, y) => {
    timelineDisplay.style.opacity = String(opacity);
    timelineDisplay.style.transform = `translateY(${y}px)`;
  };

  const animateEntry = ({ fromOpacity, toOpacity, fromY, toY, duration, onComplete }) => {
    window.cancelAnimationFrame(activeAnimation);
    const start = performance.now();

    const step = (time) => {
      const progress = clamp((time - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const opacity = mix(fromOpacity, toOpacity, eased);
      const y = mix(fromY, toY, eased);
      setEntryTransform(opacity, y);

      if (progress < 1) {
        activeAnimation = window.requestAnimationFrame(step);
        return;
      }

      activeAnimation = 0;
      onComplete?.();
    };

    activeAnimation = window.requestAnimationFrame(step);
  };

  const updateIndicators = (index) => {
    indicators.forEach((indicator, indicatorIndex) => {
      indicator.classList.toggle("is-active", indicatorIndex === index);
      indicator.classList.toggle("is-past", indicatorIndex < index);
    });
  };

  const renderExperience = (index, options = {}) => {
    const nextIndex = clamp(index, 0, experiences.length - 1);
    if (nextIndex === renderedIndex) return;

    const direction = renderedIndex === -1 || nextIndex > renderedIndex ? 1 : -1;
    const nextExperience = experiences[nextIndex];
    const [description, ...bullets] = nextExperience.descriptions;
    const writeContent = () => {
      timelineDate.textContent = nextExperience.date;
      timelineContent.innerHTML = `
        <h3>${nextExperience.title}</h3>
        <p class="timeline-role">${nextExperience.role}</p>
        ${description ? `<p class="timeline-description">${description}</p>` : ""}
        ${
          bullets.length
            ? `<ul class="timeline-bullets">${bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`
            : ""
        }
      `;
      renderedIndex = nextIndex;
      updateIndicators(nextIndex);
    };

    window.clearTimeout(activeTimeout);

    if (options.immediate || renderedIndex === -1 || compactQuery.matches || reduceMotionQuery.matches) {
      window.cancelAnimationFrame(activeAnimation);
      writeContent();
      setEntryTransform(1, 0);
      return;
    }

    window.cancelAnimationFrame(activeAnimation);
    animateEntry({
      fromOpacity: 1,
      toOpacity: 0,
      fromY: 0,
      toY: -40 * direction,
      duration: 260,
      onComplete: () => {
        writeContent();
        setEntryTransform(0, 40 * direction);
        activeTimeout = window.setTimeout(() => {
          animateEntry({
            fromOpacity: 0,
            toOpacity: 1,
            fromY: 40 * direction,
            toY: 0,
            duration: 420,
          });
        }, 16);
      },
    });
  };

  const setNormalFlow = () => {
    scene.style.setProperty("--line-progress", "1");
    timeline.classList.add("is-active");
    windows.forEach((windowCard) => {
      windowCard.style.setProperty("--profile-opacity", "1");
      windowCard.style.setProperty("--profile-y", "0px");
      windowCard.style.setProperty("--profile-scale", "1");
    });
    titleStage.style.setProperty("--title-opacity", "1");
    titleStage.style.setProperty("--title-y", "0px");
    titleStage.style.setProperty("--title-scale", "1");
    timeline.style.setProperty("--timeline-stage-opacity", "1");
    renderExperience(0, { immediate: true });
    if (progressLine) progressLine.style.transform = "scaleY(1)";
  };

  let ticking = false;

  const updateCompactExperience = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    windows.forEach((windowCard) => {
      const rect = windowCard.getBoundingClientRect();
      const isVisible = rect.top < viewportHeight * 0.9;
      windowCard.style.setProperty("--profile-opacity", isVisible ? "1" : "0.25");
      windowCard.style.setProperty("--profile-y", isVisible ? "0px" : "18px");
      windowCard.style.setProperty("--profile-scale", "1");
    });

    titleStage.style.setProperty("--title-opacity", "1");
    titleStage.style.setProperty("--title-y", "0px");
    titleStage.style.setProperty("--title-scale", "1");
    timeline.style.setProperty("--timeline-stage-opacity", "1");
    scene.style.setProperty("--line-progress", "1");
    if (progressLine) progressLine.style.transform = "scaleY(1)";
  };

  const updateExperience = () => {
    ticking = false;

    if (reduceMotionQuery.matches) {
      setNormalFlow();
      return;
    }

    if (compactQuery.matches) {
      updateCompactExperience();
      return;
    }

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const sceneRect = scene.getBoundingClientRect();
    const scrollRange = Math.max(scene.offsetHeight - viewportHeight, 1);
    const progress = clamp(-sceneRect.top / scrollRange);
    const profileExit = smooth((progress - 0.12) / 0.18);
    const titleIn = smooth((progress - 0.26) / 0.14);
    const titleOut = smooth((progress - 0.42) / 0.1);
    const timelineIn = smooth((progress - 0.5) / 0.06);
    const timelineProgress = clamp((progress - 0.52) / 0.46);
    const nextActiveIndex = Math.min(Math.floor(timelineProgress * experiences.length), experiences.length - 1);

    scene.style.setProperty("--scene-progress", progress.toFixed(4));
    scene.style.setProperty("--line-progress", timelineProgress.toFixed(4));
    if (progressLine) {
      progressLine.style.transform = `scaleY(${timelineProgress.toFixed(4)})`;
    }

    windows.forEach((windowCard) => {
      windowCard.style.setProperty("--profile-opacity", (1 - profileExit).toFixed(3));
      windowCard.style.setProperty("--profile-y", `${(-42 * profileExit).toFixed(2)}px`);
      windowCard.style.setProperty("--profile-scale", (1 - profileExit * 0.04).toFixed(3));
    });

    titleStage.style.setProperty("--title-opacity", (titleIn * (1 - titleOut)).toFixed(3));
    titleStage.style.setProperty("--title-y", `${(mix(34, 0, titleIn) + mix(0, -36, titleOut)).toFixed(2)}px`);
    titleStage.style.setProperty("--title-scale", mix(0.98, 1, titleIn).toFixed(3));
    timeline.style.setProperty("--timeline-stage-opacity", timelineIn.toFixed(3));
    timeline.classList.toggle("is-active", timelineIn > 0.45);

    renderExperience(nextActiveIndex);
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateExperience);
  };

  updateExperience();
  window.setTimeout(requestUpdate, 80);

  const scrollToExperiencePhase = () => {
    if (window.location.hash !== "#experience" || reduceMotionQuery.matches || compactQuery.matches) return;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollRange = Math.max(scene.offsetHeight - viewportHeight, 1);
    const targetTop = window.scrollY + scene.getBoundingClientRect().top + scrollRange * 0.5;
    window.scrollTo({ top: targetTop });
    requestUpdate();
  };

  if (window.location.hash === "#experience") {
    window.setTimeout(scrollToExperiencePhase, 60);
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("load", requestUpdate);
  window.addEventListener("hashchange", () => {
    scrollToExperiencePhase();
    requestUpdate();
  });

  reduceMotionQuery.addEventListener?.("change", requestUpdate);
  compactQuery.addEventListener?.("change", requestUpdate);
}

function renderSoftBiekiCaseStudy(mount) {
  document.title = "Soft Bieki House | Zheng Xiangting";

  const imageBase = assetPath("assets/images/soft-bieki");
  const caseImageBase = `${imageBase}/case`;
  const chaseImageBase = `${imageBase}/chase-carousel`;
  const caseVideoBase = assetPath("assets/videos/soft-bieki");
  const productHighlights = [
    [
      "Mood-based presentation",
      "Products are presented through visual atmosphere instead of ordinary product listings.",
    ],
    [
      "Character-driven branding",
      "Product collections are connected with the Soft Bieki House fictional world.",
    ],
    [
      "Emotional shopping experience",
      "The website encourages users to explore stories behind products rather than only making purchases.",
    ],
  ];
  const interactionHighlights = [
    [
      "Interactive mascot system",
      "Chase appears in different sections to guide users through the website experience.",
    ],
    [
      "Emotional brand connection",
      "The character creates a warmer relationship between users and the handmade brand.",
    ],
    [
      "Story-driven interaction",
      "Small details turn browsing into a more personal exploration.",
    ],
  ];
  const selectedScreens = [
    {
      src: `${caseImageBase}/homepage-design.jpg`,
      alt: "Soft Bieki House homepage design",
      caption: "Established the overall brand atmosphere through visual identity and storytelling.",
    },
    {
      src: `${caseImageBase}/shop-page.jpg`,
      alt: "Soft Bieki House shop page with handmade product cards",
      caption: "Designed product presentation around mood, composition, and handmade character.",
    },
    {
      src: `${caseImageBase}/christmas-section.jpg`,
      alt: "Soft Bieki House Christmas limited section",
      caption: "Created a limited collection experience with seasonal storytelling.",
    },
    {
      src: `${caseImageBase}/product-detail-progress.jpg`,
      alt: "Soft Bieki House product detail modal",
      caption: "Combined product information with interactive character guidance.",
    },
    {
      src: `${caseImageBase}/product-detail-chase.jpg`,
      alt: "Soft Bieki House Chase interaction",
      caption: "Designed a mascot interaction system to increase engagement.",
    },
    {
      src: `${caseImageBase}/memory-story.jpg`,
      alt: "Soft Bieki House about and story section",
      caption: "Extended the brand world through fictional storytelling and memory interaction.",
    },
  ];
  const chaseSlides = [
    {
      category: "SHOP INTERACTION",
      title: "Shop Assistant Chase",
      description:
        "Chase appears during product browsing to guide users and create a more playful shopping experience.",
      src: `${chaseImageBase}/shop-assistant-chase.png`,
      alt: "Shop page Chase dialogue interaction",
    },
    {
      category: "PRODUCT DETAIL",
      title: "Product Story Chase",
      description:
        "Chase connects product information with personality, making each handmade item feel more memorable.",
      src: `${chaseImageBase}/product-story-chase.png`,
      alt: "Product detail modal with Chase interaction",
    },
    {
      category: "MEMORY EXPERIENCE",
      title: "Memory Keeper Chase",
      description:
        "A storytelling interaction that extends the fictional world beyond product pages.",
      src: `${chaseImageBase}/memory-keeper-chase.png`,
      alt: "Memory section Chase interaction",
    },
    {
      category: "SEASONAL DESIGN",
      title: "Christmas Chase",
      description:
        "A seasonal character variation designed for limited collections and festive storytelling.",
      src: `${chaseImageBase}/christmas-chase.png`,
      alt: "Christmas Chase character variation",
    },
    {
      category: "CONTACT EXPERIENCE",
      title: "Postman Chase",
      description:
        "A themed character variation that guides users through communication and email interaction.",
      src: `${chaseImageBase}/postman-chase.png`,
      alt: "Postman Chase contact interaction",
    },
    {
      category: "STORY WORLD",
      title: "Everyday Chase",
      description:
        "Different outfits and expressions help Chase feel like a living character inside the brand world.",
      src: `${chaseImageBase}/everyday-chase.png`,
      alt: "Everyday Chase dialogue interaction",
    },
    {
      category: "BRAND DETAIL",
      title: "Chase Stamp Collection",
      description:
        "Small visual details such as custom stamps and illustrations strengthen the emotional identity of the brand.",
      src: `${chaseImageBase}/chase-stamp-collection.png`,
      alt: "Chase custom stamp illustration",
    },
  ];
  const projectSummary = [
    ["Role", "Branding / Storytelling / Web Design"],
    ["Type", "Personal concept project"],
    ["Focus", "Handmade product world-building / interaction design"],
  ];

  mount.innerHTML = `
    <article class="case-study soft-bieki-case">
      <section class="case-hero soft-bieki-intro">
        <a class="back-link" href="${rootPath}projects.html"><- Projects</a>
        <div class="case-hero-copy">
          <p class="eyebrow">Brand Website / Storytelling / Handmade Product</p>
          <h1>Soft Bieki House</h1>
          <p class="case-subtitle">
            A handmade yarn shop website built as a soft fictional brand world.
          </p>
          <div class="soft-bieki-tags" aria-label="Project tags">
            <span>Handmade Brand</span>
            <span>Storytelling</span>
            <span>Interaction Detail</span>
          </div>
          <p class="case-intro">
            Soft Bieki House is a self-initiated brand website project exploring
            how storytelling, visual identity, and interactive design can
            transform a handmade shop into an emotional digital experience.
          </p>
        </div>
      </section>

      <dl class="soft-bieki-summary" aria-label="Project summary">
        ${projectSummary
          .map(
            ([label, value]) => `
              <div>
                <dt>${label}</dt>
                <dd>${value}</dd>
              </div>
            `
          )
          .join("")}
      </dl>

      <section class="case-section soft-bieki-story-section">
        <div class="case-section-heading">
          <p class="section-label">Concept</p>
          <h2>A handmade shop designed as a story world.</h2>
          <p>
            I wanted the website to feel more personal than a traditional
            online shop. Instead of simply presenting products, I created a
            fictional handmade world with its own characters, atmosphere, and
            emotional storytelling.
          </p>
        </div>
        <figure class="case-media-card main-case-visual">
          <img src="${caseImageBase}/homepage-design.jpg" alt="Soft Bieki House homepage design" />
          <figcaption>Homepage visual</figcaption>
        </figure>
      </section>

      <section class="case-section soft-bieki-story-section is-reversed">
        <div class="case-media-stack">
          <figure class="case-media-card">
            <img src="${caseImageBase}/shop-page.jpg" alt="Soft Bieki House shop page with handmade product cards" />
            <figcaption>Shop product cards</figcaption>
          </figure>
          <figure class="case-media-card">
            <img src="${caseImageBase}/christmas-section.jpg" alt="Soft Bieki House Christmas limited product section" />
            <figcaption>Christmas section</figcaption>
          </figure>
        </div>
        <div class="case-section-heading">
          <p class="section-label">Product Presentation</p>
          <h2>Products presented through mood, storytelling, and character.</h2>
          <p>
            The product experience focuses on atmosphere rather than
            traditional ecommerce presentation. Each handmade item is connected
            with visual mood, character details, and small stories to create a
            more memorable browsing experience.
          </p>
          <div class="case-numbered-notes">
            ${productHighlights
              .map(
                ([title, body], index) => `
                  <article>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>${title}</h3>
                      <p>${body}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="case-section soft-bieki-story-section interaction-feature-section">
        <div class="case-section-heading">
          <p class="section-label">Character & Interaction</p>
          <h2>Character-based Interaction System</h2>
          <p>
            Chase, the white cat mascot, works as a digital companion
            throughout the website. Small interactions connect products,
            stories, and users together, making the brand world feel more alive.
          </p>
          <div class="case-numbered-notes">
            ${interactionHighlights
              .map(
                ([title, body], index) => `
                  <article>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>${title}</h3>
                      <p>${body}</p>
                    </div>
                  </article>
                `
              )
              .join("")}
          </div>
        </div>
        <div class="chase-carousel" data-chase-carousel tabindex="0" aria-label="Chase character interaction carousel">
          <div class="chase-carousel-viewport">
            <div class="chase-carousel-track">
              ${chaseSlides
                .map(
                  (slide) => `
                    <article class="chase-slide" data-chase-slide>
                      <figure class="chase-slide-media">
                        <img src="${slide.src}" alt="${slide.alt}" draggable="false" />
                      </figure>
                      <div class="chase-slide-caption">
                        <p class="section-label">${slide.category}</p>
                        <h3>${slide.title}</h3>
                        <p>${slide.description}</p>
                      </div>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
          <div class="chase-carousel-controls">
            <button class="chase-carousel-arrow" type="button" data-chase-prev aria-label="Previous Chase slide">&larr;</button>
            <div class="chase-carousel-dots" aria-label="Chase slide pagination">
              ${chaseSlides
                .map(
                  (_, index) => `
                    <button type="button" data-chase-dot="${index}" aria-label="Go to Chase slide ${index + 1}"></button>
                  `
                )
                .join("")}
            </div>
            <button class="chase-carousel-arrow" type="button" data-chase-next aria-label="Next Chase slide">&rarr;</button>
          </div>
          <p class="chase-carousel-note">
            Chase is not only a mascot. Chase is a character-based interaction system integrated across the entire brand experience.
          </p>
        </div>
      </section>

      <section class="case-section soft-bieki-story-section is-reversed">
        <figure class="case-media-card case-video-card" data-case-video-demo>
          <div class="case-video-frame">
            <img
              class="case-video-thumbnail"
              src="${caseImageBase}/envelope.jpg"
              alt="Soft Bieki House envelope and story interaction"
            />
            <video
              src="${caseVideoBase}/letter-memory-demo.MOV"
              muted
              playsinline
              preload="metadata"
              aria-label="Interactive letter and memory experience demo"
            ></video>
            <button class="case-video-play" type="button" aria-label="Play interactive letter and memory experience demo">
              <span></span>
            </button>
          </div>
          <figcaption>Interactive letter and memory experience</figcaption>
        </figure>
        <div class="case-section-heading">
          <p class="section-label">Story Detail</p>
          <h2>A fictional story layer behind the brand.</h2>
          <p>
            The website includes a fictional friendship story between
            <strong>Kiki</strong>, <strong>Biebie</strong>, and
            <strong>Chase</strong>. Elements such as the interactive
            <strong>letter interaction</strong> and
            <strong>memory section</strong> extend the brand beyond products
            and create a deeper emotional connection.
          </p>
        </div>
      </section>

      <section class="case-section hidden-details-section">
        <div class="case-section-heading">
          <h2>Tiny Interactions</h2>
          <p>Small details that make the Soft Bieki House world feel alive.</p>
        </div>
        <div class="hidden-details-list">
          <article class="hidden-detail-card">
            <div class="hidden-detail-media">
              <video
                src="${assetPath("assets/videos/chase-trail.mov")}"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                aria-label="Chase follows along interaction demo"
              ></video>
            </div>
            <div class="hidden-detail-copy">
              <h3>Chase follows along</h3>
              <p>Chase quietly follows users through the Soft Bieki House world.</p>
            </div>
          </article>
          <article class="hidden-detail-card">
            <div class="hidden-detail-media">
              <video
                src="${assetPath("assets/videos/cat-paw-cursor.mov")}"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                aria-label="Cat paw cursor interaction demo"
              ></video>
            </div>
            <div class="hidden-detail-copy">
              <h3>A tiny paw cursor</h3>
              <p>A playful interface detail designed around Chase's character.</p>
            </div>
          </article>
        </div>
      </section>

      <section class="soft-bieki-closing">
        <p class="section-label">REFLECTION</p>
        <p>
          A handmade brand experience combining visual storytelling, character interaction, and web design.
        </p>
        <a class="button soft-bieki-website-link" href="https://soft-bieki-house.vercel.app" target="_blank" rel="noreferrer">Explore the website ↗</a>
      </section>

      <section class="next-project">
        <p>More Projects</p>
        <a class="button" href="${rootPath}projects.html">Back to portfolio</a>
      </section>
    </article>
  `;
  setupSoftBiekiMotion(mount);
  initChaseCarousel(mount);
  initCaseVideoDemos(mount);
  return;

  const websiteSections = [
    "Homepage",
    "Shop / product display",
    "Christmas limited section",
    "Other Handmade section",
    "About / story section",
    "Contact section",
  ];

  const productPresentation = [
    "regular handmade products",
    "Christmas limited products",
    "other handmade items",
    "product detail modal / card",
    "soft scrapbook-like visual mood",
  ];

  const chaseInteractions = [
    "clicking “take me home” can trigger random Chase interactions",
    "the Christmas section includes a special Chase outfit",
    "the contact / email section shows a postman Chase",
    "the envelope includes an Easter egg about “Kiki’s memory”",
  ];

  const galleryItems = [
    {
      src: `${caseImageBase}/homepage-design.jpg`,
      alt: "Soft Bieki House homepage design",
      caption: "Homepage design — introduces the brand mood and soft visual tone.",
      featured: true,
    },
    {
      src: `${caseImageBase}/shop-page.jpg`,
      alt: "Soft Bieki House shop page",
      caption: "Shop page — presents handmade products as characterful product cards.",
    },
    {
      src: `${caseImageBase}/christmas-section.jpg`,
      alt: "Soft Bieki House Christmas limited section",
      caption: "Christmas section — expands the product world with limited seasonal pieces.",
    },
    {
      src: `${caseImageBase}/other-handmade.jpg`,
      alt: "Soft Bieki House other handmade section",
      caption: "Other Handmade section — shows smaller handmade items beyond photo frames.",
    },
    {
      src: `${caseImageBase}/product-detail-chase.jpg`,
      alt: "Soft Bieki House product detail and Chase interaction",
      caption: "Chase interaction — shows playful mascot-based responses inside the shop.",
    },
    {
      src: `${caseImageBase}/product-detail-progress.jpg`,
      alt: "Soft Bieki House product detail modal with progress interaction",
      caption: "Product detail modal — shows product information and handmade material details.",
    },
    {
      src: `${caseImageBase}/envelope.jpg`,
      alt: "Soft Bieki House envelope interaction",
      caption: "Envelope section — introduces the brand story as a letter from Elmore.",
    },
    {
      src: `${caseImageBase}/memory-story.jpg`,
      alt: "Soft Bieki House story and memory interaction",
      caption: "Envelope / memory section — connects product world-building with storytelling.",
    },
    {
      src: `${caseImageBase}/memory-video.jpg`,
      alt: "Soft Bieki House memory video interaction",
      caption: "Memory interaction — shows the Easter egg opened from Kiki’s memory.",
    },
    {
      src: `${caseImageBase}/contact-postman.jpg`,
      alt: "Soft Bieki House contact section with postman Chase",
      caption: "Contact section — includes a postman Chase detail for the email moment.",
    },
  ];

  mount.innerHTML = `
    <article class="case-study soft-bieki-case">
      <section class="case-hero">
        <a class="back-link" href="${rootPath}projects.html"><- Projects</a>
        <div class="case-hero-grid">
          <div class="case-hero-copy">
            <p class="eyebrow">Brand Website / Storytelling / Handmade Product</p>
            <h1>Soft Bieki House — Handmade Brand Website Design</h1>
            <p class="case-subtitle">
              A soft handmade brand website built around product storytelling,
              fictional brand world-building, and playful interactive details.
            </p>
          </div>
          <dl class="case-meta" aria-label="Project meta">
            <div>
              <dt>Type</dt>
              <dd>Self-initiated handmade brand website design</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Brand story / Product structure / Character interaction</dd>
            </div>
            <div>
              <dt>Direction</dt>
              <dd>Soft editorial mood / Handmade product world-building</dd>
            </div>
          </dl>
        </div>
        <figure class="case-hero-image">
          <img src="${caseImageBase}/homepage-design.jpg" alt="Soft Bieki House homepage design" />
          <figcaption>Homepage design — a soft handmade shop world with its own visual tone.</figcaption>
        </figure>
      </section>

      <section class="case-section case-text-section">
        <p class="section-label">Project Overview</p>
        <div class="case-copy">
          <p>
            Soft Bieki House began from my interest in handmade yarn products
            during university. I created the website to promote these handmade
            pieces through a custom brand world, rather than presenting them as
            ordinary product listings.
          </p>
          <p>
            The project combines product display, fictional storytelling,
            character details, and soft scrapbook-like visuals to make the shop
            feel like a small handmade world.
          </p>
        </div>
      </section>

      <section class="case-section case-text-section">
        <p class="section-label">Creative Inspiration</p>
        <div class="case-copy">
          <p>
            The project started from a shared crochet and handmade hobby during
            university. Instead of treating the products as simple accessories,
            I wanted to create a fictional shop with its own characters, story,
            and emotional atmosphere.
          </p>
          <p>
            This helped the handmade products feel more personal, as if each
            piece belonged to a gentle story world rather than a normal online
            shop.
          </p>
        </div>
      </section>

      <section class="case-section storytelling-panel soft-story-panel">
        <div class="case-section-heading">
          <p class="section-label">Brand Story</p>
          <h2>A small fictional origin for the handmade shop.</h2>
          <p>
            Kiki is a sensitive girl who moves often with her family and finds
            it difficult to make close friends. After moving to a quiet
            lakeside city called Elmore, she meets a small white cat named
            Chase and a girl called Biebie.
          </p>
          <p>
            Their friendship slowly becomes a handmade yarn club, and that club
            becomes the origin of Soft Bieki House.
          </p>
        </div>
      </section>

      <section class="case-section case-split">
        <div>
          <p class="section-label">Website Structure</p>
          <h2>A shop designed as a handmade world.</h2>
          <p>
            The site is structured not only as a product shop, but as a small
            brand world where product categories, story, characters, and
            contact moments all share the same soft handmade tone.
          </p>
        </div>
        <div class="case-chip-grid">
          ${websiteSections.map((section) => `<span>${section}</span>`).join("")}
        </div>
      </section>

      <section class="case-section">
        <div class="case-section-heading">
          <p class="section-label">Product Presentation</p>
          <h2>Handmade pieces presented with character and mood.</h2>
          <p>
            Products are separated into regular handmade pieces, Christmas
            limited items, and other handmade goods. Each product card uses a
            scrapbook-like visual mood, while detail modals add a more complete
            product story.
          </p>
        </div>
        <div class="case-card-grid">
          ${productPresentation
            .map(
              (item, index) => `
                <div class="case-note-card compact-note">
                  <span>0${index + 1}</span>
                  <p>${item}</p>
                </div>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="case-section case-split">
        <div>
          <p class="section-label">Character & Interaction Design</p>
          <h2>Chase as a soft guide through the website.</h2>
          <p>
            Chase, the small white cat mascot, appears across the website as a
            playful guide. The interactions are light, but they help the shop
            feel more alive and connected to the fictional brand world.
          </p>
        </div>
        <ul class="case-list">
          ${listMarkup(chaseInteractions)}
        </ul>
      </section>

      <section class="case-section case-text-section">
        <p class="section-label">Storytelling Details</p>
        <div class="case-copy">
          <p>
            The envelope interaction opens the shop story as a letter from
            Elmore. It tells the friendship story of the two girls and also
            includes Chase discovering one of Kiki’s small memories.
          </p>
          <p>
            This memory reflects the imagination of a sensitive girl, turning
            the About / story section into a gentle emotional layer rather than
            a standard brand description.
          </p>
        </div>
      </section>

      <section class="case-section storytelling-panel soft-story-panel">
        <div class="case-section-heading">
          <p class="section-label">Design Intention</p>
          <h2>Making handmade products feel emotionally complete.</h2>
          <p>
            I wanted handmade products to become a medium for showing girls’
            imagination, emotions, and small memories. The goal was to make the
            website richer than a normal product shop — more like a soft story
            world where every product has a feeling behind it.
          </p>
        </div>
      </section>

      <section class="case-section case-gallery-section">
        <div class="case-section-heading">
          <p class="section-label">Visual Gallery</p>
          <h2>Selected screens and interaction details</h2>
          <p>
            The gallery combines full-page screenshots with interaction moments
            to show how the brand world, product system, and mascot details
            work together.
          </p>
        </div>
        <div class="case-gallery soft-bieki-gallery">
          ${galleryItems
            .map(
              (item) => `
                <figure class="${item.featured ? "gallery-main" : ""}">
                  <img src="${item.src}" alt="${item.alt}" />
                  <figcaption>${item.caption}</figcaption>
                </figure>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="next-project">
        <p>More Projects</p>
        <a class="button" href="${rootPath}projects.html">Back to portfolio</a>
      </section>
    </article>
  `;
}

function setupSoftBiekiMotion(mount) {
  const animatedItems = [
    ...mount.querySelectorAll(
      [
        ".soft-bieki-intro .eyebrow",
        ".soft-bieki-intro h1",
        ".soft-bieki-intro .case-subtitle",
        ".soft-bieki-tags",
        ".case-intro",
        ".soft-bieki-summary",
        ".soft-bieki-story-section .case-section-heading",
        ".soft-bieki-story-section .case-media-card",
        ".soft-bieki-story-section .chase-carousel",
        ".hidden-details-section .case-section-heading",
        ".hidden-detail-card",
        ".case-gallery-section .case-section-heading",
        ".soft-bieki-gallery figure",
        ".soft-bieki-closing",
        ".next-project",
      ].join(", ")
    ),
  ];

  animatedItems.forEach((item, index) => {
    item.classList.add("soft-reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index * 40, 240)}ms`);
  });

  mount.querySelectorAll(".soft-bieki-gallery figure").forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${index * 80}ms`);
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    animatedItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  animatedItems.forEach((item) => item.classList.add("reveal-ready"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  animatedItems.forEach((item) => observer.observe(item));
}

function initChaseCarousel(scope) {
  scope.querySelectorAll("[data-chase-carousel]").forEach((carousel) => {
    const viewport = carousel.querySelector(".chase-carousel-viewport");
    const track = carousel.querySelector(".chase-carousel-track");
    const slides = [...carousel.querySelectorAll("[data-chase-slide]")];
    const prevButton = carousel.querySelector("[data-chase-prev]");
    const nextButton = carousel.querySelector("[data-chase-next]");
    const dots = [...carousel.querySelectorAll("[data-chase-dot]")];

    if (!viewport || !track || slides.length === 0) return;

    let currentIndex = 0;
    let startX = 0;
    let deltaX = 0;
    let isDragging = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setActiveSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      track.style.transform = `translateX(${-currentIndex * 100}%)`;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === currentIndex);
        slide.setAttribute("aria-hidden", slideIndex === currentIndex ? "false" : "true");
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === currentIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    const finishDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.classList.remove("is-dragging");
      track.style.transitionDuration = "";

      if (Math.abs(deltaX) > 54) {
        setActiveSlide(currentIndex + (deltaX < 0 ? 1 : -1));
      } else {
        setActiveSlide(currentIndex);
      }

      deltaX = 0;
    };

    prevButton?.addEventListener("click", () => setActiveSlide(currentIndex - 1));
    nextButton?.addEventListener("click", () => setActiveSlide(currentIndex + 1));
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        setActiveSlide(Number(dot.dataset.chaseDot));
      });
    });

    viewport.addEventListener("pointerdown", (event) => {
      if (event.button !== undefined && event.button !== 0) return;
      isDragging = true;
      startX = event.clientX;
      deltaX = 0;
      carousel.classList.add("is-dragging");
      track.style.transitionDuration = "0ms";
      viewport.setPointerCapture?.(event.pointerId);
    });

    viewport.addEventListener("pointermove", (event) => {
      if (!isDragging) return;
      deltaX = event.clientX - startX;
      track.style.transform = `translateX(calc(${-currentIndex * 100}% + ${deltaX}px))`;
    });

    viewport.addEventListener("pointerup", finishDrag);
    viewport.addEventListener("pointercancel", finishDrag);
    viewport.addEventListener("lostpointercapture", finishDrag);

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") setActiveSlide(currentIndex - 1);
      if (event.key === "ArrowRight") setActiveSlide(currentIndex + 1);
    });

    if (reduceMotion) {
      track.style.transitionDuration = "0ms";
    }

    setActiveSlide(0);
  });
}

function initCaseVideoDemos(scope) {
  scope.querySelectorAll("[data-case-video-demo]").forEach((card) => {
    const video = card.querySelector("video");
    const playButton = card.querySelector(".case-video-play");

    if (!video || !playButton) return;

    const showThumbnail = () => {
      card.classList.remove("is-playing");
      video.pause();
      video.currentTime = 0;
    };

    const showVideo = () => {
      card.classList.add("is-playing");
    };

    playButton.addEventListener("click", async () => {
      video.muted = true;
      video.controls = false;
      try {
        await video.play();
        showVideo();
      } catch {
        showThumbnail();
      }
    });

    video.addEventListener("play", showVideo);
    video.addEventListener("ended", showThumbnail);
  });
}

function initEditorialAnimations() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealSelectors = [
    ".site-header",
    ".home-hero",
    ".page-hero",
    ".case-hero",
    ".section",
    ".case-section",
    ".project-archive-row",
    ".project-card",
    ".contact-section",
    ".contact-closing",
    ".about-intro-grid",
    ".about-looking",
    ".about-cta",
    ".social-operation-reflection",
    ".soft-bieki-closing",
    ".next-project",
    ".site-footer",
  ];
  const staggerSelectors = [
    ".project-media",
    ".case-media-card",
    ".social-operation-media",
    ".project-archive-copy",
    ".social-operation-copy",
    ".hidden-detail-card",
    ".archive-gallery-card",
  ];
  const revealItems = [
    ...document.querySelectorAll(revealSelectors.join(", ")),
    ...document.querySelectorAll(staggerSelectors.join(", ")),
  ].filter(
    (item, index, list) =>
      list.indexOf(item) === index &&
      !item.classList.contains("soft-reveal") &&
      !item.closest("[data-about-scroll-scene]") &&
      !item.closest("#experience")
  );

  revealItems.forEach((item, index) => {
    item.classList.add("editorial-reveal");
    if (item.matches(staggerSelectors.join(", "))) {
      item.style.setProperty("--editorial-delay", `${80 + (index % 2) * 80}ms`);
    }
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initSoftBiekiAnimations(scope = document) {
  const revealItems = [...scope.querySelectorAll(".soft-reveal")];
  if (revealItems.length === 0) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealItems.forEach((item) => item.classList.add("reveal-ready"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initAboutEditorialTimeline() {
  const timeline = document.querySelector(".about-timeline");
  const entries = [...document.querySelectorAll(".about-timeline-entry")];
  if (!timeline || entries.length === 0) return;
  if (timeline.dataset.aboutTimelineInitialized === "true") return;
  timeline.dataset.aboutTimelineInitialized = "true";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    entries.forEach((entry) => entry.classList.add("is-visible"));
    timeline.style.setProperty("--timeline-progress", "1");
    return;
  }

  let ticking = false;
  const updateTimelineState = () => {
    const rect = timeline.getBoundingClientRect();
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    const start = viewport * 0.72;
    const end = -rect.height + viewport * 0.28;
    const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end || 1)));
    timeline.style.setProperty("--timeline-progress", progress.toFixed(3));

    const focusLine = viewport * 0.54;
    let activeEntry = entries[0];
    let activeDistance = Number.POSITIVE_INFINITY;

    entries.forEach((entry) => {
      const entryRect = entry.getBoundingClientRect();
      const entryCenter = entryRect.top + entryRect.height * 0.46;
      const isWithinRange = entryRect.bottom > viewport * 0.16 && entryRect.top < viewport * 0.86;
      if (!isWithinRange) return;

      const distance = Math.abs(entryCenter - focusLine);
      if (distance < activeDistance) {
        activeDistance = distance;
        activeEntry = entry;
      }
    });

    entries.forEach((entry) => {
      entry.classList.toggle("is-active", entry === activeEntry);
    });

    ticking = false;
  };

  const requestTimelineUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateTimelineState);
  };

  if (!("IntersectionObserver" in window)) {
    entries.forEach((entry, index) => {
      entry.classList.add("is-visible");
      entry.classList.toggle("is-active", index === 0);
    });
    timeline.style.setProperty("--timeline-progress", "1");
    return;
  }

  timeline.classList.add("timeline-ready");

  const observer = new IntersectionObserver(
    (observedEntries) => {
      observedEntries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        requestTimelineUpdate();
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -14% 0px", threshold: 0.18 }
  );

  entries.forEach((entry) => observer.observe(entry));
  window.addEventListener("scroll", requestTimelineUpdate, { passive: true });
  window.addEventListener("resize", requestTimelineUpdate);
  updateTimelineState();
}

function initAboutPageMotion() {
  const page = document.querySelector(".about-page");
  if (!page) return;

  const sections = [...document.querySelectorAll(".about-motion-section")];
  if (sections.length === 0) return;
  if (page.dataset.aboutMotionInitialized === "true") return;
  page.dataset.aboutMotionInitialized = "true";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  page.classList.add("about-motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initContactCopyEmail() {
  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    if (button.dataset.copyInitialized === "true") return;
    button.dataset.copyInitialized = "true";

    const originalLabel = button.dataset.copyLabel || button.textContent.trim() || "Copy email";
    const email = button.dataset.copyEmail || "";

    const fallbackCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.top = "-999px";
      document.body.appendChild(textArea);
      textArea.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      textArea.remove();
      return copied;
    };

    const showCopiedState = (label) => {
      button.textContent = label;
      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1500);
    };

    button.addEventListener("click", async () => {
      if (!email) return;

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(email);
        } else if (!fallbackCopy()) {
          throw new Error("Clipboard copy unavailable");
        }
        showCopiedState("Copied");
      } catch {
        showCopiedState("Copy email");
      }
    });
  });
}

const portfolioGroupCaseStudies = {
  "social-media-operation": {
    title: "Social Media Operation",
    eyebrow: "Douyin / Xiaohongshu / Livestream / Short Video",
    subtitle:
      "A portfolio case collecting my hands-on social media and content operation experience across internship work and self-initiated platform projects.",
    meta: [
      ["Type", "Social media / content operation experience"],
      ["Focus", "Account operation / livestream / short-video editing"],
      ["Platforms", "Douyin / Xiaohongshu / short-video news platforms"],
    ],
    sections: [
      {
        label: "Overview",
        heading: "Platform work across content, interaction, and execution.",
        paragraphs: [
          "This project brings together several pieces of social media operation experience: Douyin account support at an MCN company, livestream practice for a new account, short-news video editing at Guangdong Radio and Television Station, and Xiaohongshu account operation through personal handmade and lifestyle content.",
          "Across these experiences, I worked close to the practical side of content: posting, replying, editing, writing titles, testing presentation, and observing how different platforms shape audience attention.",
        ],
      },
      {
        label: "Douyin / MCN Operations",
        heading: "Supporting an account matrix through daily platform work.",
        paragraphs: [
          "During my MCN internship, I assisted with the operation of a Douyin account matrix, including accounts such as Xiaomin and Xiaomin’s Mother-in-law. The accounts were still in an early development stage, so daily execution and audience response were important parts of the work.",
          "My responsibilities included supporting content posting, comment interaction, direct message replies, topic selection, and script discussion for short videos.",
        ],
        bullets: [
          "supported daily content publishing and account maintenance",
          "handled comment interaction and direct message replies",
          "participated in short-video topic selection and script writing",
        ],
        visuals: [
          {
            src: "assets/images/social-media-operation/douyin-account-matrix.jpg",
            caption: "Douyin account matrix reference",
          },
        ],
      },
      {
        label: "Livestream Experience",
        heading: "Learning real-time interaction through livestream hosting.",
        paragraphs: [
          "During the same internship, I also served as an on-camera livestream host for a newly opened account. The stream started from 0 viewers, and through continuous live sessions and real-time interaction, the peak concurrent audience reached 47.",
          "This gave me first-hand experience in pacing, speaking to an uncertain audience, responding in the moment, and keeping a livestream active even at an early account stage.",
        ],
        bullets: [
          "served as an on-camera livestream host for a new account",
          "practiced real-time interaction and audience response",
          "helped grow peak concurrent viewers from 0 to 47",
        ],
        visuals: [
          {
            src: "assets/images/social-media-operation/livestream-experience.jpg",
            caption: "Livestream setup and on-camera practice",
          },
        ],
      },
      {
        label: "News Video Editing",
        heading: "Editing short news videos for platform readability.",
        paragraphs: [
          "At Guangdong Radio and Television Station, I independently edited 23 short news videos during my internship and wrote titles for the videos. The work required clear packaging, quick turnaround, and an understanding of how news information becomes readable in a short-video feed.",
          "One report reached more than 185k likes on the platform, which helped me see how title writing, editing rhythm, and topic relevance can affect short-video performance.",
        ],
        bullets: [
          "independently edited 23 short news videos",
          "wrote platform-facing video titles",
          "one report reached over 185k likes",
        ],
        visuals: [
          {
            src: "assets/images/social-media-operation/guangdong-video-performance.jpg",
            caption: "Short news editing and performance screenshot",
          },
        ],
      },
      {
        label: "Xiaohongshu Operation",
        heading: "Testing product presentation through a handmade account.",
        paragraphs: [
          "Soft Bieki House originally came from a handmade Xiaohongshu account I ran during university. I posted handmade card-holder products daily and used the platform to test product presentation, captions, and visual content ideas.",
          "The small shop eventually stopped because postage costs were higher than the product selling price, but the experience gave me first-hand exposure to Xiaohongshu content operation and small-scale product communication. In June, I also started a lifestyle vlog Xiaohongshu account and am currently in the early content-building stage.",
        ],
        bullets: [
          "posted handmade product content and tested presentation formats",
          "learned how cost, product value, and platform content connect",
          "started an early-stage lifestyle vlog account in June",
        ],
        visuals: [
          {
            src: "assets/images/social-media-operation/xiaohongshu-operation.jpg",
            caption: "Xiaohongshu handmade product operation",
          },
        ],
      },
      {
        label: "Reflection",
        heading: "What I learned from operating across different content formats.",
        paragraphs: [
          "These experiences helped me understand that social media work is not only about making individual posts. It also depends on daily operation, fast execution, audience response, platform-specific formats, and the ability to keep learning from small signals.",
          "Working across account operation, short-video scripting and editing, livestream interaction, and Xiaohongshu content testing made me more aware of how content, timing, and communication work together in practical platform environments.",
        ],
      },
    ],
  },
  "creative-content": {
    title: "Creative Content",
    eyebrow: "Short-form Video / Writing / Lifestyle Content",
    subtitle:
      "A small collection of self-initiated videos and written pieces across food, lifestyle, pets, and travel - made as a way to explore tone, visual storytelling, and the kinds of content I naturally enjoy creating.",
    meta: [
      ["Type", "Self-initiated content / lifestyle video / article writing"],
      ["Focus", "Food / pets / travel / everyday storytelling"],
      ["Tools", "CapCut / writing / mobile filming / visual planning"],
    ],
    sections: [
      {
        label: "Overview",
        heading: "Personal content as a space to test tone and storytelling.",
        paragraphs: [
          "Outside internship work, I’ve also made small pieces of self-initiated content - mostly food videos, pet-related writing, and lifestyle/travel posts.",
          "These projects are smaller in scale, but they are important to me because they show the tone of content I naturally gravitate toward: warm, detailed, and emotionally light.",
        ],
      },
      {
        label: "Food Video Content",
        heading: "Short food videos with a softer everyday tone.",
        paragraphs: [
          "I created short food videos around restaurant visits and casual city experiences, experimenting with pacing, framing, captions, and a more personal visual rhythm.",
          "These videos were less about polished commercial production and more about building atmosphere and making ordinary experiences feel memorable.",
        ],
        items: [
          {
            title: "Korean food court video",
            category: "Short-form food video",
            description: "A casual restaurant visit video focused on pacing, captions, and everyday atmosphere.",
            cta: "View video",
          },
          {
            title: "Buffalo Milk Queen food review video",
            category: "Short-form food review",
            description: "A food review video exploring a softer, personal rhythm for recommendation-style content.",
            cta: "View video",
          },
        ],
      },
      {
        label: "Writing / Article Content",
        heading: "Writing that combines information with lifestyle tone.",
        paragraphs: [
          "I also wrote article-style content around topics I genuinely care about, such as pet care and food / travel recommendations. Compared with video, writing gave me more space to shape tone and structure more deliberately.",
        ],
        items: [
          {
            title: "Spring Cat Care Guide",
            category: "Pet care writing",
            description: "An article-style piece combining practical seasonal care information with a gentle pet-owner tone.",
            cta: "Read article",
          },
          {
            title: "Seoul Food Notes",
            category: "Travel / food writing",
            description: "A lifestyle note collecting food recommendations and small travel observations from Seoul.",
            cta: "Read article",
          },
        ],
      },
      {
        label: "Creative Direction Notes",
        heading: "The kind of content I want to keep making.",
        paragraphs: [
          "Across these small projects, I’ve noticed that I’m most drawn to content that feels soft, observant, and close to daily life - whether it’s a food video, a pet article, or a travel note.",
          "Going forward, I want to keep developing this side of my work alongside more structured brand and operations projects.",
        ],
      },
    ],
  },
  "other-works": {
    title: "Other Works & Experiences",
    eyebrow: "Reporting / Social Commerce / Practical Experience",
    subtitle:
      "A selection of additional work and practice-based experiences that shaped how I communicate, respond on-site, and think about content beyond the screen.",
    meta: [
      ["Type", "Reporting practice / social commerce / customer-facing work"],
      ["Focus", "On-camera communication / campaign awareness / practical coordination"],
      ["Tools", "Interviewing / communication / observation / execution"],
    ],
    sections: [
      {
        label: "Reporting Practice",
        heading: "Learning to speak on camera and respond in real time.",
        paragraphs: [
          "During university, I took part in an on-camera sports-meet reporting exercise where I worked as a field reporter, handling live-style reporting, on-site interviews, and camera-facing delivery.",
          "It gave me practical experience in speaking clearly under pressure and responding to real situations in the moment.",
        ],
        bullets: [
          "on-camera field reporting practice",
          "athlete / on-site interview execution",
          "adjusting delivery according to live conditions",
        ],
        visuals: ["Sports meet reporting", "On-site interview", "Camera-facing delivery"],
      },
      {
        label: "Social Commerce / Small Idea Work",
        heading: "Trying small content and product ideas in practical settings.",
        paragraphs: [
          "I also want to include smaller practical experiences that shaped how I think about content and audience behavior - including part-time customer-facing work and small observations around product presentation and social commerce.",
        ],
        items: [
          {
            title: "Italian Tomato × mofusand",
            category: "Social commerce idea",
            description:
              "A small social-commerce case idea built around observing customer interest in a collaboration product and thinking about how Xiaohongshu-style content could help sell slower-moving stock.",
            cta: "Included here",
          },
          {
            title: "Customer-facing service experience",
            category: "Practical work experience",
            description:
              "My part-time cafe / restaurant work in Hong Kong strengthened my communication, adaptability, and awareness of customer response in real service situations.",
            cta: "Experience note",
          },
        ],
      },
      {
        label: "What Ties These Together",
        heading: "Experiences that strengthened communication and responsiveness.",
        paragraphs: [
          "Although these projects are varied, they all helped me build practical communication skills: speaking on camera, responding to people in real time, observing what catches attention, and staying flexible in unfamiliar situations.",
          "I see them as an important part of how I work now, especially in content roles that require both creativity and execution.",
        ],
      },
    ],
  },
};

const creativeContentCases = [
  {
    title: "Korean Food Court Visit",
    language: "Cantonese",
    platform: "Douyin",
    intro:
      "A Cantonese food video using casual voice-over and lifestyle editing.",
    cover: "assets/images/korean-food-cantonese-cover.jpeg",
    videoUrl: "https://youtube.com/shorts/IVT5my9gy1g?si=FKJEkaR-YgJfs9Zn",
    overview: {
      "Project Goal": "Create a short food-discovery video with a clear recommendation angle and soft lifestyle tone.",
      "Target Audience": "Young viewers interested in casual food spots, weekend dining, and city lifestyle recommendations.",
      Platform: "Xiaohongshu / short-form social platforms",
      "My Role": "Topic selection, filming, editing rhythm, captions, and visual packaging.",
    },
    strategy: [
      "This topic was chosen because food-court content is practical, searchable, and easy for viewers to connect with through daily life.",
      "The core message was simple: affordable Korean food can still feel enjoyable, warm, and worth sharing.",
      "The content positioning sits between food recommendation and lifestyle diary, with an expected audience emotion of comfort, appetite, and light curiosity.",
    ],
    storyboard: [
      "Opening food spread and location mood",
      "Close-up texture shots of dishes",
      "Short caption notes for useful details",
      "Ending recommendation and memory point",
    ],
    reflection:
      "This case helped me practice turning a casual visit into a structured short video. I focused on balancing useful information with atmosphere, making the pacing clear, and keeping the visual tone consistent from opening shot to final caption.",
  },
  {
    title: "Buffalo Milk Queen Review",
    language: "Mandarin",
    platform: "Douyin",
    intro:
      "A Mandarin food review using concise commentary and product-focused editing.",
    cover: "assets/images/buffalo-milk-queen-cover.jpg",
    videoUrl: "https://youtube.com/shorts/f8GCSzJqwzs?si=jQTVO9_1DlLdzO6H",
    overview: {
      "Project Goal": "Build a compact food-review video that communicates taste, value, and personal response quickly.",
      "Target Audience": "Viewers looking for snack, dessert, and food-store recommendations before trying a product.",
      Platform: "Xiaohongshu / short-form social platforms",
      "My Role": "Food review framing, visual capture, caption writing, editing, and publishing preparation.",
    },
    strategy: [
      "The topic was chosen because the product had a clear curiosity point and could be explained visually through texture, toppings, and quick reactions.",
      "The core message was to give a real, simple review without over-polishing the recommendation.",
      "The content positioning is practical food testing with a personal voice, aiming to make viewers feel informed and quietly tempted.",
    ],
    storyboard: [
      "Product reveal and first impression",
      "Ingredient and texture close-ups",
      "Taste notes through caption layers",
      "Final recommendation summary",
    ],
    reflection:
      "This piece strengthened my awareness of editing rhythm in review content. I learned that captions need to be short enough to read while the visuals keep moving, and that visual consistency matters even in a simple one-minute food video.",
  },
];

const creativeMoreProjects = [
  {
    title: "Spring Cat Care Guide",
    type: "Article / Pet Care Writing",
    description: "A practical seasonal guide covering common cat-care concerns during humid spring weather.",
    image: "assets/images/spring-cat-care-guide.jpg",
    alt: "Spring cat care guide article cover with cat, humid weather panel, and headline",
    href: "https://docs.google.com/document/d/1gSA8i4CQMaCTE4BY-CTu1g62Tpim5OPc9nKuTY--stQ/edit?usp=sharing",
  },
  {
    title: "Korean Food & Travel Notes",
    type: "Article / Travel and Food Writing",
    description: "A lifestyle article sharing Korean food recommendations, dining observations, and travel notes.",
    image: "assets/images/korean-food-travel-notes.jpg",
    alt: "Korean food and travel notes article cover with three food images and large title area",
    href: "https://docs.google.com/document/d/1fYZsBewaLcd-s-YMGBTw9F9HW8DsxK1MiZQw8fua8zk/edit?usp=sharing",
  },
];

const otherWorksArchive = {
  projects: [
    {
      category: "Journalism Practice",
      title: "News Reporting & Visual Storytelling",
      year: "2023",
      description:
        "A university journalism project focused on on-camera reporting, interviewing, visual storytelling, news writing and video production.",
      roles: ["Reporter", "Video Editor", "Journalism Student"],
      skills: ["Journalism", "Reporting", "Video Editing", "Interviewing", "Storytelling"],
      image: "assets/images/other-works/news-reporting-preview.jpeg",
      alt: "News video screenshot showing on-camera reporting practice",
      button: {
        label: "Watch Full Video ↗",
        href: "https://www.youtube.com/watch?si=6TK6n3Pw2EhdsGPt&v=HGS_VEd8OZA&feature=youtu.be",
      },
    },
    {
      category: "University Field Practice",
      title: "Public Account Operation",
      year: "2023",
      description:
        "Created article covers, public account layouts and campus content during university field practice. Participated in content planning, writing and visual communication.",
      roles: ["Content Creator", "Editor"],
      skills: ["Copywriting", "Content Planning", "Layout Design", "WeChat"],
      image: "assets/images/other-works/social-media-content-preview.jpeg",
      alt: "WeChat public account screenshots for university social media operation",
    },
    {
      category: "Editorial Design",
      title: "Student Newspaper Design",
      year: "2024",
      description:
        "Designed a student newspaper with attention to editorial hierarchy, typography, visual balance and publication layout.",
      roles: ["Editorial Designer"],
      skills: ["Editorial Design", "Typography", "Publication Design"],
      image: "assets/images/other-works/newspaper-layout-preview.jpg",
      alt: "Newspaper layout PDF preview",
      fit: "contain",
      button: {
        label: "View Newspaper PDF ↗",
        href: "assets/files/other-works/student-newspaper-design.pdf",
      },
    },
  ],
};

function archiveProjectMarkup(item, index) {
  const number = String(index + 1).padStart(2, "0");
  const panelId = `archive-panel-${number}`;
  const titleId = `archive-title-${number}`;
  const button = item.button
    ? `<a class="button archive-card-button" href="${assetPath(item.button.href)}" target="_blank" rel="noopener noreferrer">${item.button.label}</a>`
    : "";

  return `
    <article class="archive-gallery-card soft-reveal" data-archive-card style="--reveal-delay: ${index * 90}ms">
      <button class="archive-card-toggle" type="button" aria-expanded="false" aria-controls="${panelId}" data-archive-toggle>
        <span class="archive-card-index" aria-hidden="true">${number}</span>
        <span class="archive-card-thumb ${item.fit === "contain" ? "is-contained" : ""}">
          <img src="${assetPath(item.image)}" alt="${item.alt}" loading="lazy" />
        </span>
        <span class="archive-card-summary">
          <span class="section-label">${item.category}</span>
          <span class="archive-card-title" id="${titleId}">${item.title}</span>
          <span class="archive-card-year">${item.year}</span>
        </span>
        <span class="archive-card-arrow" aria-hidden="true">↓</span>
      </button>
      <div class="archive-card-panel" id="${panelId}" role="region" aria-labelledby="${titleId}" data-archive-panel>
        <div class="archive-card-panel-inner">
          <figure class="archive-expanded-visual ${item.fit === "contain" ? "is-contained" : ""}">
            <img src="${assetPath(item.image)}" alt="${item.alt}" loading="lazy" />
          </figure>
          <div class="archive-expanded-copy">
            <p class="section-label">${item.category}</p>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <div class="archive-detail-block">
              <span>Role</span>
              <p>${item.roles.join(" / ")}</p>
            </div>
            <div class="archive-detail-block">
              <span>Skills</span>
              <div class="tag-row">${tagMarkup(item.skills)}</div>
            </div>
            ${button}
          </div>
        </div>
      </div>
    </article>
  `;
}

function initArchiveGallery(scope = document) {
  const cards = [...scope.querySelectorAll("[data-archive-card]")];
  if (cards.length === 0) return;

  const setPanelHeight = (card, isOpen) => {
    const panel = card.querySelector("[data-archive-panel]");
    if (!panel) return;
    panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
  };

  const closeCard = (card) => {
    card.classList.remove("is-open");
    card.querySelector("[data-archive-toggle]")?.setAttribute("aria-expanded", "false");
    setPanelHeight(card, false);
  };

  const openCard = (card) => {
    cards.forEach((item) => {
      if (item !== card) closeCard(item);
    });
    card.classList.add("is-open");
    card.querySelector("[data-archive-toggle]")?.setAttribute("aria-expanded", "true");
    setPanelHeight(card, true);
  };

  cards.forEach((card) => {
    const toggle = card.querySelector("[data-archive-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      if (card.classList.contains("is-open")) {
        closeCard(card);
      } else {
        openCard(card);
      }
    });

    toggle.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeCard(card);
        toggle.focus();
      }
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    cards.forEach(closeCard);
  });

  window.addEventListener("resize", () => {
    cards.forEach((card) => {
      if (card.classList.contains("is-open")) setPanelHeight(card, true);
    });
  });
}

function featuredCommerceMarkup() {
  const image = "assets/images/other-works/mofusand-transaction-proof.png";

  return `
    <section class="featured-commerce-case soft-reveal" aria-labelledby="featured-commerce-title">
      <div class="featured-commerce-layout">
        <figure class="featured-commerce-visual">
          <img
            src="${assetPath(image)}"
            alt="Xiaohongshu Mofusand product sharing post with engagement and transaction records"
            loading="lazy"
          />
        </figure>

        <div class="featured-commerce-content">
          <div class="featured-commerce-header">
            <p class="eyebrow">FEATURED INDEPENDENT PROJECT</p>
            <h2 id="featured-commerce-title">Social Commerce Content</h2>
            <p class="featured-commerce-subtitle">Hong Kong Mofusand Product Sharing</p>
            <p>
              An independent Xiaohongshu content project documenting newly released
              Hong Kong-exclusive Mofusand products. Responsible for photography,
              content writing, publishing, and audience interaction. The content
              generated strong engagement and multiple successful product transactions.
            </p>
          </div>

          <div class="featured-commerce-info">
            <div>
              <span>Role</span>
              <p>Content Creation</p>
              <p>Photography</p>
              <p>Copywriting</p>
              <p>Audience Interaction</p>
            </div>
            <div>
              <span>Platform</span>
              <p>Xiaohongshu</p>
              <span>Category</span>
              <p>Independent Project</p>
              <span>Location</span>
              <p>Hong Kong</p>
            </div>
          </div>
        </div>
      </div>

      <div class="featured-commerce-impact" aria-label="Social commerce content impact">
        <article>
          <span>Likes</span>
          <strong data-featured-count="959">0</strong>
        </article>
        <article>
          <span>Saves</span>
          <strong data-featured-count="409">0</strong>
        </article>
        <article>
          <span>Comments</span>
          <strong data-featured-count="33">0</strong>
        </article>
        <article>
          <span>Successful Transactions</span>
          <strong>Multiple Orders</strong>
        </article>
      </div>
    </section>
  `;
}

function initFeaturedCommerceCase(scope = document) {
  const section = scope.querySelector(".featured-commerce-case");
  if (!section) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const counters = [...section.querySelectorAll("[data-featured-count]")];
  let counted = false;

  const setFinalCounts = () => {
    counters.forEach((counter) => {
      counter.textContent = counter.dataset.featuredCount;
    });
  };

  const animateCounts = () => {
    if (counted) return;
    counted = true;

    if (reduceMotion) {
      setFinalCounts();
      return;
    }

    counters.forEach((counter) => {
      const target = Number(counter.dataset.featuredCount || "0");
      const start = performance.now();
      const duration = 820;

      const update = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = String(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    });
  };

  if (reduceMotion || !("IntersectionObserver" in window)) {
    setFinalCounts();
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        animateCounts();
        observer.disconnect();
      },
      { threshold: 0.28 }
    );
    observer.observe(section.querySelector(".featured-commerce-impact"));
  }
}

function renderOtherWorksArchive(mount) {
  document.title = "Other Works & Experiences | Zheng Xiangting";

  mount.innerHTML = `
    <article class="case-study other-works-archive" data-accent="wheat">
      <section class="case-hero other-archive-hero soft-reveal">
        <a class="back-link" href="${rootPath}projects.html"><- Projects</a>
        <p class="eyebrow">SUPPORTING ARCHIVE</p>
        <h1>Other Works & Experiences</h1>
        <p class="case-subtitle">
          A collection of journalism, editorial design and university projects
          that shaped my visual storytelling and content production skills.
        </p>
      </section>

      <section class="archive-gallery-list" aria-label="Other works archive">
        ${otherWorksArchive.projects.map((item, index) => archiveProjectMarkup(item, index)).join("")}
      </section>

      ${featuredCommerceMarkup()}

      <section class="next-project archive-ending soft-reveal">
        <p>More Projects</p>
        <a class="button" href="${rootPath}projects.html">Back to all projects</a>
      </section>
    </article>
  `;

  initArchiveGallery(mount);
  initFeaturedCommerceCase(mount);
  initSoftBiekiAnimations(mount);
}

function creativeVideoCardMarkup(item, index) {
  return `
    <article class="creative-video-card soft-reveal" style="--reveal-delay: ${index * 80}ms">
      <figure class="creative-video-cover">
        <img src="${assetPath(item.cover)}" alt="${item.title} short-form video cover" loading="lazy" />
      </figure>
      <div class="creative-video-copy">
        <p class="section-label">CASE STUDY 0${index + 1}</p>
        <h2>${item.title}</h2>
        <dl class="creative-card-meta">
          <div>
            <dt>Language</dt>
            <dd>${item.language}</dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>${item.platform}</dd>
          </div>
        </dl>
        <p>${item.intro}</p>
        <a class="button creative-video-button" href="${item.videoUrl}" target="_blank" rel="noopener noreferrer">
          Watch Video <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  `;
}

function creativeVlogPracticeMarkup() {
  return `
    <section class="case-section creative-vlog-practice">
      <div class="creative-vlog-main-copy soft-reveal creative-vlog-text-reveal" style="--reveal-delay: 100ms">
        <p class="section-label">ONGOING CONTENT PRACTICE</p>
        <h2>Fashion & Lifestyle Vlog Account</h2>
        <p>
          A self-initiated Xiaohongshu account exploring outfit content, study
          routines, daily life, and soft visual storytelling.
        </p>
      </div>
      <div class="creative-vlog-layout">
        <div class="xiaohongshu-media-column">
          <figure class="creative-vlog-media soft-reveal creative-vlog-image-reveal">
            <img
              src="${assetPath("assets/images/xiaohongshu-vlog-account.jpg")}"
              alt="Xiaohongshu fashion and lifestyle vlog account profile and post grid"
              loading="lazy"
            />
          </figure>
          <div class="xiaohongshu-metrics" aria-label="Current Xiaohongshu account metrics">
            <div class="xiaohongshu-metric" aria-label="79 following">
              <strong class="metric-number" data-target="79" aria-hidden="true">79</strong>
              <span>Following</span>
            </div>
            <div class="xiaohongshu-metric" aria-label="42 followers">
              <strong class="metric-number" data-target="42" aria-hidden="true">42</strong>
              <span>Followers</span>
            </div>
            <div class="xiaohongshu-metric" aria-label="1,021 likes and saves">
              <strong class="metric-number" data-target="1021" aria-hidden="true">1,021</strong>
              <span>Likes &amp; Saves</span>
            </div>
          </div>
        </div>
        <div class="creative-vlog-copy">
          <a
            class="xiaohongshu-profile-link soft-reveal creative-vlog-link-reveal"
            href="https://xhslink.com/m/4uLeHiY4Tma"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View @勤劳的延延bbieee (o^^o) on Xiaohongshu"
            style="--reveal-delay: 180ms"
          >
            <span class="xiaohongshu-profile-copy">
              <strong>@勤劳的延延bbieee (o^^o)</strong>
              <small>1,021 likes &amp; saves on Xiaohongshu</small>
            </span>
            <span class="xiaohongshu-profile-arrow">View profile ↗</span>
          </a>
          <dl class="creative-card-meta creative-vlog-meta">
            <div>
              <dt>Platform</dt>
              <dd>Xiaohongshu</dd>
            </div>
            <div>
              <dt>Format</dt>
              <dd>Vlog / Outfit / Lifestyle</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Ongoing</dd>
            </div>
          </dl>

          <div class="creative-vlog-block">
            <h3>Content Direction</h3>
            <ul>
              <li>outfit and personal style content</li>
              <li>study, daily routine, and mini vlog videos</li>
              <li>soft visual editing and lifestyle storytelling</li>
            </ul>
          </div>

          <div class="creative-vlog-block">
            <h3>What I Do</h3>
            <ul>
              <li>plan content topics and visual direction</li>
              <li>film and edit short-form vlog content</li>
              <li>design post covers and write captions</li>
              <li>observe audience response and refine content style</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCreativeContentCaseStudy(mount, project) {
  document.title = "Creative Content | Zheng Xiangting";
  const shortFormCases = creativeContentCases.slice(0, 2);

  mount.innerHTML = `
    <article class="case-study creative-content-case" data-accent="${project.accent}">
      <section class="case-hero creative-hero soft-reveal">
        <a class="back-link" href="${rootPath}projects.html"><- Projects</a>
        <div class="creative-hero-copy">
          <p class="eyebrow">Creative Content</p>
          <h1>Creative Content</h1>
          <p class="case-subtitle">
            A selection of short-form videos, editorial writing, and lifestyle
            storytelling across Douyin and Xiaohongshu.
          </p>
        </div>
      </section>

      <section class="case-section creative-featured-section soft-reveal">
        <div class="case-section-heading">
          <p class="section-label">SHORT-FORM VIDEO</p>
          <h2>Food videos in Cantonese and Mandarin.</h2>
          <p>Two self-initiated Douyin videos exploring food, voice-over, and short-form editing.</p>
        </div>
        <div class="creative-video-grid">
          ${shortFormCases.map((item, index) => creativeVideoCardMarkup(item, index)).join("")}
        </div>
      </section>

      ${creativeVlogPracticeMarkup()}

      <section class="case-section creative-more-section soft-reveal">
        <div class="case-section-heading">
          <p class="section-label">More Projects</p>
          <h2>Additional writing and lifestyle content.</h2>
        </div>
        <div class="creative-more-grid">
          ${creativeMoreProjects
            .map(
              (item, index) => `
                <article>
                  <figure class="creative-more-thumb">
                    <img src="${assetPath(item.image)}" alt="${item.alt}" loading="lazy" />
                  </figure>
                  <p class="section-label">${item.type}</p>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                  <a class="button creative-more-button" href="${item.href}" target="_blank" rel="noopener noreferrer">
                    Read Article <span aria-hidden="true">↗</span>
                  </a>
                </article>
              `
            )
            .join("")}
        </div>
      </section>

      <section class="next-project creative-ending soft-reveal">
        <p>More Projects</p>
        <a class="button" href="${rootPath}projects.html">Back to all projects</a>
      </section>
    </article>
  `;

  initXiaohongshuMetrics(mount);
  initSoftBiekiAnimations(mount);
}

function initXiaohongshuMetrics(scope = document) {
  const metricsBlock = scope.querySelector(".xiaohongshu-metrics");
  if (!metricsBlock || metricsBlock.dataset.metricsInitialized === "true") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const numbers = [...metricsBlock.querySelectorAll(".metric-number")];
  if (numbers.length === 0 || reduceMotion || !("IntersectionObserver" in window)) return;

  metricsBlock.dataset.metricsInitialized = "true";

  const formatNumber = (value) => Number(value).toLocaleString("en-US");
  const animateNumber = (element) => {
    const target = Number(element.dataset.target || 0);
    const duration = 1050;
    const startTime = performance.now();

    element.textContent = "0";

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(target * eased);

      element.textContent = formatNumber(currentValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = formatNumber(target);
      }
    };

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        numbers.forEach(animateNumber);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  observer.observe(metricsBlock);
}

function visualCardMarkup(visual, index, accent) {
  if (typeof visual === "object") {
    return `
      <figure class="case-visual-card image-card" data-accent="${accent}">
        <img src="${assetPath(visual.src)}" alt="${visual.alt || visual.caption || ""}" />
        <figcaption>${visual.caption}</figcaption>
      </figure>
    `;
  }

  return `
    <div class="case-visual-card" data-accent="${accent}">
      <span>0${index + 1}</span>
      <p>${visual}</p>
    </div>
  `;
}

function contentItemMarkup(item, index) {
  return `
    <article class="content-item-card">
      <div class="content-item-thumb" aria-hidden="true"><span>0${index + 1}</span></div>
      <p class="section-label">${item.category}</p>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <span class="text-link">${item.cta}</span>
    </article>
  `;
}

function groupedSectionMarkup(section, accent) {
  if (section.items) {
    return `
      <section class="case-section">
        <div class="case-section-heading">
          <p class="section-label">${section.label}</p>
          <h2>${section.heading}</h2>
          ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <div class="content-item-grid">
          ${section.items.map((item, index) => contentItemMarkup(item, index)).join("")}
        </div>
      </section>
    `;
  }

  if (section.bullets || section.visuals) {
    return `
      <section class="case-section grouped-detail-section">
        <div class="case-section-heading">
          <p class="section-label">${section.label}</p>
          <h2>${section.heading}</h2>
          ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <div class="grouped-detail-grid">
          ${section.bullets ? `<ul class="case-list">${listMarkup(section.bullets)}</ul>` : ""}
          ${
            section.visuals
              ? `<div class="case-visual-strip ${section.visuals.length === 1 ? "single-visual" : ""}">${section.visuals
                  .map((visual, index) => visualCardMarkup(visual, index, accent))
                  .join("")}</div>`
              : ""
          }
        </div>
      </section>
    `;
  }

  return `
    <section class="case-section case-text-section">
      <p class="section-label">${section.label}</p>
      <div class="case-copy">
        <h2>${section.heading}</h2>
        ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>
  `;
}

function renderPortfolioGroupCaseStudy(mount, project, caseStudy) {
  document.title = `${caseStudy.title} | Zheng Xiangting`;

  mount.innerHTML = `
    <article class="case-study light-case grouped-case" data-accent="${project.accent}">
      <section class="case-hero light-case-hero">
        <a class="back-link" href="${rootPath}projects.html"><- Projects</a>
        <div class="case-hero-grid">
          <div class="case-hero-copy">
            <p class="eyebrow">${caseStudy.eyebrow}</p>
            <h1>${caseStudy.title}</h1>
            <p class="case-subtitle">${caseStudy.subtitle}</p>
          </div>
          <dl class="case-meta" aria-label="Project meta">
            ${caseStudy.meta
              .map(
                ([label, value]) => `
                  <div>
                    <dt>${label}</dt>
                    <dd>${value}</dd>
                  </div>
                `
              )
              .join("")}
          </dl>
        </div>
      </section>

      ${caseStudy.sections.map((section) => groupedSectionMarkup(section, project.accent)).join("")}

      <section class="next-project">
        <p>More Projects</p>
        <a class="button" href="${rootPath}projects.html">Back to all projects</a>
      </section>
    </article>
  `;
}

function renderSocialMediaOperationCaseStudy(mount) {
  document.title = "Social Media Operation | Zheng Xiangting";

  const imageBase = assetPath("assets/images/social-media-operation");
  const sections = [
    {
      number: "01",
      title: "Douyin Account Operation",
      image: `${imageBase}/douyin-account-matrix.jpg`,
      alt: "Douyin account operation screenshots",
      meta: [
        ["Role", "Content Operation Intern"],
        ["Platform", "Douyin"],
      ],
      description: [
        "Assisted daily content publishing and community interaction",
        "Participated in topic planning and short-video scripting",
        "Supported early-stage account operation",
      ],
    },
    {
      number: "02",
      title: "Livestream Hosting",
      image: `${imageBase}/livestream-experience.jpg`,
      alt: "Livestream hosting screenshot",
      meta: [["Role", "Host & Audience Interaction"]],
      description: [
        "Started from 0 viewers and reached 47 concurrent viewers through continuous livestreaming and real-time interaction.",
      ],
    },
    {
      number: "03",
      title: "Short Video Production",
      image: `${imageBase}/guangdong-video-performance.jpg`,
      alt: "Guangdong Radio Television short video production screenshot",
      meta: [["Role", "Video Editing & Content Production"]],
      description: [
        "Edited 23 short news videos",
        "Responsible for editing and headline writing",
        "One video achieved 185K+ likes",
      ],
    },
    {
      number: "04",
      title: "Xiaohongshu Content Practice",
      image: `${imageBase}/xiaohongshu-operation.jpg`,
      alt: "Xiaohongshu handmade product account screenshots",
      meta: [["Project", "Soft Bieki House Xiaohongshu Account"]],
      description: [
        "Built and managed a handmade product account",
        "Created product photography and lifestyle content",
        "Developed experience in visual storytelling and community operation",
      ],
    },
  ];

  mount.innerHTML = `
    <article class="case-study social-operation-case">
      <section class="case-hero social-operation-hero">
        <a class="back-link" href="${rootPath}projects.html"><- Projects</a>
        <div class="case-hero-copy">
          <p class="eyebrow">Social Media / Content Operation</p>
          <h1>Social Media Operation</h1>
          <p class="case-subtitle">
            Social media content creation and platform operation experience across Douyin, livestreaming, short-form video production, and Xiaohongshu.
          </p>
        </div>
      </section>

      <div class="social-operation-sections">
        ${sections
          .map(
            (section) => `
              <section class="case-section social-operation-section">
                <figure class="social-operation-media">
                  <img src="${section.image}" alt="${section.alt}" />
                </figure>
                <div class="social-operation-copy">
                  <div class="social-operation-heading">
                    <p class="section-label">Section ${section.number}</p>
                    <h2>${section.title}</h2>
                  </div>
                  <dl class="social-operation-meta">
                    ${section.meta
                      .map(
                        ([label, value]) => `
                          <div>
                            <dt>${label}</dt>
                            <dd>${value}</dd>
                          </div>
                        `
                      )
                      .join("")}
                  </dl>
                  <ul class="case-list social-operation-list">
                    ${section.description.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>
              </section>
            `
          )
          .join("")}
      </div>

      <section class="social-operation-reflection">
        <p class="section-label">Reflection</p>
        <p>
          Through different platforms and content formats, I explored how storytelling, editing, and audience interaction shape digital content experiences.
        </p>
      </section>

      <section class="next-project">
        <p>More Projects</p>
        <a class="button" href="${rootPath}projects.html">Back to all projects</a>
      </section>
    </article>
  `;
}

function renderProjectDetail() {
  const mount = document.querySelector("[data-project-detail]");
  if (!mount) return;

  const project = projects.find((item) => item.slug === mount.dataset.project);
  if (!project) {
    mount.innerHTML = `<section class="section"><p>Project not found.</p></section>`;
    return;
  }

  if (project.slug === "soft-bieki-house") {
    renderSoftBiekiCaseStudy(mount);
    return;
  }

  if (project.slug === "social-media-operation") {
    renderSocialMediaOperationCaseStudy(mount);
    return;
  }

  if (project.slug === "creative-content") {
    renderCreativeContentCaseStudy(mount, project);
    return;
  }

  if (project.slug === "other-works") {
    renderOtherWorksArchive(mount);
    return;
  }

  if (portfolioGroupCaseStudies[project.slug]) {
    renderPortfolioGroupCaseStudy(mount, project, portfolioGroupCaseStudies[project.slug]);
    return;
  }

  document.title = `${project.title} | Zheng Xiangting`;
  mount.innerHTML = `
    <section class="project-hero" data-accent="${project.accent}">
      <a class="back-link" href="${rootPath}projects.html"><- Projects</a>
      <div class="project-hero-grid">
        <div>
          <p class="eyebrow">${project.tags.join(" / ")}</p>
          <h1>${project.detailTitle}</h1>
          <p class="lede">${project.overview}</p>
        </div>
        <div class="project-summary-card">
          <span>Project Notes</span>
          <p>${project.description}</p>
          <div class="tag-row">${tagMarkup(project.tags)}</div>
        </div>
      </div>
    </section>

    <section class="detail-layout">
      <div class="detail-section">
        <p class="section-label">Context / Background</p>
        <p>${project.context}</p>
      </div>
      <div class="detail-section">
        <p class="section-label">My Role</p>
        <ul>${listMarkup(project.role)}</ul>
      </div>
      <div class="detail-section">
        <p class="section-label">What I Did</p>
        <ul>${listMarkup(project.work)}</ul>
      </div>
      <div class="detail-section">
        <p class="section-label">Outcome / Result</p>
        <ul>${listMarkup(project.outcome)}</ul>
      </div>
      <div class="detail-section">
        <p class="section-label">What I Learned</p>
        <ul>${listMarkup(project.learned)}</ul>
      </div>
    </section>

    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Visuals / Screenshots / Media</p>
        <h2>Image placeholders</h2>
      </div>
      <div class="visual-grid">
        ${project.visuals
          .map(
            (visual, index) => `
              <div class="visual-placeholder" data-accent="${project.accent}">
                <span>0${index + 1}</span>
                <p>${visual}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="next-project">
      <p>Continue browsing Zheng Xiangting's portfolio archive.</p>
      <a class="button" href="${rootPath}projects.html">Back to all projects</a>
    </section>
  `;
}

renderHeader();
renderFooter();
renderFeaturedProjects();
renderProjectArchive();
renderProjectDetail();
initExperienceTimeline();
initEditorialAnimations();
initAboutPageMotion();
initAboutEditorialTimeline();
initContactCopyEmail();
