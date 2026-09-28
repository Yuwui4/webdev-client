import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>

      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong>{" "}children — headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>

      <HighlightedBox
        backgroundColor="#f5ebe9"
        borderColor="#f1a59b"
        borderWidth={8}
        borderRadius={0}
      >
        <h4>Yui Fang</h4>

        <p>
            Unordered List of Goals this Course:
        </p>
        <ul>
          <li>Remember how to web dev</li>
          <li>Make a project I'm proud of</li>
          <li>Get back into front end coding</li>
        </ul>
      </HighlightedBox>

      <HighlightedBox
      backgroundColor="honeydew"
      borderColor="seagreen"
      >
      <h4>Sample nested content</h4>
      <ul>
        <li>p</li>
        <li>table</li>
        <li>form</li>
      </ul>
      </HighlightedBox>

    </div>
  );
}