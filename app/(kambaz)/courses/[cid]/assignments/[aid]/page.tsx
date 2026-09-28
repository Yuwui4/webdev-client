import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />

      <br />
      <br />

      <textarea 
      id="wd-description"
      defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
      />

      <br />

      <table>
        <tbody>
          <tr>
            {/* V-align top is so if the textbox to the side gets bigger, this will stay at the top (no need for the select ones) */}
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          {/* Complete on your own — see checklist below */}

          <tr>
            <td align="right">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              {/* no examples? */}
              <select id="wd-display-grade-as" defaultValue="PERCENT">
                <option value="PERCENT">Percentage</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              {/* no examples again? */}
              <select id="wd-submission-type" defaultValue="ONLINE">
                <option value="ONLINE">Online</option>
              </select>

              <br />
              <br />

              <label>Online Entry Options</label>
              <br />

              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
              <br />

              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
              <br />

              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
              <br />

              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
              <br />

              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label>Assign</label>
            </td>
            <td>
              {/* no examples again? */}
              <label htmlFor="wd-assign-to">Assign To</label>
              {/* <select multiple id="wd-assign-to" defaultValue="EVERYONE">
                <option value="EVERYONE">Everyone</option>
              </select> */}
              <br />
              <input id="wd-assign-to" defaultValue="Everyone" />

              <br />
              <br />

              <label htmlFor="wd-due-date">Due</label>
              <br />
              <input defaultValue="2026-09-30" id="wd-due-date" type="date" />

              <br />
              <br />
              
              {/* table within table baby */}
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td>
                      <label htmlFor="wd-available-until">Until</label>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <input
                        id="wd-available-from"
                        type="date"
                        defaultValue="2026-09-01"
                      />
                    </td>
                    <td>
                      <input
                        id="wd-available-until"
                        type="date"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              
            </td>
          </tr>

          {/* visually demo shows button... not sure how to make button do specific link? */}
          <tr>
            <td>
              <br />
              <Link id="wd-cancel" href={`/courses/${cid}/assignments`}>Cancel</Link>
              {" "}
              <Link id="wd-save" href={`/courses/${cid}/assignments`}>Save</Link>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}