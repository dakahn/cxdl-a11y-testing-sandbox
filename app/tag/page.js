import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Tag</h1>
        <div className={styles.tagContainer}>
          <span className={styles.tag}>Tag label</span>
        </div>
      </main>
    </div>
  )
}
