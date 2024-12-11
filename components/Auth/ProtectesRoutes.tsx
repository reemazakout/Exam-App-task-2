"use client";
import { UserContext } from "@/context/User.context";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function ProtectedRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { token } = useContext(UserContext) || {};

  useEffect(() => {
    if (!token) {
      router.push("/signin");
    }
  }, [token, router]);

  return <>{children}</>;
}
