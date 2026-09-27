export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
      <p id="wd-p-your-1">
        I was born and raised partially in China, then I moved to the United States when I was 9!
        I didn't speak any English before landing here, and I think I managed to learn it well.
        It was mostly through Youtubers and playing English video games. Thankfully I'm pretty
        comfortable with both of my cultures, but I do have to say Chinese food is leagues better...
      </p>
      <p id="wd-p-your-2">
        I hope to relearn some of the web dev stuff I've forgotten since sophomore year! The website
        we used to use to deploy our sites is also now pay to use, so I'm hoping to find new alternatives
        that is popular right now. Of course I'm also taking this course cause I need to. However! Compared to
        the other courses, this looked more fun and more like the original Game Engines class I was gonna take
        that got cancelled.
      </p>
      <p id="wd-ai-p">
        The &lt;p&gt; tag groups text into separate paragraphs, which browsers
        normally display with vertical spacing between them. This makes longer
        sections of text easier to read and visually distinguish.
      </p>
    </div>
  );
}