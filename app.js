const copy = {
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      why: 'À propos',
      areas: 'Secteurs',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      line1: 'Construire avec rigueur',
      line2: 'Rénover avec passion',
      line3: 'Livrer avec fierté',
      cta: 'Demandez votre soumission gratuite',
    },
    services: {
      title: 'Nos services',
      more: 'En savoir plus',
      items: [
        {
          title: 'Revêtement extérieur',
          text: 'Façades durables et soignées qui protègent et embellissent votre maison.',
        },
        {
          title: 'Portes et fenêtres',
          text: 'Confort, efficacité énergétique et finitions nettes, du choix à l’installation.',
        },
        {
          title: 'Sous-sol',
          text: 'Transformer votre sous-sol en espace habitable, chaleureux et fonctionnel.',
        },
        {
          title: 'Cuisine',
          text: 'Une cuisine pensée pour votre quotidien, avec un suivi clair du début à la fin.',
        },
        {
          title: 'Salle de bain',
          text: 'Rénovation complète ou partielle, avec un souci du détail à chaque étape.',
        },
      ],
    },
    why: {
      title: 'Pourquoi nous choisir ?',
      lead: "Nous croyons qu'un projet réussi repose autant sur la qualité de l'exécution que sur la qualité de la relation avec le client. C'est pourquoi nous nous engageons à offrir :",
      points: [
        'Une communication claire et constante tout au long du projet;',
        'Une planification rigoureuse et le respect des échéanciers;',
        'Des matériaux de qualité et des méthodes de travail éprouvées;',
        'Un souci du détail à chaque étape des travaux;',
        'Des prix justes et compétitifs;',
        'Un chantier propre, sécuritaire et bien organisé;',
        "Une garantie sur notre main-d'œuvre afin d'assurer votre tranquillité d'esprit.",
      ],
      commitmentTitle: 'Notre engagement',
      commitment: [
        "Chez Construction Norgesco Inc., chaque projet est traité comme s'il s'agissait du nôtre. Notre objectif n'est pas seulement de réaliser des travaux de qualité, mais également de bâtir une relation de confiance durable avec chacun de nos clients.",
        'Que vous souhaitiez rénover votre cuisine, votre salle de bain ou votre sous-sol, moderniser votre résidence, remplacer votre revêtement extérieur ou entreprendre un projet de rénovation complet, notre équipe mettra tout en œuvre pour vous accompagner du début à la fin avec professionnalisme, intégrité et efficacité.',
        'Parce que votre satisfaction est au cœur de nos priorités, nous nous engageons à livrer un résultat à la hauteur de vos attentes, dans le respect de votre budget et de vos délais.',
      ],
    },
    areas: {
      title: 'Secteurs desservis',
      lead: 'Nous desservons Laval, Laurentides et Lanaudière.',
      items: ['Laval', 'Laurentides', 'Lanaudière'],
    },
    quiz: {
      title: 'Contactez-nous',
      lead: 'Répondez à 3 questions rapides et recevez une réponse personnalisée.',
      colTitle: 'Votre projet',
      stepOf: 'Question',
      of: 'sur',
      back: 'Retour',
      next: 'Continuer',
      submit: 'Demandez votre soumission gratuite',
      success: 'Merci — nous vous reviendrons avec une réponse personnalisée sous peu.',
      questions: [
        {
          id: 'project',
          prompt: 'Quel est votre type de projet ?',
          options: [
            'Revêtement extérieur',
            'Portes et fenêtres',
            'Sous-sol',
            'Cuisine',
            'Salle de bain',
            'Autre',
          ],
        },
        {
          id: 'sector',
          prompt: 'Où se situe le projet ?',
          options: ['Laval', 'Laurentides', 'Lanaudière', 'Ailleurs'],
        },
        {
          id: 'timing',
          prompt: 'Quand souhaitez-vous démarrer ?',
          options: [
            'Dès que possible',
            'Dans 1 à 3 mois',
            'Dans 3 à 6 mois',
            'Je explore mes options',
          ],
        },
      ],
      contactTitle: 'Recevez votre réponse personnalisée',
      name: 'Nom',
      email: 'Courriel',
      phone: 'Téléphone',
      message: 'Précisions (optionnel)',
      note: 'Soumission gratuite · réponse personnalisée rapide',
      infoTitle: 'Coordonnées',
      infoAreas: 'Laval · Laurentides · Lanaudière',
      infoHours: '24/7',
    },
    reviews: {
      title: 'Ce que disent nos clients',
      cta: 'Laisser un avis',
      source: 'Avis Google',
      items: [
        {
          name: 'Heurv G',
          text: 'Super service, rapide et efficace! Ils prennent le temps de bien réponde aux besoin même si je suis perfectionniste, ils sont très professionnel respectueux et super bon avec la finition. Je suis très satisfait des travaux 👌',
        },
        {
          name: 'André Gervais',
          text: 'Très bon service! L’équipe fait un travail remarquable, propre et structuré. Je recommande sans hésiter!',
        },
        {
          name: 'Isabelle Houle',
          text: 'Excellent service, je recommande fortement',
        },
        {
          name: 'Antoine Piche',
          text: 'Prix honnête et professionnel',
        },
      ],
    },
    direct: {
      colTitle: 'Coordonnées',
      presidentLabel: 'Président',
      president: 'M. Philippe St-Denis',
      phoneLabel: 'Téléphone',
      emailLabel: 'Courriel',
      facebookLabel: 'Facebook',
      call: 'Appeler',
      write: 'Écrire',
      follow: 'Facebook',
      available: 'Disponible 24/7',
      hours: '24/7',
    },
    footer: {
      tagline: 'construction — gestion — rénovation',
      rights: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      why: 'About',
      areas: 'Areas',
      contact: 'Contact',
      menu: 'Menu',
    },
    hero: {
      line1: 'Build with rigor',
      line2: 'Renovate with passion',
      line3: 'Deliver with pride',
      cta: 'Request your free quote',
    },
    services: {
      title: 'Our services',
      more: 'Learn more',
      items: [
        {
          title: 'Exterior siding',
          text: 'Durable, carefully finished exteriors that protect and elevate your home.',
        },
        {
          title: 'Doors & windows',
          text: 'Comfort, energy efficiency, and clean installation from selection to fit.',
        },
        {
          title: 'Basement',
          text: 'Turn your basement into a warm, livable, and useful space.',
        },
        {
          title: 'Kitchen',
          text: 'A kitchen built around daily life, with clear guidance start to finish.',
        },
        {
          title: 'Bathroom',
          text: 'Full or partial renovations with attention to detail at every step.',
        },
      ],
    },
    why: {
      title: 'Why choose us?',
      lead: 'We believe a successful project depends as much on the quality of the work as on the quality of the relationship with the client. That is why we commit to providing:',
      points: [
        'Clear, consistent communication throughout the project;',
        'Rigorous planning and respect for timelines;',
        'Quality materials and proven work methods;',
        'Attention to detail at every stage of the work;',
        'Fair and competitive pricing;',
        'A clean, safe, and well-organized job site;',
        'A warranty on our labor to give you peace of mind.',
      ],
      commitmentTitle: 'Our commitment',
      commitment: [
        'At Construction Norgesco Inc., every project is treated as if it were our own. Our goal is not only to deliver quality work, but also to build a lasting relationship of trust with each of our clients.',
        'Whether you want to renovate your kitchen, bathroom, or basement, modernize your home, replace your exterior siding, or undertake a complete renovation, our team will do everything possible to support you from start to finish with professionalism, integrity, and efficiency.',
        'Because your satisfaction is at the heart of our priorities, we commit to delivering a result that meets your expectations, while respecting your budget and your timelines.',
      ],
    },
    areas: {
      title: 'Areas we serve',
      lead: 'We serve Laval, the Laurentians, and Lanaudière.',
      items: ['Laval', 'Laurentians', 'Lanaudière'],
    },
    quiz: {
      title: 'Contact us',
      lead: 'Answer 3 quick questions and get a personalized response.',
      colTitle: 'Your project',
      stepOf: 'Question',
      of: 'of',
      back: 'Back',
      next: 'Continue',
      submit: 'Request your free quote',
      success: 'Thank you — we’ll get back to you shortly with a personalized response.',
      questions: [
        {
          id: 'project',
          prompt: 'What type of project is it?',
          options: [
            'Exterior siding',
            'Doors & windows',
            'Basement',
            'Kitchen',
            'Bathroom',
            'Other',
          ],
        },
        {
          id: 'sector',
          prompt: 'Where is the project located?',
          options: ['Laval', 'Laurentians', 'Lanaudière', 'Elsewhere'],
        },
        {
          id: 'timing',
          prompt: 'When would you like to start?',
          options: [
            'As soon as possible',
            'In 1 to 3 months',
            'In 3 to 6 months',
            'I’m exploring options',
          ],
        },
      ],
      contactTitle: 'Get your personalized response',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Details (optional)',
      note: 'Free quote · fast personalized reply',
      infoTitle: 'Get in touch',
      infoAreas: 'Laval · Laurentians · Lanaudière',
      infoHours: '24/7',
    },
    reviews: {
      title: 'What our clients say',
      cta: 'Leave a review',
      source: 'Google reviews',
      items: [
        {
          name: 'Heurv G',
          text: 'Great service, fast and efficient! They take the time to meet my needs even though I’m a perfectionist. They are very professional, respectful, and excellent with the finishing. I’m very satisfied with the work 👌',
        },
        {
          name: 'André Gervais',
          text: 'Great service! The team does remarkable work, clean and well organized. I recommend them without hesitation!',
        },
        {
          name: 'Isabelle Houle',
          text: 'Excellent service, I highly recommend them',
        },
        {
          name: 'Antoine Piche',
          text: 'Honest prices and professional',
        },
      ],
    },
    direct: {
      colTitle: 'Contact',
      presidentLabel: 'President',
      president: 'Mr. Philippe St-Denis',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      facebookLabel: 'Facebook',
      call: 'Call',
      write: 'Email',
      follow: 'Facebook',
      available: 'Available 24/7',
      hours: '24/7',
    },
    footer: {
      tagline: 'construction — management — renovation',
      rights: 'All rights reserved.',
    },
  },
}

const STORAGE_KEY = 'norgesco-lang'

let lang = 'fr'
let step = 0
let answers = {}
let sent = false

try {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'fr') lang = saved
} catch (_) {
  /* ignore */
}

function t() {
  return copy[lang]
}

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), obj)
}

function setLang(next) {
  lang = next
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch (_) {
    /* ignore */
  }
  document.documentElement.lang = lang
  applyStaticCopy()
  renderQuiz()
  syncLangButtons()
}

function applyStaticCopy() {
  const dict = t()
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getByPath(dict, el.getAttribute('data-i18n'))
    if (typeof value === 'string') el.textContent = value
  })

  const menuBtn = document.getElementById('nav-toggle')
  if (menuBtn) menuBtn.setAttribute('aria-label', dict.nav.menu)

  const boxes = document.getElementById('services-boxes')
  if (boxes) {
    boxes.innerHTML = dict.services.items
      .map(
        (item, i) => `
      <article class="service-box service-box--piece-${(i % 5) + 1}" style="--piece-delay: ${i * 0.12}s">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <a class="read-more" href="#contact">${dict.services.more}</a>
      </article>`,
      )
      .join('')
  }

  const whyList = document.getElementById('why-list')
  if (whyList) {
    whyList.innerHTML = dict.why.points.map((item) => `<li>${item}</li>`).join('')
  }

  const whyCommitment = document.getElementById('why-commitment')
  if (whyCommitment) {
    whyCommitment.innerHTML = dict.why.commitment.map((para) => `<p>${para}</p>`).join('')
  }

  const areas = document.getElementById('areas-row')
  if (areas) {
    areas.innerHTML = dict.areas.items
      .map((item) => `<div class="area-pill">${item}</div>`)
      .join('')
  }

  const facts = document.getElementById('direct-facts')
  if (facts) {
    facts.innerHTML = [`<li>${dict.direct.hours}</li>`, ...dict.areas.items.map((item) => `<li>${item}</li>`)].join(
      '',
    )
  }

  const reviews = document.getElementById('reviews-list')
  if (reviews) {
    reviews.innerHTML = dict.reviews.items
      .map(
        (item) => `
      <article class="review-card">
        <div class="review-card__stars" aria-hidden="true">★★★★★</div>
        <p class="review-card__text">“${item.text}”</p>
        <p class="review-card__name">${item.name}</p>
        <p class="review-card__source">${dict.reviews.source}</p>
      </article>`,
      )
      .join('')
  }
}

function syncLangButtons() {
  const fr = document.getElementById('lang-fr')
  const en = document.getElementById('lang-en')
  if (!fr || !en) return
  fr.classList.toggle('is-active', lang === 'fr')
  en.classList.toggle('is-active', lang === 'en')
  fr.setAttribute('aria-pressed', String(lang === 'fr'))
  en.setAttribute('aria-pressed', String(lang === 'en'))
}

function renderQuiz() {
  const panel = document.getElementById('quiz-panel')
  const progress = document.getElementById('quiz-progress')
  if (!panel || !progress) return

  const q = t().quiz
  const questions = q.questions
  const totalSteps = questions.length + 1
  progress.style.width = `${((step + 1) / totalSteps) * 100}%`

  if (sent) {
    panel.innerHTML = `<p class="quiz__success">${q.success}</p>`
    return
  }

  if (step < questions.length) {
    const current = questions[step]
    const selected = answers[current.id]
    panel.innerHTML = `
      <div class="quiz__step">
        <p class="quiz__meta">${q.stepOf} ${step + 1} ${q.of} ${questions.length}</p>
        <h3>${current.prompt}</h3>
        <div class="quiz__options" role="radiogroup" aria-label="${current.prompt}">
          ${current.options
            .map(
              (option) => `
            <button
              type="button"
              class="quiz__option${selected === option ? ' is-selected' : ''}"
              role="radio"
              aria-checked="${selected === option}"
              data-option="${option.replace(/"/g, '&quot;')}"
            >${option}</button>`,
            )
            .join('')}
        </div>
        <div class="quiz__nav">
          ${
            step > 0
              ? `<button type="button" class="btn btn--ghost" data-action="back">${q.back}</button>`
              : '<span></span>'
          }
          <button type="button" class="btn btn--primary" data-action="next" ${
            selected ? '' : 'disabled'
          }>${q.next}</button>
        </div>
      </div>`
    return
  }

  panel.innerHTML = `
    <form class="contact-form" id="quote-form">
      <h3>${q.contactTitle}</h3>
      <div class="form-row">
        <div class="field">
          <label for="quote-name">${q.name}</label>
          <input id="quote-name" name="name" required autocomplete="name" />
        </div>
        <div class="field">
          <label for="quote-email">${q.email}</label>
          <input id="quote-email" name="email" type="email" required autocomplete="email" />
        </div>
      </div>
      <div class="field">
        <label for="quote-phone">${q.phone}</label>
        <input id="quote-phone" name="phone" type="tel" required autocomplete="tel" />
      </div>
      <div class="field">
        <label for="quote-message">${q.message}</label>
        <textarea id="quote-message" name="message" rows="4"></textarea>
      </div>
      <input type="hidden" name="project" value="${answers.project || ''}" />
      <input type="hidden" name="sector" value="${answers.sector || ''}" />
      <input type="hidden" name="timing" value="${answers.timing || ''}" />
      <div class="quiz__nav">
        <button type="button" class="btn btn--ghost" data-action="back">${q.back}</button>
        <button class="btn btn--primary" type="submit">${q.submit}</button>
      </div>
      <p class="contact-note">${q.note}</p>
    </form>`
}

const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = String(new Date().getFullYear())

document.getElementById('lang-fr')?.addEventListener('click', () => setLang('fr'))
document.getElementById('lang-en')?.addEventListener('click', () => setLang('en'))

const quizPanel = document.getElementById('quiz-panel')
quizPanel?.addEventListener('click', (event) => {
  const target = event.target
  if (!(target instanceof HTMLElement)) return

  if (target.matches('[data-option]')) {
    const current = t().quiz.questions[step]
    if (!current) return
    answers[current.id] = target.getAttribute('data-option') || ''
    renderQuiz()
    return
  }

  if (target.matches('[data-action="back"]')) {
    step = Math.max(0, step - 1)
    renderQuiz()
    return
  }

  if (target.matches('[data-action="next"]')) {
    const current = t().quiz.questions[step]
    if (!current || !answers[current.id]) return
    step += 1
    renderQuiz()
  }
})

quizPanel?.addEventListener('submit', (event) => {
  if (!(event.target instanceof HTMLFormElement)) return
  if (event.target.id !== 'quote-form') return
  event.preventDefault()
  sent = true
  renderQuiz()
})

const servicesSection = document.getElementById('services')
if (servicesSection && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      servicesSection.classList.toggle('is-inview', Boolean(entry?.isIntersecting))
    },
    { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
  )
  observer.observe(servicesSection)
} else if (servicesSection) {
  servicesSection.classList.add('is-inview')
}

document.documentElement.lang = lang
applyStaticCopy()
syncLangButtons()
renderQuiz()

const navToggle = document.getElementById('nav-toggle')
const navbar = document.querySelector('.navbar')
const siteNav = document.getElementById('site-nav')

function setNavOpen(open) {
  if (!navbar || !navToggle) return
  navbar.classList.toggle('is-open', open)
  document.body.classList.toggle('nav-open', open)
  navToggle.setAttribute('aria-expanded', String(open))
}

navToggle?.addEventListener('click', () => {
  setNavOpen(!navbar.classList.contains('is-open'))
})

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setNavOpen(false))
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setNavOpen(false)
})

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 720px)').matches) setNavOpen(false)
})
