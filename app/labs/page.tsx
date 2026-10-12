import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Zhu Fang</h2>
      <p>CS4550 Section 01</p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">Lab 4: Client State</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5: RESTful Web APIs</Link>
        </li>
        <li>
          <Link href="/">Kambaz</Link>
        </li>
        <li>
          <Link 
            href="https://github.com/Yuwui4/webdev-client/" 
            id="wd-github"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </li>
      </ul>
    </div>
  );
}