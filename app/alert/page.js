import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
  <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Alert</h1>
          <div className={styles.alert} role="alert">
          <div className={styles.alert__message}>
            <div aria-hidden="true">✓</div>
            <div>This is an alert message!</div>
          </div>
          <div className={styles.alert__cta}>
            <div>
              <a href="">Update account →</a>
            </div>
          <button className={styles.alert__button} aria-label="Close alert" type="button">Ⅹ</button>
          </div>
        </div>
      </main>
  </div>
  )
}
