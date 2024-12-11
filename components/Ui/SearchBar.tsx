import Image from "next/image";
import search from "../../public/Images/search.webp";

export default function SearchBar() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex relative items-center gap-5">
        <input
          type="text"
          placeholder="Search"
          className="rounded-2xl border-1 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary active:border-primary outline-none py-2 px-12 lg:w-[44rem] md:w-[300px] sm:w-full h-[61px] transition"
        />
        <Image
          src={search}
          alt="search"
          width={24}
          height={24}
          className="absolute top-1/2 left-4 transform -translate-y-1/2"
        />
      </div>
    </div>
  );
}
