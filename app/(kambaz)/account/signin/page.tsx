import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>

      <input
        placeholder="username"
        defaultValue="ada"
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <input
        placeholder="password"
        type="password"
        defaultValue="123"
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <label htmlFor="wd-ai-signin-note">Sample note</label>
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <Link
        id="wd-signin-btn"
        href="/dashboard"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline hover:bg-blue-700"
      >
        Sign in
      </Link>

      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}


// import Link from "next/link";

// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h3>Sign in</h3>
//       <input
//         placeholder="username"
//         className="wd-username"
//         defaultValue="ada"
//       />{" "}
//       <br />
//       <input
//         placeholder="password"
//         type="password"
//         className="wd-password"
//         defaultValue="123"
//       />{" "}
//       <br />
//       <Link href="/dashboard" id="wd-signin-btn">
//         Sign in
//       </Link>{" "}
//       <br />
//       <Link href="/account/signup" id="wd-signup-link">
//         Sign up
//       </Link>
//     </div>
//   );
// }