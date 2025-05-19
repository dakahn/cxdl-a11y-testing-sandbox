import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <h1>CXDL Accessibility Testing Sandbox</h1>
        <h2>Components</h2>
        <ul>
          <li><Link href="/alert">Alert</Link></li>
          <li><Link href="/breadcrumbs">Breadcrumbs</Link></li>
          <li><Link href="/button">Button</Link></li>
          <li><Link href="/checkbox">Checkbox</Link></li>
          <li><Link href="/dialog">Dialog</Link></li>
          <li><Link href="/input">Input</Link></li>
          <li><Link href="/input-field">Input field</Link></li>
          <li><Link href="/modal">Modal</Link></li>
          <li><Link href="/radio-group">Radio group</Link></li>
          <li><Link href="/search-bar">Search bar</Link></li>
          <li><Link href="/select">Select</Link></li>
          <li><Link href="/tag">Tag</Link></li>
          <li><Link href="/text-area">Text area</Link></li>
          <li><Link href="/toggle">Toggle</Link></li>
          <li><Link href="/tooltip">Tooltip</Link></li>
          <li><Link href="/typeahead">Typeahead</Link></li>
        </ul>
        <h2>Usability Tests</h2>
        <ul>
          <li><Link href="/tests/implicit-radio-selection">Implicit Radio Button Selection</Link></li>
        </ul>
      </main>
    </div>
  );
}
