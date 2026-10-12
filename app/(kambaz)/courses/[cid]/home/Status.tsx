import { FaCheckCircle, FaFileImport, FaStream, FaRegBell} from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { MdDoNotDisturbAlt, MdOutlineHome, MdAnalytics } from "react-icons/md";
import { BiSolidCommentError } from "react-icons/bi";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-1 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <IoDownloadOutline className="me-2 shrink-0 text-base" /> Import Existing Content
      </button>
      {/* ...repeat full-width bordered buttons for Import from Commons,
             Choose Home Page, and the rest... */}

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaFileImport className="me-2 shrink-0 text-base" />
        Import from Commons
      </button>

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <MdOutlineHome className="me-2 shrink-0 text-base" />
        Choose Home Page
      </button>

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaStream className="me-2 shrink-0 text-base" />
        View Course Stream
      </button>

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <BiSolidCommentError className="me-2 shrink-0 text-base" />
        New Announcement
      </button>

      <button
        type="button"
        className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <MdAnalytics className="me-2 shrink-0 text-base" />
        New Analytics
      </button>

      <button
        type="button"
        className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaRegBell className="me-2 shrink-0 text-base" />
        View Course Notifications
      </button>
      
      {/* bruh stealing my bell */}
      <button
        id="wd-ai-status"
        type="button"
        className="flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
      >
        <FaRegBell className="me-2 shrink-0 text-base" />
        Sample action
      </button>
    </div>
  );
}