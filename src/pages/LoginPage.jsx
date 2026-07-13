import FormInput from "../components/common/FormInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import backToUp from "utils/BackToUp";
import signUpImage from "../assets/images/signUpImage.webp";

const LoginPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    backToUp();
  }, []);
  const initialValues = {
    email: "",
    password: "",
  };
  const yup = Yup.string();
  const validationSchema = Yup.object({
    email: yup.email("ایمیل نامعتبر است").required("ایمیل اجباری است"),
    password: yup
      .min(6, "کمتر از 6 کارکتر است")
      .required("رمز عبور اجباری است"),
  });
  const onSubmit = (values, helpers) => {
    localStorage.setItem(
      "token",
      JSON.stringify({
        token: `local-${Date.now()}`,
        email: values.email,
      }),
    );
    toast.success("خوش آمدید", { theme: "colored" });
    helpers.resetForm();
    navigate("/", { replace: true });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="fadeShow flex h-screen w-full">
      <div className="flex h-full w-full flex-col items-center justify-start gap-4 bg-white pt-10 dark:bg-gray-800 lg:w-1/2">
        <p className="text-xl font-bold text-gray-700 dark:text-white/80">
          ورود به حساب
        </p>
        <form
          className="flex w-11/12 flex-col items-start justify-center gap-4 rounded-lg p-4 lg:w-96"
          onSubmit={formik.handleSubmit}
        >
          <FormInput
            label="آدرس ایمیل"
            placeholder="ایمیل خود را وارد کنید ..."
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email}
            touched={formik.touched.email}
            type="email"
          />
          <FormInput
            label="رمز عبور"
            placeholder="رمز عبور خود را وارد کنید ..."
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            type="password"
          />
          <button
            disabled={!formik.isValid}
            style={{ opacity: !formik.isValid && 0.6 }}
            type="submit"
            className="mt-8 w-full rounded-xl bg-violet-700 px-4 py-3 text-lg text-white shadow-[1px_10px_14px_rgba(241,231,254,1)] outline-none dark:shadow-none dark:outline dark:outline-violet-400"
          >
            ورود
          </button>
          <Link
            to="/forgotPassword"
            className="mt-2 flex justify-start text-sm text-blue-700 dark:text-blue-400"
          >
            {" "}
            رمز عبور را فراموش کردم !
          </Link>
        </form>
      </div>
      <img
        src={signUpImage}
        className="hidden h-full w-full rounded-r-3xl lg:block"
        alt=""
      />
    </div>
  );
};

export default LoginPage;
