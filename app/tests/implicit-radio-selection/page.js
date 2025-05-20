"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Home() {
  const [isActive, setIsPrivate] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1"); // Default selection

  const handleEnableRadios = () => {
    setIsPrivate(true);
    setSelectedOption("option2"); // Select Option 2 when enabled
  };

  const handleSelection = (option) => {
    setSelectedOption(option);
    if (option === "option1") {
      setIsPrivate(false); // Disable radios & button when Option 1 is selected again
    }
  };

  return (
    <main>
      <Link href="/">return Home</Link>
      <h1>Implicit radio selection via button</h1>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Privacy options</legend>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            id="option1"
            type="radio"
            name="options"
            value="Link is private"
            checked={selectedOption === "option1"}
            onChange={() => handleSelection("option1")}
            aria-label="First option"
          />
          <label htmlFor="option1" className={styles.label}>
            List is private
          </label>
          <div className={styles.inputDescription}>
            The list is private and viewable only by you.
          </div>
        </div>

        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            id="option2"
            type="radio"
            name="options"
            value="Link is public and sharable"
            checked={selectedOption === "option2"}
            onChange={() => handleSelection("option2")}
            aria-label="Second option"
          />
          <label htmlFor="option2" className={styles.label}>
            List is public and sharable
          </label>
          <div className={styles.inputDescription}>
            The list is public and is viewable by anyone with the link. Other
            users can make copies of your list.
          </div>
        </div>
        <button onClick={handleEnableRadios} className={styles.button}>
          Copy sharable link
          <span aria-hidden="true" className={styles.buttonIcon}>
            ⤴
          </span>
        </button>
        <div className={styles.socialWrapper}>
          <button
            onClick={handleEnableRadios}
            className={styles.socialButton}
            type="button"
          >
            🔗Facebook
          </button>
          <button
            onClick={handleEnableRadios}
            className={styles.socialButton}
            type="button"
          >
            🔗Instagram
          </button>
          <button
            onClick={handleEnableRadios}
            className={styles.socialButton}
            type="button"
          >
            🔗Email
          </button>
        </div>
      </fieldset>
      <div
        className={styles.ariaLiveRegion}
        role="region"
        aria-live="polite"
      ></div>
    </main>
  );
}
