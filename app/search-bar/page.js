import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>SearchBar</h1>
        <div className={styles.searchWrapper}>
          <label className={styles.inputLabel}>Search</label>
          <input className={styles.input} placeholder="Search" aria-label="Search" autoComplete="off" autocorrect="off" autocapitalize="none" />
          <button className={styles.button} type="submit" aria-label="Submit search"><span className={styles.button__icon}>🔍</span></button>
        </div>
      </main >
    </div >
  )
}
