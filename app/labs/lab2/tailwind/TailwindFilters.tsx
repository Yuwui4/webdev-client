export default function TailwindFilters() {
  // reactjs.jpg is used here so the lab runs out of the box.
  const src = "/images/reactjs.jpg";
  const personal_img = "/images/ShizukuBG4.png";
  return (
    <div>
      <h2 className="text-2xl font-bold">Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h2 className="text-2xl font-bold">Contrast!</h2>
      <div className="flex">
        <img className="contrast-20 w-1/4" src={personal_img} alt="contrast 20" />
        <img className="contrast-50 w-1/4" src={personal_img} alt="contrast 50" />
        <img className="contrast-100 w-1/4" src={personal_img} alt="contrast 100" />
        <img className="contrast-200 w-1/4" src={personal_img} alt="contrast 200" />
      </div>
      <h3 className="text-lg font-bold">Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex">
        <img
          className="grayscale w-1/4"
          src={src}
          alt="Fully grayscale"
        />
        <img
          className="grayscale-0 w-1/4"
          src={src}
          alt="Original colors"
        />
        <img
          className="brightness-50 w-1/4"
          src={src}
          alt="Brightness 50 percent"
        />
        <img
          className="brightness-150 w-1/4"
          src={src}
          alt="Brightness 150 percent"
        />
      </div>
    </div>
  );
}