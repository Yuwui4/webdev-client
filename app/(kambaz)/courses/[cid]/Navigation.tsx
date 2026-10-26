// personal attempt, given example and past code below
// since the ai instruction version sticks to segement im just gonna switch to using the example...

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import "../../kambaz.css";

// const LINKS = [
//   { label: "Home", pathLabel: "home", id: "wd-course-home-link" },
//   { label: "Modules", pathLabel: "modules", id: "wd-course-modules-link" },
//   { label: "Piazza", pathLabel: "piazza", id: "wd-course-piazza-link" },
//   { label: "Zoom", pathLabel: "zoom", id: "wd-course-zoom-link" },
//   { label: "Assignments", pathLabel: "assignments", id: "wd-course-assignments-link" },
//   { label: "Quizzes", pathLabel: "quizzes", id: "wd-course-quizzes-link" },
//   { label: "Grades", pathLabel: "grades", id: "wd-course-grades-link" },
//   { label: "People", pathLabel: "people/table", id: "wd-course-people-link" },
// ] as const;

// export default function CourseNavigation({ cid }: { cid: string }) {
//   const pathname = usePathname() ?? "";

//   return (
//     <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
//       {LINKS.map(({ label, pathLabel, id }) => {
//         const href = `/courses/${cid}/${pathLabel}`;
//         const clicked = pathname === href || pathname.startsWith(href + "/");

//         return (
//           <Link href={href} id={id} key={id}
//             className={
//               clicked
//                 ? "list-group-item active border-0"
//                 : "list-group-item border-0 text-red-600"
//             }
//           >
//             {label}
//           </Link>
//         );
//       })}
//     </div>
//   )
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../kambaz.css";

const LINKS = [
  { segment: "home", id: "wd-course-home-link", label: "Home" },
  { segment: "modules", id: "wd-course-modules-link", label: "Modules" },
  { segment: "piazza", id: "wd-course-piazza-link", label: "Piazza" },
  { segment: "zoom", id: "wd-course-zoom-link", label: "Zoom" },
  { segment: "assignments", id: "wd-course-assignments-link", label: "Assignments" },
  { segment: "quizzes", id: "wd-course-quizzes-link", label: "Quizzes" },
  { segment: "grades", id: "wd-course-grades-link", label: "Grades" },
  { segment: "people/table", id: "wd-course-people-link", label: "People" },
  { segment: "announcements", id: "wd-course-announcements-link", label: "Announcements" },
] as const;

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const inCourse = pathname.startsWith(`/courses/${cid}`);

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {LINKS.map(({ segment, id, label }) => {
        const href = `/courses/${cid}/${segment}`;
        const active = inCourse
          ? pathname === href ||
            (segment !== "home" && pathname.startsWith(href))
          : segment === "home";
        return (
          <Link
            key={id}
            href={href}
            id={id}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import "../../kambaz.css";

// export default function CourseNavigation({ cid }: { cid: string }) {
//   const pathname = usePathname() ?? "";
//   const home = `/courses/${cid}/home`;
//   const modules = `/courses/${cid}/modules`;
//   const piazza = `/courses/${cid}/piazza`;
//   const zoom = `/courses/${cid}/zoom`;
//   const assignments = `/courses/${cid}/assignments`;
//   const quizzes = `/courses/${cid}/quizzes`;
//   const grades = `/courses/${cid}/grades`;
//   const people = `/courses/${cid}/people/table`;
//   return (
//     <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
//       <Link
//         href={home}
//         id="wd-course-home-link"
//         className={
//           pathname === home
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         Home
//       </Link>
//       <Link
//         href={modules}
//         id="wd-course-modules-link"
//         className={
//           pathname === modules
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         Modules
//       </Link>

//       {/* ...Piazza and Zoom, same pattern... */}

//       <Link
//         href={piazza}
//         id="wd-course-piazza-link"
//         className={
//           pathname === piazza || pathname.startsWith(piazza + "/")
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         Piazza
//       </Link>

//       <Link
//         href={zoom}
//         id="wd-course-zoom-link"
//         className={
//           pathname === zoom || pathname.startsWith(zoom + "/")
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         Zoom
//       </Link>

//       {/* ...Piazza and Zoom, same pattern... */}
//       <Link
//         href={assignments}
//         id="wd-course-assignments-link"
//         className={
//           pathname === assignments || pathname.startsWith(assignments + "/")
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         Assignments
//       </Link>

//       {/* ...Quizzes, Grades, People, same pattern... */}

//       <Link
//         href={quizzes}
//         id="wd-course-quizzes-link"
//         className={
//           pathname === quizzes || pathname.startsWith(quizzes + "/")
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         Quizzes
//       </Link>
      
//       <Link
//         href={grades}
//         id="wd-course-grades-link"
//         className={
//           pathname === grades || pathname.startsWith(grades + "/")
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         Grades
//       </Link>

//       <Link
//         href={people}
//         id="wd-course-people-link"
//         className={
//           pathname === people || pathname.startsWith(people + "/")
//             ? "list-group-item active border-0"
//             : "list-group-item border-0 text-red-600"
//         }
//       >
//         People
//       </Link>

//       {/* AI refuses to make the the className with the if statement (unless asked ofc), is that intended*/}
//       <Link
//         href={home}
//         id="wd-course-ai-link"
//         className="list-group-item border-0 text-red-600"
//       >
//         Sample
//       </Link>
//     </div>
//   );
// }