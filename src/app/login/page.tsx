"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import Form from "@/components/ui/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schemas/login";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";
import { Link } from "@/lib/router-events";

const LoginPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSubmit = async (values: any) => {
    const { email, password } = values;
    const login = await signIn("my-app-credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Login successful");

      router.push("/");
    } else {
      toast.error(login?.error as string);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
          <p className="text-xs mt-4 text-[#002D74]">
            If you are already a member, easily log in
          </p>

          <Form
            resolver={yupResolver(loginSchema)}
            submitHandler={handleSubmit}
            className="flex flex-col gap-4"
          >
            <FormInput
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <FormInput
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#002D74] disabled:bg-[#002D70] rounded-xl text-white py-2 hover:scale-105 duration-300"
              disabled={status === "loading"}
            >
              {status !== "loading" ? (
                <span>Login</span>
              ) : (
                <svg
                  className="animate-spin w-4 h-4 fill-white"
                  viewBox="3 3 18 18"
                >
                  <path
                    className="opacity-20"
                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                  ></path>
                  <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                </svg>
              )}
            </Button>
          </Form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p>Don&apos;t have an account?</p>
            <Link
              href={"/register/seller"}
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
