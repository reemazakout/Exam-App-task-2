"use client";
import Image from "next/image";
import { DiplomaCardProps } from "@/lib/types";
import { useState } from "react";
import Popup from "@/components/Ui/Popup";

export default function DiplomasCard({
  diploma,
}: {
  diploma: DiplomaCardProps;
}) {
  const { duration, numberOfQuestions, title } = diploma;
  const [ispopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-between p-4 gap-12 border rounded-lg shadow-lg w-full">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16">
            <Image
              src={"https://via.placeholder.com/70x70"}
              width={70}
              height={70}
              alt="html"
              className="object-cover rounded-xl"
            />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{title}</div>
            <div className="text-gray-500">{numberOfQuestions} Question</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-sm text-gray-600 mb-2">{duration} min</div>
          <button onClick={openPopup} className="small_btn">
            Start
          </button>
        </div>
      </div>

      
      {ispopupOpen && <Popup />}
    </div>
  );
}
