import styles from './page.module.css'
import Logo from "./components/logo"
import { Syne } from "next/font/google"
import Link from './components/link'
const syne = Syne({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
})
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
          <h6>Joel</h6>
        </div>
        <nav className={styles.menu}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blogs</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroHeading}>
          <h1 style={syne.style}>
            <span className={styles.textGradient}>Frontend</span> Engineer, <span className={styles.textGradientTwo}>Footballer</span>.
          </h1>
          <p>You have found my place on the internet</p>
          <h2>I am currently building at Genpro Research, I'm interested in football, tech, and building a fast, accessible web</h2>
        </div>
        <div className={styles.blog}>
          <h2>Recent Blogs</h2>
          <div className={styles.blogCardSection}>
            <article className={styles.blogCard}>
              <h4>Debouncing in Javascript</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisi
                cing elit. Expedita fugit magnam, modi adnt, dicta nobis
                aut? Ratione eius est laudantium molest</p>
              <Link href="/blog" className={styles.pushable}>
                <span className={styles.shadow}></span>
                <span className={styles.edge}></span>
                <span className={styles.front}>
                  Push me
                </span>
              </Link>
            </article>
            <article className={styles.blogCard}>
              <h4>Debouncing in Javascript</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisi
                cing elit. Expedita fugit magnam, modi adipisci m
                agni est rem consectetur hic veritatis incidunt, dicta nobis
                aut? Ratione eius est laudantium molest</p>
            </article>
            <article className={styles.blogCard}>
              <h4>Debouncing in Javascript</h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisi
                cing elit. Expedita fugit magnam, modi adipisci m
                agni est rem consectetur hic veritatis incidunt, dicta nobis
                aut? Ratione eius est laudantium molest</p>
            </article>
          </div>
        </div>
      </section>

    </div>
  )
}
