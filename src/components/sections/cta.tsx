import { Button } from "../ui/button";
import { CtaButtonArrow } from "../ui/icon-arrow-right";

export const CallToActionSection = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-col-reverse">
      <div className="text-center font-medium text-[#ababab] md:text-start md:mt-[30px]">
        <span className="text-xs mt-1 block">
          By clicking &quot;Get Started&quot;, you agree with Terms and
          Conditions, Privacy Policy, Subscription Terms
        </span>
        <span className="text-[10px] pt-5 md:pt-3 block">
          Fametonic 2025 ©All Rights Reserved.
        </span>
      </div>
      <div className="w-full justify-center items-center mt-[30px] md:w-fit">
        <Button
          className="w-full gap-2.5 max-w-[324px] text-xl rounded-[10px]"
          variant="secondary"
        >
          Get Started <CtaButtonArrow />
        </Button>
        <small className="font-normal text-center sm:text-left w-full block text-xs leading-4 mt-2.5">
          1-minute quiz for personalized Insights
        </small>
      </div>
    </div>
  );
};
