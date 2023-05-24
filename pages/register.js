import React, { useEffect, useState } from "react";
import {
  CheckIcon,
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
} from "../app/Components/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { validEmail, validPassword } from "../lib";
import axios from "axios";

function Register() {
  const router = useRouter();

  const [credentials, setCred] = useState({
    email: "",
    password: "",
    full_name: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (credentials.email && !validEmail(credentials.email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    if (credentials.password && !validPassword(credentials.password)) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  }, [credentials]);

  const updateState = (e) => {
    const target = e.target;
    setCred((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const res = await axios.post("/api/auth/custom_register", {
        password: credentials.password,
        email: credentials.email,
        fullName: credentials.full_name,
      });
      if (res.data.success) {
        alert("Signup successful");
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast.error(err.response.data.message);
      }
    }
  };

  const googleSignin = async () => {
    router.push("/signup_welcome");
  };

  return (
    <div className="min-h-screen py-10 px-3 bg-[url('/clipped-rings.svg')] bg-no-repeat bg-right">
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
          <h2 className="text-2xl font-semibold mb-1">Create account</h2>
          <hr />
          <form onSubmit={register} className="py-2 mt-2 auth-form">
            <div
              className={`inp border-2 ${
                isEmailValid ? "border-zinc-300" : "border-red-500"
              } rounded p-2 flex w-full gap-1 items-center my-4 shadow-md bg-opacity-50 bg-gray-200`}
            >
              <input
                type="text"
                placeholder="John Doe"
                name="full_name"
                className="border-none outline-none grow bg-inherit"
                onChange={updateState}
              />
            </div>

            <div
              className={`inp border-2 ${
                isEmailValid ? "border-zinc-300" : "border-red-500"
              } rounded p-2 flex w-full gap-1 items-center my-4 shadow-md bg-opacity-50 bg-gray-200`}
            >
              <input
                type="text"
                placeholder="Email"
                defaultValue={router.query.email}
                name="email"
                className="border-none outline-none grow bg-inherit"
                onChange={updateState}
              />
              <div className="info">
                {credentials.email && !isEmailValid ? (
                  <span>
                    <InformationCircleIcon
                      height={20}
                      width={20}
                      className="text-red-500"
                    />
                  </span>
                ) : (
                  <span>
                    <CheckIcon height={20} width={20} className="text-blue-1" />
                  </span>
                )}
              </div>
            </div>

            <div
              className={`inp border-2 ${
                isPasswordValid ? "border-zinc-300" : "border-red-500"
              } rounded p-2 flex w-full gap-1 items-center my-4 shadow-md bg-opacity-50 bg-gray-200`}
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

            {!isPasswordValid && (
              <p className="text-[11px] text-[red] text-center mt-[-15px] mb-5">
                Password must be at least 8 characters long, contain an
                uppercase, lowercase, symbol, and number
              </p>
            )}

            <button
              type="submit"
              disabled={
                !validEmail(credentials.email) ||
                !validPassword(credentials.password)
              }
              className="inline-block w-full py-3 px-2 rounded text-white bg-blue-1 disabled:opacity-[0.6] shadow-md hover:shadow-xl"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-zinc-400 text-sm">
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
