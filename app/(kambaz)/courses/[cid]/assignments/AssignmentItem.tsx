import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

export default function AssignmentItem({
  cid, aid, title, details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {

  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment
  );

  const deleteCheck = () => {
    // https://www.w3schools.com/js/js_popup.asp using confirm instead of alert
    const confirmed = confirm( `Are you sure you want to remove "${title}"?` );
    if (confirmed) {
      deleteAssignment(aid);
    }
  };

  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <div className="flex flex-1 gap-3">
          <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
        <div>
          <Link
            href={`/courses/${cid}/assignments/${aid}`}
            className="wd-assignment-link font-semibold text-neutral-900 no-underline"
          >
            {title}
          </Link>
          <div className="mt-1 text-sm text-neutral-600">{details}</div>
        </div>
      </div>

      <button
        type="button"
        onClick={deleteCheck}
        className="shrink-0 border-0 bg-transparent p-1 items-center"
        title="Delete assignment"
      >
        <FaTrash className="cursor-pointer text-red-600" />
      </button>
    </li>
  );
}