import { Link } from "react-router-dom";

const SubmitButton = () => {
  return (
    <Link to="/sginUp">
      <div className="flex items-center justify-center">
        <button className="rounded-lg border border-violet-600 px-4 py-2 font-semibold dark:border-2 dark:border-violet-500">
          Login | Sign up
        </button>
      </div>
    </Link>
  );
};

export default SubmitButton;
