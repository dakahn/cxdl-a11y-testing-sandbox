import Link from "next/link";
import styles from './styles.module.css'

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Input field</h1>
        <ul>
          <li>
            <h2>Default</h2>
            <div className={styles.inputWrapper}>
              <label htmlFor="input-field">Name</label>
              <input type="text" placeholder="" />
            </div>
          </li>
          <li>
            <h2>Required</h2>
            <div className={styles.inputWrapper}>
              <label htmlFor="input-field">Name</label>
              <input id="required" aria-required="true" type="text" placeholder="" />
            </div>
          </li>
          <li>
            <h2>With description</h2>
            <div className={styles.inputWrapper}>
              <label htmlFor="input-field">Name</label>
              <input aria-describedby="description" type="text" placeholder="" />
              <div id="description">Please provide legal name</div>
            </div>
          </li>
          <li>
            <h2>Error</h2>
            <div className={styles.inputWrapper}>
              <label htmlFor="input-field">Name</label>
              <input id={styles.errorInput} aria-describedby="input__errormessage" type="text" placeholder="" />
              <div className={styles.errorWrapper}>
                <span className={styles.erroricon} aria-label="error" role="img">⚠</span>
                <div id="input__errormessage" className={styles.errortext}>Please provide a legal name!</div>
              </div>
            </div>
          </li>
          <li>
            <h2>Disabled</h2>
            <div className={styles.inputWrapper}>
              <label htmlFor="input-field">Name</label>
              <input aria-disabled="true" disabled type="text" placeholder="" />
            </div>
          </li>
        </ul>
      </main>
    </div>
  )
}
