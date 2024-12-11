"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dashbored from "../../public/Icons/dashbored.svg";
import dashboard2 from "../../public/Images/dashboard2.webp";
import quiz from "../../public/Icons/quiz.svg";
import logoutimg from "../../public/Icons/logout.svg";
import elevateLogo1 from "../../public/Images/elevateLogo1.webp";
import burgermenu from "../../public/Icons/burgermenu.svg";
import { usePathname } from "next/navigation";
import { UserContext } from "@/context/User.context";

const SideBar = () => {
  const { logout, token } = useContext(UserContext) || {};
  const pathname = usePathname();
  const linkStyles =
    "text-primary font-[700] text-[#696F79] flex items-center text-[20px] px-4 py-2 rounded-[15px] transition-all duration-200";

  const activeLinkStyles =
    "flex font-[700] bg-primary text-white rounded-[10px] text-[20px] px-5 py-2";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {token && (
        <div className="flex h-lvh">
          <button
            className="block lg:hidden p-2 w-12 h-12 bg-primary text-white rounded-lg shadow-md focus:outline-none flex items-center justify-center fixed top-4 right-4 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src={burgermenu} alt="Menu" width={24} height={24} />
          </button>

          <div
            className={`${
              isOpen ? "translate-x-0 bg-lightblue" : "-translate-x-full"
            } fixed top-0 left-0 min-h-screen w-64 p-6 transform z-40 transition-transform duration-300
            lg:static lg:translate-x-0 lg:block lg:bg-transparent md:block md:bg-[#0F0F0F]`}
          >
            <Link href="/" className="mb-4 block">
              <Image
                src={elevateLogo1}
                width={151}
                height={29}
                className="mb-[56px]"
                alt="Elevate Logo"
              />
            </Link>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/"
                    className={pathname === "/" ? activeLinkStyles : linkStyles}
                  >
                    <Image
                      src={pathname === "/" ? dashbored : dashboard2}
                      alt="Dashboard"
                      width={18}
                      height={18}
                      className="mr-4"
                    />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diploma"
                    className={
                      pathname === "/diploma" ? activeLinkStyles : linkStyles
                    }
                  >
                    <Image
                      src={quiz}
                      alt="diploma"
                      width={24}
                      height={24}
                      className="mr-4"
                    />
                    All diplomas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signin"
                    className={
                      pathname === "/signin" ? activeLinkStyles : linkStyles
                    }
                    onClick={logout}
                  >
                    <Image
                      src={logoutimg}
                      alt="Logout"
                      width={25}
                      height={25}
                      className="mr-4"
                    />
                    Log Out
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
