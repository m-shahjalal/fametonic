import Image from "next/image";
import logo from "@/assents/logo.png";
import { HamburgerIcon } from "../ui/icon-hamburger";

export const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between pt-4 relative container">
      <div>
        <Image className="h-12 lg:h-[76px] w-auto" src={logo} alt="logo" />
      </div>
      <div className="absolute right-4 top-7 md:hidden">
        <HamburgerIcon />
      </div>
      <div className="gap-10 hidden md:flex">
        <div className="fonts-semibold text-lg text-center">About us</div>
        <div className="fonts-semibold text-lg text-center">Contact</div>
      </div>
    </div>
  );
};
