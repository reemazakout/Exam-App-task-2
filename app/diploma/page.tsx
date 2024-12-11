import ProtectedRoutes from "@/components/Auth/ProtectesRoutes";
import DiplomasList from "@/sections/Diplomas/DiplomasList";

export default function Diploma() {
  return (
    <>
      <div>
        <ProtectedRoutes>
          <DiplomasList />
        </ProtectedRoutes>
      </div>
    </>
  );
}
