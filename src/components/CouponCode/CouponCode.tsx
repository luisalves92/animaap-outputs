/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";

interface Props {
  className: any;
}

export const CouponCode = ({ className }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-end gap-[16px] relative ${className}`}>
      <div className="relative w-[300px] h-[56px] rounded-[4px] overflow-hidden border border-solid border-black">
        <div className="absolute top-[15px] left-[24px] opacity-50 font-title-16px-regular font-[number:var(--title-16px-regular-font-weight)] text-text-2 text-[length:var(--title-16px-regular-font-size)] tracking-[var(--title-16px-regular-letter-spacing)] leading-[var(--title-16px-regular-line-height)] whitespace-nowrap [font-style:var(--title-16px-regular-font-style)]">
          Coupon Code
        </div>
      </div>
      <Button button="primary" className="!flex-[0_0_auto]" hover={false} text="Apply Coupon" />
    </div>
  );
};
