import React, { useEffect, useState } from "react";
import {
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
  GoogleIcon,
  InformationCircleIcon,
} from "../app/Components/icons";
import { useRouter } from "next/router";

import Link from "next/link";

import { validEmail, validPassword } from "../lib";
import { toast, ToastContainer } from "react-toastify";
import { signIn } from "next-auth/react";

function Login() {
  const router = useRouter();

  const [credentials, setCred] = useState({
    email: "",
    password: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    credentials.email && !validEmail(credentials.email)
      ? setIsEmailValid(false)
      : setIsEmailValid(true);
  }, [credentials]);

  const updateState = (e) => {
    const target = e.target;
    setCred((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const signin = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        redirect: false,
        ...credentials,
      });

      console.log(result);
      if (result.ok) return router.push("/dashboard");
      toast.error("Invalid credentials");
    } catch (err) {
      console.log(err);
      toast.error("Credentials may be incorrect");
    }
  };

  return (
    <div className="min-h-screen py-10 px-3 bg-[url('/clipped-rings.svg')] bg-no-repeat bg-right">
      <ToastContainer />

      <div className="flex flex-col items-center gap-7 py-5">
        <div>
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <h1 className="text-xl font-bold">*D O M*</h1>
          </Link>
        </div>

        <div className="form-container bg-white border w-full border-zinc-300 rounded-md px-4 py-6 max-w-lg min-w-[290px]">
          <h2 className="text-2xl font-semibold mb-1">Login</h2>
          <hr />
          <form onSubmit={signin} className="py-2 mt-2 auth-form">
            <div
              className={`inp border-2 ${
                isEmailValid ? "border-zinc-300" : "border-red-500"
              } rounded p-2 flex w-full gap-1 items-center my-4`}
            >
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="border-none outline-none grow bg-inherit"
                onChange={updateState}
              />
              <div className="info">
                {credentials.email &&
                  (!isEmailValid ? (
                    <span>
                      <InformationCircleIcon
                        height={20}
                        width={20}
                        className="text-red-500"
                      />
                    </span>
                  ) : (
                    <span>
                      <CheckIcon
                        height={20}
                        width={20}
                        className="text-blue-1"
                      />
                    </span>
                  ))}
              </div>
            </div>

            <div
              className={`inp border-2 border-zinc-300 rounded p-2 flex w-full gap-1 items-center my-4`}
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="border-none outline-none grow bg-inherit"
                onChange={updateState}
              />
              <div className="info">
                {credentials.password && (
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeSlashIcon
                        height={20}
                        width={20}
                        className="text-zinc-300"
                      />
                    ) : (
                      <EyeIcon
                        height={20}
                        width={20}
                        className="text-zinc-300"
                      />
                    )}
                  </span>
                )}
              </div>
            </div>

            <Link
              href="/forgot_password"
              className="forgotpassword text-blue-1 mb-3 block text-sm"
            >
              Forgot password?
            </Link>

            <button
              type="submit"
              disabled={!validEmail(credentials.email)}
              className="inline-block w-full py-3 px-2 rounded text-white bg-blue-1 disabled:opacity-[0.7]"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-zinc-400 text-sm">
            Don&apos;t have an account?{" "}
            <Link href={"/register"} className="text-blue-1">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
