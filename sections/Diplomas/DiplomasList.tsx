"use client";
import { useContext } from "react";
import DiplomasCard from "./DiplomasCard";
import DiplomasSkelton from "@/components/Loading/DiplomasSkelton";
import { UserContext } from "@/context/User.context";
import { useFetchWithCache } from "@/hooks/useFetchWithCache";
import { DiplomaCardProps } from "@/lib/types";

export default function DiplomasList() {
  const { token } = useContext(UserContext) || {};
  const { data: diplomas, loading } = useFetchWithCache<DiplomaCardProps[]>(
    "https://exam.elevateegy.com/api/v1/exams",
    token || "",
    "diplomas"
  );

  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <DiplomasSkelton key={index} />
          ))}
      </div>
    );
  }

  return (
    <div className="test pt-5 min-h-screen">
      <h2 className="font-[500] text-[18px] p-5">Front-end Quiz</h2>
      <div className="flex flex-col gap-5">
        {diplomas?.map((diploma) => (
          <DiplomasCard key={diploma._id} diploma={diploma} />
        ))}
      </div>
    </div>
  );
}
