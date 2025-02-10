import { Link } from "react-router-dom";
import { Heart, Home } from "lucide-react";

export default function SideBar() {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );

  function DesktopSidebar() {
    return (
      <div className=" p-3 md:p-10 border-r border-r-gray-200 min-h-screen w-24 md:w-64 hidden sm:block">
        <div className="flex flex-col sm:gap-12 md:gap-20 sticky top-10 left-0">
          <div className="w-[80%] mx-auto">
            <img src="/Recipe Haven.png" alt="logo" className="md:block hidden rounded-full" />
            <img src="/Recipe Haven.png" alt="logo" className="md:hidden block rounded-full" />
          </div>
          <ul className="flex flex-col  items-center md:items-start gap-8">
            <Link to={"/"} className="flex gap-1 md:ml-10">
              <Home size={"24"} />
              <span className="font-bold hidden md:block">Home</span>
            </Link>
            <Link to={"/favorites"} className="flex gap-1 md:ml-10">
              <Heart size={"24"} />
              <span className="font-bold hidden md:block">Favorites</span>
            </Link>
          </ul>
        </div>
      </div>
    );
  }

  function MobileSidebar() {
    return (
      <div className="flex justify-center gap-10 border-t w-full fixed bottom-0 left-0 bg-white z-1 p-2 sm:hidden">
        <Link to={"/"}>
          <Home size={"24"} className="cursor-pointer" />
        </Link>
        <Link to={"/favorites"}>
          <Heart size={"24"} className="cursor-pointer" />
        </Link>
      </div>
    );
  }
}
