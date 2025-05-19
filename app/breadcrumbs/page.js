import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
  <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Breadcrumbs</h1>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
          <ol className={styles.breadcrumbs__list}>
            <li className={styles.breadcrumbs__listitem}>
              <a href="#">Home</a>
              <div aria-hidden="true">˃</div>
            </li>
            <li className={styles.breadcrumbs__listitem}>
              <a href="#">My Account</a>
              <div aria-hidden="true">˃</div>
            </li>
            <li className={styles.breadcrumbs__listitem}>
              <a href="#">Order history</a>
              <div aria-hidden="true">˃</div>
            </li>
            <li className={styles.breadcrumbs__listitem}>
              <span aria-current="true">
                <span>Order details</span>
              </span>
            </li>
          </ol>
        </nav>
      </main>
  </div>
  )
}
