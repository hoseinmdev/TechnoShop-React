import "react-toastify/dist/ReactToastify.css";
import signUpImage from "../assets/images/signUpImage.webp";
import SignUpForm from "components/SignUpPage/SignUpForm";
const SginUpPage = () => {
  return (
    <div className="fadeShow relative flex h-screen w-full">
      <img
        src={signUpImage}
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        alt=""
      />
      <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-white pt-10 dark:bg-gray-800 lg:w-auto lg:justify-center lg:bg-transparent lg:px-20 lg:pt-0 lg:dark:bg-transparent">
        <p className="font-EstedadFont text-xl text-gray-700 dark:text-white/80 lg:hidden">
          به تکنو شاپ خوش اومدی !
        </p>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SginUpPage;
