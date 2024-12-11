"use client";
import Link from "next/link";
import { useState } from "react";

export default function NotFound() {
  const [Loading, setLoading] = useState(false);
  const handleClick = () => {
    setLoading(true);
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen align-center">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary-500">
                404
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl dark:text-white">
                Somethings missing.
              </p>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                Sorry, we cant find that page. You will find lots to explore on
                the home page.{" "}
              </p>
              <div className="flex items-center justify-center align-center">
                <Link href="/">
                  <button
                    onClick={handleClick}
                    disabled={Loading}
                    className={`lg_btn bg-primary text-white font-[400] rounded-[5px] ${
                      Loading ? "cursor-not-allowed opacity-70" : ""
                    }`}
                  >
                    {Loading
                      ? "Redirecting To Home Page ..... "
                      : " Back to Homepage"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
