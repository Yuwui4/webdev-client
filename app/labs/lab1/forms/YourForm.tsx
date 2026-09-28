export default function YourForm() {
  return (
    <>
    <form id="wd-your-form">
      <h4>Student Profile!</h4>

      <h5>Basic Info</h5>
      <label htmlFor="wd-textfield-your-firstname">First name:</label>
      <input type="text" placeholder="Yui" title="Your first name!" id="wd-textfield-your-firstname" />
      <label htmlFor="wd-textfield-your-lastname">Last name:</label>
      <input type="text" placeholder="Fang" title="Your last name!" id="wd-textfield-your-lastname"/>
      <br />
      <label htmlFor="wd-textfield-your-password">Password:</label>
      <input type="password" placeholder="2339owo!" title="Enter password!" id="wd-textfield-your-password"/>
      <br />

      <h5>Short Bio (Why this course?)</h5>
      <label>Type here:</label>
      <br />
      <textarea
        id="wd-textarea"
        cols={45}
        rows={10}
        defaultValue="I hope to relearn some of the web dev stuff I've forgotten since sophomore year! 
        The website we used to use to deploy our sites is also now pay to use, so I'm hoping to find new alternatives that is popular right now. 
        Of course I'm also taking this course cause I need to. 
        However! Compared to the other courses, this looked more fun and more like the original Game Engines class I was gonna take that got cancelled."
      />
      <br />

      <h5>What is your current position?</h5>
      <label>Class Standing:</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-freshman" />
      <label htmlFor="wd-radio-freshman">Freshman</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-sophomore" />
      <label htmlFor="wd-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-junior" />
      <label htmlFor="wd-radio-junior">Junior</label>
      <br />
      <input type="radio" name="radio-class" id="wd-radio-senior" defaultChecked/>
      <label htmlFor="wd-radio-senior">Senior</label>
      <br />
      <label>Employment Status:</label>
      <br />
      <input type="radio" name="radio-employ" id="wd-radio-employed" />
      <label htmlFor="wd-radio-employed">Employed</label>
      <br />
      <input type="radio" name="radio-employ" id="wd-radio-unemployed" />
      <label htmlFor="wd-radio-unemployed">Unemployed</label>
      <br />
      <input type="radio" name="radio-employ" id="wd-radio-self" defaultChecked/>
      <label htmlFor="wd-radio-self">Freelancer/Self-Employed</label>
      <br />
      <input type="radio" name="radio-employ" id="wd-radio-other" />
      <label htmlFor="wd-radio-other">Other</label>

      <h5>Interests</h5>
      <label>What do you do in your freetime:</label>
      <br />
      <input type="checkbox" name="check-fun" id="wd-chkbox-game" defaultChecked/>
      <label htmlFor="wd-chkbox-game">Video Games</label>
      <br />
      <input type="checkbox" name="check-fun" id="wd-chkbox-cook" defaultChecked/>
      <label htmlFor="wd-chkbox-cook">Cooking</label>
      <br />
      <input type="checkbox" name="check-fun" id="wd-chkbox-sport" />
      <label htmlFor="wd-chkbox-sport">Sports</label>
      <br />
      <input type="checkbox" name="check-fun" id="wd-chkbox-draw" defaultChecked/>
      <label htmlFor="wd-chkbox-draw">Drawing</label>
      <br />
      <input type="checkbox" name="check-fun" id="wd-chkbox-dance" defaultChecked/>
      <label htmlFor="wd-chkbox-dance">Dancing</label>

      <h4>Majors and Plans of Growth</h4>
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-major">Current Major: </label>
      <br />
      <select id="wd-select-one-major" defaultValue="COMGAME">
        <option value="COMGAME">Comp Sci & Games</option>
        <option value="ANIM">Animation</option>
        <option value="COMPSCI">Comp Sci</option>
        <option value="THEA">Theatre</option>
      </select>
      <h5>Select many</h5>
      <label htmlFor="wd-select-many-growth">Plans of Growth: </label>
      <br />
      <select multiple id="wd-select-many-growth" defaultValue={["ART", "UI"]}
      >
        <option value="BUS">Business</option>
        <option value="HARD">Computer Hardware</option>
        <option value="ART">Art fundmentals</option>
        <option value="UI">UI & UX Design</option>
      </select>

      <h4>Misc Info</h4>
      <label htmlFor="wd-textfields-your-email">School email: </label>
      <input type="email" placeholder="fang.zhu@northeastern.edu" id="wd-textfields-your-email" />
      <br />
      <label htmlFor="wd-textfields-gradyear">Expected Grad Year: </label>
      <input type="number" defaultValue="2027" placeholder="2027" min={2027} max={3000} id="wd-textfields-gradyear" />
      <br />
      <label htmlFor="wd-textfields-your-dob">Birthday?!: </label>
      <input
        type="date"
        defaultValue="2005-03-08"
        min="1909-08-21"
        max="2025-12-31"
        id="wd-textfields-your-dob"
      />
      <br />
      <label htmlFor="wd-textfields-excited">How excited for this course (0-10): </label>
      <input
        type="range"
        defaultValue="7"
        min="0"
        max="10"
        id="wd-textfields-excited"
      />
      <br />

      <h4>Complete Form</h4>
      <button id="wd-yourform-button-save" type="submit">
        Save
      </button>
      <button id="wd-yourform-button-cancel" type="button">
        Cancel
      </button>


      {/* AI Segment */}

      <h4>Student Profile! - AI (with my info)</h4>

      <h5>Basic Info</h5>

      <label htmlFor="wd-sample-firstname">First name:</label>
      <input
        type="text"
        placeholder="Yui"
        title="Your first name!"
        id="wd-sample-firstname"
      />

      <label htmlFor="wd-sample-lastname">Last name:</label>
      <input
        type="text"
        placeholder="Fang"
        title="Your last name!"
        id="wd-sample-lastname"
      />

      <br />

      <label htmlFor="wd-sample-password">Password:</label>
      <input
        type="password"
        placeholder="very silly password here"
        title="Enter password!"
        id="wd-sample-password"
      />

      <br />

      <h5>Short Bio</h5>

      <label htmlFor="wd-sample-bio">Type here:</label>
      <br />

      <textarea
        id="wd-sample-bio"
        cols={45}
        rows={10}
        defaultValue="I hope to relearn some of the web dev stuff I've forgotten since sophomore year! 
        The website we used to use to deploy our sites is also now pay to use, so I'm hoping to find new alternatives that is popular right now. 
        Of course I'm also taking this course cause I need to. 
        However! Compared to the other courses, this looked more fun and more like the original Game Engines class I was gonna take that got cancelled."
      />

      <br />

      <h5>Class Standing</h5>

      <label>Current class standing:</label>
      <br />

      <input
        type="radio"
        name="sample-class"
        id="wd-sample-freshman"
      />
      <label htmlFor="wd-sample-freshman">Freshman</label>
      <br />

      <input
        type="radio"
        name="sample-class"
        id="wd-sample-sophomore"
      />
      <label htmlFor="wd-sample-sophomore">Sophomore</label>
      <br />

      <input
        type="radio"
        name="sample-class"
        id="wd-sample-junior"
      />
      <label htmlFor="wd-sample-junior">Junior</label>
      <br />

      <input
        type="radio"
        name="sample-class"
        id="wd-sample-senior"
        defaultChecked
      />
      <label htmlFor="wd-sample-senior">Senior</label>

      <br />

      <h5>Enrollment Status</h5>

      <label>Enrollment:</label>
      <br />

      <input
        type="radio"
        name="sample-enrollment"
        id="wd-sample-fulltime"
      />
      <label htmlFor="wd-sample-fulltime">Full-time</label>
      <br />

      <input
        type="radio"
        name="sample-enrollment"
        id="wd-sample-parttime"
        defaultChecked
      />
      <label htmlFor="wd-sample-parttime">Part-time</label>

      <h5>Interests</h5>

      <label>What do you enjoy?</label>
      <br />

      <input
        type="checkbox"
        name="sample-interests"
        id="wd-sample-games"
        defaultChecked
      />
      <label htmlFor="wd-sample-games">Video Games</label>
      <br />

      <input
        type="checkbox"
        name="sample-interests"
        id="wd-sample-coding"
        defaultChecked
      />
      <label htmlFor="wd-sample-coding">Programming</label>
      <br />

      <input
        type="checkbox"
        name="sample-interests"
        id="wd-sample-music"
        defaultChecked
      />
      <label htmlFor="wd-sample-music">Music</label>
      <br />

      <input
        type="checkbox"
        name="sample-interests"
        id="wd-sample-reading"
        defaultChecked
      />
      <label htmlFor="wd-sample-reading">Reading</label>

      <h4>Major and Plans for Growth</h4>

      <h5>Select one</h5>

      <label htmlFor="wd-sample-major">Current Major:</label>
      <br />

      <select id="wd-sample-major" defaultValue="GAME">
        <option value="COMPSCI">Computer Science</option>
        <option value="GAME">Game Development</option>
        <option value="ANIM">Animation</option>
        <option value="DESIGN">Design</option>
      </select>

      <h5>Select many</h5>

      <label htmlFor="wd-sample-growth">Plans of Growth:</label>
      <br />

      <select
        multiple
        id="wd-sample-growth"
        defaultValue={["GAME", "UI"]}
      >
        <option value="WEB">Web Development</option>
        <option value="UI">UI & UX Design</option>
        <option value="GAME">Game Development</option>
        <option value="AI">Artificial Intelligence</option>
        <option value="DATA">Data Science</option>
      </select>

      <h4>Misc Info</h4>

      <label htmlFor="wd-sample-email">School email:</label>
      <input
        type="email"
        placeholder="fang.zhu@northeastern.edu"
        id="wd-sample-email"
      />

      <br />

      <label htmlFor="wd-sample-gradyear">Expected Grad Year:</label>
      <input
        type="number"
        defaultValue="2027"
        placeholder="2027"
        min={2026}
        max={2100}
        id="wd-sample-gradyear"
      />

      <br />

      <label htmlFor="wd-sample-dob">Birthday:</label>
      <input
        type="date"
        defaultValue="2005-03-08"
        min="1900-01-01"
        max="2026-12-31"
        id="wd-sample-dob"
      />

      <br />

      <label htmlFor="wd-sample-excitement">
        How excited for this course (0-10):
      </label>

      <input
        type="range"
        defaultValue="7"
        min="0"
        max="10"
        id="wd-sample-excitement"
      />

      <br />

      <h4>Complete Form</h4>

      <button
        id="wd-sample-button-save"
        type="submit"
      >
        Save
      </button>

      <button
        id="wd-sample-button-cancel"
        type="button"
      >
        Cancel
      </button>

    </form>
    </>
  );
}