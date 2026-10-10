export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      {/* foreground part doesn't work because everything thing is nestled in lab 2?... */}
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-black">
        The text in this paragraph is black but{" "}
        <span className="wd-fg-color-red">this text is red</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This paragraph demonstrates blue foreground text, while{" "}
        <span className="wd-fg-color-black">
            this nested span uses black text.
        </span>
      </p>
    </div>
  );
}