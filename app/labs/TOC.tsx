import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-TOC">
        Gooby goo!
        <br />
        <Link href="/labs">Home</Link>
        <br />
        <Link href="/labs/lab1">Lab 1</Link>
        <br />
        <Link href="/labs/lab2">Lab 2</Link>
        <br />
        <Link href="/labs/lab3">Lab 3</Link>
        <br />
        <Link href="/labs/lab4">Lab 4</Link>
        <br />
        <Link href="/labs/lab5">Lab 5</Link>
        <br />
        <Link href="/book/ch1" id="wd-toc-book-link">Chapter 1</Link>
    </div>
  );
}