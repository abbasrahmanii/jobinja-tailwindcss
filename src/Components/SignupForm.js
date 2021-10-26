import React from "react";
import { Formik, Form, useField, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "نام باید کمتر از 15 کاراکتر باشد")
      .required("* اجباری"),
    lastName: Yup.string()
      .max(20, "نام خانوادگی باید کمتر از 20 کاراکتر باشد")
      .required("* اجباری"),
    email: Yup.string().email("ایمیل نامعتبر است").required("* اجباری"),
    password: Yup.string()
      .min(8, "رمز باید حداقل 8 کاراکتر باشد")
      .required("* اجباری"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "تایید رمز صحیح نیست")
      .required("* تکرار رمز اجباری"),
    skill: Yup.string()
      .oneOf(
        ["ui-ux", "front-end", "back-end", "server", "full-stack"],
        "لطفا یکی از موارد را وارد کنید"
      )
      .required("* اجباری"),
    acceptedTerms: Yup.boolean()
      .oneOf([true], "لطفا قوانین سایت را بخوانید")
      .required("* اجباری"),
  });

  const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="mb-4 ">
        <label htmlFor={field.name}>{label}</label>
        <input
          {...props}
          {...field}
          className={` ${
            meta.touched && meta.error && "border-2 border-red-500"
          } block w-full rounded-md bg-purple-50 border-2 p-1 placeholder-gray-400`}
        />
        <ErrorMessage name={field.name} component="div" className="error" />
      </div>
    );
  };

  const MySelectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className="relative flex flex-col mb-8">
        <label htmlFor="">{label}</label>
        <select
          className={` ${
            meta.touched && meta.error && "border-2 border-red-500"
          } block w-full rounded-md bg-purple-50 border-2 p-1 placeholder-gray-400`}
          name={field.name}
          {...props}
          {...field}
        ></select>
        <ErrorMessage
          name={field.name}
          component="div"
          className="-bottom-5 error"
        />
      </div>
    );
  };

  const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox" });
    return (
      <div className="mb-4">
        <label>
          <input className="ml-2" type="checkbox" {...field} {...props} />
          {children}
        </label>
        <ErrorMessage name={field.name} component="div" className="error" />
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-indigo-400">
      <h1 className="p-4 text-green-50">فرم ثبت نام</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          skill: "",
          acceptedTerms: "",
        }}
        validationSchema={validate}
        onSubmit={(value) => {
          alert(JSON.stringify(value, null, 2));
        }}
      >
        {(formik) => (
          <div className="flex w-8/12 p-12 mx-auto rounded-lg lg:w-1/3 bg-purple-50">
            <Form className="w-full">
              <MyTextInput
                label="نام"
                name="firstName"
                type="text"
                placeholder="عباس"
              />
              <MyTextInput
                label="نام خانوادگی"
                name="lastName"
                type="text"
                placeholder="رحمانی"
              />
              <MyTextInput
                label="ایمیل"
                name="email"
                type="email"
                placeholder="name@domain.com"
              />
              <MyTextInput
                label="رمز"
                name="password"
                type="password"
                placeholder="********"
              />
              <MyTextInput
                label="تکرار رمز"
                name="confirmPassword"
                type="password"
                placeholder="********"
              />
              <MyCheckbox name="acceptedTerms">
                قوانین سایت را می پذیرم.
              </MyCheckbox>
              <MySelectInput label="تخصص" name="skill" id="skill">
                <option value="">تخصص تان را انتخاب کنید</option>
                <option value="ui-ux">UI / UX</option>
                <option value="front-end">front-end</option>
                <option value="back-end">back-end</option>
                <option value="server">Server</option>
                <option value="full-stack">Full Stack</option>
              </MySelectInput>
              <div className="flex space-x-8 space-x-reverse">
                <button
                  className="flex-1 px-6 py-2 text-white bg-green-500 border-none rounded-lg hover:bg-green-600"
                  type="submit"
                >
                  ثبت
                </button>
                <button
                  className="flex-1 px-6 py-2 border-2 border-red-200 rounded-lg hover:text-white hover:border-transparent hover:bg-red-400"
                  type="reset"
                >
                  حذف
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
