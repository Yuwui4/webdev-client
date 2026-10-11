export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>

      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">
          AI Column 1
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white">
          AI Column 2
        </div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          AI Column 3 (stretches)
        </div>
      </div>
    
      {/* flex grow changes according to the set width */}
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-red wd-flex-grow-1">Column 1</div>
        <div className="wd-bg-color-blue wd-width-200px">Column 2</div>
      </div>
    </div>
  );
}