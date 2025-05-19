'use client'

import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

const suggestions = ["Apple", "Banana", "Cherry", "Guava", "Grapes", "Mango"];

export default function Page() {
  const [query, setQuery] = useState("");
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <main>
      <Link href="/">return Home</Link>
      <h1>Typeahead search</h1>
      <div className={styles.container}>
        <label className={styles.inputLabel} htmlFor="search">Search:</label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="search"
            placeholder="Search"
            className={styles.input}
            value={query}
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.button} type="submit" aria-label="Submit search"><span className={styles.button__icon}>🔍</span></button>
        </div>

        {query && (
          <ul className={styles.dropdown}>
            {filteredSuggestions.map((item) => (
              <li key={item} onClick={() => setQuery(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
