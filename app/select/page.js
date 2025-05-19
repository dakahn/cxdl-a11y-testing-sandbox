import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Select</h1>
        <label htmlFor="select1" className={styles.label}>Favorite Texas City</label>
        <select id="select1" className={styles.select} name="city">
          <option value="Austin">Austin</option>
          <option value="Dallas">Dallas</option>
          <option value="Houston">Houston</option>
          <option value="San Antonion">San Antonio</option>
        </select>
      </main>
    </div>
  )
}
