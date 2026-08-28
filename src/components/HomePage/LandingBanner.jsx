import consoleHero from "../../assets/images/Playstation-5.webp";
import speakerHero from "../../assets/images/Mingo-Party-Box.png";
import phoneHero from "../../assets/images/galaxyS22Ultra.png";
import { Link } from "react-router-dom";

const banners = [
  {
    to: "/categories/consoles",
    eyebrow: "Winner takes all",
    title: "Consoles worth the hype",
    cta: "Choose yours",
    image: consoleHero,
    gradient: "from-violet-700 to-fuchsia-900",
  },
  {
    to: "/categories/speakers",
    eyebrow: "All that's left is the sound",
    title: "Speakers for every room",
    cta: "Shop",
    image: speakerHero,
    gradient: "from-slate-900 to-indigo-900",
  },
];

const Banner = ({ banner, className = "" }) => (
  <Link
    to={banner.to}
    className={`flex h-40 items-center justify-between gap-3 overflow-hidden rounded-xl bg-gradient-to-r ${banner.gradient} px-6 lg:h-52 lg:px-10 ${className}`}
  >
    <div className="flex flex-col items-start gap-2 text-white">
      <span className="text-[0.7rem] uppercase tracking-widest text-white/70 lg:text-xs">
        {banner.eyebrow}
      </span>
      <h3 className="text-lg font-extrabold leading-tight lg:text-2xl">
        {banner.title}
      </h3>
      <span className="mt-1 flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900 lg:text-sm">
        {banner.cta}
      </span>
    </div>
    <img
      src={banner.image}
      alt={banner.title}
      className="h-4/5 max-w-[40%] object-contain drop-shadow-2xl"
    />
  </Link>
);

const LandingBanner = () => {
  return (
    <div className="ml-auto mr-auto flex w-full max-w-[2000px] flex-col items-center justify-center gap-4 lg:flex-row">
      {banners.map((banner) => (
        <Banner
          key={banner.to}
          banner={banner}
          className="hidden w-full lg:flex"
        />
      ))}
      <Banner
        banner={{
          to: "/categories/phones",
          eyebrow: "Best sellers",
          title: "The phones everyone wants",
          cta: "Shop phones",
          image: phoneHero,
          gradient: "from-blue-600 to-indigo-900",
        }}
        className="w-11/12 lg:hidden"
      />
    </div>
  );
};

export default LandingBanner;
