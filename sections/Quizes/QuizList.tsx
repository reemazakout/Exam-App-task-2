"use client";
import { useContext, useState } from "react";
import QuizSkelton from "@/components/Loading/QuizSkelton";
import QuizCard from "@/sections/Quizes/QuizCard";
import { UserContext } from "@/context/User.context";
import { useFetchWithCache } from "@/hooks/useFetchWithCache";
import { QuizCardProps } from "@/lib/types";

export default function QuizList() {
  const { token } = useContext(UserContext) || {};
  const { data: subjects, loading } = useFetchWithCache<QuizCardProps[]>(
    "https://exam.elevateegy.com/api/v1/subjects",
    token || "",
    "subjects"
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = subjects?.slice(indexOfFirstItem, indexOfLastItem) || [];

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-10">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <QuizSkelton key={index} />
          ))}
      </div>
    );
  }

  const totalPages = Math.ceil((subjects?.length || 0) / itemsPerPage);

  return (
    <div className="bg-[#FFFFFF] rounded-2xl max-w-full">
      <div className="grid grid-cols-12 gap-4 p-10">
        <div className="col-span-12">
          <h2 className="text-[20px] font-[400] text-primary mb-3">Quizzes</h2>
        </div>
        <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentItems.map((subject) => (
            <QuizCard key={subject._id} subject={subject} />
          ))}
        </div>
        <div className="col-span-12">
          <div className="flex justify-center items-center gap-3 mt-5">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-6 py-3 rounded-full border-2 border-primary text-primary transition duration-300 
                    hover:bg-primary hover:text-white focus:outline-none 
                    ${
                      currentPage === pageNumber
                        ? "bg-primary text-white"
                        : "bg-white"
                    }`}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
