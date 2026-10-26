import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";

export default async function PeopleTable({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const { users, enrollments } = db;
  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === cid,
    ),
  );
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// import { FaUserCircle } from "react-icons/fa";

// export default function PeopleTable() {
//   return (
//     <div id="wd-people-table" className="overflow-x-auto">
//       <table className="w-full border-collapse text-left text-sm">
//         <thead>
//           <tr className="border-b border-neutral-300">
//             <th className="p-2">Name</th>
//             <th className="p-2">Login ID</th>
//             <th className="p-2">Section</th>
//             <th className="p-2">Role</th>
//             <th className="p-2">Last Activity</th>
//             <th className="p-2">Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Tony Stark
//             </td>
//             <td className="p-2">001234561S</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">STUDENT</td>
//             <td className="p-2">2020-10-01</td>
//             <td className="p-2">10:21:32</td>
//           </tr>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Bruce Wayne
//             </td>
//             <td className="p-2">001234562S</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">STUDENT</td>
//             <td className="p-2">2020-11-02</td>
//             <td className="p-2">23:32:23</td>
//           </tr>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Steve Rogers
//             </td>
//             <td className="p-2">001234563S</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">STUDENT</td>
//             <td className="p-2">2020-10-02</td>
//             <td className="p-2">13:21:32</td>
//           </tr>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Natasha Romanoff
//             </td>
//             <td className="p-2">001234564S</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">TA</td>
//             <td className="p-2">2020-11-05</td>
//             <td className="p-2">11:22:33</td>
//           </tr>

//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Jane Sample
//             </td>
//             <td className="p-2">SAMPLE001</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">STUDENT</td>
//             <td className="p-2">2026-10-01</td>
//             <td className="p-2">01:12:30</td>
//           </tr>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Alex Sample
//             </td>
//             <td className="p-2">SAMPLE002</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">STUDENT</td>
//             <td className="p-2">2026-10-02</td>
//             <td className="p-2">02:34:15</td>
//           </tr>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Sam Sample
//             </td>
//             <td className="p-2">SAMPLE003</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">TA</td>
//             <td className="p-2">2026-10-03</td>
//             <td className="p-2">00:45:20</td>
//           </tr>
          
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Gooby Goober
//             </td>
//             <td className="p-2">001234565S</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">TA</td>
//             <td className="p-2">2020-11-09</td>
//             <td className="p-2">23:23:33</td>
//           </tr>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               Shawty Melody
//             </td>
//             <td className="p-2">001234567S</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">STUDENT</td>
//             <td className="p-2">2020-10-01</td>
//             <td className="p-2">02:17:16</td>
//           </tr>
//           <tr className="odd:bg-neutral-50">
//             <td className="p-2 text-nowrap">
//               <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
//               California Girl
//             </td>
//             <td className="p-2">001234568S</td>
//             <td className="p-2">S101</td>
//             <td className="p-2">STUDENT</td>
//             <td className="p-2">2020-10-11</td>
//             <td className="p-2">08:08:05</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }