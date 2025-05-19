'use client'

import Link from "next/link";
import styles from './styles.module.css'
import { useState } from 'react';

export default function Page() {

  const [communicationPreferences, setCommunicationPreferences] = useState({
    textMessages: false,
    emails: false,
  });

  const allSelected = communicationPreferences.textMessages && communicationPreferences.emails;

  const handleSelectAll = (element) => {
    const checked = element.target.checked;
    setCommunicationPreferences({
      textMessages: checked,
      emails: checked,
    });
  }

  const handleOptionChange = (element) => {
    const { name, checked } = element.target;
    setCommunicationPreferences((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
  }

  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Checkbox</h1>
        <ul>
          <li>
            <h2>Default</h2>
            <div>
              <input id="base-checkbox" className={styles.checkbox} aria-invalid="false" type="checkbox" />
              <label htmlFor="base-checkbox" className={styles.checkbox__label}>Email receipt</label>
            </div>
          </li>
          <li>
            <h2>Disabled</h2>
            <div>
              <input id="base-checkbox" aria-disabled="true" disabled className={styles.checkbox} aria-invalid="false" type="checkbox" />
              <label htmlFor="base-checkbox" className={styles.checkbox__label}>Email receipt</label>
            </div>

          </li>
          <li>
            <h2>Hint</h2>
            <div>
              <input id="base-checkbox" aria-describedby="hint-checkbox" className={styles.checkbox} aria-invalid="false" type="checkbox" />
              <label htmlFor="base-checkbox" className={styles.checkbox__label}>Email receipt</label>
              <div className={styles.hinttext}>User's should expect a minimum of 10 emails a day</div>
            </div>
          </li>
          <li>
            <h2>Error</h2>
            <div>
              <input id="base-checkbox" className={styles.checkbox} aria-invalid="true" aria-describedby="checkbox__errormessage" type="checkbox" />
              <label htmlFor="base-checkbox" className={styles.checkbox__label}>Email receipt</label>
              <div className={styles.errortext__wrapper}>
                <span className={styles.erroricon} aria-label="error" role="img">⚠</span>
                <div id="checkbox__errormessage" className={styles.errortext}>You must agree to receive emails!</div>
              </div>
            </div>
          </li>
          <li>
            <h2>Indeterminate</h2>
            <fieldset>
              <legend className={styles.legend}>Communication preferences</legend>
              <div className={styles.checkbox__container}>
                <input checked={allSelected} onChange={handleSelectAll} aria-describedby="indeterminate-checkbox-hinttext" id="base-checkbox" className={styles.checkbox} aria-invalid="false" type="checkbox" />
                <label htmlFor="base-checkbox" className={styles.checkbox__label}>Select all</label>
              </div>
              <div>
                <div className={styles.checkbox__nestedcontainer}>
                  <input name="textMessages" checked={communicationPreferences.textMessages} onChange={handleOptionChange} id="nested-checkbox1" className={styles.checkbox} aria-invalid="false" type="checkbox" />
                  <label htmlFor="nested-checkbox1" className={styles.checkbox__label}>Text messages</label>
                </div>
                <div className={styles.checkbox__nestedcontainer}>
                  <input name="emails" checked={communicationPreferences.emails} onChange={handleOptionChange} id="nested-checkbox2" className={styles.checkbox} aria-invalid="false" type="checkbox" />
                  <label htmlFor="nested-checkbox2" className={styles.checkbox__label}>Emails</label>
                </div>
              </div>
              <div className={styles.hinttext} id="indeterminate-checkbox-hinttext">We highly advise you to agree to one or both modes of communication.</div>
            </fieldset>
          </li>
        </ul>
      </main>
    </div>
  )
}
