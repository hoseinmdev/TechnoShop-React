import Header from "components/Header";
import Footer from "../components/Footer";
import { useLayoutEffect } from "react";
const SiteLayout = ({ children }) => {
  useLayoutEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 text-black dark:bg-gray-800 lg:gap-6">
      <Header />
      <div className="fadeShow w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default SiteLayout;
