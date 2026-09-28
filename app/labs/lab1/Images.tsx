export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading a personal local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/EnaBG2.png"
        height="300px"
        alt="Ena from Project Sekai, a relatable card art"
      />
      <br />
      Loading another image from the internet (AI):
      <br />
      <img
        id="wd-ai-image"
        src="https://assets.science.nasa.gov/dynamicimage/assets/science/astro/universe/2023/09/Black_Hole_Face_on_View-1.png?crop=faces%2Cfocalpoint&fit=clip&h=1599&w=2188"
        width="200px"
        alt="NASA black hole illustration"
      />
    </div>
  );
}