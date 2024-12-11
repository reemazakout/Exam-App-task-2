"use client";
import Image from "next/image";
import { QuizCardProps } from "@/lib/types";

export default function QuizCard({
  subject,
}: {
  subject: QuizCardProps;
}): JSX.Element {
  const { name, icon } = subject;

  return (
    <div className="container rounded-lg w-full">
      <div className="relative lg:h-[310px] md:h-auto sm:h-auto w-full aspect-video overflow-hidden rounded-lg group">
        <Image
          src={icon}
          alt="quiz"
          fill
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 pb-4">
            <div
              className="bg-gradient-to-t from-[#332e87] to-[#8181C3] 
              opacity-90 rounded-lg 
              w-full
              p-3
              text-white 
              space-y-1"
            >
              <h3 className="font-bold text-[15px] truncate">{name}</h3>
              <p className="text-[13px] font-medium">Test your skills now!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
