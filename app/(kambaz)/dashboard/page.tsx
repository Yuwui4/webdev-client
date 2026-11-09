"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import * as db from "../database";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();
  const visibleCourses = currentUser
    ? courses.filter((c) =>
        db.enrollments.some((enrollment) =>
            enrollment.user === currentUser._id && enrollment.course === c._id,),)
    : courses;

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={() => addCourse(course)}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={() => updateCourse(course)}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      {/* ignoring ai segement as it will do exactly the same thing as what is asked of me */}
      <input
        type="number"
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {visibleCourses.map((c) => (
          <CourseCard key={c._id} course={c}
            onEdit={() => setCourse(c)} />
        ))}
      </div>
    </div>
  );
}

// import CourseCard from "./CourseCard";
// import * as db from "../database";

// export default function Dashboard() {
//   const courses = db.courses;
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div
//         id="wd-dashboard-courses"
//         className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
//       >
//         {courses.map((course) => (
//           <CourseCard key={course._id} {...course} />
//         ))}
//       </div>
//     </div>
//   );
// }


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