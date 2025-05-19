import Link from "next/link";

export default function Page() {
  return (
    <div>
      <main>
        <Link href="/">return Home</Link>
        <h1>Input</h1>
        <input type="text" placeholder="" />
      </main>
    </div>
  )
}
