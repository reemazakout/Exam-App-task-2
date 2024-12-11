import clock from "@/public/Icons/clock.webp";
import Image from "next/image";
import RadioButtonGroup from "./RadioButtonGroup";

const Popup: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex justify-between items-center mb-7">
          <div className="text-primary text-[20px] font-semibold">
            Question 1 of 20{" "}
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div>
              <Image src={clock} alt="clock" width={24} height={30} />
            </div>
            <div>10:00</div>
          </div>
        </div>

        <div className="flex gap-3 mb-10">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-primary w-[10px] h-[10px] rounded-full"
              ></div>
            ))}
        </div>

        <div className="text-[24px] font-[500] mb-5 text-black">
          Exercitationem pariatur quae facere vel id est illo velit aut.
        </div>
        <div>
          <RadioButtonGroup />
        </div>
        <div className="flex items-center justify-center gap-5 mt-7">
          <button className="lg_btn border text-primary border-primary text-[24px] font-[500]">
            Back
          </button>
          <button className="lg_btn bg-primary text-white text-[24px] font-[500]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
