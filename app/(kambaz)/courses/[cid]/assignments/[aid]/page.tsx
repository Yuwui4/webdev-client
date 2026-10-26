import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;

  const inputFormat =
  "w-full border rounded-sm border-gray-400 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm";
  const labelFormat = "text-me font-medium text-gray-800 text-right w-40 shrink-0";
  const basicRowFormat = "flex items-center gap-2 flex-grow";

  const assignment = db.assignments.find((a) => a._id === aid);

  return (
    <div id="wd-assignments-editor" className="p-6">
      <form className="space-y-5">

        {/* ------------------------------------------------------- Assign Name */}

        <div className="space-y-2">
          <label htmlFor="wd-name" className={labelFormat}>
            Assignment Name
          </label>
          <input
            id="wd-name"
            defaultValue={assignment?.title ?? ""}
            className={inputFormat}
          />
          <p className="text-sm text-gray-500">Assignment id: {aid}</p>
        </div>

        {/* ------------------------------------------------------- Desc */}

        <div className="space-y-2">
          <label htmlFor="wd-description" className={labelFormat}>
            Description
          </label>
          <textarea
            id="wd-description"
            rows={6}
            defaultValue={assignment?.description ?? ""}
            className={inputFormat}
          />
        </div>

        {/* ------------------------------------------------------- Points */}

        <div className={basicRowFormat}>
          <label htmlFor="wd-points" className={labelFormat}>
            Points
          </label>
          <input
            id="wd-points"
            type="number"
            defaultValue={assignment?.points ?? 100}
            className={inputFormat}
          />
        </div>

        {/* ------------------------------------------------------- Assign Group */}

        <div className={basicRowFormat}>
          <label htmlFor="wd-group" className={labelFormat}>
            Assignment Group
          </label>
          <select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            className={inputFormat}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        {/* ------------------------------------------------------- Grade */}

        <div className={basicRowFormat}>
          <label htmlFor="wd-display-grade-as" className={labelFormat}>
            Display Grade as
          </label>
          <select
            id="wd-display-grade-as"
            defaultValue="PERCENT"
            className={inputFormat}
          >
            <option value="PERCENT">Percentage</option>
          </select>
        </div>

        {/* ------------------------------------------------------- Submisison */}

        <div className="flex gap-2 flex-grow">
          <label htmlFor="wd-submission-type" className={labelFormat}>
            Submission Type
          </label>

          <div className="flex-grow space-y-4 border rounded-sm border-gray-400 p-4">
            <select
              id="wd-submission-type"
              defaultValue="ONLINE"
              className={inputFormat}
            >
              <option value="ONLINE">Online</option>
            </select>

            <fieldset className="space-y-3 border-0 p-0">
              <legend className="text-me font-bold text-gray-800">
                Online Entry Options
              </legend>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  className="h-4 w-4 accent-blue-500"
                />
                <label htmlFor="wd-text-entry" className="text-sm">
                  Text Entry
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-website-url"
                  defaultChecked
                  className="h-4 w-4 accent-blue-500"
                />
                <label htmlFor="wd-website-url" className="text-sm">
                  Website URL
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-media-recordings"
                  className="h-4 w-4 accent-blue-500"
                />
                <label htmlFor="wd-media-recordings" className="text-sm">
                  Media Recordings
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-student-annotation"
                  className="h-4 w-4 accent-blue-500"
                />
                <label
                  htmlFor="wd-student-annotation"
                  className="text-sm"
                >
                  Student Annotation
                </label>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  className="h-4 w-4 accent-blue-500"
                />
                <label htmlFor="wd-file-upload" className="text-sm">
                  File Uploads
                </label>
              </div>
            </fieldset>
          </div>
        </div>

        {/* ------------------------------------------------------- Assign */}

        <div className="flex gap-2 flex-grow">
          <label htmlFor="wd-assign-to" className={labelFormat}>
            Assign
          </label>

          <div className="flex-grow space-y-4 border rounded-t-sm border-gray-400 p-4">
            <div className="space-y-2">
              <label htmlFor="wd-assign-to" className={labelFormat}>
                Assign to
              </label>
              <input
                id="wd-assign-to"
                defaultValue="Everyone"
                className={inputFormat}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="wd-due-date" className={labelFormat}>
                Due
              </label>
              <input
                id="wd-due-date"
                type="date"
                defaultValue={assignment?.due ?? "2026-09-30"}
                className={inputFormat}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="wd-available-from" className={labelFormat}>
                  Available from
                </label>
                <input
                  id="wd-available-from"
                  type="date"
                  defaultValue={assignment?.available ?? "2026-09-01"}
                  className={inputFormat}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="wd-available-until" className={labelFormat}>
                  Until
                </label>
                <input
                  id="wd-available-until"
                  type="date"
                  className={inputFormat}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- AI */}

        <div className="space-y-2">
          <label htmlFor="wd-ai-editor-notes" className={labelFormat}>
            Sample notes
          </label>
          <textarea
            id="wd-ai-editor-notes"
            rows={4}
            placeholder="Enter sample notes..."
            className={inputFormat}
          />
        </div>

        {/* ------------------------------------------------------- Buttons */}

        <div className="flex justify-end gap-3 border-t border-gray-200 pt-4">
          <Link
            id="wd-cancel"
            href={`/courses/${cid}/assignments`}
            className="no-underline rounded-sm bg-gray-100 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </Link>

          <Link
            id="wd-save"
            href={`/courses/${cid}/assignments`}
            className="no-underline rounded-sm bg-red-700 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
          >
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}