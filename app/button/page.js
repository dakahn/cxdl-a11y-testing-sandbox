import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
  <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Button</h1>
        <ul>
          <li>
            <h2>Default</h2>
            <button type="button" className={styles.button}>Purchase</button>
          </li>
          <li>
            <h2>Link button</h2>
            <a href="#" className={styles.button}>Proceed</a>
          </li>
        </ul>
      </main>
  </div>
  )
}
