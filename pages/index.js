import Head from 'next/head'
import styles from '../styles/Home.module.css'

const projects = [
  {
    name: 'ordinaryfriend',
    url: 'ordinaryfriend.com',
    href: 'https://www.ordinaryfriend.com',
    description: 'A tool that shows you what your Meta data actually says about you — and invites you to donate your anonymized data to researchers building safer online spaces for the next generation. Because the people who built the problem shouldn\'t architect the solution.',
    stack: '// next.js · supabase · vercel · mcp server · 22+ tools',
    tags: ['social', 'mcp', 'data rights', 'research', 'ethics'],
  },
  {
    name: 'sarahsbooks',
    url: 'sarahsbooks.com',
    href: 'https://www.sarahsbooks.com',
    description: 'A personal book recommendation app powered by my 200+ book library. Features ability to import Goodreads collection, discover books by curated themes, and build reading circles. Directs readers to local libraries, bookstores, and bookshop.org to support the reading communities we live in.',
    stack: '// vite · react · supabase · vercel',
    tags: ['books', 'recommendations', 'personal library', 'kindle'],
  },
  {
    name: 'seattlecampfinder',
    url: 'seattlecampfinder.org',
    href: 'https://www.seattlecampfinder.org',
    description: 'A comprehensive directory of Seattle-area summer camps. Finding summer camps shouldn\'t be so hard. Searchable, filterable, actually useful.',
    stack: '// next.js · vercel',
    tags: ['seattle', 'families', 'directory', 'community'],
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarah Ritter — sarahcodeswell.com</title>
      </Head>

      <div className={styles.page}>

        <nav className={styles.nav}>
          <span className={styles.navLogo}>sarahcodeswell</span>
          <a href="#projects" className={styles.navLink}>projects</a>
          <a href="#about" className={styles.navLink}>about</a>
          <a href="https://bewellread.substack.com" target="_blank" rel="noopener noreferrer" className={styles.navLink}>writing</a>
        </nav>

        <header className={styles.hero}>
          <h1 className={styles.heroName}>
            Hi, I'm Sarah.
          </h1>

          <p className={styles.heroBio}>
            I build things with{' '}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              <strong>Claude</strong>
            </a>
            . I'm a product leader at{' '}
            <a href="https://workato.com" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>
              <strong>Workato</strong>
            </a>
            , anthropologist by trade, technologist by obsession. These are my side projects — not vibe-coded and forgotten, but designed, iterated, and tended to with care.
          </p>
          
          <div className={styles.socialLinks}>
            <a href="https://github.com/sarahcodeswell" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sarahjritter/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </header>

        <main className={styles.main}>

          <section id="projects" className={styles.section}>
            <div className={styles.sectionLabel}>Projects</div>

            {projects.map((project, i) => (
              <article key={i} className={styles.project}>
                <div className={styles.projectHeader}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectName}
                  >
                    {project.name}
                  </a>
                  <span className={styles.projectUrl}>{project.url}</span>
                </div>
                <p className={styles.projectDesc}>{project.description}</p>
                <p className={styles.projectStack}>{project.stack}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, j) => (
                    <span key={j} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section id="about" className={styles.section}>
            <div className={styles.sectionLabel}>About</div>
            <div className={styles.about}>
              <img 
                src="/images/portrait.jpg" 
                alt="Sarah Ritter portrait" 
                className={styles.portrait}
              />
              <p>
                I'm a product leader, recovering founder, and enthusiast developer. I spent nearly 12 years at Microsoft, founded{' '}
                <a href="#" className={styles.aboutLink}>Tribute</a>
                {' '}(a storytelling platform for teams with enterprise clients including Microsoft, Coinbase, and Zillow), and now lead AI product at{' '}
                <a href="https://workato.com" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>Workato</a>
                , where I think about agentic orchestration, MCP integrations, and what it means for software to actually do things of value on your behalf.
              </p>
              <p>
                My undergraduate degree is in cultural anthropology, my graduate degree in business administration (MBA). I think about technology the way an anthropologist thinks about artifacts: what does this reveal about who we are and what we value?
              </p>
              <p>
                I live in Seattle with my husband{' '}
                <a href="https://en.wikipedia.org/wiki/Jordan_Ritter" target="_blank" rel="noopener noreferrer" className={styles.aboutLink}>Jordan</a>
                {' '}and our kids. I'm rarely online — find me in real life with a book in hand or on a boat.
              </p>
            </div>
          </section>

          <section id="reading" className={styles.section}>
            <div className={styles.sectionLabel}>Currently Reading</div>
            <div className={styles.reading}>
              <p className={styles.readingIntro}>
                I read to understand humans, history, and systems. Lately I've been thinking about abundance, empire, and the stories we tell ourselves about progress.
              </p>
              
              <div className={styles.currentBook}>
                <a href="https://bookshop.org/a/119544/9780385550666" target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                  <p className={styles.bookTitle}>Dream State</p>
                </a>
                <p className={styles.bookAuthor}>by Eric Puchner</p>
                <p className={styles.bookNote}>A nice easy read after a series of heavier reads.</p>
              </div>
              
              <div className={styles.recentReads}>
                <p className={styles.recentLabel}>Recent reads:</p>
                <ul className={styles.bookList}>
                  <li>
                    <a href="https://bookshop.org/a/119544/9780618221394" target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                      <em>Silence on the Mountain</em>
                    </a> — Daniel Wilkinson <span className={styles.bookTheme}>· power & memory in Guatemala</span>
                  </li>
                  <li>
                    <a href="https://bookshop.org/a/119544/9780593449769" target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                      <em>One Day Everyone Will Have Always Been Against This</em>
                    </a> — Omar El Akkad <span className={styles.bookTheme}>· resistance & inevitability</span>
                  </li>
                  <li>
                    <a href="https://bookshop.org/a/119544/9781668023488" target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                      <em>Abundance</em>
                    </a> — Ezra Klein & Derek Thompson <span className={styles.bookTheme}>· optimism vs. stagnation</span>
                  </li>
                  <li>
                    <a href="https://bookshop.org/a/119544/9780593657500" target="_blank" rel="noopener noreferrer" className={styles.bookLink}>
                      <em>Empire of AI</em>
                    </a> — Karen Hao <span className={styles.bookTheme}>· tech power & extraction</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </main>

        <footer className={styles.footer}>
          <span>© 2026 Sarah Ritter</span>
          <span>built with Claude · seattle, wa</span>
        </footer>

      </div>
    </>
  )
}
