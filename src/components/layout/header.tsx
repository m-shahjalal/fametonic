import { Banner } from "../sections/banner";
import { Navbar } from "../sections/navbar";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <Navbar />
    </div>
  );
};
