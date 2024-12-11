import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SideBar from "@/components/Layout/SideBar";
import UserProvider from "@/context/User.context";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Exam App",
  description:
    "It's an online exam app for students to take exams online and get results online ... try it now ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <UserProvider>
          <div className="flex min-h-screen bg-white">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex-start w-full p-6 ">{children}</div>
          </div>
          <Toaster />
        </UserProvider>
      </body>
    </html>
  );
}
