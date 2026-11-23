"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  term: string;
  description: string;
  image: string;
};

const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "",
  startDate: "",
  endDate: "",
  department: "",
  credits: 0,
  term: "",
  description: "New Description",
  image: "/images/reactjs.jpg",
};

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);

  async function loadCourses() {
    try {
      const data = await client.findMyCourses();
      setCourses(data);
    } catch {
      setCourses([]);
    }
  }

  useEffect(() => {
    // The published list lives on Express, so the first paint requests it.
    // eslint-disable-next-line react-hooks/set-state-in-effect -- load replaces the empty list
    void loadCourses();
  }, []);

  async function addCourse() {
    try {
      await client.createCourse(course);
      await loadCourses();
    } catch {
      /* companion server may be down */
    }
  }

  async function updateCourse() {
    await client.updateCourse(course);
    await loadCourses();
  }

  async function deleteCourse(courseId: string) {
    await client.deleteCourse(courseId);
    await loadCourses();
  }


  // async function loadCourses() {
  //   try {
  //     const { data } = await axios.get(COURSES_API);
  //     setCourses(data);
  //   } catch {
  //     setCourses([]);
  //   }
  // }

  // useEffect(() => {
  //   // The published list lives on Express, so the first paint requests it.
  //   // eslint-disable-next-line react-hooks/set-state-in-effect -- load replaces the empty list
  //   void loadCourses();
  // }, []);

  // async function addCourse() {
  //   try {
  //     await axios.post(`${HTTP_SERVER}/api/users/current/courses`, course);
  //     await loadCourses();
  //   } catch {
  //     /* companion server may be down */
  //   }
  // }

  // async function updateCourse() {
  //   await axios.put(`${COURSES_API}/${course._id}`, course);
  //   await loadCourses();
  // }

  // async function deleteCourse(courseId: string) {
  //   await axios.delete(`${COURSES_API}/${courseId}`);
  //   await loadCourses();
  // }

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
          onClick={addCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={updateCourse}
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
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => deleteCourse(c._id)}
          />
        ))}
      </div>
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import CourseCard from "./CourseCard";
// import {
//   emptyCourse,
//   useCoursesStore,
//   type Course,
// } from "../store/coursesStore";
// import { useEnrollmentsStore } from "../store/enrollmentsStore";
// import { useAccountContext } from "../account/AccountContext";

// export default function Dashboard() {
//   const courses = useCoursesStore((state) => state.courses);
//   const addCourse = useCoursesStore((state) => state.addCourse);
//   const updateCourse = useCoursesStore((state) => state.updateCourse);
//   const [course, setCourse] = useState<Course>(emptyCourse);
//   const { currentUser } = useAccountContext();
//   const { enrollments, enrollIntoCourse } = useEnrollmentsStore();
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   const isEnrolled = (courseId: string) =>
//     currentUser !== null &&
//     enrollments.some(
//       (e) => e.user === currentUser._id && e.course === courseId,
//     );

//   const visibleCourses =
//     currentUser && !showAllCourses
//       ? courses.filter((c) => isEnrolled(c._id))
//       : courses;

//   const addCourseAndEnroll = () => {
//     addCourse(course);
//     const newCourse = useCoursesStore.getState().courses.at(-1);
//     if (currentUser && newCourse) enrollIntoCourse(currentUser._id, newCourse._id);
//   };

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title" className="flex items-center justify-between">
//         Dashboard

//         {currentUser && (
//           <button type="button" id="wd-enrollments-toggle" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
//             onClick={() => setShowAllCourses(!showAllCourses)} >
//             Enrollments
//           </button>
//         )}

//       </h1>
//       <hr />

//       <h5 className="flex flex-wrap items-center gap-2">
//         New Course
//         <button type="button" id="wd-add-new-course-click" className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
//           onClick={addCourseAndEnroll} >          Add        </button>
//         <button type="button" id="wd-update-course-click" className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
//           onClick={() => updateCourse(course)} >  Update     </button>
//       </h5>

//       <input value={course.name} id="wd-course-name" className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
//         onChange={(e) => setCourse({ ...course, name: e.target.value })} />
//       <textarea value={course.description} rows={3} id="wd-course-description" className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
//         onChange={(e) =>
//           setCourse({ ...course, description: e.target.value })
//         } />

//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({visibleCourses.length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" >
//         {visibleCourses.map((c) => (
//           <CourseCard key={c._id}
//             course={c}
//             onEdit={() => setCourse(c)} />
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import CourseCard from "./CourseCard";
// import {
//   emptyCourse,
//   useCoursesStore,
//   type Course,
// } from "../store/coursesStore";
// import * as db from "../database";
// import { useAccountContext } from "../account/AccountContext";

// export default function Dashboard() {
//   const courses = useCoursesStore((state) => state.courses);
//   const addCourse = useCoursesStore((state) => state.addCourse);
//   const updateCourse = useCoursesStore((state) => state.updateCourse);
//   const [course, setCourse] = useState<Course>(emptyCourse);
//   const { currentUser } = useAccountContext();
//   const visibleCourses = currentUser
//     ? courses.filter((c) =>
//         db.enrollments.some((enrollment) =>
//             enrollment.user === currentUser._id && enrollment.course === c._id,),)
//     : courses;

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h5 className="flex flex-wrap items-center gap-2">
//         New Course
//         <button
//           type="button"
//           className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
//           id="wd-add-new-course-click"
//           onClick={() => addCourse(course)}
//         >
//           Add
//         </button>
//         <button
//           type="button"
//           className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
//           id="wd-update-course-click"
//           onClick={() => updateCourse(course)}
//         >
//           Update
//         </button>
//       </h5>
//       <input
//         className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
//         value={course.name}
//         onChange={(e) => setCourse({ ...course, name: e.target.value })}
//         id="wd-course-name"
//       />
//       <textarea
//         className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
//         rows={3}
//         value={course.description}
//         onChange={(e) =>
//           setCourse({ ...course, description: e.target.value })
//         }
//         id="wd-course-description"
//       />
//       {/* ignoring ai segement as it will do exactly the same thing as what is asked of me */}
//       <input
//         type="number"
//         className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
//         value={course.number}
//         onChange={(e) => setCourse({ ...course, number: e.target.value })}
//         id="wd-course-number"
//       />
//       <input
//         type="date"
//         className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
//         value={course.startDate}
//         onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
//         id="wd-course-date"
//       />
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
//         {visibleCourses.map((c) => (
//           <CourseCard key={c._id} course={c}
//             onEdit={() => setCourse(c)} />
//         ))}
//       </div>
//     </div>
//   );
// }

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