import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Text area</h1>
        <div className={styles.textAreaWrapper}>
          <label className={styles.textAreaLabel} htmlFor="input">Note for driver</label>
          <textarea className={styles.textArea} id="input"></textarea>
        </div>
      </main>
    </div>
  )
}
