import { Button } from "../ui/button";
import { CtaButtonArrow } from "../ui/icon-arrow-right";

export const CallToActionSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-center font-medium text-[#ababab]">
        <span className="text-xs mt-1 block">
          By clicking &quot;Get Started&quot;, you agree with Terms and
          Conditions, Privacy Policy, Subscription Terms
        </span>
        <span className="text-[10px] pt-6 block">
          Fametonic 2025 ©All Rights Reserved.
        </span>
      </div>
      <div className="w-full justify-center items-center mt-6">
        <Button
          className="w-full gap-2.5 max-w-[324px] text-xl rounded-[10px]"
          variant="secondary"
        >
          Get Started <CtaButtonArrow />
        </Button>
        <small className="font-normal text-center w-full block text-xs leading-4 mt-2.5">
          1-minute quiz for personalized Insights
        </small>
      </div>
    </div>
  );
};
