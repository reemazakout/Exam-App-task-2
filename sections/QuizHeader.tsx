import SearchBar from "@/components/Ui/SearchBar";
import Image from "next/image";
import profile from "../public/Images/profile.png";

export default function QuizHeader() {
  return (
    <div className="hidden sm:block md:block lg:block xl:block 2xl:block">
      <div className="flex items-center justify-between lg:flex-row md:flex-col gap-5">
        <SearchBar />
        <button className="btn">start quiz</button>
        <div className="w-[100px] h-[100px]">
          <Image src={profile} alt="profile img" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}
