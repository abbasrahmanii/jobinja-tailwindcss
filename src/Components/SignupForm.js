import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Checkbox from "./Form/Checkbox";
import TextInput from "./Form/TextInput";
import SelectInput from "./Form/SelectInput";

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

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-indigo-600 to-indigo-700">
      <h1 className="p-3 text-green-50 text-xl">فرم ثبت نام</h1>
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
          <div className="flex w-8/12 p-8 mx-auto rounded-lg lg:w-1/3 bg-purple-50">
            <Form className="w-full">
              <TextInput
                label="نام"
                name="firstName"
                type="text"
                placeholder="عباس"
              />
              <TextInput
                label="نام خانوادگی"
                name="lastName"
                type="text"
                placeholder="رحمانی"
              />
              <TextInput
                label="ایمیل"
                name="email"
                type="email"
                placeholder="name@domain.com"
              />
              <TextInput
                label="رمز"
                name="password"
                type="password"
                placeholder="********"
              />
              <TextInput
                label="تکرار رمز"
                name="confirmPassword"
                type="password"
                placeholder="********"
              />
              <Checkbox name="acceptedTerms">قوانین سایت را می پذیرم.</Checkbox>
              <SelectInput label="تخصص" name="skill" id="skill">
                <option value="">تخصص تان را انتخاب کنید</option>
                <option value="ui-ux">UI / UX</option>
                <option value="front-end">front-end</option>
                <option value="back-end">back-end</option>
                <option value="server">Server</option>
                <option value="full-stack">Full Stack</option>
              </SelectInput>
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
