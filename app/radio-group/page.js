import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Radio group</h1>
        <ul>
          <li className={styles.listItem}>
            <fieldset aria-invalid="false" className={styles.groupWrapper}>
              <legend className={styles.legend}>Problem discovered</legend>
              <div className={styles.radioWrapper}>
                <input id="radio1" type="radio" />
                <label htmlFor="radio1">Missing</label>
              </div>
              <div className={styles.radioWrapper}>
                <input id="radio2" type="radio" />
                <label htmlFor="radio2">Damaged</label>
              </div>
              <div className={styles.radioWrapper}>
                <input id="radio3" type="radio" />
                <label htmlFor="radio3">Expired/Spoiled</label>
              </div>
              <div className={styles.radioWrapper}>
                <input id="radio4" type="radio" />
                <label htmlFor="radio4">Other</label>
              </div>
            </fieldset>
          </li>
          <li>
            <fieldset aria-invalid="false" className={styles.groupWrapper__column}>
              <legend className={styles.legend}>Problem discovered</legend>
              <div className={styles.radioWrapper}>
                <input id="radio1" type="radio" />
                <label htmlFor="radio1">Missing</label>
              </div>
              <div className={styles.radioWrapper}>
                <input id="radio2" type="radio" />
                <label htmlFor="radio2">Damaged</label>
              </div>
              <div className={styles.radioWrapper}>
                <input id="radio3" type="radio" />
                <label htmlFor="radio3">Expired/Spoiled</label>
              </div>
              <div className={styles.radioWrapper}>
                <input id="radio4" type="radio" />
                <label htmlFor="radio4">Other</label>
              </div>
            </fieldset>
          </li>
        </ul>
      </main>
    </div>
  )
}
