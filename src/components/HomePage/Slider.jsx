import phoneHero from "../../assets/images/xiaomi12tPro.png";
import consoleHero from "../../assets/images/Playstation-5.webp";
import headphonesHero from "../../assets/images/airpod-pros-removebg-preview.png";
import watchHero from "../../assets/images/appleSeries8.png";
import tabletHero from "../../assets/images/GalaxyTabS8.webp";
import speakerHero from "../../assets/images/jbpFlip6.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "../common/Skeleton";

const slidesData = [
  {
    id: 1,
    link: "/categories/phones",
    eyebrow: "What everyone's talking about",
    title: "Best-selling phones",
    cta: "Shop phones",
    image: phoneHero,
    gradient: "from-blue-600 to-blue-900",
  },
  {
    id: 2,
    link: "/categories/consoles",
    eyebrow: "New generation",
    title: "Level up your setup",
    cta: "Shop gaming",
    image: consoleHero,
    gradient: "from-violet-700 to-slate-900",
  },
  {
    id: 3,
    link: "/categories/headphones",
    eyebrow: "Wireless freedom",
    title: "Sound without limits",
    cta: "Shop headphones",
    image: headphonesHero,
    gradient: "from-teal-600 to-emerald-900",
  },
  {
    id: 4,
    link: "/categories/digitalWatches",
    eyebrow: "Stay connected",
    title: "Track every moment",
    cta: "Shop smartwatches",
    image: watchHero,
    gradient: "from-slate-700 to-slate-900",
  },
  {
    id: 5,
    link: "/categories/tablets",
    eyebrow: "Create anywhere",
    title: "Work and play on the go",
    cta: "Shop tablets",
    image: tabletHero,
    gradient: "from-rose-500 to-rose-900",
  },
  {
    id: 6,
    link: "/categories/speakers",
    eyebrow: "Turn it up",
    title: "Bring the party",
    cta: "Shop speakers",
    image: speakerHero,
    gradient: "from-orange-500 to-amber-800",
  },
];

const Slider = () => {
  const [slides, setSlides] = useState(0);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(1);
  const timerTimeout = useRef();
  const [touchPosition, setTouchPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setSlides(slidesData), 1500);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const autoSlideChanger = () => {
      clearTimeout(timerTimeout.current);
      const timeout = setTimeout(nextSlide, 10000);
      timerTimeout.current = timeout;
    };
    autoSlideChanger();

    return function cleanup() {
      clearTimeout(timerTimeout.current);
    };
  }, [index]);

  const fadeShowSlide = (index) => {
    setFade(0.4);
    setTimeout(() => {
      setIndex(index);
      setFade(1);
    }, 200);
  };
  const onTouchStartHandler = (e) => {
    setTouchPosition(e.touches[0].clientX);
  };
  const onTouchMoveHandler = (e) => {
    if (touchPosition === null) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;
    if (diff > 5) backSlide();
    if (diff < -5) nextSlide();
    setTouchPosition(null);
  };
  const nextSlide = () => {
    if (index !== slides.length - 1) fadeShowSlide(index + 1);
    else fadeShowSlide(0);
  };
  const backSlide = () => {
    if (index !== 0) fadeShowSlide(index - 1);
    else fadeShowSlide(slides.length - 1);
  };
  const renderSlider = () => {
    if (!slides) {
      return <Skeleton width={"100%"} height={"17rem"} radius={"15px"} />;
    }
    const slide = slides[index];
    return (
      <div
        className="relative ml-auto mr-auto flex h-56 w-full max-w-[2000px] items-center justify-between overflow-hidden shadow-2xl lg:h-[20rem] 2xl:h-[27rem]"
        onTouchStart={(e) => onTouchStartHandler(e)}
        onTouchMove={(e) => onTouchMoveHandler(e)}
      >
        <button
          className="absolute left-0 z-20 hidden h-full w-16 items-center justify-center bg-slate-900/20 text-3xl text-white lg:flex lg:cursor-pointer lg:hover:w-20 lg:hover:bg-slate-900/40"
          onClick={backSlide}
        >
          <IoIosArrowBack />
        </button>
        <Link
          to={slide.link}
          className={`flex h-full w-full items-center justify-between gap-4 bg-gradient-to-r ${slide.gradient} px-8 lg:px-24`}
          style={{ opacity: fade }}
        >
          <div className="flex max-w-[60%] flex-col items-start gap-2 text-white lg:gap-4">
            <span className="text-xs uppercase tracking-widest text-white/70 lg:text-sm">
              {slide.eyebrow}
            </span>
            <h2 className="text-2xl font-extrabold leading-tight lg:text-5xl">
              {slide.title}
            </h2>
            <span className="mt-1 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 lg:mt-2 lg:text-base">
              {slide.cta}
              <IoIosArrowForward />
            </span>
          </div>
          <img
            src={slide.image}
            alt={slide.title}
            className="sliderAnimation h-4/5 max-w-[38%] object-contain drop-shadow-2xl"
          />
        </Link>
        <button
          className="absolute right-0 z-20 hidden h-full w-16 items-center justify-center bg-slate-900/20 text-3xl text-white lg:flex lg:cursor-pointer lg:hover:w-20 lg:hover:bg-slate-900/40"
          onClick={nextSlide}
        >
          <IoIosArrowForward />
        </button>
        <div className="absolute bottom-3 left-0 flex w-full items-center justify-center gap-3 p-2">
          {slides.map((e, i) => {
            return (
              <div
                key={e.id}
                className={`h-2 w-2 rounded-full bg-white shadow-xl lg:cursor-pointer ${
                  i === index ? "w-6 rounded-lg opacity-100" : "opacity-50"
                }`}
                onClick={() => fadeShowSlide(i)}
              ></div>
            );
          })}
        </div>
      </div>
    );
  };
  return renderSlider();
};

export default Slider;
