import styles from './page.module.css'
import Logo from "./components/logo"

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
        <h1>Welcome to the Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>

    </div>
  )
}