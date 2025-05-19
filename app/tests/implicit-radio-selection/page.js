"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1"); // Default selection

  const handleEnableRadios = () => {
    setIsActive(true);
    setSelectedOption("option2"); // Select Option 2 when enabled
  };

  const handleSelection = (option) => {
    setSelectedOption(option);
    if (option === "option1") {
      setIsActive(false); // Disable radios & button when Option 1 is selected again
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
            disabled={!isActive}
            aria-label="First option"
          />
          <label htmlFor="option1" className={styles.label}>
            Link is private
          </label>
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
            disabled={!isActive}
            aria-label="Second option"
          />
          <label htmlFor="option2" className={styles.label}>
            Link is public and sharable
          </label>
        </div>
        <button
          onClick={handleEnableRadios}
          className={styles.button}
          disabled={isActive}
          aria-label="Enable radio buttons and select Option 2"
        >
          Copy sharable link
          <span aria-hidden="true" className={styles.buttonIcon}>
            ⤴
          </span>
        </button>
      </fieldset>
    </main>
  );
}
