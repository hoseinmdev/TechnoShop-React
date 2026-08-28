import { toast } from "react-toastify";
import * as Yup from "yup";
import signUpImage from "../assets/images/signUpImage.webp";
import FormInput from "../components/common/FormInput";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const yup = Yup.string();
  const validationSchema = Yup.object({
    email: yup.email("Invalid email").required("Email is required"),
    password: yup
      .min(6, "Must be at least 6 characters")
      .required("Password is required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Password confirmation is required"),
  });
  const onSubmit = (values, helpers) => {
    const user = JSON.parse(localStorage.getItem("userInformation"));
    if (!user || user.email !== values.email) {
      toast.error("No account found with this email", { theme: "colored" });
      return;
    }
    localStorage.setItem(
      "userInformation",
      JSON.stringify({ ...user, password: values.password }),
    );
    toast.success("Password changed successfully", { theme: "colored" });
    helpers.resetForm();
    navigate("/login", { replace: true });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const renderForgotPasswordForm = () => {
    return (
      <form
        className="flex w-11/12 flex-col items-start justify-center gap-4 rounded-lg p-4 lg:w-[25rem] lg:rounded-3xl lg:border lg:border-white/40 lg:bg-white/30 lg:p-10 lg:shadow-2xl lg:backdrop-blur-xl lg:dark:border-white/10 lg:dark:bg-gray-900/40"
        onSubmit={formik.handleSubmit}
      >
        <p className="mb-5 hidden w-full border-b border-b-violet-200 p-4 text-left text-xl font-bold text-gray-700 dark:text-white/80 lg:block lg:border-b-white/50 lg:text-gray-800 lg:dark:text-white">
          Reset password
        </p>
        <FormInput
          label="Email address"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          type="email"
        />
        <FormInput
          label="Enter a new password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
          type="password"
        />
        <FormInput
          label="Confirm password"
          name="passwordConfirmation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirmation}
          error={formik.errors.passwordConfirmation}
          touched={formik.touched.passwordConfirmation}
          type="password"
        />
        <button
          disabled={!formik.isValid}
          style={{ opacity: !formik.isValid && 0.6 }}
          type="submit"
          className="mt-8 w-full rounded-xl bg-violet-700 px-4 py-3 text-lg text-white shadow-[1px_10px_14px_rgba(241,231,254,1)] outline-none hover:bg-violet-800 dark:shadow-none dark:outline dark:outline-violet-400 lg:shadow-none"
        >
          Confirm
        </button>
      </form>
    );
  };
  return (
    <div className="fadeShow relative flex h-screen w-full">
      <img
        src={signUpImage}
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        alt=""
      />
      <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-white pt-10 dark:bg-gray-800 lg:w-auto lg:justify-center lg:bg-transparent lg:px-20 lg:pt-0 lg:dark:bg-transparent">
        <p className="text-xl font-bold text-gray-700 dark:text-white/80 lg:hidden">
          Reset password
        </p>
        {renderForgotPasswordForm()}
      </div>
    </div>
  );
};

export default ForgotPassword;
