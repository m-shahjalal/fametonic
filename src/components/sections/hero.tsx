import heroImage from "@/assents/hero.png";
import Image from "next/image";
import { CallToActionSection } from "./cta";

const featureList = [
  "Start growing your influence right away—no waiting required!",
  "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  "Use a Personal AI Worker to boost your content",
  "Learn from expert-led courses designed for aspiring influencers",
];

export const HeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center lg:flex-row-reverse container">
      <div className="flex-1 relative h-auto z-[1]">
        <div className="lg:h-[666px] max-w-full block relative lg:-left-20 right-0">
          <div className="aspect-square h-full lg:absolute top-0 left-0">
            <Image
              src={heroImage}
              className="lg:h-full max-w-[666px] object-cover object-center w-full"
              alt="A phone with analytics app"
            />
          </div>
        </div>
      </div>
      <div className="-mt-2 flex-1 lg:min-w-[516px] relative z-10">
        <div className="font-urbanist text-center font-extrabold p-1 text-2xl lg:text-[35px] lg:text-start">
          <h1>Want to Turn Social Media Into a Profitable Career?</h1>
          <h2 className="[text-shadow:0px_4px_4px_#FC004E] text-primary">
            Discover your way to success with Fametonic:
          </h2>
        </div>
        <ul className="my-5 font-urbanist">
          {featureList.map((feature, index) => (
            <li
              key={index}
              className="font-medium text-base leading-[22px] text-start mb-2 lg:mb-3 flex items-center gap-2.5"
            >
              <span>✨</span>
              {feature}
            </li>
          ))}
        </ul>
        <CallToActionSection />
      </div>
    </div>
  );
};
