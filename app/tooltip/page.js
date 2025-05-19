'use client'

import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {

  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Tooltip</h1>
        <div className={styles.wrapper}>
          <button className={styles.button} aria-describedby="tooltip">i</button>
          <div id="tooltip" className={styles.tooltip}>“Part of the problem is that we tend to think that equality is about treating everyone the same, when it’s not. It’s about fairness. It’s about equity of access.” -Judy Heumann</div>
        </div>
      </main>
    </div>
  )
}
