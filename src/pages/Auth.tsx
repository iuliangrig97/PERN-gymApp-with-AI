import { AuthView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Auth() {
  const { pathname } = useParams();
  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full flex justify-center ">
        <AuthView
          pathname={pathname}
          className=" bg-gray-950"
        />
      </div>
    </div>
  );
}
