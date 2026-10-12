import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex gap-4">
      <div id="wd-kambaz-account" className="hidden w-[140px] shrink-0 md:block">
        <AccountNavigation />
      </div>

      <div className="min-w-0 flex-1">
        {children}
      </div>

    </div>
  );
}

// import { ReactNode } from "react";
// import CourseNavigation from "./Navigation";

// export default async function CoursesLayout({
//   children,
//   params,
// }: Readonly<{
//   children: ReactNode;
//   params: Promise<{ cid: string }>;
// }>) {
//   const { cid } = await params;
//   return (
//     <div id="wd-courses">
//       <h2>Courses {cid}</h2>
//       <hr />
//       <div className="flex gap-4">
//         <div className="hidden w-[140px] shrink-0 md:block">
//           <CourseNavigation cid={cid} />
//         </div>
//         <div className="min-w-0 flex-1">{children}</div>
//       </div>
//     </div>
//   );
// }