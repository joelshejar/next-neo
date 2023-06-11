import styles from './page.module.css'
import Logo from "./components/logo"
import { Syne } from "next/font/google"

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
            <div className={styles.blogCard}>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
