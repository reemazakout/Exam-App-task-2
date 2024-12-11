import ProtectesRoutes from "@/components/Auth/ProtectesRoutes";
import QuizHeader from "@/sections/QuizHeader";
import QuizList from "@/sections/Quizes/QuizList";

export default function page() {
  return (
    <>
      <div className="">
        <ProtectesRoutes>
          <QuizHeader />
          <QuizList />
        </ProtectesRoutes>
      </div>
    </>
  );
}
