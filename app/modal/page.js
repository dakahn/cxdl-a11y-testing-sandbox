'use client'

import Link from "next/link";
import { useRef } from 'react';

export default function Page() {

  const dialogRef = useRef(null);
  const openDialog = () => {
    if (dialogRef.current) dialogRef.current.showModal();
  }
  const closeDialog = () => {
    if (dialogRef.current) dialogRef.current.close();
  }

  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Modal Dialog</h1>
        <button id="open" onClick={openDialog}>Click to purchase</button>
        <dialog id="dialog" ref={dialogRef}>
          <p>You must add a payment method to purchase!</p>
          <button onClick={closeDialog}>Return to checkout</button>
        </dialog>
      </main>
    </div>
  )
}
