'use client'

import Link from "next/link";
import styles from './styles.module.css'
import { useState } from 'react';

export default function Page() {
  const [on, setOn] = useState(false)

  return (
    <main>
      <Link href="/">return Home</Link>
      <h1>Toggle</h1>
      <button
        className={`${styles.toggleButton} ${on ? styles.on : ''}`}
        onClick={() => setOn(prev => !prev)}
        aria-pressed={on}
      >
        <div className={styles.track}></div>
        <div className={styles.knob}></div>
      </button>
    </main>
  );
}

