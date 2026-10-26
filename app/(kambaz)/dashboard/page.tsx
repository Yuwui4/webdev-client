import CourseCard from "./CourseCard";
import * as db from "../database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((course) => (
          <CourseCard key={course._id} {...course} />
        ))}
      </div>
    </div>
  );
}


// import CourseCard from "./CourseCard";

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses (3)</h2>
//       <hr />
//       <div
//         id="wd-dashboard-courses"
//         className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
//       >
//         <CourseCard
//           id="1234"
//           title="CS1234 React JS"
//           subtitle="Full Stack software developer"
//           image="/images/reactjs.jpg"
//         />
//         <CourseCard
//           id="2345"
//           title="CS2345 Node JS"
//           subtitle="Server side JavaScript"
//           image="/images/nodejs.jpg"
//         />
//         <CourseCard
//           id="3456"
//           title="PJ3456 Momoi Airi"
//           subtitle="Project Sekai's Idol Airi"
//           image="/images/AiriBG5.png"
//         />
//         <CourseCard
//           id="CS9999"
//           title="CS9999 Sample Course"
//           subtitle="Assistant-generated sample — not my course"
//           image="/images/reactjs.jpg"
//         />
//       </div>
//     </div>
//   );
// }