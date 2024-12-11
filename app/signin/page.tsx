"use client";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../components/Common/Schema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserContext } from "@/context/User.context";
import Button from "../../components/Ui/Button";
import Input from "../../components/Ui/Input";
import SocialProviders from "../../components/Auth/SocialProviders";
import Welcom from "@/components/Layout/Welcom";
import WelcomeBar from "@/components/Layout/WelcomeBar";
import Link from "next/link";

const SignIn = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is not available");
  }

  const { setToken } = userContext;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
  });

  async function onSubmit(data: Record<string, string>) {
    setLoading(true);
    try {
      const res = await fetch(
        "https://exam.elevateegy.com/api/v1/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );

      const responseData = await res.json();
      console.log(responseData);

      if (
        responseData.message === "success" &&
        responseData.token &&
        responseData.user
      ) {
        const { token, user } = responseData;

        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("userData", JSON.stringify(user));

        router.push("/");

        toast.success("Sign in successful");
      } else {
        toast.error("Invalid credentials, please try again.");
      }
    } catch (error) {
      toast.error(`An unexpected error occurred: ${error}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:block w-full">
          <Welcom />
        </div>

        <div className="col-span-1 flex items-center justify-center py-10 px-4">
          <div className="w-full max-w-[400px]">
            <div className=" py-10">
              <WelcomeBar />
            </div>
            <h1 className="font-bold text-[24px] mb-[20px] text-white text-left">
              Sign in ?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[20px]">
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  register={register}
                  error={errors?.email?.message as string}
                />
              </div>
              <div className="mb-[20px]">
                <Input
                  placeholder="Password"
                  type="password"
                  name="password"
                  register={register}
                  error={errors?.password?.message as string}
                />
              </div>
              <p className="text-right mt-[16px] mb-[40px] text-sm">
                <Link
                  className="text-primary font-semibold"
                  href="/forgetpassword"
                >
                  forget your password?
                </Link>
              </p>
              <Button
                type="submit"
                disabled={loading}
                className="w-full text-white"
              >
                <span>{loading ? "Signing in..." : "Sign in"}</span>
              </Button>

              <div className="text-center my-[16px] text-[16px] text-[#6C737F] font-[400]">
                or continue with
              </div>
              <SocialProviders />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
